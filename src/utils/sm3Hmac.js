/*
 * Copyright (c) 2014 - 2020 The GmSSL Project.  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. All advertising materials mentioning features or use of this
 *    software must display the following acknowledgment:
 *    "This product includes software developed by the GmSSL Project.
 *    (http://gmssl.org/)"
 *
 * 4. The name "GmSSL Project" must not be used to endorse or promote
 *    products derived from this software without prior written
 *    permission. For written permission, please contact
 *    guanzhi1980@gmail.com.
 *
 * 5. Products derived from this software may not be called "GmSSL"
 *    nor may "GmSSL" appear in their names without prior written
 *    permission of the GmSSL Project.
 *
 * 6. Redistributions of any form whatsoever must retain the following
 *    acknowledgment:
 *    "This product includes software developed by the GmSSL Project
 *    (http://gmssl.org/)"
 *
 * THIS SOFTWARE IS PROVIDED BY THE GmSSL PROJECT ``AS IS'' AND ANY
 * EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE GmSSL PROJECT OR
 * ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
 * STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* eslint-disable */
function sm3_memcpy(dst, dst_offset, src, src_offset, len) {
	while (len--) {
		dst[dst_offset++] = src[src_offset++];
	}
}

function sm3_memset(dst, offset, value, len) {
	while (len--) {
		dst[offset++] = value;
	}
}

function SM3_GETU32(data, offset) {
	return ((data[offset] << 24)
		| (data[offset + 1] << 16)
		| (data[offset + 2] << 8)
		| data[offset + 3]) >>> 0;
}

function SM3_PUTU32(data, offset, value) {
	data[offset + 3] = (value & 0xff) >>> 0;
	value >>>= 8;
	data[offset + 2] = (value & 0xff) >>> 0;
	value >>>= 8;
	data[offset + 1] = (value & 0xff) >>> 0;
	value >>>= 8;
	data[offset] = (value & 0xff) >>> 0;
}

const SM3_DIGEST_LENGTH = 32;
const SM3_BLOCK_SIZE = 64;
const SM3_HMAC_SIZE = SM3_DIGEST_LENGTH;

function sm3_ctx_new() {
	var ctx = {
		state: new Array(8),
		block: new Array(64),
		nblocks: 0,
		num: 0
	};
	sm3_init(ctx);
	return ctx;
}

function sm3_init(ctx) {
	for (var i = 0; i < SM3_BLOCK_SIZE; i++) {
		ctx.block[i] = 0;
	}
	ctx.nblocks = 0;
	ctx.num = 0;
	ctx.state[0] = 0x7380166F;
	ctx.state[1] = 0x4914B2B9;
	ctx.state[2] = 0x172442D7;
	ctx.state[3] = 0xDA8A0600;
	ctx.state[4] = 0xA96F30BC;
	ctx.state[5] = 0x163138AA;
	ctx.state[6] = 0xE38DEE4D;
	ctx.state[7] = 0xB0FB0E4E;
}

function sm3_compress(state, block) {
	return sm3_compress_blocks(state, block, 0, 1);
}

function sm3_update(ctx, data) {

	var data_offset = 0;
	var data_len = data.length;
	var blocks;

	if (ctx.num) {
		var left = SM3_BLOCK_SIZE - ctx.num;
		if (data_len < left) {
			sm3_memcpy(ctx.block, ctx.num, data, 0, data_len);
			ctx.num += data_len;
			return;
		} else {
			sm3_memcpy(ctx.block, ctx.num, data, 0, left);
			sm3_compress_blocks(ctx.state, ctx.block, 0, 1);
			ctx.nblocks++;
			data_offset += left;
			data_len -= left;
		}
	}

	blocks = Math.floor(data_len / SM3_BLOCK_SIZE);
	if (blocks > 0) {
		sm3_compress_blocks(ctx.state, data, data_offset, blocks);
		ctx.nblocks += blocks;
		data_offset += SM3_BLOCK_SIZE * blocks;
		data_len -= SM3_BLOCK_SIZE * blocks;
	}

	ctx.num = data_len;
	if (data_len) {
		sm3_memcpy(ctx.block, 0, data, data_offset, data_len);
	}
}

function sm3_final(ctx, digest)
{
	ctx.block[ctx.num] = 0x80;

	if (ctx.num + 9 <= SM3_BLOCK_SIZE) {
		sm3_memset(ctx.block, ctx.num + 1, 0, SM3_BLOCK_SIZE - ctx.num - 9);
	} else {
		sm3_memset(ctx.block, ctx.num + 1, 0, SM3_BLOCK_SIZE - ctx.num - 1);
		sm3_compress(ctx.state, ctx.block);
		sm3_memset(ctx.block, 0, 0, SM3_BLOCK_SIZE - 8);
	}

	var hi = ctx.nblocks >>> 23;
	var lo = (((ctx.nblocks << 9) + (ctx.num << 3)) & 0xffffffff) >>> 0;

	SM3_PUTU32(ctx.block, 56, hi);
	SM3_PUTU32(ctx.block, 60, lo);

	sm3_compress(ctx.state, ctx.block);

	for (var i = 0; i < 8; i++) {
		SM3_PUTU32(digest, i*4, ctx.state[i]);
	}
}

function SM3_ROL32(x, n) {
	return ((x << n) | (x >>> (32 - n))) >>> 0;
}

function SM3_P0(x) {
	return ((x) ^ SM3_ROL32((x), 9) ^ SM3_ROL32((x),17)) >>> 0;
}

function SM3_P1(x) {
	return ((x) ^ SM3_ROL32((x),15) ^ SM3_ROL32((x),23)) >>> 0;
}

function SM3_FF00(x, y, z) {
	return ((x) ^ (y) ^ (z)) >>> 0;
}

function SM3_FF16(x,y,z) {
	return (((x)&(y)) | ((x)&(z)) | ((y)&(z))) >>> 0;
}

function SM3_GG00(x,y,z) {
	return ((x) ^ (y) ^ (z)) >>> 0;
}

function SM3_GG16(x,y,z) {
	return ((((y)^(z)) & (x)) ^ (z)) >>> 0;
}

function sm3_compress_blocks(state, data, offset, blocks) {
	var A;
	var B;
	var C;
	var D;
	var E;
	var F;
	var G;
	var H;
	var W = new Array(68);
	var SS1, SS2, TT1, TT2;
	var j;

	const K = [
		0x79cc4519, 0xf3988a32, 0xe7311465, 0xce6228cb,
		0x9cc45197, 0x3988a32f, 0x7311465e, 0xe6228cbc,
		0xcc451979, 0x988a32f3, 0x311465e7, 0x6228cbce,
		0xc451979c, 0x88a32f39, 0x11465e73, 0x228cbce6,
		0x9d8a7a87, 0x3b14f50f, 0x7629ea1e, 0xec53d43c,
		0xd8a7a879, 0xb14f50f3, 0x629ea1e7, 0xc53d43ce,
		0x8a7a879d, 0x14f50f3b, 0x29ea1e76, 0x53d43cec,
		0xa7a879d8, 0x4f50f3b1, 0x9ea1e762, 0x3d43cec5,
		0x7a879d8a, 0xf50f3b14, 0xea1e7629, 0xd43cec53,
		0xa879d8a7, 0x50f3b14f, 0xa1e7629e, 0x43cec53d,
		0x879d8a7a, 0x0f3b14f5, 0x1e7629ea, 0x3cec53d4,
		0x79d8a7a8, 0xf3b14f50, 0xe7629ea1, 0xcec53d43,
		0x9d8a7a87, 0x3b14f50f, 0x7629ea1e, 0xec53d43c,
		0xd8a7a879, 0xb14f50f3, 0x629ea1e7, 0xc53d43ce,
		0x8a7a879d, 0x14f50f3b, 0x29ea1e76, 0x53d43cec,
		0xa7a879d8, 0x4f50f3b1, 0x9ea1e762, 0x3d43cec5,
	];


	while (blocks--) {
		A = state[0];
		B = state[1];
		C = state[2];
		D = state[3];
		E = state[4];
		F = state[5];
		G = state[6];
		H = state[7];

		for (j = 0; j < 16; j++) {
			W[j] = SM3_GETU32(data, offset + j*4);
		}

		for (; j < 68; j++) {
			W[j] = SM3_P1(W[j - 16] ^ W[j - 9] ^ SM3_ROL32(W[j - 3], 15))
				^ SM3_ROL32(W[j - 13], 7) ^ W[j - 6];
			W[j] >>>= 0;
		}


		j = 0;

		for (; j < 16; j++) {
			SS1 = SM3_ROL32(A, 12) + E + K[j];
			SS1 = (SS1 & 0xffffffff) >>> 0;
			SS1 = SM3_ROL32(SS1, 7);
			SS2 = SS1 ^ SM3_ROL32(A, 12);
			SS2 = (SS2 & 0xffffffff) >>> 0;
			TT1 = W[j] ^ W[j + 4];
			TT1 = (TT1 & 0xffffffff) >>> 0;
			TT1 = SM3_FF00(A, B, C) + D + SS2 + TT1;
			TT1 = (TT1 & 0xffffffff) >>> 0;
			TT2 = SM3_GG00(E, F, G) + H + SS1 + W[j];
			TT2 = (TT2 & 0xffffffff) >>> 0;
			D = C;
			C = SM3_ROL32(B, 9);
			B = A;
			A = TT1;
			H = G;
			G = SM3_ROL32(F, 19);
			F = E;
			E = SM3_P0(TT2);
		}

		for (; j < 64; j++) {
			SS1 = SM3_ROL32(A, 12) + E + K[j];
			SS1 = (SS1 & 0xffffffff) >>> 0;
			SS1 = SM3_ROL32(SS1, 7);
			SS2 = SS1 ^ SM3_ROL32(A, 12);
			SS2 = (SS2 & 0xffffffff) >>> 0;
			TT1 = W[j] ^ W[j + 4];
			TT1 = (TT1 & 0xffffffff) >>> 0;
			TT1 = SM3_FF16(A, B, C) + D + SS2 + TT1;
			TT1 = (TT1 & 0xffffffff) >>> 0;
			TT2 = SM3_GG16(E, F, G) + H + SS1 + W[j];
			TT2 = (TT2 & 0xffffffff) >>> 0;
			D = C;
			C = SM3_ROL32(B, 9);
			B = A;
			A = TT1;
			H = G;
			G = SM3_ROL32(F, 19);
			F = E;
			E = SM3_P0(TT2);
		}

		state[0] ^= A;
		state[1] ^= B;
		state[2] ^= C;
		state[3] ^= D;
		state[4] ^= E;
		state[5] ^= F;
		state[6] ^= G;
		state[7] ^= H;
	}
}

function sm3(m) {
	var digest = new Array(SM3_DIGEST_LENGTH);
	var ctx = sm3_ctx_new();
	sm3_init(ctx);
	var dataLen = m.length;
	var dataR = Math.floor(dataLen / SM3_BLOCK_SIZE);
	// var dataI = dataLen % 64;
	// console.log('数据总长度：', data.length, dataR, newData[10]);
	for(var i = 0 ; i < dataR; i++){
		let newData = m.splice(0, SM3_BLOCK_SIZE);
		sm3_update(ctx, newData);
	}
	if(m.length > 0) {
		sm3_update(ctx, m);
	}
	// sm3_update(ctx, m);
	sm3_final(ctx, digest);
	// delete ctx;
	return digest;
}

const SM3_HMAC_IPAD = 0x36;
const SM3_HMAC_OPAD = 0x5C;

function sm3_hmac_ctx_new() {
	var ctx = {
		sm3_ctx: sm3_ctx_new(),
		key : new Array(SM3_BLOCK_SIZE),
	};
	return ctx;
}

function sm3_hmac_ctx_free(ctx) {
	//sm3_ctx_free(ctx.sm3_ctx);
	for (var i = 0; i < SM3_BLOCK_SIZE; i++) {
		ctx.key[i] = 0;
	}
	// delete ctx;
}

function sm3_hmac_init(ctx, key)
{
	var i;
	var key_len = key.length;

	if (key_len <= SM3_BLOCK_SIZE) {
		sm3_memcpy(ctx.key, 0, key, 0, key_len);
		sm3_memset(ctx.key, key_len, 0, SM3_BLOCK_SIZE - key_len);
	} else {
		sm3_init(ctx.sm3_ctx);
		sm3_update(ctx.sm3_ctx, key);
		sm3_final(ctx.sm3_ctx, ctx.key);
		sm3_memset(ctx.key, SM3_DIGEST_LENGTH, 0,
			SM3_BLOCK_SIZE - SM3_DIGEST_LENGTH);
	}
	for (i = 0; i < SM3_BLOCK_SIZE; i++) {
		ctx.key[i] ^= SM3_HMAC_IPAD;
	}

	sm3_init(ctx.sm3_ctx);
	sm3_update(ctx.sm3_ctx, ctx.key);
}

function sm3_hmac_update(ctx, data) {
	var dataLen = data.length;
	var dataR = Math.floor(dataLen / SM3_BLOCK_SIZE);
	// var dataI = dataLen % 64;
	// console.log('数据总长度：', data.length, dataR, newData[10]);
	for(var i = 0 ; i < dataR; i++){
		let newData = data.splice(0, SM3_BLOCK_SIZE);
		sm3_update(ctx.sm3_ctx, newData);
	}
	if(data.length > 0) {
		sm3_update(ctx.sm3_ctx, data);
	}
}

function sm3_hmac_final(ctx, mac) {
	for (var i = 0; i < SM3_BLOCK_SIZE; i++) {
		ctx.key[i] ^= (SM3_HMAC_IPAD ^ SM3_HMAC_OPAD);
	}
	sm3_final(ctx.sm3_ctx, mac);
	sm3_init(ctx.sm3_ctx);
	sm3_update(ctx.sm3_ctx, ctx.key);
	sm3_update(ctx.sm3_ctx, mac);
	sm3_final(ctx.sm3_ctx, mac);
}

/**
 * 计算sm3 hmac值
 * @param data {byte[]} 待加密数据（字节数组）
 * @param key {byte[]} 密钥（字节数组）
 * @param mac {array} 结果数组（空数组即可），里面的内容数据为字节
 */
function sm3_hmac(data, key, mac) {
	var ctx = sm3_hmac_ctx_new();
	sm3_hmac_init(ctx, key);
	sm3_hmac_update(ctx, data);
	sm3_hmac_final(ctx, mac);
	sm3_hmac_ctx_free(ctx);
}

/**
 * utf-8字符串转字节数组
 * @param utf8Str
 * @returns {*[]}
 */
function utf8StrToBytes (utf8Str){
  var ens = encodeURIComponent(utf8Str);
  var es = unescape(ens);


  var esLen = es.length;

  // Convert
  var words = [];
  for (var i = 0; i < esLen; i++) {
    words[i] = es.charCodeAt(i);
  }
  return words;
}

/**
 * 字节数组转16进制字符串
 * @param b 字节数组
 * @param pos 开始位置，一般为0
 * @param len 结束位置，一般为字节数组的长度
 * @returns {string}
 */
function bytesToHex (b, pos, len) {
  var hexCh = new Array(len*2);
  var hexCode = new Array('0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');

  for(var i = pos,j = 0;i<len+pos;i++,j++) {
    hexCh[j] = hexCode[(b[i]&0xFF)>>4];
    hexCh[++j] = hexCode[(b[i]&0x0F)];
  }

  return hexCh.join('');
}

/**
 * sm3哈希
 * @param str 哈希原文
 * @returns {string}
 */
function sm3HashHex (str) {
  var sm3HashBytes = sm3(Array.isArray(str) ? str : utf8StrToBytes(str));
  return bytesToHex(sm3HashBytes, 0, sm3HashBytes.length);
}

export {
	sm3_init,
	sm3_compress_blocks,
	sm3,
	sm3_ctx_new,
	sm3_final,
	sm3_hmac,
	sm3_hmac_ctx_free,
	sm3_hmac_ctx_new,
	sm3_hmac_final,
	sm3_hmac_init,
	sm3_hmac_update,
	sm3_memcpy,
	sm3_memset,
	sm3_update,
	sm3_compress,
  sm3 as sm3Hash,
  sm3HashHex
};
