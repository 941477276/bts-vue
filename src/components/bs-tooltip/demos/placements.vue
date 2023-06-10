<docs>

---
order: 0
title:
  zh-CN: 显示位置
  en-US: Placements
description: 
  zh-CN: 有12个不同的方向显示Tooltip
  en-US: There are 12 different directions to display the Tooltip
---
</docs>

<template>
  <div>
    <div class="directions-box">
      <div class="direction-top">
        <bs-tooltip placement="top-start" content="placement：top-start">
          <bs-button type="primary" plain>top-start</bs-button>
        </bs-tooltip>
        <bs-tooltip placement="top" content="placement：top">
          <bs-button type="primary" plain>top</bs-button>
        </bs-tooltip>
        <bs-tooltip placement="top-end" content="placement：top-end">
          <bs-button type="primary" plain>top-end</bs-button>
        </bs-tooltip>
      </div>
      <div class="direction-left-right">
        <div class="direction-left">
          <bs-tooltip placement="left-start" content="placement：left-start">
            <bs-button type="primary" plain>left-start</bs-button>
          </bs-tooltip>
          <bs-tooltip placement="left" content="placement：left">
            <bs-button type="primary" plain>left</bs-button>
          </bs-tooltip>
          <bs-tooltip placement="left-end" content="placement：left-end">
            <bs-button type="primary" plain>left-end</bs-button>
          </bs-tooltip>
        </div>
        <div class="direction-right">
          <bs-tooltip placement="right-start" content="placement：right-start">
            <bs-button type="primary" plain>right-start</bs-button>
          </bs-tooltip>
          <bs-tooltip placement="right" content="placement：right">
            <bs-button type="primary" plain>right</bs-button>
          </bs-tooltip>
          <bs-tooltip placement="right-end" content="placement：right-end">
            <bs-button type="primary" plain>right-end</bs-button>
          </bs-tooltip>
        </div>
      </div>
      <div class="direction-bottom">
        <bs-tooltip placement="bottom-start" content="placement：bottom-start">
          <bs-button type="primary" plain>bottom-start</bs-button>
        </bs-tooltip>
        <bs-tooltip placement="bottom" content="placement：bottom">
          <bs-button type="primary" plain>bottom</bs-button>
        </bs-tooltip>
        <bs-tooltip placement="bottom-end" content="placement：bottom-end">
          <bs-button type="primary" plain>bottom-end</bs-button>
        </bs-tooltip>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.directions-box{
  max-width: 500px;
}
.direction-top,
.direction-bottom{
  text-align: center;
  .bs-button{
    & + .bs-button{
      margin-left: 25px;
    }
  }
}
.direction-left-right{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px 0;
}
.direction-left,
.direction-right{
  .bs-button{
    display: block;
    & + .bs-button{
      margin-top: 25px;
    }
  }
}
</style>
