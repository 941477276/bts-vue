import { ExtractPropTypes } from 'vue';
import { bsPickerTimePanelProps } from './widgets/bs-picker-time-panel-props';
import { bsCommonPickerTypes } from '../bs-common-picker/bs-common-picker-types';

export const bsTimePickerProps = {
  ...bsPickerTimePanelProps,
  ...bsCommonPickerTypes
};

export type BsTimePickerProps = ExtractPropTypes<typeof bsPickerTimePanelProps>;

export type TimeDataUnit = {
  label: string;
  value: number;
  disabled?: boolean;
}
