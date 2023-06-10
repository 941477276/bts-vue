function drag (el: HTMLElement, binding: any) {
  const dialogHeaderEl = el.querySelector(binding.value.dragBar);
  const dragDom = el.querySelector(binding.value.target);
  // 是否使用边界，如果使用边界则元素不会被拖出窗口
  const useBoundary = binding.value.useBoundary !== false;
  const onDrag = binding.value.onDrag;
  // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
  const getStyle = (function () {
    if ((window.document as any).currentStyle) {
      return (dom: HTMLElement|any, attr: string) => dom.currentStyle[attr];
    } else {
      // @ts-ignore
      return (dom: HTMLElement, attr: string) => getComputedStyle(dom, null)[attr];
    }
  })();
  if ((el as any).dragInited) { // 已经开启过了拖拽功能，需防止重复开启（指令mounted、update都会进来）
    if (!binding.value.useDrag) {
      dialogHeaderEl.style.cursor = '';
      dialogHeaderEl.removeEventListener('mousedown', dialogHeaderEl.bs_mouseDown, false);
      dialogHeaderEl.bs_mouseDown = null;
      (el as any).dragInited = false;
      return;
    } else {
      // 指令已经初始化过了，无需重复初始化
      return;
    }
  } else {
    if (!binding.value.useDrag) {
      return;
    }
  }
  dialogHeaderEl.style.cursor = 'move';
  (el as any).dragInited = true;
  let mouseDownEvent = (evt: MouseEvent) => {
    if (binding.value.useDrag === false) {
      return;
    }
    const disX = evt.clientX - dialogHeaderEl.offsetLeft;
    const disY = evt.clientY - dialogHeaderEl.offsetTop;
    const dragDomWidth = dragDom.offsetWidth;
    const dragDomHeight = dragDom.offsetHeight;
    // const screenWidth = document.body.clientWidth || window.innerWidth;
    // const screenHeight = document.body.clientHeight || window.innerHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const minDragDomLeft = dragDom.offsetLeft;
    const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth;
    const minDragDomTop = dragDom.offsetTop;
    const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight;
    let styL = getStyle(dragDom, 'left');
    let styT = getStyle(dragDom, 'top');

    if (styL.includes('%')) {
      styL = +window.innerWidth * (+styL.replace(/%/g, '') / 100);
      styT = +window.innerHeight * (+styT.replace(/%/g, '') / 100);
    } else {
      styL = +styL.replace(/px/g, '');
      styT = +styT.replace(/px/g, '');
    }
    let mouseMoveEvent = (e: MouseEvent) => {
      e.preventDefault();
      // 通过事件委托，计算移动的距离
      let left = e.clientX - disX;
      let top = e.clientY - disY;
      if (useBoundary) {
        // 边界处理
        if (-(left) > minDragDomLeft) {
          left = -minDragDomLeft;
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft;
        }
        if (-top > minDragDomTop) {
          top = -minDragDomTop;
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop;
        }
      }

      // 移动当前元素
      dragDom.style.left = `${left + styL}px`;
      dragDom.style.top = `${top + styT}px`;
      // 执行 onDrag 事件
      if (typeof onDrag === 'function') {
        onDrag();
      }
    };

    let mouseUpEvent = function () {
      document.removeEventListener('mousemove', mouseMoveEvent, false);
      document.removeEventListener('mouseup', mouseUpEvent, false);
    };
    document.addEventListener('mousemove', mouseMoveEvent, false);
    document.addEventListener('mouseup', mouseUpEvent, false);
    document.addEventListener('mouseleave', mouseUpEvent, false);
  };

  dialogHeaderEl.addEventListener('mousedown', mouseDownEvent, false);
  dialogHeaderEl.bs_mouseDown = mouseDownEvent;
};

export default {
  mounted (el: HTMLElement, binding: any) {
    if (!binding.value.dragBar) {
      console.error('需传递拖拽元素的选择器，参数名：dragBar');
      return;
    }
    if (!binding.value.target) {
      console.error('需传递被拖拽元素的选择器，参数名：target');
      return;
    }
    if (binding.value.useDrag === false) {
      return;
    }
    drag(el, binding);
    // (el as any).dragInited = true;
  },
  updated (el: HTMLElement, binding: any) {
    drag(el, binding);
  }
};
