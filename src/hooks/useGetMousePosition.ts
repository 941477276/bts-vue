/**
 * 获取鼠标都位置
 */
let mousePosition = {
  x: 0,
  y: 0
};
document.addEventListener('mousedown', function (evt: MouseEvent) {
  mousePosition.x = evt.clientX;
  mousePosition.y = evt.clientY;
}, false);
export function useGetMousePosition () {
  return {
    ...mousePosition
  };
};
