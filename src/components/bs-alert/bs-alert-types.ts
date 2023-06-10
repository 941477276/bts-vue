import { PropType, ExtractPropTypes } from 'vue';
import { BsColorType } from '../types';

export const bsAlertProps = {
  type: { // alert的主题类型
    type: String as PropType<BsColorType>,
    default: 'primary'
  },
  closeable: { // 是否可关闭
    type: Boolean,
    default: false
  },
  closeText: { // 关闭按钮文本
    type: String
  },
  title: { // 标题
    type: String
  },
  description: { // 辅助性文字。也可通过默认 slot 传入
    type: String
  },
  beforeClose: { // 关闭前的回调，若回调返回false，或返回Promise.reject则不会关闭
    type: Function,
    default: null
  }
};

export type BsAlertProps = ExtractPropTypes<typeof bsAlertProps>;
