<docs>

---
order: 0
title:
  zh-CN: 水平表单
  en-US: Horizontal form
description:
  zh-CN: 设置`layout=horizontal`属性可以让表单域变为行内的表单域
  en-US: Setting the `layout=horizontal` attribute can make the form field an inline form field
---
</docs>

<template>
  <div>
    <h6>Basic horizontal form</h6>
    <bs-form
      ref="formRef"
      layout="horizontal"
      :model="formData"
      :rules="rules"
      data-label-width="100px">
      <bs-form-item label="姓名" name="username">
        <bs-input v-model="formData.username" placeholder="请输入姓名"></bs-input>
        <template #hint>
          姓名不能以 <strong>数字</strong> 开头
        </template>
      </bs-form-item>
      <bs-form-item
        label="性别"
        name="gender"
        :hide-required-asterisk="true"
        :rules="[{ required: true, trigger: 'change', message: '请输选择性别' }]">
        <bs-select v-model="formData.gender">
          <bs-option value="">请选择</bs-option>
          <bs-option value="man">男</bs-option>
          <bs-option value="woman">女</bs-option>
        </bs-select>
      </bs-form-item>
      <bs-form-item
        label="生日"
        name="birthday">
        <bs-date-picker
          v-model="formData.birthday"
          value-format="YYYY-MM-DD"
          placeholder="请选择生日"></bs-date-picker>
      </bs-form-item>
      <bs-form-item
        label="身高"
        name="height">
        <bs-input v-model="formData.height" type="number" placeholder="请输入身高" suffix="厘米"></bs-input>
      </bs-form-item>

      <bs-form-item label=" ">
        <bs-button type="primary" @click="confirmForm">提交</bs-button>
      </bs-form-item>
    </bs-form>

    <h6>Grid horizontal form</h6>
    <bs-form
      ref="formRef2"
      layout="horizontal"
      label-class="col-sm-2"
      content-class="col-sm-10"
      label-align="center"
      :model="formData"
      :rules="rules">
      <bs-form-item label="姓名" name="username">
        <bs-input v-model="formData.username" placeholder="请输入姓名"></bs-input>
        <template #hint>
          姓名不能以 <strong>数字</strong> 开头
        </template>
      </bs-form-item>
      <bs-form-item
        label="性别"
        name="gender"
        :hide-required-asterisk="true"
        :rules="[{ required: true, trigger: 'change', message: '请输选择性别' }]">
        <bs-select v-model="formData.gender">
          <bs-option value="">请选择</bs-option>
          <bs-option value="man">男</bs-option>
          <bs-option value="woman">女</bs-option>
        </bs-select>
      </bs-form-item>
      <bs-form-item
        label="生日"
        name="birthday">
        <bs-date-picker
          v-model="formData.birthday"
          value-format="YYYY-MM-DD"
          placeholder="请选择生日"></bs-date-picker>
      </bs-form-item>
      <bs-form-item
        label="身高"
        name="height">
        <bs-input v-model="formData.height" type="number" placeholder="请输入身高" suffix="厘米"></bs-input>
      </bs-form-item>

      <bs-form-item label=" ">
        <bs-button type="primary" @click="confirmForm2">提交</bs-button>
      </bs-form-item>
    </bs-form>
  </div>
</template>

<script setup>
import {
  computed,
  reactive,
  ref
} from 'vue';

let formRef = ref(null);
let formRef2 = ref(null);

let formData = reactive({
  username: '',
  gender: '',
  birthday: '',
  height: ''
});
let rules = computed(function () {
  return {
    username: [
      { required: true, trigger: 'input', message: '请输入用户名', whitespace: true },
      {
        validator (rule, value, callback) {
          if (/^\d+/.test(value)) {
            callback(new Error('姓名不能以数字开头'));
          } else {
            callback();
          }
        },
        trigger: 'input'
      }
    ],
    birthday: { required: true, trigger: ['change', 'blur'], message: '请填写生日日期' }
  };
});

let confirmForm = function () {
  console.log(formRef.value);
  formRef.value.validate()
    .then(valid => {
      console.log('表单校验结果：', valid);
      if (valid) {
        console.log('表单数据', formData);
      }
    });
};

let confirmForm2 = function () {
  console.log(formRef.value);
  formRef2.value.validate()
    .then(valid => {
      console.log('表单校验结果：', valid);
      if (valid) {
        console.log('表单数据', formData);
      }
    });
};
</script>
