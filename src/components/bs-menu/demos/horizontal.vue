<docs>

---
order: 0
title:
  zh-CN: 水平菜单
  en-US: Horizontal menu
description: 
  zh-CN: 水平菜单
  en-US: Horizontal menu
---
</docs>

<template>
  <div>
    <BsMenu
      v-model:selectedKeys="selectedKeys">
      <bs-menu-item keyIndex="dashboard" title="仪表盘">
        <template #icon>
          <img src="../test-usage-assets/dash-board.svg" title="img icon" class="icon-dashboard">
        </template>
        仪表盘
      </bs-menu-item>
      <bs-menu-item keyIndex="overview">机构总览</bs-menu-item>
      <bs-sub-menu keyIndex="userManageSub" title="用户管理">
        <template #icon>
          <BsiPeople></BsiPeople>
        </template>
        <bs-menu-item keyIndex="orgManage">组织管理</bs-menu-item>
        <bs-menu-item disabled keyIndex="userManage">
          <template #icon>
            <BsiPersonVcard style="transform: translateY(-3px)"></BsiPersonVcard>
          </template>
          用户管理
        </bs-menu-item>
        <bs-menu-item keyIndex="userPartTime">一人多岗</bs-menu-item>
        <bs-sub-menu keyIndex="roleManage">
          <template #title>角色管理</template>
          <bs-menu-item keyIndex="roleSystem">系统管理员</bs-menu-item>
          <bs-menu-item keyIndex="roleBusiness">业务管理员</bs-menu-item>
          <bs-menu-item-group keyIndex="customerCenter">
            <template #title>客户中心</template>
            <bs-menu-item keyIndex="clerk">业务员</bs-menu-item>
            <bs-sub-menu title="售后服务部" keyIndex="afterSalesServiceDep">
              <bs-menu-item keyIndex="afterSalesService">售后服务员</bs-menu-item>
              <bs-menu-item keyIndex="afterSalesServiceManger">售后服务经理</bs-menu-item>
            </bs-sub-menu>
            <bs-menu-item keyIndex="businessManager">业务经理</bs-menu-item>
          </bs-menu-item-group>
        </bs-sub-menu>
      </bs-sub-menu>
      <bs-menu-item keyIndex="identification">
        <template #icon>
          <img src="../test-usage-assets/identification.png" title="img icon" class="icon-identification">
        </template>
        标识管理
      </bs-menu-item>
      <bs-sub-menu keyIndex="secretManageSub">
        <template #title>密钥管理</template>
        <bs-menu-item keyIndex="kmip">数据库密钥</bs-menu-item>
        <bs-menu-item keyIndex="kgc">库内密钥</bs-menu-item>
      </bs-sub-menu>
      <bs-sub-menu keyIndex="vpnPolicyManageSub">
        <template #icon>
          <i class="icon-vpn-policy-manage"></i>
        </template>
        <template #title>VPN策略管理</template>
        <bs-menu-item-group keyIndex="vpnPolicyAttrGroup" title="策略属性管理">
          <bs-menu-item keyIndex="vpnPolicyTimeObject">时间对象</bs-menu-item>
          <bs-menu-item keyIndex="vpnPolicyTargetIP">目标IP</bs-menu-item>
        </bs-menu-item-group>
        <bs-menu-item-group keyIndex="vpnPolicyGroup">
          <template #title>策略管理</template>
          <bs-menu-item keyIndex="vpnOrgPolicy">组织策略</bs-menu-item>
          <bs-menu-item-group keyIndex="timeObjGroup">
            <template #title>时间对象</template>
            <bs-menu-item keyIndex="userTimeObj">用户时间对象</bs-menu-item>
            <bs-menu-item keyIndex="orgTimeObj">组织时间对象</bs-menu-item>
          </bs-menu-item-group>
          <bs-menu-item keyIndex="vpnUserPolicy">用户策略</bs-menu-item>
        </bs-menu-item-group>
      </bs-sub-menu>
    </BsMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { BsiPeople } from 'vue3-bootstrap-icon/es/icons/BsiPeople';
import { BsiPersonVcard } from 'vue3-bootstrap-icon/es/icons/BsiPersonVcard';

let selectedKeys = ref(['roleSystem']);
</script>

<style lang="scss" scoped>
.icon-dashboard,
.icon-identification{
  display: block;
  width: 1.2rem;
  height: 1.2rem;
}
.bs-icon{
  font-size: 1.1rem;
  line-height: 1;
  vertical-align: middle;
}
</style>
