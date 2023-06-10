/**
 * 复制文本
 * @param value 文本值
 * @returns {number} 返回1表示复制成功
 */
export function copyText (value: string | number) {
  if (!value) {
    return -1;
  }
  if (!document.execCommand) {
    // Message.error('浏览器不支持')
    return -2;
  }
  try {
    const selectText = (
      textbox: any,
      startIndex: number,
      stopIndex: number
    ) => {
      if (textbox.createTextRange) {
        // ie
        const range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart('character', startIndex); // 起始光标
        range.moveEnd('character', stopIndex - startIndex); // 结束光标
        range.select(); // 不兼容苹果
      } else {
        // firefox/chrome
        textbox.setSelectionRange(startIndex, stopIndex);
        textbox.focus();
      }
    };
    const copyEl = document.createElement('textarea'); // 不能使用input元素，会导致复制的内容丢失换行
    copyEl.style.position = 'fixed';
    copyEl.style.opacity = '0';
    copyEl.value = value as string;
    copyEl.setAttribute('readonly', 'readonly');
    document.body.appendChild(copyEl);
    selectText(copyEl, 0, (value + '').length);
    if (document.execCommand('copy')) {
      copyEl.blur();
      document.execCommand('copy');
      document.body.removeChild(copyEl);
      return 1;
    }
  } catch (e) {
    console.log(e);
    return 2;
  }
}
