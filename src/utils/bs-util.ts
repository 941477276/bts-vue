/**
 * 根据路径从对象中获取值
 * @param obj 对象
 * @param path 路径
 * @returns {*}
 */

export function getPropValueByPath (obj: { [key: string]: any }, path: string): { value?: any; lastKey?: string; parentObj?: any } {
  if (!obj || !path || (path + '').length === 0) {
    return {};
  }
  // 将 'a.b.c["d"].e["f"]' 转换成 'a.b.c.d.e.f'
  path = path.replace(/\["?'?(\w+)"?'?\]/g, '.$1');
  // 将字符的首个"."去除掉
  path = path.replace(/^\./, '');
  let pathArr: string[] = path.split('.');
  let tempObj = obj;
  let value;
  let key = '';
  while (pathArr.length > 1) {
    // @ts-ignore
    key = pathArr.shift();
    tempObj = tempObj[key];
    // value = obj[key];
  }
  // @ts-ignore
  key = pathArr.shift();
  value = tempObj[key];
  return {
    value,
    lastKey: key,
    parentObj: tempObj
  };
}

/**
 * 判断一个变量是否为空值
 * @param variable 变量
 * @returns {boolean}
 */
export function isNoneValue (variable: any): boolean {
  return variable === null || typeof variable === 'undefined' || (!Array.isArray(variable) && (variable + '').length === 0);
}

/**
 * 获取变量的数据类型
 * @param obj
 * @returns {string|string|"undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"}
 */
export function getType (obj: any): string {
  let class2type: any = {};
  if (obj == null) {
    return obj + '';
  }
  return typeof obj === 'object' || typeof obj === 'function' ? class2type[toString.call(obj)] || 'object' : typeof obj;
}

/**
 * 判断参数是否为undefined
 * @param varable
 * @returns {boolean}
 */
export function isUndefined (varable: any): boolean {
  return typeof varable === 'undefined';
}

/**
 * 判断参数是否为booleal类型
 * @param varable
 * @returns {boolean}
 */
export function isBoolean (varable: any): boolean {
  return typeof varable === 'boolean';
}

/**
 * 判断对象是否为promise对象
 * @param obj
 * @returns {boolean}
 */
export function isPromise (obj: any): boolean {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

/**
 * 判断参数是否为函数
 * @param varable
 */
export function isFunction (varable: any): boolean {
  return typeof varable == 'function';
}

/**
 * 判断对象是否是一个空对象
 * @param obj
 */
export function isEmptyObject (obj: any): boolean {
  for (let attr in obj) {
    return false;
  }
  return true;
}

/**
 * 判断传入的参数是否为字符串
 * @param val
 */
export function isString (val: any): boolean {
  return typeof val === 'string';
}

/**
 * 判断传入的参数是否为symbol
 * @param val
 */
export function isSymbol (val: any): boolean {
  return typeof val === 'symbol';
}

/**
 * 判断传入的参数是否为普通对象
 * @param val
 */
export function isObject (val: any): boolean {
  return val !== null && typeof val === 'object';
}

/**
 * 判断传入的参数是否为数字
 * @param val
 */
export function isNumber (val: any): boolean {
  return val && !isNaN(Number(val));
}

/**
 * 获取两个数之间的随机值
 * @param min 最小值
 * @param max 最大值
 * @returns {number}
 */
export function getRandomNumber (min: number, max: number): number {
  return parseInt((Math.random() * (max - min + 1) + min) + '');
}

/**
 * 短横行命名转小驼峰命名
 * @param kebabStr
 */
export function kebabCase2CamelCase (kebabStr: string): string {
  if (!isString(kebabStr)) {
    return kebabStr;
  }
  return kebabStr.replace(/-(.)/g, function (matched, $1) {
    return $1.toUpperCase();
  });
};

/**
 *  小驼峰命名转短横线命名
 * @param camelStr
 */
export function camelCase2KebabCase (camelStr: string): string {
  if (!isString(camelStr)) {
    return camelStr;
  }
  return camelStr.replace(/(\w)([A-Z])/g, function (matched, $1, $2) {
    return $1 + '-' + $2.toLowerCase();
  });
};

/**
 * 判断文本是否为韩文
 * @param text
 */
export function isKorean (text: string): boolean {
  return /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(text);
}

/**
 * 检测终端
 */
export function checkTerminal (): { android: boolean; ios: boolean; pc: boolean } {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; // g
  var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

  return {
    android: isAndroid,
    ios: isIOS,
    pc: !isIOS && !isAndroid
  };
};

/**
 * json按ASCII码表顺序排序
 * @param json json对象
 * @returns {*}
 */
export function jsonSort (json: Record<string, any>) {
  let attrs = Object.keys(json);
  // 使用数组的排序方法进行排序
  attrs.sort();
  let newJson = attrs.reduce((res, attr) => {
    res[attr] = json[attr];
    return res;
  }, {} as Record<string, any>);
  return newJson;
};

/* **************************** DOM utils start ************************************* */

// 获取浏览器宽高
export function getDocumentWidthHeight (): {width: number; height: number} {
  if (window.innerHeight != null) {
    return {
      width: window.innerWidth, // 包含了浏览器的滚动条
      height: window.innerHeight
    };
  } else if (document.compatMode === 'CSS1Compat') {
    // 怪异模式浏览器
    return {
      width: document.documentElement.scrollWidth, // 不包含浏览器滚动条
      height: document.documentElement.scrollHeight
    };
  }
  return {
    width: document.body.scrollWidth,
    height: document.body.scrollHeight
  };
}

/**
 * 获取元素距浏览器最顶部及最左边的距离
 * @param ele dom元素
 * @returns {{top: number, left: number}}
 */
export function offset (ele: HTMLElement): {top: number; left: number;} {
  var positon = {
    top: 0,
    left: 0
  };
  if (!ele || ele.nodeType != 1) {
    return positon;
  }
  var offsetParent = ele.offsetParent as HTMLElement;
  positon.top = ele.offsetTop;
  positon.left = ele.offsetLeft;
  while (offsetParent != null) {
    positon.top += offsetParent.offsetTop;
    positon.left += offsetParent.offsetLeft;
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }
  return positon;
}

/**
 * 获取元素距指定父级元素最顶部及最左边的距离
 * @param ele dom元素
 * @param boundaryParent 边界父级元素，默认为null
 * @returns {{top: number, left: number}}
 */
export function offsetInParent (ele: HTMLElement, boundaryParent: HTMLElement|null = null): {top: number; left: number;} {
  var positon = {
    top: 0,
    left: 0
  };
  var elOffset = offset(ele);
  var parentOffset = {
    top: 0,
    left: 0
  };
  if (boundaryParent) {
    parentOffset = offset(boundaryParent);
  }
  positon.top = elOffset.top - parentOffset.top;
  positon.left = elOffset.left - parentOffset.left;
  return positon;
}

/**
 * 判断元素是否有滚动条
 * @param ele dom元素
 * @returns {{horizontal: boolean, vertical: boolean}}
 */
export function eleHasScroll (ele: HTMLElement): {
  vertical: boolean,
  horizontal: boolean
} {
  var result = {
    vertical: false,
    horizontal: false
  };
  if (!(ele instanceof HTMLElement)) {
    return result;
  }
  // 当元素的overflow=visible，position=relative，且元素有绝对定位的子元素，且绝对定位的子元素的高度超过父元素的高度时，
  // 父元素的scrollHeight会大于父元素的clientHeight，因此在判断元素是否有滚动条时必须排除调overflow=visible
  var noScrollOverflowValue = ['hidden', 'visible'];
  if (ele.scrollTop > 0) {
    result.vertical = true;
  } else {
    /* // 使用这种方式判断元素是否有滚动条，若是元素绑定了scroll事件偶尔会触发scroll事件
    ele.scrollTop++;
    // 元素不能滚动的话，scrollTop 设置不会生效，还会置为 0
    const top = ele.scrollTop;
    // 重置滚动位置
    top && (ele.scrollTop = 0);
    // return top > 0;
    result.vertical = top > 0; */
    var overflowY = getStyle(ele, 'overflow-y');
    result.vertical = !noScrollOverflowValue.includes(overflowY) && (ele.scrollHeight > ele.clientHeight);
  }
  if (ele.scrollLeft > 0) {
    result.horizontal = true;
  } else {
    /* // 使用这种方式判断元素是否有滚动条，若是元素绑定了scroll事件偶尔会触发scroll事件
    ele.scrollLeft++;
    // 元素不能滚动的话，scrollLeft 设置不会生效，还会置为 0
    const left = ele.scrollLeft;
    // 重置滚动位置
    left && (ele.scrollLeft = 0);
    // return top > 0;
    result.horizontal = left > 0; */
    var overflowX = getStyle(ele, 'overflow-x');
    result.horizontal = !noScrollOverflowValue.includes(overflowX) && (ele.scrollWidth > ele.clientWidth);
  }
  return result;
}

/**
 * 获取元素的css属性值
 * @param ele dom元素
 * @param cssAttribute css属性名称
 */
export function getStyle (ele: HTMLElement, cssAttribute: string): any {
  if (!ele || !ele.nodeName) {
    console.error('ele 必须是一个dom元素');
    return;
  }
  if (!cssAttribute) {
    console.error('cssAttribute 必须是一个字符串');
    return;
  }
  var val = '';
  if (window.getComputedStyle) {
    // @ts-ignore
    val = window.getComputedStyle(ele, null)[cssAttribute];
  } else if ((ele as any).currentStyle) {
    val = (ele as any).currentStyle[cssAttribute];
  }
  let numberVal = parseFloat(val);
  if (!isNaN(numberVal)) {
    return numberVal;
  } else {
    return val;
  }
}

/**
 * 获取元素有滚动条的父级元素
 * @param ele HTMLElement
 */
export function getScrollParent (ele: HTMLElement): HTMLElement|undefined {
  if (!ele) {
    return;
  }
  var eleParent = ele.parentElement;
  while (eleParent != null) {
    var scroll = eleHasScroll(eleParent);
    if (scroll.vertical || scroll.horizontal) {
      return eleParent;
    }
    eleParent = eleParent.parentElement;
  }
}

/**
 * 获取元素的transform: translate的值
 * @param transformValue
 * @returns {{x:number;y:number;z:number;rotate:number;}}
 */
interface ElementTranslateFormatedValue {
  x: number;
  y: number;
  z: number;
  rotate: number;
  scaleX: number;
  scaleY: number;
}
export function getEleTranslateValue (transformValue: string): ElementTranslateFormatedValue {
  var resultObj = {
    x: 0,
    y: 0,
    z: 0,
    rotate: 0,
    scaleX: 1,
    scaleY: 1
  };
  if (!transformValue || transformValue == 'none') {
    return resultObj;
  }
  var translates = transformValue.substring(6);
  var result = translates.match(/\(([^)]*)\)/);// 正则()内容
  // 获取Rotate值
  var getRotate = function (matrix: number[]) {
    var aa = Math.round(180 * Math.asin(matrix[0]) / Math.PI);
    var bb = Math.round(180 * Math.acos(matrix[1]) / Math.PI);
    var cc = Math.round(180 * Math.asin(matrix[2]) / Math.PI);
    var dd = Math.round(180 * Math.acos(matrix[3]) / Math.PI);
    var deg = 0;
    if (aa == bb || -aa == bb) {
      deg = dd;
    } else if (-aa + bb == 180) {
      deg = 180 + cc;
    } else if (aa + bb == 180) {
      deg = 360 - cc || 360 - dd;
    }
    return deg >= 360 ? 0 : deg;
  };
  var matrix = result ? result[1].split(',') : translates.split(',');
  resultObj.x = matrix.length > 6 ? parseFloat(matrix[12]) : parseFloat(matrix[4]);
  resultObj.y = matrix.length > 6 ? parseFloat(matrix[13]) : parseFloat(matrix[5]);
  resultObj.z = matrix.length > 6 ? parseFloat(matrix[14]) : 0;
  // @ts-ignore
  resultObj.rotate = matrix.length > 6 ? getRotate([parseFloat(matrix[0]), parseFloat(matrix[1]), parseFloat(matrix[4]), parseFloat(matrix[5])]) : getRotate(matrix);
  resultObj.scaleX = parseFloat(matrix[0]);
  resultObj.scaleY = parseFloat(matrix[3]);

  return resultObj;
}

/**
 * 给元素设置css属性
 * @param ele dom元素
 * @param attr css属性名
 * @param val css属性值，如果不传递attr参数，则该参数可以为一个对象，就像jquery的css()方法一样
 */
export function setCss (ele: HTMLElement, attrs?: string|{[key: string]: any}, val?: any): HTMLElement|void {
  if (!ele || !ele.nodeName) {
    console.error('ele 必须是一个dom元素');
    return;
  }
  var type1 = ({}).toString.call(attrs);
  // 需要字段加单位的css属性
  var autoAddUnitAttr = {
    width: 1,
    height: 1,
    margin: 1,
    padding: 1,
    borderRadius: 1,
    top: 1,
    left: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    marginBottom: 1,
    right: 1,
    bottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    paddingBottom: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    fontSize: 1,
    lineHeight: 1,
    textIndent: 1,
    minWidth: 1,
    maxWith: 1
  };
  if (type1 === '[object String]' && typeof val !== 'undefined') {
    let newAttrs = (attrs as string).replace(/\-(\w)/g, function (matched, $1) {
      return $1.toUpperCase();
    });
    if (newAttrs in autoAddUnitAttr && !isNaN(Number(val))) {
      // @ts-ignore
      ele.style[newAttrs] = val + 'px';
    } else {
      // @ts-ignore
      ele.style[newAttrs] = val;
    }
  } else if (type1 === '[object Object]') {
    var style = ele.style;
    var newAttrs = attrs as any;
    for (var attr in newAttrs) {
      var val2 = newAttrs[attr];
      var isNumber = Number(val2);

      attr = attr.replace(/\-(\w)/g, function (matched, $1) {
        return $1.toUpperCase();
      });

      if (attr in autoAddUnitAttr && !isNaN(isNumber)) {
        // @ts-ignore
        style[attr] = val2 + 'px';
      } else {
        // @ts-ignore
        style[attr] = val2;
      }
    }
  }
  return ele;
}

/**
 * 获取兄弟节点
 * @param elm
 * @returns {Array}
 */
export function siblings (elm: Element): Element[] {
  var a: Element[] = [];
  var p = elm.parentNode?.children || [];
  for (var i = 0, pl = p.length; i < pl; i++) {
    if (p[i] !== elm) a.push(p[i]);
  }
  return a;
}

/**
 * 判断两个元素是否是包含关系
 * @param ele 父元素
 * @param childEle 子元素
 * @returns {Boolean}
 */
export function elementContains (ele: Element, childEle: Element): boolean {
  if (ele === childEle) {
    return false;
  }
  if (!ele) {
    return false;
  }
  if (typeof ele.contains === 'function') {
    return ele.contains(childEle);
  } else {
    while (true) {
      if (!childEle) {
        return false;
      }
      if (childEle === ele) {
        return true;
      } else {
        childEle = childEle.parentNode as Element;
      }
    }
    return false;
  }
}

/**
 * 获取元素的指定父级元素
 * @param el dom 元素
 * @param className 父元素的class name
 * @returns {dom、undefined}
 */
export function parents (el: HTMLElement, className: string): HTMLElement|void {
  if (!el || !el.nodeName || !className) {
    return;
  }
  var classNameArr = className.split(' ');
  var parent = el.parentElement;

  while (parent) {
    var flag = true;
    for (var i = 0, len = classNameArr.length; i < len; i++) {
      if (!hasClass(parent, classNameArr[i])) {
        flag = false;
        break;
      }
    }
    if (flag) {
      return parent;
    } else {
      parent = parent.parentElement;
    }
  }
}

/**
 * 判断浏览器或dom元素是否有滚动条
 * @returns {{horizontal: boolean, vertical: boolean}}
 */
export function hasScroll (ele?: HTMLElement): {
  vertical: boolean;
  horizontal: boolean
} {
  if (ele && ele.nodeType == 1) {
    return eleHasScroll(ele);
  }
  return {
    // vertical: document.body.offsetWidth < window.innerWidth,
    // horizontal: document.documentElement.clientHeight < window.innerHeight
    vertical: document.body.scrollHeight > window.innerHeight,
    horizontal: document.body.scrollWidth > window.innerWidth
  };
}

/**
 * 给指定元素添加class
 * @param ele
 * @param classname
 */
export function addClass (ele: HTMLElement, classname: string) {
  if (!ele || !classname || ele.nodeType !== 1) {
    return;
  }
  var classArr = classname.split(' ');
  if (ele.classList) {
    for (var i = 0, len = classArr.length; i < len; i++) {
      var item = classArr[i];
      if (!ele.classList.contains(item)) {
        ele.classList.add(item);
      }
    }
    return ele;
  } else {
    var classNameArr = ele.className && ele.className.length > 0 ? ele.className.split(' ') : [];
    if (classNameArr.length === 0) {
      ele.className = classname;
      return;
    }
    // 合并两个数组
    Array.prototype.push.apply(classNameArr, classArr);
    // classNameArr = tool.arrayNoReapeat(classNameArr);
    ele.className = classNameArr.join(' ');
    return ele;
  }
}

/**
 * 给指定元素移除class
 * @param ele
 * @param classname
 */
export function removeClass (ele: HTMLElement, classname: string): HTMLElement|void {
  if (!ele || !classname || ele.nodeType !== 1) {
    return;
  }
  var classArr = classname.split(' ');
  if (ele.classList) {
    for (var i = 0, len = classArr.length; i < len; i++) {
      var item = classArr[i];
      if (ele.classList.contains(item)) {
        ele.classList.remove(item);
      }
    }
    return ele;
  } else {
    var classNameArr = ele.className && ele.className.length > 0 ? ele.className.split(' ') : [];
    if (classNameArr.length === 0) {
      return;
    }
    for (var i = classNameArr.length; i >= 0; i--) {
      for (var j = 0, len2 = classArr.length; j < len2; j++) {
        if (classNameArr[i] === classArr[j]) {
          classNameArr.splice(i, 1);
        }
      }
    }
    ele.className = classNameArr.join(' ');
    return ele;
  }
}

/**
 * 判断元素是否包含指定className
 * @param ele dom元素
 * @param className className
 * @returns {boolean}
 */
export function hasClass (ele: HTMLElement, className: string): boolean {
  if (!ele || !ele.nodeName) {
    console.error('ele 必须是一个dom元素');
    return false;
  }
  if (!className) {
    console.error('className 必须是一个字符串');
    return false;
  }
  if (ele.classList) {
    return ele.classList.contains(className);
  } else {
    var flag = false;
    var classNameArr = ele.className.split(' ');
    for (var i = 0, len = classNameArr.length; i < len; i++) {
      if (classNameArr[i] === className) {
        flag = true;
        break;
      }
    }
    return flag;
  }
}

/**
 * 判断dom元素是否处于fixed定位的元素中
 * @param ele dom元素
 * @returns {boolean}
 */
export function eleIsInFixedParents (ele: HTMLElement): boolean {
  if (!ele || ele.nodeType != 1) {
    return false;
  }
  var offsetParent = ele.offsetParent as HTMLElement;
  var isFixedPosition = false;
  while (offsetParent != null && !isFixedPosition) {
    var positionVal = getStyle(offsetParent, 'position');
    if (positionVal === 'fixed') {
      isFixedPosition = true;
      break;
    }
    offsetParent = offsetParent.offsetParent as HTMLElement;
  }
  return isFixedPosition;
}

/**
 * 判断元素是否在指定的父级元素内
 * @param ele dom元素
 * @param parent 父级元素
 * @returns {boolean}
 */
export function eleInParent (ele: HTMLElement, parent: HTMLElement): boolean {
  var flag = false;
  var parentEle = ele.parentElement;
  while (parentEle != null) {
    if (parentEle === parent) {
      flag = true;
      break;
    }
    parentEle = parentEle.parentElement;
  }
  return flag;
}

/**
 * 获取dom元素或浏览器垂直滚动条的位置
 * @param ele dom元素（可选）
 * @returns {number|number}
 */
export function scrollTop (ele?: HTMLElement): number {
  if (ele && ele.nodeType == 1) {
    return ele.scrollTop;
  }
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

/**
 * 获取dom元素或浏览器水平滚动条的位置
 * @param ele dom元素（可选）
 * @returns {number|number}
 */
export function scrollLeft (ele?: HTMLElement): number {
  if (ele && ele.nodeType == 1) {
    return ele.scrollLeft;
  }
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

/**
 * 获取元素或浏览器滚动条的宽高
 * @param ele dom元素
 * @returns {{horizontal: number, vertical: number}}
 */
export function scrollWidth (ele?: HTMLElement):{
  vertical: number;
  horizontal: number;
} {
  var tempDiv;
  var tempInnerDiv = document.createElement('div');
  var result = {
    vertical: 0,
    horizontal: 0
  };
  tempInnerDiv.style.cssText = 'width: 200px;height: 200px';
  if (!ele || ele.nodeType != 1) { // 未传递dom元素则获取浏览器的滚动条
    result.vertical = window.innerWidth - document.documentElement.offsetWidth;
    result.horizontal = window.innerHeight - document.documentElement.clientHeight;
    return result;
  }
  /* if (!isGetElementScrollWidth) { // 未传递dom元素则获取浏览器的滚动条
    /!* tempDiv = document.createElement('div');
    tempDiv.style.cssText = 'width: 100px;height: 100px;opacity: 0;position:absolute;left: -100px;overflow:auto;'; *!/
    result.vertical = window.innerWidth - document.documentElement.offsetWidth;
    result.horizontal = window.innerHeight - document.documentElement.clientHeight;
    return result;
  } else if (ele) {
    tempDiv = ele.cloneNode(true);
  } else if (isGetElementScrollWidth && !ele) {
    tempDiv = document.createElement('div');
  } */
  tempDiv = ele.cloneNode(true) as HTMLElement;
  tempDiv.style.cssText = 'width: 100px;height: 100px;opacity: 0;position:absolute;left: -100px;overflow:auto;';
  tempDiv.appendChild(tempInnerDiv);
  document.body.appendChild(tempDiv);

  result.vertical = tempDiv.offsetWidth - tempDiv.clientWidth;
  result.horizontal = tempDiv.offsetHeight - tempDiv.clientHeight;

  document.body.removeChild(tempDiv);
  // @ts-ignore
  tempDiv = tempInnerDiv = null;
  return result;
}

/**
 * 设置元素滚动条滚动距离
 * @param ele dom元素或window对象
 * @param direction 滚动条方向，默认为y，可选值有：x、y
 * @param to 滚动条即将滚动到到位置
 * @param duration 时长
 * @param onDone 完成后的回调
 * @param onScroll 正在滚动中的回调
 * @returns {boolean}
 */
export function scrollTo (ele: HTMLElement|Window, direction = 'y', to: number, duration?: number, onDone?: () => void, onScroll?: () => void): boolean {
  if (!ele) {
    return false;
  }
  if (!window.requestAnimationFrame) {
    // @ts-ignore
    window.requestAnimationFrame = (window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    );
  }
  if (!direction) {
    direction = 'y';
  }
  direction = direction == 'x' ? 'x' : 'y';
  var doDone = function () {
    if (typeof onDone == 'function') {
      onDone();
    }
  };
  var callOnScroll = function () {
    if (typeof onScroll == 'function') {
      onScroll();
    }
  };
  var attr = direction == 'x' ? 'scrollLeft' : 'scrollTop';
  if (!duration || duration <= 0) {
    // @ts-ignore
    if (ele === window) {
      // @ts-ignore
      window.scrollTo(direction === 'x' ? to : scrollLeft(), direction === 'y' ? to : scrollTop());
    } else {
      // @ts-ignore
      ele[attr] = to;
    }
    callOnScroll();
    doDone();
    return true;
  }

  // @ts-ignore
  var diff = to - ele[attr];
  // @ts-ignore
  if (ele === window) {
    diff = to - (direction == 'x' ? scrollLeft() : scrollTop());
  }
  var perTick = (diff / duration) * 10;
  window.requestAnimationFrame(function () { // 实现缓动效果
    // @ts-ignore
    if (ele === window) {
      let x = scrollLeft();
      let y = scrollTop();
      // @ts-ignore
      window.scrollTo(direction === 'x' ? (x + perTick) : x, direction === 'y' ? (y + perTick) : y);
      callOnScroll();
      if (direction == 'x' ? scrollLeft() : scrollTop() !== to) {
        scrollTo(ele, direction, to, duration - 10, onDone, onScroll);
      } else {
        callOnScroll();
        doDone();
      }
      return;
    }
    // @ts-ignore
    ele[attr] += perTick;
    // @ts-ignore
    if (ele[attr] !== to) {
      callOnScroll();
      scrollTo(ele, direction, to, duration - 10, onDone, onScroll);
    } else {
      callOnScroll();
      doDone();
    }
  });
  return true;
}

/**
 * 判断元素是否完全出现在视口中
 * @param ele dom元素
 * @param top dom元素距浏览器最顶端的距离
 * @param left dom元素距浏览器最左端的距离
 * @param needSubtractScrollOffset 判断元素是否处于滚动容器视口时是否需要减去浏览器滚动条滚动的距离
 * @returns {{horizontal: boolean, vertical: boolean}}
 */
export function eleIsInView (ele: HTMLElement, top: number, left: number, needSubtractScrollOffset = true) {
  var documentHasScroll = hasScroll();
  // 元素有滚动条的父级元素的滚动条高度
  let eleWrapperScrollTop = 0;
  let eleWrapperScrollLeft = 0;

  // 获取目标元素所处有滚动条的父级容器
  let scrollParent = getScrollParent(ele);
  let scrollParentVertical = true;
  let scrollParentHorizontal = true;
  // 如果当前元素有滚动条的父级元素并且不是body，则判断元素在有滚动条的父级元素中是否可见
  if (scrollParent && scrollParent.nodeName != 'HTML' && scrollParent.nodeName != 'BODY') {
    eleWrapperScrollTop = scrollTop(scrollParent);
    eleWrapperScrollLeft = scrollLeft(scrollParent);
    let scroll = eleIsInScrollParentView(ele, scrollParent, top, left, needSubtractScrollOffset);
    scrollParentHorizontal = scroll.horizontal;
    scrollParentVertical = scroll.vertical;
  }
  if (!top || !left) {
    var offsetValue = offset(ele);
    if (!top) {
      top = offsetValue.top;
    }
    if (!left) {
      left = offsetValue.left;
    }
  }

  if (documentHasScroll.vertical) {
    top -= scrollTop();
  }
  if (documentHasScroll.horizontal) {
    left -= scrollLeft();
  }
  top = top - eleWrapperScrollTop;
  left = left - eleWrapperScrollLeft;

  let bottom = ele.offsetHeight + top;
  let right = ele.offsetWidth + left;
  let windowWH = getDocumentWidthHeight();
  // 如果有浏览器有滚动条，则需减去滚动条的宽度
  if (documentHasScroll.vertical) {
    windowWH.width = windowWH.width - scrollWidth().vertical;
  }
  if (documentHasScroll.horizontal) {
    windowWH.height = windowWH.height - scrollWidth().horizontal;
  }
  return {
    scrollParentHorizontal,
    scrollParentVertical,
    vertical: top > 0 && top < windowWH.height && bottom > 0 && bottom <= windowWH.height,
    horizontal: left > 0 && left < windowWH.width && right > 0 && right <= windowWH.width
  };
}

/**
 * 判断元素是否完全出现在父级容器的可视区域中
 * @param ele
 * @param referenceEl
 * @param eleOffsetX 元素x轴坐标的偏移量
 * @param eleOffsetY 元素y轴坐标的偏移量
 * @returns {{horizontal: boolean, vertical: boolean}}
 */
export function eleIsInParentView (ele: HTMLElement, referenceEl: HTMLElement, eleOffsetX = 0, eleOffsetY = 0): {
  horizontal: boolean;
  vertical: boolean
} {
  var result = {
    horizontal: true,
    vertical: true
  };
  if (!ele || !referenceEl) {
    return result;
  }
  var referenceOffset = offset(referenceEl);
  var elOffset = offset(ele);
  elOffset.left += eleOffsetX;
  elOffset.top += eleOffsetY;

  var referenceOffsetRight = referenceOffset.left + referenceEl.offsetWidth;
  var referenceOffsetBottom = referenceOffset.top + referenceEl.offsetHeight;
  var eleOffsetRight = elOffset.left + ele.offsetWidth;
  var eleOffsetBottom = elOffset.top + ele.offsetHeight;

  // 元素的水平方向完全在可视区域中
  var offsetStartInView = elOffset.left >= referenceOffset.left && elOffset.left < referenceOffsetRight;
  var offsetEndInView = eleOffsetRight > referenceOffset.left && eleOffsetRight < referenceOffsetRight;

  // 元素的垂直方向完全在可视区域中
  var offsetStartInView2 = elOffset.top >= referenceOffset.top && elOffset.top < referenceOffsetBottom;
  var offsetEndInView2 = eleOffsetBottom > referenceOffset.top && eleOffsetBottom < referenceOffsetBottom;

  result.horizontal = offsetStartInView && offsetEndInView;
  result.vertical = offsetStartInView2 && offsetEndInView2;

  return result;
}

/**
 * 判断元素是否完全出现在有滚动条的父级容器的可视区域中
 * @param ele dom元素
 * @param scrollEl 有滚动条的父级容器
 * @param top ele的top值
 * @param left ele的left值
 * @param needSubtractScrollOffset 判断元素是否处于滚动容器视口时是否需要减去浏览器滚动条滚动的距离
 * @returns {{horizontal: boolean, vertical: boolean}}
 */
export function eleIsInScrollParentView (ele: HTMLElement, scrollEl: HTMLElement, top = 0, left = 0, needSubtractScrollOffset = true): {
  horizontal: boolean;
  vertical: boolean
} {
  var result = {
    horizontal: true,
    vertical: true
  };
  if (!ele || !scrollEl) {
    return result;
  }
  // var scrollElRect = scrollEl.getBoundingClientRect();
  var scrollElOffset = offset(scrollEl);
  var scrollElScrollTop = scrollTop(scrollEl);
  var scrollElScrollLeft = scrollLeft(scrollEl);
  var scrollElHasScroll = hasScroll(scrollEl);
  var scrollElScrollWidth = scrollWidth(scrollEl);
  var elOffset = {
    top,
    left
  };
  if (!top || !left) {
    var offsetValue = offset(ele);
    if (!top) {
      elOffset.top = offsetValue.top;
    }
    if (!left) {
      elOffset.left = offsetValue.left;
    }
  }

  elOffset.top -= scrollElScrollTop;
  elOffset.left -= scrollElScrollLeft;
  if (needSubtractScrollOffset) {
    // 需要减去浏览器滚动条的距离
    var documentScrollTop = scrollTop();
    var documentScrollLeft = scrollLeft();
    elOffset.top -= documentScrollTop;
    elOffset.left -= documentScrollLeft;

    scrollElOffset.top -= documentScrollTop;
    scrollElOffset.left -= documentScrollLeft;
  }
  // 计算元素offsetRight时需减去元素的滚动条宽度。（当元素有滚动条，但元素设置了overflow: hidden时不应减去滚动条，因为此时滚动条是没有显示出来的）
  var scrollElOffsetRight = scrollElOffset.left + scrollEl.offsetWidth - (scrollElHasScroll.vertical ? scrollElScrollWidth.vertical : 0);
  var scrollElOffsetBottom = scrollElOffset.top + scrollEl.offsetHeight - (scrollElHasScroll.horizontal ? scrollElScrollWidth.horizontal : 0);
  var eleOffsetRight = elOffset.left + ele.offsetWidth;
  var eleOffsetBottom = elOffset.top + ele.offsetHeight;

  // 元素的水平方向完全在可视区域中
  var offsetStartInView = elOffset.left >= scrollElOffset.left && elOffset.left < scrollElOffsetRight;
  var offsetEndInView = eleOffsetRight > scrollElOffset.left && eleOffsetRight < scrollElOffsetRight;

  // 元素的垂直方向完全在可视区域中
  var offsetStartInView2 = elOffset.top >= scrollElOffset.top && elOffset.top < scrollElOffsetBottom;
  var offsetEndInView2 = eleOffsetBottom > scrollElOffset.top && eleOffsetBottom < scrollElOffsetBottom;

  result.horizontal = offsetStartInView && offsetEndInView;
  result.vertical = offsetStartInView2 && offsetEndInView2;

  return result;
}

interface ScrollIntoParentViewOffset {
  top?: number;
  left?: number;
}

/**
 * 滚动至父级元素可见的位置
 * @param targetEle 目标元素
 * @param offsetInfo
 */
export function scrollIntoParentView (targetEle: HTMLElement, offsetInfo?: ScrollIntoParentViewOffset) {
  let scrollParent = getScrollParent(targetEle) || document.body;
  let scrollParentOffset = offset(scrollParent);
  let scrollParentIsBody = scrollParent === document.body;
  let targetElOffset = offset(targetEle);
  let targetElDistanceY = targetElOffset.top - scrollParentOffset.top;
  let targetElDistanceX = targetElOffset.left - scrollParentOffset.left;

  scrollTo(scrollParentIsBody ? window : scrollParent, 'y', targetElDistanceY - (offsetInfo?.top || 0), 100);
  scrollTo(scrollParentIsBody ? window : scrollParent, 'x', targetElDistanceX - (offsetInfo?.left || 0), 100);
}

/**
 *  判断dom节点文本是否有溢出
 * @param ele
 */
export function eleTextOverflow (ele: HTMLElement) {
  if (!ele || ele.nodeType != 1) {
    return false;
  }
  // 元素的clientWidth小于scrollWidth文本就有溢出，否则clientWidth会等于scrollWidth
  return ele.clientWidth < ele.scrollWidth;
}
/* **************************** DOM utils end ************************************* */
