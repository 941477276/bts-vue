<template>
  <aside class="aside-menu" :class="{'show-search-box': !isSiteDoc}">
    <div class="header-search-box" v-if="!isSiteDoc">
      <bs-input class="header-search-input" :placeholder="$t('searchInputPlacement')" ></bs-input>
    </div>
    <div
      class="aside-menu-container"
      :class="{
        'scroll-auto': showScroll //为了在刷新页面后能自动滚动到激活的菜单项
      }">
      <bs-menu mode="vertical" v-model:selected-keys="activeMenu">
        <template v-for="menuItem in menus" :key="menuItem.typeCode">
          <bs-menu-item-group
            v-if="menuItem.children"
            :key-index="menuItem.typeCode"
            :title="menuItem.type">
            <bs-menu-item
              v-for="menu in menuItem.children"
              :key="menu.componentName"
              :key-index="menu.componentName"
              @click="handleMenuItemClick(menu)">
              {{ menu.title }}
              <small v-if="menu.subtitle && langCode != 'en'">{{ menu.subtitle }}</small>
            </bs-menu-item>
          </bs-menu-item-group>
          <bs-menu-item
            v-else
            :key="menuItem.componentName"
            :key-index="menuItem.componentName"
            @click="handleMenuItemClick(menuItem)">
            {{ menuItem.title }}
            <small v-if="menuItem.subtitle && langCode != 'en'">{{ menuItem.subtitle }}</small>
          </bs-menu-item>
        </template>

      </bs-menu>
    </div>
  </aside>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  onMounted
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { langCode } from '../store/lang';
import menuZhCN from '../router/menu.zh-CN';
import menuEnUS from '../router/menu.en-US';

export default defineComponent({
  name: 'AsideMenu',
  setup () {
    let router = useRouter();
    let route = useRoute();

    let isSiteDoc = computed(function () {
      return route.matched[0].path.indexOf('/doc') > -1;
    });

    let menus = computed(function () {
      let currentLang = langCode.value;
      // console.log('当前路由：', route, isSiteDoc.value);
      if (isSiteDoc.value) {
        let routes = router.getRoutes();
        let siteDocRoutes = routes.filter(routeItem => routeItem.path.indexOf('/doc/') > -1);
        let siteDocMenus = siteDocRoutes.map(routeItem => {
          let meta: Record<string, any> = routeItem.meta || {};
          return {
            type: 'siteDoc',
            typeCode: `siteDoc_${routeItem.name}`,
            title: currentLang == 'cn' ? meta.title : meta.enTitle,
            componentName: routeItem.name
          };
        });
        // console.log('routes', routes);
        return siteDocMenus;
      }
      return currentLang == 'cn' ? menuZhCN : menuEnUS;
    });

    let activeMenu = computed({
      get () {
        // console.log('route.currentRoute', route);
        return [route.name];
      },
      set (newActiveMenu) {
        // console.log('set newActiveMenu', newActiveMenu);
      }
    });
    let showScroll = ref(true);

    onMounted(function () {
      let timer = setTimeout(() => {
        clearTimeout(timer);
        showScroll.value = false;
      }, 300);
    });
    return {
      menus,
      showScroll,
      activeMenu,
      isSiteDoc,
      langCode,
      handleMenuItemClick (menuItem) {
        router.push({ name: menuItem.componentName });
      }
    };
  }
});
</script>

<style lang="scss">
@import "aside-menu";
</style>
