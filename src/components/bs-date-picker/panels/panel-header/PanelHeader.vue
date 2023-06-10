<template>
  <div class="bs-picker-header">
    <button
      v-if="onSuperPrev"
      type="button"
      tabindex="-1"
      class="bs-picker-header-super-prev-btn"
      @click="onSuperPrev()">
      <BsiChevronDoubleLeft></BsiChevronDoubleLeft>
    </button>
    <button
      v-if="onPrev"
      type="button"
      tabindex="-1"
      class="bs-picker-header-prev-btn"
      @click="onPrev()">
      <BsiChevronLeft></BsiChevronLeft>
    </button>
    <div class="bs-picker-header-content">
      <slot></slot>
    </div>
    <button
      v-if="onNext"
      type="button"
      tabindex="-1"
      class="bs-picker-header-next-btn"
      @click="onNext()">
      <BsiChevronRight></BsiChevronRight>
    </button>
    <button
      v-if="onSuperNext"
      type="button"
      tabindex="-1"
      class="bs-picker-header-super-next-btn"
      @click="onSuperNext()">
      <BsiChevronDoubleRight></BsiChevronDoubleRight>
    </button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue';
import { BsiChevronLeft } from 'vue3-bootstrap-icon/es/icons/BsiChevronLeft';
import { BsiChevronDoubleLeft } from 'vue3-bootstrap-icon/es/icons/BsiChevronDoubleLeft';
import { BsiChevronRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronRight';
import { BsiChevronDoubleRight } from 'vue3-bootstrap-icon/es/icons/BsiChevronDoubleRight';

export default defineComponent({
  name: 'BsPanelHeader',
  components: {
    BsiChevronLeft,
    BsiChevronDoubleLeft,
    BsiChevronRight,
    BsiChevronDoubleRight
  },
  props: {
    onSuperPrev: {
      type: Function,
      default: null
    },
    onPrev: {
      type: Function,
      default: null
    },
    onNext: {
      type: Function,
      default: null
    },
    onSuperNext: {
      type: Function,
      default: null
    }
  }
});
</script>
