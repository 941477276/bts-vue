<docs>
---
order: 0
title:
  zh-CN: 垂直的
  en-US: Vertical variation
description:
  zh-CN: 设置`vertical`属性可以使一组按钮垂直排布而不是水平排布
  en-US: Set the `vertical` attribute to make a group of buttons arranged vertically instead of horizontally
---
</docs>

<template>
  <div>
    <bs-button-group vertical>
      <bs-dropdown placement="right">
        <bs-button type="primary">Top Dropdown</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item>Javascript</bs-dropdown-item>
        </template>
      </bs-dropdown>
      <bs-button type="success">success</bs-button>
      <bs-dropdown placement="right">
        <bs-button type="primary">Centro Dropdown</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item>Javascript</bs-dropdown-item>
        </template>
      </bs-dropdown>
      <bs-button type="warning">warning</bs-button>
      <bs-dropdown placement="right">
        <bs-button type="primary">Bottom Dropdown</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item>Javascript</bs-dropdown-item>
        </template>
      </bs-dropdown>
    </bs-button-group>
  </div>
</template>
