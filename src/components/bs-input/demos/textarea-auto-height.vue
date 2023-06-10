<docs>

---
order: 0
title:
  zh-CN: 文本框——自动计算高度
  en-US: Textarea--auto height
description: 
  zh-CN: 
    设置`autoHeight=true`且`type=textarea`，textarea的高度将会根据输入的内容自动计算，默认情况下textarea的最小高度为textarea
    没有输入任何内容时的高度。
  en-US: 
    Set `autoHeight=true` and `type=textarea`, the height of the textarea will be automatically calculated according to the input content, by default the minimum height of the textarea is textarea
    The height when nothing is entered.
---
</docs>

<template>
  <div>
    <bs-input v-model="text" type="textarea" auto-height placeholder="auto height textarea" />
    <p style="margin-top: 0.5rem;">Your input: <strong>{{ text || '--' }}</strong> </p>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';

const text = ref('');
</script>
