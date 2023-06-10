---
category: Components
type: 反馈
typeCode: feedback
title: Loading
subtitle: 加载中
---

加载数据时显示动效，以提示用户数据正在加载中。

## 服务模式调用

BsLoading除了可以以指令方式调用外，还可以以服务模式调，如：
```javascript
import { BsLoading } from 'bts-vue';

let loadingInstance = BsLoading(options);

// 显示loading
// loadingInstance.show();

// 隐藏loading
// loadingInstance.hide();
```

`options`对象属性如下

| 参数                        | 说明                               | 类型                                   | 默认值   |
|---------------------------|----------------------------------|--------------------------------------|-------|
| text                      | 提示文字                             | stirng                               |       |
| lock                        | 是否锁定容器滚动条                        | boolean                              | true  |
| grow                        | 是否为增长式旋转器                        | boolean                              | false |
| vertical                        | 是否垂直对齐                           | boolean                              | false |
| fullscreen                        | 是否为全局loading                     | boolean                              | false |
| target                   | Loading 需要覆盖的 DOM 节点，当以服务模式调用时比天 | `string(css selector)`/`object(dom)` |       |
| color                   | 字体颜色                             | string                               |       |
| background                      | 背景色                              | vnode                                |       |
| customClass                      | 自定义class类名                       | vnode                                |       |
| style                      | 自定义样式                            | object                               | {}    |
| transitionName                      | 过渡效果名称                           | string                               | fade  |
| dangerouslyUseHTMLString  | 是否将 message 属性作为 HTML 片段处理       | boolean                              | false |
| duration                  | 显示时间，单位为毫秒。 设为 0 则不会自动关闭         | number                               | 3000  |
| customClass               | 自定义classname                     | string                               |       |

### BsLoading 实例方法

| 函数名称         | 说明        | 参数                  |
|--------------|-----------|---------------------|
| show         | 显示Loading |                     |
| hide         | 隐藏Loading |                     |
| destroy | 销毁loading |                     |
| updateProps | 更新options | (newProps: options) |
