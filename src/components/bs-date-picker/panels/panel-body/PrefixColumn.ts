import {
  inject
} from 'vue';
import {
  datePickerPrefixColumnSlotCtx
} from '../../bs-date-picker-types';

export function PrefixColumn (props: any) {
  let prefixColumnSlotCtx: any = inject(datePickerPrefixColumnSlotCtx)!;
  let prefixColumnSlot = prefixColumnSlotCtx?.slots.prefixColumn;
  if (prefixColumnSlot) {
    return prefixColumnSlot(props.cellData);
  }
  return null;
};
PrefixColumn.props = ['cellData'];
