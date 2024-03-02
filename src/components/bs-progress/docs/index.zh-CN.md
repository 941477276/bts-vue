---
category: Components
type: 反馈
typeCode: feedback
title: Progress
subtitle: 进度条
---

展示操作的当前进度，告知用户当前状态和预期

## API

### Progress 属性

| 参数         | 说明                                | 类型                                                                                                                                                                                                                              | 默认值     |
|------------|-----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| percentage | 进度值                               | `string`/`number`                                                                                                                                                                                                               | 0       |
| type       | 进度条类型                             | `line`/`circle`/`dashboard`                                                                                                                                                                                                     | line    |
| multiple   | 是否显示多个进度条                         | boolean                                                                                                                                                                                                                         | false   |
| progresses | 多个进度条，只有在`multiple=true`时有效       | `{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string｜Array<{color: string;percentage:number}>｜ColorFunctionType;textFormat?: (percentage: number) => string;striped?: boolean;animated?: boolean;}[]` | []      |
| showText   | 是否显示进度值                           | boolean                                                                                                                                                                                                                         | true    |
| textFormat | 格式化进度条文字内容                        | function                                                                                                                                                                                                                        |         |
| color      | 进度条背景色（仅在type!=line时类型为object才有效） | `string`/`array`/`function`/`object`                                                                                                                                                                                            |         |
| colorType  | 进度条背景色类型                          | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`                                                                                                                                                 | primary |
| striped    | 是否为条纹进度条                          | boolean                                                                                                                                                                                                                         | false   |
| animated   | 是否为显示条纹动画                         | boolean                                                                                                                                                                                                                         | false   |


**`type=circle`**

| 参数         | 说明                          | 类型                          | 默认值 |
|------------|-----------------------------|-----------------------------|-----|
| strokeWidth |  环形进度条线的宽度，单位是进度条画布宽度的百分比           | `number`                    | 6   |
| strokeLinecap |  进度条的末端样式类型          | `round`/`butt`/`square`     | round   |
| status |  状态          | `success`/`warning`/`info`/`danger` |    |


**`type=dashboard`**

| 参数         | 说明                          | 类型                                  | 默认值    |
|------------|-----------------------------|-------------------------------------|--------|
| gapDegree |  仪表盘进度条缺口角度，可取值 0 ~ 295     | `number`                            | 75     |
| gapPosition |  仪表盘进度条缺口位置          | `top`/`left`/`bottom`/`right`       | bottom |
