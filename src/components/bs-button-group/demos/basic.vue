<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description:
  zh-CN: 使用按钮组将一系列按钮组合在一行中，常用于多项类似操作。
  en-US: Use a button group to group a series of buttons on a row, often for multiple similar actions.
---
</docs>

<template>
  <div>
    <bs-button-group title="a button group">
      <bs-button type="secondary">Left</bs-button>
      <bs-button type="secondary">Middle</bs-button>
      <bs-button type="secondary">Right</bs-button>
    </bs-button-group>
    <hr>
    <bs-button-group>
      <bs-dropdown>
        <bs-button type="primary">Left Dropdown</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item>Javascript</bs-dropdown-item>
        </template>
      </bs-dropdown>
      <bs-button type="success">success</bs-button>
      <bs-dropdown>
        <bs-button type="primary">Centro Dropdown</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item>Javascript</bs-dropdown-item>
        </template>
      </bs-dropdown>
      <bs-button type="warning">warning</bs-button>
      <bs-dropdown>
        <bs-button type="primary">Right Dropdown</bs-button>
        <template #content>
          <bs-dropdown-item>Html</bs-dropdown-item>
          <bs-dropdown-item>Css</bs-dropdown-item>
          <bs-dropdown-item>Javascript</bs-dropdown-item>
        </template>
      </bs-dropdown>
    </bs-button-group>
  </div>
</template>
