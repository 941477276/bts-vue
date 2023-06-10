---
category: Components
type: feedback
typeCode: feedback
title: MessageBox
subtitle: message box
---

A set of modal dialog components implemented by simulating the message prompt box of the system, used for message prompt, confirmation message and submission content

## API

The component provides some static methods, the usage and parameters are as follows:
+ BsMessageBox(options: MessageBoxOptions)
+ BsMessageBox.success(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.danger(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.warning(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.info(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
+ BsMessageBox.prompt(titleOrOptions: string|MessageBoxOptions, message?: string, context?: AppConfig)
> The return value of the above function is messageBoxId

`MessageBoxOptions` object properties are as follows

| Parameter | Description | Type | Default |
|--------------------------|----------------------------------------------------------|---------------------------------------------------------------------------------|---------|
| type | message popup type | `success`/ `danger`/ `warning`/ `info`/`prompt` | info |
| id | Message popup ID | string | |
| title | title of message popup window | `stirng`/`vnode`/`() => vnode` | |
| message | Message popup text | `stirng`/`vnode`/`() => vnode` | |
| icon | icon | `vnode`/`() => vnode` | |
| dangerouslyUseHTMLString | Whether to treat the message attribute as an HTML fragment | boolean | false |
| customClass | custom classname | string | |
| showClose | Whether to show the close button | boolean | true |
| showOkButton | Whether to show the OK button | boolean | true |
| showCancelButton | whether to show the cancel button | boolean | true |
| showIcon | whether to show icon | boolean | true |
| mask | Whether to display the mask | boolean | true |
| onOkAutoClose | Whether the field is closed after clicking the OK button | boolean | true |
| dialogTheme | Whether to display as a pop-up window style | boolean | false |
| centered | Whether to display in the center | boolean | false |
| keyboard | whether to support keyboard esc off | boolean | true |
| closeOnClickModal | Whether to close the click mask | boolean | true |
| okLoading | Determine whether the button is in the loading state | `boolean`/`Ref<boolean>` | false |
| cannotCloseOnOkLoading | Do not allow closing when the OK button is in the loading state | boolean | true |
| okDisabled | Determine whether the button is disabled | `boolean`/`Ref<boolean>` | false |
| okType | Type of OK button | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| okText | Text of OK button | string | OK |
| okLoadingText | The text displayed in the loading state of the OK button | string | |
| okLoadingText | The text displayed in the loading state of the OK button | string | |
| okSize | OK button size. optional `lg`, `sm` | string | |
| cancelText | text of the cancel button | string | cancel |
| cancelSize | The size of the cancel button. optional `lg`, `sm` | string | |
| width | width | string | |
| maxWidth | maximum width | string | |
| inputLabel | The description text of the input box, only valid when `type=prompt` | string | |
| inputType | The type of the input box, only valid when `type=prompt` | string | |
| inputPlaceholder | The placeholder of the input box, only valid in `type=prompt` | string | |
| inputValue | The initial value of the input box, only valid when `type=prompt` | `string`/`number` | |
| inputRules | The validation rules of the input box are consistent with the validation rules of <bs-form-item>, only valid when `type=prompt` | object[] | [] |
| inputProps | Other properties of the input box, consistent with the validation rules of <bs-form-item>, only valid when `type=prompt` | object | {} |
| inputBefore | The front content of the input box, only valid when `type=prompt` | `stirng`/`vnode`/`() => vnode` | |
| inputAfter | The after content of the input box, only valid when `type=prompt` | `stirng`/`vnode`/`() => vnode` | |
| onOk | Click OK callback, the parameter is the close function, when the promise is returned, it will be automatically closed after resolve, and it will not be closed if it returns false | function | |
| onCancel | Click to cancel the callback, the parameter is the closing function, when the promise is returned, it will be automatically closed after resolve, and it will not be closed if it returns false | function | |
| onClose | The callback function when closing, the parameter is the closing function, when the promise is returned, it will be automatically closed after resolving, and it will not be closed if it returns false | function | |


### MessageBox other global methods

| function name | description | parameters |
|------|---------------------------------|--------------------------|
| closeAllMessageBox | Close all message popups | |
| closeMessageBox | Close the specified message popup window, the parameter messageBoxId is the ID of the message popup window |
