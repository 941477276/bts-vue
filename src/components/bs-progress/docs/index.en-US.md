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

| Parameters | Description | Type | Default value |
|------------|----------------------------------| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|
| percentage | progress value | `string`/`number` | 0 |
| type | Progress bar type | `line`/`circle`/`dashboard` | line |
| multiple | Whether to display multiple progress bars | boolean | false |
| progresses | Multiple progress bars, only valid when `multiple=true` | `{percentage: number;colorType?: BsColorType;showText?: boolean;color?: string|Array<{color: string;percentage:number} >｜ColorFunctionType;textFormat?: (percentage: number) => string;striped?: boolean;animated?: boolean;}[]` | [] |
| showText | Whether to display the progress value | boolean | true |
| textFormat | Format the text content of the progress bar | function | |
| color | Progress bar background color (only valid when type!=line, type is object) | `string`/`array`/`function`/`object` | |
| colorType | Progress bar background color type | `primary`/ `secondary`/ `success`/ `danger`/ `warning`/ `info`/ `light`/ `dark` | primary |
| striped | Whether it is a striped progress bar | boolean | false |
| animated | Whether to display stripe animation | boolean | false |


**`type=circle`**

| Parameters | Description | Type | Default value |
|------------|-----------------------------|----------------------------|-----|
| strokeWidth | The width of the circular progress bar line, the unit is a percentage of the progress bar canvas width | `number` | 6 |
| strokeLinecap | The end style type of the progress bar | `round`/`butt`/`square` | round |
| status | status | `success`/`warning`/`info`/`danger` | |


**`type=dashboard`**

| Parameters | Description | Type | Default value |
|------------|-----------------------------|--------------------------------------|--------|
| gapDegree | The gap angle of the dashboard progress bar, the value can be 0 ~ 295 | `number` | 75 |
| gapPosition | Dashboard progress bar gap position | `top`/`left`/`bottom`/`right` | bottom |
