---
category: Components
type: 数据录入
typeCode: data_input
title: Form
subtitle: 表单
---

用于数据录入、校验、提交数据的表单

## API

### Form 属性

| 参数               | 说明                  | 类型                              | 默认值      |
|------------------|---------------------|---------------------------------|----------|
| model            | 单选框的值               | object                          |          |
| rules            | 校验规则                | object                          |          |
| layout           | 表单布局方式              | `vertical`/`horizontal`/`inline` | vertical |
| showErrorMessage | 表单项校验失败时是否显示错误提示    | boolean                      | true     |
| showLabel        | 是否显示label           | boolean                         | true     |  
| labelClass       | label标签的额外classname | `string`/`array`/`object`       |          |  
| labelWidth       | label标签的宽度          | `string`/`number`               |          |  
| labelAlign       | label标签的对齐方式        | `left`/`center`/`right`         |          |  
| contentClass     | 内容部分的额外class        | `string`/`array`/`object`       |          |   
| size             | 输入框大小。可选 `lg`、`sm`  | string                          |        |  


### Form 函数

| 函数名称           | 说明                                       | 参数                                                                                 | 
|----------------|------------------------------------------|------------------------------------------------------------------------------------|
| validate       | 校验整个表单                                   | (callback?: (valid: boolean) => volid) => Promise<boolean>                         | 
| validateFields | 对部分表单项进行校验                               | (names: string｜string[], callback?: (valid: boolean) => volid) => Promise<boolean> |
| clearValidate  | 移除整表单或部分表单项校验结果，未传递`names`的情况下移除整个表单校验结果 | (names?: string｜string[]) => void                                     | 
| resetFields    | 重置表单值，并移除表单校验结果                          |                                                                                    | 


### FormItem 属性

| 参数                   | 说明                  | 类型                        | 默认值   | 
|----------------------|---------------------|---------------------------|-------|
| value                | 当前表单项的值，仅用来校验当前表单项时使用         | any                       |       |
| rules                | 校验规则                | `object`/`array`          |       |
| name                 | 字段在model中的key              | string                    |       |
| required             | 是否必填，如不设置，则会根据校验规则自动生成    | boolean                   | false |
| hideRequiredAsterisk | 是否隐藏必填字段的标签旁边的红色星号    | boolean                   | false |
| showLabel            | 是否显示label           | boolean                   | true  |
| labelClass           | label标签的额外classname | `string`/`array`/`object` |       |
| labelWidth           | label标签的宽度          | `string`/`number`         |       |     |
| labelAlign           | label标签的对齐方式        | `left`/`center`/`right`   |       |     |
| labelFor             | label的for属性        | string                    |       |     |
| contentClass         | 内容部分的额外class        | `string`/`array`/`object` |       |     |
| size                 | 输入框大小。可选 `lg`、`sm`  | string                    |     |
| horizontal           | label是否水平显示    | boolean                   |       |
| hint                 | 提示文字    | string                    |       |
| validSuccessText     | 表单校验成功后的文案    | string                    |       |

### FormItem 插槽

| 插槽名称    | 说明                    | 版本  |
|---------|-----------------------|-----|
| label  | 自定义label              |     |
| hint   | 自定义`hint`提示信息         |     |


### FormItem 函数

| 函数名称           | 说明                                                                               | 参数                                                                                 |
|----------------|----------------------------------------------------------------------------------|------------------------------------------------------------------------------------|
| validate       | 对表单项进行校验，参数`trigger`为定义在`rules`中的trigger，若指定了trigger则只执行该trigger对应的校验规则，否则执行所有校验规则 | `(trigger: string, callback?: (valid: boolean) => volid) => void `                   |
| clearValidate  | 移除表单项校验结果                                       |                                                 |
| resetFields    | 重置表单项的值，并移除校验结果                                                                  |                                                                                    |
