<template>
  <div class="bts-vue-doc">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BsVueDoc'
};
</script>

<style lang="scss">
.bts-vue-doc{
  .article-table{
    border: 1px solid #dee2e6;
    margin-bottom: 2.5rem;
    th{
      white-space: nowrap;
      img{
        display: inline-block;
        vertical-align: middle;
        width: 28px;
        height: 28px;
        margin-right: 5px;
      }
    }
    /*td{
      word-break: break-all;
      word-wrap: break-word;
      &:first-child{
        white-space: nowrap;
      }
      &:nth-child(2) {
        min-width: 200px;
      }
      &:nth-child(3){
        min-width: 140px;
      }
    }*/
  }
  ul > li {
    list-style: circle;
  }
  h1,h2,h3,h4,h5,h6{
    line-height: 1.45;
    margin-bottom: 1rem;
  }
  [class*='language-']{
    max-height: 100vh;
    margin-bottom: 2rem;
  }
}
</style>
