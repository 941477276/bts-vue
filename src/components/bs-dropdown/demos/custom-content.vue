<docs>

---
order: 0
title:
  zh-CN: 自定义内容
  en-US: Custom content
description: 
  zh-CN: 自定义内容
  en-US: Custom content
---
</docs>

<template>
  <div>
    <bs-dropdown :show-toggle-arrow="false">
      <bs-button type="primary">拾晚霞</bs-button>
      <template #content>
        <div class="user-info">
          <div class="user-avatar">拾</div>
          <dl>
            <dt>拾晚霞</dt>
            <dd>想看大海潮落潮涨，想拾天边最美晚霞</dd>
          </dl>
        </div>
        <bs-dropdown-item>Html</bs-dropdown-item>
        <bs-dropdown-item>Css</bs-dropdown-item>
        <bs-dropdown-item>Javascript</bs-dropdown-item>
      </template>
    </bs-dropdown>
  </div>
</template>

<style lang="scss" scoped>
.bs-dropdown{
  margin: 0 1rem 1rem 0;
}
.user-info{
  padding: 0 1rem;
  dl{
    margin: 0;
    overflow: hidden;
  }
  dd{
    font-size: 0.875rem;
    color: #999;
  }
}
.user-avatar{
  float: left;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  border: 1px solid var(--primary);
  border-radius: 50%;
  box-shadow: 0 0.35rem 2.5rem rgba(0, 0, 0, 0.2);
  margin-right: 0.85rem;
  text-align: center;
  font-weight: bold;
  color: var(--primary);
  background-color: #fff;
}
</style>
