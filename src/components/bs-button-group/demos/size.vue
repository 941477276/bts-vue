<docs>
---
order: 0
title:
  zh-CN: 不同尺寸
  en-US: Different sizes
description:
  zh-CN: 按钮组与按钮一样有3个尺寸大小，分别为`sm`、`lg`和默认
  en-US: The button group has 3 sizes like the button, which are `sm`, `lg` and default
---
</docs>

<template>
  <div>
    <div>
      <bs-button-group title="按钮组" size="sm">
        <bs-button type="secondary">Left</bs-button>
        <bs-button type="secondary">Middle</bs-button>
        <bs-button type="secondary">Right</bs-button>
      </bs-button-group>
    </div>
    <div style="margin-top: 1rem;">
      <bs-button-group title="按钮组">
        <bs-button type="secondary">Left</bs-button>
        <bs-button type="secondary">Middle</bs-button>
        <bs-button type="secondary">Right</bs-button>
      </bs-button-group>
    </div>
    <div style="margin-top: 1rem;">
      <bs-button-group title="按钮组" size="lg">
        <bs-button type="secondary">Left</bs-button>
        <bs-button type="secondary">Middle</bs-button>
        <bs-button type="secondary">Right</bs-button>
      </bs-button-group>
    </div>
  </div>
</template>
