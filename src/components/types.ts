export type BsSize = 'lg' | '' | 'sm';
export type BsTextAlign = 'left' | 'center' | 'right';
export type BsColorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
// 校验状态
export type BsValidateStatus = 'validating' | 'success' | 'error' | '';

export type BsPlacement = 'left' | 'top' | 'bottom' | 'right';
export type BsPlacementEnd = 'leftEnd' | 'topEnd' | 'bottomEnd' | 'rightEnd';
export type BsPlacementEndKebab = 'left-end' | 'top-end' | 'bottom-end' | 'right-end';
export type BsPlacementFour = 'left' | 'top' | 'bottom' | 'right';

export type BsInputType = 'text' | 'password' | 'number' | 'textarea' | 'email' | 'file' | 'hidden' | 'image' | 'submit' | 'button' | 'reset';
export type PlainObject = Record<string, any>;

export const supportedBsColorTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
