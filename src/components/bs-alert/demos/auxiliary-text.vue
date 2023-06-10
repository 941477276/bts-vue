<docs>
---
order: 0
title:
  zh-CN: 辅助性文字
  en-US: Auxiliary text
description:
  zh-CN: 包含标题和内容，解释更详细的警告
  en-US: Contains title and content explaining warnings in more detail
---
</docs>

<template>
  <div>
    <BsAlert
      title="Web page"
      description="A web page is a plain text file containing HTML tags！"
      type="primary"></BsAlert>

    <BsAlert
      title="自定义辅助性文字"
      type="primary">
      <template #description>
        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
        <hr>
        <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
      </template>
    </BsAlert>
  </div>
</template>
