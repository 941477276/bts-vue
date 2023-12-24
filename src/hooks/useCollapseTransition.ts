/**
 * 元素折叠过度动效
 */
export function useCollapseTransition (ctx: any, emitEvents?: boolean) {
  let oldPaddingTop = '';
  let oldPaddingBottom = '';
  // let oldOpacity = '';
  // let oldMaxHeight = '';
  let oldOverflow = '';

  return {
    collapseBeforeEnter (el: HTMLElement) {
      oldPaddingBottom = el.style.paddingBottom;
      oldPaddingTop = el.style.paddingTop;

      el.style.paddingTop = '0';
      el.style.paddingBottom = '0';
      el.style.maxHeight = '0';
      if (emitEvents) {
        ctx.emit('before-enter', el);
      }
    },
    collapseEnter (el: HTMLElement, done: () => void) {
      oldOverflow = el.style.overflow;
      let elHeight = el.scrollHeight;
      // 判断元素的父级是否隐藏了，如果元素的父级隐藏了那么元素的宽高都会为0
      let elParentsIsHidden = el.offsetWidth == 0 && el.offsetHeight == 0;
      if (elParentsIsHidden) {
        el.style.paddingTop = oldPaddingTop;
        el.style.paddingBottom = oldPaddingBottom;
        // 延迟60毫秒再执行done函数，否则在元素上 collapse-transition-enter-to 类不会消失
        let timer = setTimeout(function () {
          clearTimeout(timer);
          done();
          if (emitEvents) {
            ctx.emit('enter', el);
          }
        }, 60);
        return;
      }
      if (elHeight > 0) {
        el.style.maxHeight = elHeight + 'px';
      } else {
        el.style.maxHeight = '0';
      }
      el.style.paddingTop = oldPaddingTop;
      el.style.paddingBottom = oldPaddingBottom;

      el.style.overflow = 'hidden';
      // done();
      let onTransitionDone = function () {
        done();
        el.removeEventListener('transitionend', onTransitionDone, false);
        el.removeEventListener('transitioncancel', onTransitionDone, false);
      };
      // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
      el.addEventListener('transitionend', onTransitionDone, false);
      el.addEventListener('transitioncancel', onTransitionDone, false);

      if (emitEvents) {
        ctx.emit('enter', el);
      }
    },
    collapseAfterEnter (el: HTMLElement) {
      el.style.maxHeight = '';
      el.style.overflow = oldOverflow;

      if (emitEvents) {
        ctx.emit('after-enter', el);
      }
    },

    collapseBeforeLeave (el: HTMLElement) {
      oldPaddingBottom = el.style.paddingBottom;
      oldPaddingTop = el.style.paddingTop;
      oldOverflow = el.style.overflow;

      el.style.maxHeight = el.scrollHeight + 'px';
      el.style.overflow = 'hidden';

      if (emitEvents) {
        ctx.emit('before-leave', el);
      }
    },
    collapseLeave (el: HTMLElement, done: () => void) {
      if (el.scrollHeight !== 0) {
        el.style.maxHeight = '0';
        el.style.paddingBottom = '0';
        el.style.paddingTop = '0';
      }
      // done();
      let onTransitionDone = function () {
        done();
        el.removeEventListener('transitionend', onTransitionDone, false);
        el.removeEventListener('transitioncancel', onTransitionDone, false);
      };
      // 绑定元素的transition完成事件，在transition完成后立即完成vue的过度动效
      el.addEventListener('transitionend', onTransitionDone, false);
      el.addEventListener('transitioncancel', onTransitionDone, false);

      if (emitEvents) {
        ctx.emit('leave', el);
      }
    },
    collapseAfterLeave (el: HTMLElement) {
      el.style.maxHeight = '';
      el.style.overflow = oldOverflow;
      el.style.paddingBottom = oldPaddingBottom;
      el.style.paddingTop = oldPaddingTop;

      oldOverflow = oldPaddingBottom = oldPaddingTop = '';

      if (emitEvents) {
        ctx.emit('after-leave', el);
      }
    }
  };
};
