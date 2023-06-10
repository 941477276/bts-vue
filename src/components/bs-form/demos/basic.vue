<docs>

---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic usage
description: 
  zh-CN: 基本的表单数据域控制展示，包含布局、数据校验、提交。
  en-US: Basic form data fields control display, including layout, data validation, and submission.
---
</docs>

<template>
  <div>
    <bs-form
      ref="formRef"
      :model="formData"
      :rules="rules">
      <bs-form-item label="姓名" name="username">
        <bs-input v-model="formData.username"></bs-input>
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
        label="每天起床时间"
        name="getUpTime">
        <bs-time-picker
          v-model="formData.getUpTime"
          show-footer
          value-format="HH:mm:ss"
          placeholder="每天起床时间"></bs-time-picker>
      </bs-form-item>
      <bs-form-item
        label="参加工作时间"
        name="joinJobTime">
        <bs-date-picker
          v-model="formData.joinJobTime"
          :time-panel-props="{valueFormat: 'HH时mm分ss秒'}"
          :date-panel-props="{valueFormat: 'YYYY-MM-DD'}"
          pickerType="dateTime"
          value-format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择参加工作时间"></bs-date-picker>
      </bs-form-item>
      <bs-form-item
        label="每日工作时长"
        name="workTimer">
        <bs-input-number
          v-model="formData.workTimer"
          placeholder="请填写每日工作时长"></bs-input-number>
      </bs-form-item>
      <bs-form-item
        label="标签"
        name="tags">
        <bs-input-tags
          v-model="formData.tags"
          placeholder="请填写标签，按回车键确认"></bs-input-tags>
      </bs-form-item>
      <bs-form-item label="爱好" name="hobby" hint="至少选择一个爱好">
        <bs-checkbox v-model="formData.hobby" v-if="show" checked value="yuwen">语文</bs-checkbox>
        <bs-checkbox v-model="formData.hobby" value="shuxue">数学</bs-checkbox>
        <bs-checkbox v-model="formData.hobby" value="yingyu">英语</bs-checkbox>
        <bs-checkbox v-model="formData.hobby" value="tiyu">体育</bs-checkbox>
        <bs-checkbox v-model="formData.hobby" value="wuli">物理</bs-checkbox>
        <bs-checkbox v-model="formData.hobby" value="shengwu">生物</bs-checkbox>
      </bs-form-item>
      <bs-form-item label="婚否" name="married">
        <bs-radio v-model="formData.married" :value="1">已婚</bs-radio>
        <bs-radio v-model="formData.married" :value="0">未婚</bs-radio>
      </bs-form-item>
    </bs-form>

    <div class="btns">
      <bs-button type="primary" @click="confirmForm">提交</bs-button>
      <bs-button type="primary" @click="clearValidate">移除校验结果</bs-button>
      <bs-button type="primary" @click="resetFields">清空表单</bs-button>
      <bs-button type="primary" @click="validateFields">校验部分表单校验结果</bs-button>
      <bs-button type="primary" @click="clearPartialValidate">移除部分表单校验结果</bs-button>
    </div>
  </div>
</template>

<script setup>
import {
  computed,
  reactive,
  ref
} from 'vue';

let formRef = ref(null);
let show = ref(true);
let timer = setTimeout(function () {
  clearTimeout(timer);
  show.value = false;
}, 1500);

let formData = reactive({
  username: '',
  married: '',
  workTimer: '',
  birthday: '',
  joinJobTime: '2022-09-23 10时28分22秒',
  tags: [],
  getUpTimer: '',
  hobby: []
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
    joinJobTime: { required: true, trigger: ['change', 'blur'], message: '请填写参加工作时间' },
    birthday: { required: true, trigger: ['change', 'blur'], message: '请填写生日日期' },
    getUpTime: [
      { required: true, trigger: ['change', 'blur'], message: '请填写每日起床时间' }
    ],
    workTimer: [
      { required: true, trigger: ['input', 'change', 'blur'], message: '请填写工作时长' },
      { type: 'number', trigger: ['input', 'change', 'blur'], transform: val => Number(val), min: 8, message: '工作时长不能低于8小时' },
      { type: 'number', trigger: ['input', 'change', 'blur'], transform: val => Number(val), max: 12, message: '工作时长不能高于12小时' }
    ],
    tags: { required: true, type: 'array', trigger: ['change', 'blur'], min: 1, message: '请至少填写一个标签' },
    hobby: { required: true, type: 'array', trigger: 'change', min: 1, message: '请至少选择一个爱好' },
    married: { required: true, type: 'number', trigger: 'change', message: '请选择状态' }
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
let clearValidate = function () {
  formRef.value.clearValidate();
};
let resetFields = function () {
  formRef.value.resetFields();
};
let clearPartialValidate = function () {
  formRef.value.clearValidate(['gender', 'married']);
};
let validateFields = function () {
  formRef.value.validateFields(['gender', 'married'])
    .then(valid => {
      console.log('部分表单校验结果：', valid);
    });
};
</script>

<style lang="scss" scoped>
.btns{
  margin-top: 1rem;
  .bs-button{
    margin: 0 1rem 1rem 0;
  }
}
</style>
