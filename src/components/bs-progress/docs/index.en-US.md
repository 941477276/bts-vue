---
category: Components
type: feedback
typeCode: feedback
title: Progress
subtitle: progress bar
---

Display the current progress of the operation, informing the user of the current status and expectations

## API

### Progress property

| Parameter | Description | Type | Default |
|----------|----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| percentage | progress value | `string`/`number` | 0 |
| multiple | Whether to display multiple progress bars | boolean | false |
| progresses | multiple progress bars, only valid when `multiple=true` | `{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string｜Array<{color: string;percentage:number} >｜ColorFunctionType;textFormat?: (percentage: number) => string;striped?: boolean;animated?: boolean;}[]` | [] |
| showText | Whether to display the progress value | boolean | true |
| textFormat | Format the text content of the progress bar | function | |
| color | progress bar background color | `string`/`array`/`function` | |
| colorType | progress bar background color type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| striped | whether it is a striped progress bar | boolean | false |
| animated | Whether to display stripe animation | boolean | false |
