<docs>

---
order: 0
title:
  zh-CN: 复合型输入框
  en-US: Combined input box
description: 
  zh-CN: 使用`prepend`或`append`插槽可以在输入框前面或后面添加其他组件
  en-US: Use the `prepend` or `append` slot to add other components before or after the input box
---
</docs>

<template>
  <div class="input-slots-demo">
    <bs-input style="margin-bottom: 1rem;">
      <template #prepend>
        <bs-input-text>prepend slot</bs-input-text>
      </template>
    </bs-input>
    <bs-input style="margin-bottom: 1rem;">
      <template #append>
        <bs-input-text>append slot</bs-input-text>
      </template>
    </bs-input>
    <bs-input style="margin-bottom: 1rem;">
      <template #prepend>
        <bs-button type="primary">前置按钮</bs-button>
      </template>
    </bs-input>
    <bs-input style="margin-bottom: 1rem;">
      <template #append>
        <bs-button type="primary">后置按钮</bs-button>
      </template>
    </bs-input>
    <bs-input style="margin-bottom: 1rem;">
      <template #prepend>
        <bs-button type="primary" plain>前置按钮</bs-button>
        <bs-button type="success" plain>前置按钮</bs-button>
      </template>
    </bs-input>
    <h1>ssss</h1>
    <bs-input style="margin-bottom: 1rem;">
      <template #append>
        <bs-select>
          <bs-option value="1" disabled>Html</bs-option>
          <bs-option value="2">Css</bs-option>
          <bs-option value="3">Javascript</bs-option>
        </bs-select>
        <bs-select>
          <bs-option value="1">Html</bs-option>
          <bs-option value="2">Css</bs-option>
          <bs-option value="3">Javascript</bs-option>
        </bs-select>
      </template>
    </bs-input>

    <bs-input style="margin-bottom: 1rem;">
      <template #prepend>
        <bs-dropdown>
          <bs-button type="primary">下拉菜单</bs-button>
          <template #content>
            <bs-dropdown-item value="1" disabled>Html</bs-dropdown-item>
            <bs-dropdown-item value="2">Css</bs-dropdown-item>
            <bs-dropdown-item value="3">Javascript</bs-dropdown-item>
          </template>
        </bs-dropdown>
        <bs-dropdown>
          <bs-button type="primary">下拉菜单2</bs-button>
          <template #content>
            <bs-dropdown-item value="1">Html</bs-dropdown-item>
            <bs-dropdown-item value="2">Css</bs-dropdown-item>
            <bs-dropdown-item value="3">Javascript</bs-dropdown-item>
          </template>
        </bs-dropdown>
      </template>
    </bs-input>

    <bs-input style="margin-bottom: 1rem;">
      <template #append>
        <bs-dropdown>
          <bs-button type="primary">下拉菜单</bs-button>
          <template #content>
            <bs-dropdown-item value="1">Html</bs-dropdown-item>
            <bs-dropdown-item value="2">Css</bs-dropdown-item>
            <bs-dropdown-item value="3">Javascript</bs-dropdown-item>
          </template>
        </bs-dropdown>
        <bs-dropdown>
          <bs-button type="success">下拉菜单2</bs-button>
          <template #content>
            <bs-dropdown-item value="1">Html</bs-dropdown-item>
            <bs-dropdown-item value="2">Css</bs-dropdown-item>
            <bs-dropdown-item value="3">Javascript</bs-dropdown-item>
          </template>
        </bs-dropdown>
      </template>
    </bs-input>

    <bs-input style="margin-bottom: 1rem;">
      <template #prepend>
        <bs-input-text>
          <bs-radio name="a1"></bs-radio>
          <bs-radio name="a1"></bs-radio>
        </bs-input-text>
      </template>
    </bs-input>
    <bs-input style="margin-bottom: 1rem;">
      <template #prepend>
        <bs-input-text>
          <bs-checkbox></bs-checkbox>
        </bs-input-text>
      </template>
    </bs-input>
  </div>
</template>

<style lang="scss">
.input-slots-demo{
  .bs-select{
    width: 30%;
  }
}
</style>
