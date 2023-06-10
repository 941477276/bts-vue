import { ExtractPropTypes } from 'vue';

export const bsCollapseTransitionProps = {
  transitionName: {
    type: String,
    default: 'collapse-transition'
  }
};

export type BsCollapseTransitionProps = ExtractPropTypes<typeof bsCollapseTransitionProps>;
