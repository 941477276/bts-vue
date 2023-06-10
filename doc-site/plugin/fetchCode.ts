/**
 * 获取html代码中指定标签名的内容
 * @param htmlStr html字符串
 * @param tagName 标签名称
 * @param isGetTagInnerContent 是否只获取标签内部的内容
 */
export function getCodeByTagName (htmlStr: string, tagName: string, isGetTagInnerContent = false) {
  let reg = new RegExp(`<${tagName}[^>]*>([\\s\\S]*)<\\/${tagName}>`);
  if (isGetTagInnerContent) {
    reg = new RegExp(`(?<=<${tagName}[^>]*>)([\\s\\S]*)(?=<\/${tagName}>)`);
  }
  // console.log('reg', reg);
  let matched = htmlStr.match(reg);
  return matched ? matched[0] : '';
};
