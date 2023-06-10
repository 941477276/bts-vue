---
category: Components
type: navigation
typeCode: navigation
title: Pagination
subtitle: pagination
---

Use pagination to separate long lists, and use paging to break up data

## API

### Pagination property

| Parameter | Description | Type | Default |
|-------------------------------------|-------------------------------------------|------------------------------------------|---------------------------------|
| pageSize(v-model:pageSize) | The number of items displayed on each page, support v-model | number | 10 |
| currentPage(v-model:currentPage) | current page number, support v-model | number | 1 |
| total | total entries | number | |
| pageSizes | Option settings for the number of selectors displayed per page | number[] | [10, 20, 30, 40, 50, 100] |
| pagerCount | The number of pager buttons that will collapse when the total number of pages exceeds this value (an odd number greater than or equal to 5 and less than or equal to 21) | number | 7 |
| disabledPage | disabled page number | number[] | |
| size | Input box size. optional `lg`, `sm` | string | |
| layout | component layout, subcomponent names separated by commas | `total`/`pager`/`sizes`/`jumper`/`slot` | 'total,pager,sizes,jumper,slot' |
| prevText | The text of the "previous page" button | string | |
| nextText | text of "next page" button | string | |
| usePrev | whether to display the previous page button | boolean | true |
| useNext | Whether to show the next page button | boolean | true |
| hideOnSinglePage | Whether to hide when there is only one page | boolean | false |


### Pagination Events

| Event Name | Description | Callback Parameters |
|--------------|--------------------------------|------|
| sizeChange | Triggered when the displayed number of each page changes | |
| currentChange | Triggered when the current page number changes | |


### Pagination slot

| Slot Name | Description | Version |
|------|-------|-----|
| prev | Previous button | |
| next | Next page button | |
