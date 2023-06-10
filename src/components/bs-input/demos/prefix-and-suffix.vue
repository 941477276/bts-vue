<docs>

---
order: 0
title:
  zh-CN: 前缀和后缀
  en-US: prefixes and suffixes
description: 
  zh-CN: 使用`prefixes`或`suffixes`插槽可以在输入框前缀或后缀添加额外内容，如符号、图标
  en-US: Use the `prefixes` or `suffixes` slot to add additional content, such as symbols and icons, to the input box prefix or suffix
---
</docs>

<template>
  <div>
    <div class="d-flex">
      <bs-input v-model="usd" placeholder="input something">
        <template #prefix>$</template>
      </bs-input>
      <bs-input v-model="rmb" placeholder="input something" class="rmb-input">
        <template #suffix>RMB</template>
      </bs-input>
    </div>
    <hr>
    <div class="d-flex">
      <bs-input placeholder="alarm time">
        <template #prefix>
          <BsiAlarm></BsiAlarm>
        </template>
      </bs-input>
      <bs-input class="search-input-demo" placeholder="search something">
        <template #suffix>
          <BsiSearch></BsiSearch>
        </template>
      </bs-input>
    </div>
  </div>
</template>

<script setup>
import {
  ref
} from 'vue';
import { BsiAlarm } from 'vue3-bootstrap-icon/es/icons/BsiAlarm';
import { BsiSearch } from 'vue3-bootstrap-icon/es/icons/BsiSearch';

const usd = ref('');
const rmb = ref('');
</script>

<style lang="scss">
.rmb-input{
  margin-left: 1rem;
  .form-control{
    padding-right: 3rem!important;
  }
  .custom-suffix-icon{
    padding-right: 0.5rem;
  }
}
.search-input-demo{
  margin-left: 1rem;
}
</style>
