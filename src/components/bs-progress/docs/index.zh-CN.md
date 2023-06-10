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

| 参数       | 说明                         | 类型                                                                                                                                                                                                                            | 默认值     |
|----------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| percentage       | 进度值                        | `string`/`number`                                                                                                                                                                                                             | 0       |
| multiple  | 是否显示多个进度条                  | boolean                                                                                                                                                                                                                       | false   |
| progresses  | 多个进度条，只有在`multiple=true`时有效 | `{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string｜Array<{color: string;percentage:number}>｜ColorFunctionType;textFormat?: (percentage: number) => string;striped?: boolean;animated?: boolean;}[]` |  []     |
| showText | 是否显示进度值                    | boolean                                                                                                                                                                                                                       | true    |
| textFormat | 格式化进度条文字内容                 | function                                                                                                                                                                                                                      |         |
| color | 进度条背景色                 | `string`/`array`/`function`                                                                                                                                                                                                   |         |
| colorType | 进度条背景色类型                 | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark`                                                                                                                                               | primary |
| striped | 是否为条纹进度条                       | boolean                                                                                                                                                                                                                       | false   |
| animated    | 是否为显示条纹动画                    | boolean                                                                                                                                                                                                                       | false   |
