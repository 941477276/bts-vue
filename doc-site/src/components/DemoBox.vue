<template>
<div class="demo-box">
  <div class="demo-box-header">
    <h6 class="demo-title">{{ title[langCode] }}</h6>
    <div class="demo-operate-area">
      <!--在Playground中打开-->
      <bs-tooltip :content="$t('openOnPlayground')" placement="top" transition-name="scale">
        <bs-button size="sm">
          <BsiPlayFill></BsiPlayFill>
        </bs-button>
      </bs-tooltip>
      <!--复制代码-->
      <bs-tooltip :content="$t('copyCode')" placement="top" transition-name="scale">
        <bs-button size="sm" @click="copyExampleCode">
          <BsiFiles></BsiFiles>
        </bs-button>
      </bs-tooltip>
      <bs-tooltip :content="codeExpanded ? $t('shrinkCode') : $t('expandCode')" placement="top" transition-name="scale">
        <bs-button size="sm" @click="codeExpanded = !codeExpanded"
                   :class="{
                     'example-code-expanded': codeExpanded
                   }">
          <BsiCode></BsiCode>
        </bs-button>
      </bs-tooltip>
    </div>
  </div>
  <div class="demo-description" v-html="desc"></div>
  <div class="demo-example">
    <slot></slot>
  </div>
  <div class="demo-example-code" v-show="codeExpanded">
    <pre ref="exampleCodeRef" class="language-html">
{{ decodeURIComponent(exampleCode) }}
    </pre>
    <div class="shrink-code-operate">
      <!--收起代码-->
      <bs-button block @click="codeExpanded = false"><BsiChevronUp></BsiChevronUp><!--收起代码-->{{ $t('shrinkCode') }}</bs-button>
    </div>
  </div>
</div>
</template>

<script>
import {
  ref,
  defineComponent,
  onMounted,
  computed
} from 'vue';
import { BsiPlayFill } from 'vue3-bootstrap-icon/es/icons/BsiPlayFill';
import { BsiCode } from 'vue3-bootstrap-icon/es/icons/BsiCode';
// import { BsiCodeSlash } from 'vue3-bootstrap-icon/es/icons/BsiCodeSlash';
import { BsiFiles } from 'vue3-bootstrap-icon/es/icons/BsiFiles';
import { BsiChevronUp } from 'vue3-bootstrap-icon/es/icons/BsiChevronUp';
import { copyText } from '../common/utils';
import { BsMessage } from '../../../src/components/bs-message';
import prism from 'prismjs';
import { langCode } from '../store/lang';

export default defineComponent({
  name: 'DemoBox',
  components: {
    BsiPlayFill,
    BsiCode,
    // BsiCodeSlash,
    BsiFiles,
    BsiChevronUp
  },
  props: {
    title: { // 标题
      type: Object,
      default () {
        return {
          cn: '',
          en: ''
        };
      }
    },
    description: { // 描述
      type: Object,
      default () {
        return {
          cn: '',
          en: ''
        };
      }
    },
    exampleCode: { // 示例代码
      type: String,
      default: ''
    }
  },
  setup (props) {
    let codeExpanded = ref(false);
    let exampleCodeRef = ref(null);

    let desc = computed(function () {
      // console.log('props.description[langCode.value]', props.description[langCode.value]);
      let content = decodeURIComponent(props.description[langCode.value]);
      return content;
    });

    onMounted(function () {
      prism.highlightElement(exampleCodeRef.value);
    });
    return {
      codeExpanded,
      exampleCodeRef,
      langCode,
      desc,
      copyExampleCode () { // 复制代码
        let copyStatus = copyText(decodeURIComponent(props.exampleCode));
        if (copyStatus == 1) {
          BsMessage.success('代码已复制');
        } else {
          BsMessage.warning('代码复制失败');
        }
      }
    };
  }
});
</script>

<style lang="scss">
@import "demo-box";
</style>
