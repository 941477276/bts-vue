<template>
  <header class="doc-header">
    <nav class="navbar navbar-expand-lg bg-primary">
      <transition name="brand-slide">
        <router-link v-show="navbarBrandVisible" class="navbar-brand" to="/component">
          <BsiBootstrap></BsiBootstrap>
          <BsiBootstrapFill></BsiBootstrapFill>
          <span class="brand-text">
           Bootstrap <i>Vue<small>3</small></i>
        </span>
        </router-link>
      </transition>

      <bs-button class="navbar-toggler" aria-label="Toggle navigation" @click="$emit('navbar-toggler-click')">
        <BsiThreeDots></BsiThreeDots>
      </bs-button>

      <div class="navbar-container" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item" :class="{active: $route.path == '/doc/introduce' }">
            <router-link class="nav-link" to="/doc/introduce"><!--文档-->{{ $t('doc') }}</router-link>
          </li>
          <li class="nav-item" :class="{active: $route.path.startsWith('/component') }">
            <router-link class="nav-link" to="/component"><!--组件-->{{ $t('component') }}</router-link>
          </li>
          <li class="nav-item lang-nav-item">
            <bs-dropdown placement="bottom-end" >
              <bs-button>{{ langCode == 'cn' ? '中文' : 'English' }}</bs-button>
              <template #content>
                <bs-dropdown-item :active="langCode == 'cn'" @click="changeLang('cn')">中文</bs-dropdown-item>
                <bs-dropdown-item :active="langCode == 'en'" @click="changeLang('en')">English</bs-dropdown-item>
              </template>
            </bs-dropdown>
          </li>
          <li class="nav-item version-nav-item">
            <bs-dropdown placement="bottom-end">
              <bs-button>{{ currentVersion }}</bs-button>
              <template #content>
                <bs-dropdown-item
                  v-for="(versionItem, index) in versionList"
                  :key="index">{{ versionItem }}</bs-dropdown-item>
              </template>
            </bs-dropdown>
          </li>
          <li class="nav-item icon-nav-item">
            <a href="https://github.com/941477276/bts-vue" class="nav-link lib-github-link" title="Code github" target="_blank">
              <BsiGithub></BsiGithub>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {
  ref,
  defineComponent,
  onBeforeUnmount
} from 'vue';
import { BsiGithub } from 'vue3-bootstrap-icon/es/icons/BsiGithub';
import { BsiBootstrap } from 'vue3-bootstrap-icon/es/icons/BsiBootstrap';
import { BsiBootstrapFill } from 'vue3-bootstrap-icon/es/icons/BsiBootstrapFill';
import { BsiThreeDots } from 'vue3-bootstrap-icon/es/icons/BsiThreeDots';
import version from '../../../src/version';
import { langCode } from '../store/lang';
import { setI18nLanguage } from '../i18n/i18nUtil';

export default defineComponent({
  name: 'Header',
  emits: ['navbar-toggler-click'],
  components: {
    BsiGithub,
    BsiBootstrap,
    BsiBootstrapFill,
    BsiThreeDots
  },
  setup () {
    let currentVersion = ref(version);
    let navbarBrandVisible = ref(true);
    let matchMedia576 = matchMedia('(max-width: 576px)');
    // 屏幕宽度小于576px的处理函数
    let handleScreenWidthLess576 = function (evt: MediaQueryListEvent) {
      if (evt.matches) {
        navbarBrandVisible.value = false;
      } else {
        navbarBrandVisible.value = true;
      }
    };
    matchMedia576.addEventListener('change', handleScreenWidthLess576);

    let versionList = ref([]);
    versionList.value.push(version);

    onBeforeUnmount(function () {
      matchMedia576.removeEventListener('change', handleScreenWidthLess576);
    });
    return {
      navbarBrandVisible,
      currentVersion,
      langCode,
      versionList,

      changeLang (code: string) {
        langCode.value = code;
        setI18nLanguage(code);
      }
    };
  }
});
</script>

<style lang="scss">
@import "header";
</style>
