<docs>

---
order: 0
title:
  zh-CN: 显示位置
  en-US: Placements
description: 
  zh-CN: 有12个不同的方向显示Popover
  en-US: There are 12 different directions to display the Popover
---
</docs>

<template>
  <div>
    <div class="directions-box">
      <div class="direction-top">
        <bs-popover placement="top-start" title="top-start" content="popover显示位置：top-start">
          <bs-button type="primary" plain>top-start</bs-button>
        </bs-popover>
        <bs-popover placement="top" title="top" content="popover显示位置：top">
          <bs-button type="primary" plain>top</bs-button>
        </bs-popover>
        <bs-popover placement="top-end" title="top-end" content="popover显示位置：top-end">
          <bs-button type="primary" plain>top-end</bs-button>
        </bs-popover>
      </div>
      <div class="direction-left-right">
        <div class="direction-left">
          <bs-popover placement="left-start" title="left-start" content="popover显示位置：left-start">
            <bs-button type="primary" plain>left-start</bs-button>
          </bs-popover>
          <bs-popover placement="left" title="left" content="popover显示位置：left">
            <bs-button type="primary" plain>left</bs-button>
          </bs-popover>
          <bs-popover placement="left-end" title="left-end" content="popover显示位置：left-end">
            <bs-button type="primary" plain>left-end</bs-button>
          </bs-popover>
        </div>
        <div class="direction-right">
          <bs-popover placement="right-start" title="right-start" content="popover显示位置：right-start">
            <bs-button type="primary" plain>right-start</bs-button>
          </bs-popover>
          <bs-popover placement="right" title="right" content="popover显示位置：right">
            <bs-button type="primary" plain>right</bs-button>
          </bs-popover>
          <bs-popover placement="right-end" title="right-end" content="popover显示位置：right-end">
            <bs-button type="primary" plain>right-end</bs-button>
          </bs-popover>
        </div>
      </div>
      <div class="direction-bottom">
        <bs-popover placement="bottom-start" title="bottom-start" content="popover显示位置：bottom-start">
          <bs-button type="primary" plain>bottom-start</bs-button>
        </bs-popover>
        <bs-popover placement="bottom" title="bottom" content="popover显示位置：bottom">
          <bs-button type="primary" plain>bottom</bs-button>
        </bs-popover>
        <bs-popover placement="bottom-end" title="bottom-end" content="popover显示位置：bottom-end">
          <bs-button type="primary" plain>bottom-end</bs-button>
        </bs-popover>
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
