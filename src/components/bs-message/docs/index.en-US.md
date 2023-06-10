---
category: Components
type: feedback
typeCode: feedback
title: Message
subtitle: message prompt
---

Global display of operation feedback information, often used for feedback prompts after active operations

## API

The component provides some static methods, the usage and parameters are as follows:
+ BsMessage(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.success(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.danger(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.warning(messageOrConfig: string|MessageConfig, context?: AppConfig)
+ BsMessage.info(messageOrConfig: string|MessageConfig, context?: AppConfig)
> The return value of the above function is messageId

`MessageConfig` object properties are as follows

| Parameter | Description | Type | Default |
|---------------------------|---------------------------------------------------|----------------------------------------|-------|
| type | message type | `success`/ `danger`/ `warning`/ `info` | info |
| id | message ID | string | |
| message | message text | `stirng`/`vnode`/`() => vnode` | |
| icon | icon | vnode | |
| dangerouslyUseHTMLString | Whether to treat the message attribute as an HTML fragment | boolean | false |
| duration | Display time in milliseconds. Set to 0 will not automatically close | number | 3000 |
| customClass | custom classname | string | |
| showClose | Whether to show the close button | boolean | true |
| showIcon | whether to show icon | boolean | true |
| offsetTop | Message offset from the top of the window (unit: px) | number | 20 |
| appendTo | Set the root element of the Message component, the default is document.body | `string`/`HTMLElement` | body |
| grouping | Whether to combine messages with the same content, VNode type messages are not supported (especially suitable when displaying ajax request error messages) | boolean | false |
| onClose | The callback function before the message is closed | (vm: VNode) => void | false |


### Message other global methods

| function name | description | parameters |
|------|----------------------------------------------|--------------------------------------------------------------|
| closeAllMessage | close all messages | |
| closeMessage | Close the specified message, the parameter messageId is the message ID, userOnClose is the callback before the message is closed | (messageId: string, userOnClose?: (vm: VNode) => void): void |
