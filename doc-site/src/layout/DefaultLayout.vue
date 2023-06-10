<template>
<div class="default-layout header-fixed">
  <Header
    id="docHeader"
    @navbar-toggler-click="showDrawer"></Header>
  <AsideMenu class="left-aside-menu"></AsideMenu>
  <main class="doc-main">
    <router-view></router-view>
  </main>
  <bs-drawer title="Bootstrap Vue" drawer-class="mobile-menu-drawer"
             v-if="drawerRender" v-model:visible="drawerVisible" placement="left">
    <AsideMenu></AsideMenu>
  </bs-drawer>
</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue';
import Header from './Header.vue';
import AsideMenu from './AsideMenu.vue';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Header,
    AsideMenu
  },
  setup () {
    let drawerRender = ref(false);
    let drawerVisible = ref(false);
    return {
      drawerRender,
      drawerVisible,
      showDrawer () {
        if (!drawerRender.value) {
          drawerRender.value = true;
          let timer = setTimeout(() => {
            clearTimeout(timer);
            drawerVisible.value = true;
          }, 300);
          return;
        }
        drawerVisible.value = true;
      }
    };
  }
});
</script>

<style lang="scss">
.default-layout{
  &.header-fixed{
    padding-top: 4rem; // 60px
    .doc-header{
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
      z-index: 100;
    }
  }
}
.doc-main{
  padding: 2.5rem 2.5rem 2.5rem 21.25rem;
  transition: all .2s;
  .demo-index{
    /*display: grid;
    grid-template-columns: 50% 50%;
    gap: 1.5rem;
    align-items: start;*/
    /*display: flex;
    flex-wrap: wrap;
    align-items: flex-start;*/
    .demo-box{
      //float: left;
      //width: 48%;
      //flex: 0 0 48%;
      & + .demo-box {
        margin-top: 1.5rem;
      }
    }
  }
}
.mobile-menu-drawer{
  .bs-drawer-content-wrapper{
    width: auto;
  }
  .bs-drawer-body{
    padding: 0;
  }
  .aside-menu{
    position: relative;
    top: 0;
    height: 100%;
  }
}
@media (max-width: 992px) {
  .default-layout{
    .left-aside-menu{
      width: 15rem;
    }
    .doc-main{
      padding: 1.5rem 1.5rem 1.5rem 16.5rem;
    }
  }
}
@media (max-width: 768px) {
  .default-layout{
    .left-aside-menu{
      display: none;
    }
    .doc-main{
      padding: 1rem;
    }
  }
}
</style>
