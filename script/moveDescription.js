const fs = require('fs');
const path = require('path');
// 从字符串或文件解析front-matter。快速、可靠、使用方便。默认情况下解析YAML前端内容
const matter = require('gray-matter');
const os = require('os');

/**
 * 获取html代码中指定标签名的内容
 * @param htmlStr html字符串
 * @param tagName 标签名称
 * @param isGetTagInnerContent 是否只获取标签内部的内容
 */
function getCodeByTagName (htmlStr, tagName, isGetTagInnerContent) {
  let reg = new RegExp(`<${tagName}[^>]*>([\\s\\S]*)<\\/${tagName}>`);
  if (isGetTagInnerContent) {
    reg = new RegExp(`(?<=<${tagName}[^>]*>)([\\s\\S]*)(?=<\/${tagName}>)`);
  }
  // console.log('reg', reg);
  let matched = htmlStr.match(reg);
  return matched ? matched[0] : '';
};

function padStartSpace (str, count) {
  for (let i = 0; i < count; i++) {
    str = ' ' + str;
  }
  return str;
};

const docsReg = /<docs[^>]*>([\\s\\S]*)<\/docs>/;

;(async function () {
  // 用于模式匹配目录文件
  const globby = await import('globby');
  const vueFilePaths = globby.globbySync('src/components/*/demos/*.vue');

  let flag = false;
  vueFilePaths.forEach(filePath => {
    if (filePath.endsWith('index.vue')) {
      return;
    }
    if (flag) {
      return;
    }
    let fileContent = fs.readFileSync(filePath, 'utf-8');
    let docsTagCode = getCodeByTagName(fileContent, 'docs', true);
    if (!docsTagCode.includes('## zh-CN')) {
      return;
    }
    let titleCaptionSpaceCount = 0;
    let docsTagCodeArr = docsTagCode.split(os.EOL); // 根据系统换行符将文件内容拆分成数组
    let descObj = {};
    let currentTag = '';
    let descContent = [];

    // 第一个示例描述标题的位置
    let firstDescriptionCaptionIndex = -1;
    // matter结束标识符的位置
    let matterEndIdentityIndex = -1;

    docsTagCodeArr.forEach((line, index) => {
      let trimmedLine = line.trim();
      if (trimmedLine.startsWith('title:')) {
        titleCaptionSpaceCount = line.indexOf('title:');
      }
      if (trimmedLine.startsWith('---')) {
        matterEndIdentityIndex = index;
      }
      if (trimmedLine.startsWith('## zh-CN') || trimmedLine.startsWith('## en-US')) {
        /* if (firstDescriptionCaptionIndex == -1) {
          firstDescriptionCaptionIndex = index;
        } */
        if (currentTag) {
          descObj[currentTag] = descContent;
          descContent = [];
        }
        console.log(111);
        currentTag = line.includes('zh-CN') ? 'zh-CN' : 'en-US';
      } else {
        if (currentTag && line.trim().length > 0) {
          descContent.push(line);
        }
        console.log(222);
      }
    });

    if (currentTag) {
      descObj[currentTag] = descContent;
    }

    let newDocsCodeArr = docsTagCodeArr.slice(0, matterEndIdentityIndex);
    newDocsCodeArr.push(padStartSpace('description: ', titleCaptionSpaceCount));
    let cnDescContents = descObj['zh-CN'];
    newDocsCodeArr.push(padStartSpace('zh-CN: ', titleCaptionSpaceCount + 2) + (cnDescContents.length == 1 ? cnDescContents[0] : ''));
    if (cnDescContents.length > 1) {
      cnDescContents.forEach(str => {
        newDocsCodeArr.push(padStartSpace(str, titleCaptionSpaceCount + 4));
      });
    }

    let enDescContents = descObj['en-US'];
    newDocsCodeArr.push(padStartSpace('en-US: ', titleCaptionSpaceCount + 2) + (enDescContents.length == 1 ? enDescContents[0] : ''));
    if (enDescContents.length > 1) {
      enDescContents.forEach(str => {
        if (str == os.EOL || str == '') {
          str = ' ';
        }
        newDocsCodeArr.push(padStartSpace(str, titleCaptionSpaceCount + 4));
      });
    }
    newDocsCodeArr.push('---');
    newDocsCodeArr.unshift('<docs>');
    newDocsCodeArr.push('</docs>');

    let fileContentsArr = fileContent.split(os.EOL);
    let docsTagEndIndex = fileContentsArr.findIndex(line => line.trim().startsWith('</docs>'));
    // let newFileContent = fileContent.replace(docsReg, '');
    let newFileContentArr = fileContentsArr.slice(docsTagEndIndex + 1);
    newFileContentArr = [...newDocsCodeArr, ...newFileContentArr];

    console.log('=====' + filePath);
    console.log(newDocsCodeArr.join(os.EOL));
    fs.writeFileSync(path.resolve(__dirname, '../', filePath), newFileContentArr.join(os.EOL), 'utf-8');
    /* if (Object.keys(descContent).length > 0) {
      // console.log('desObj', descObj, filePath);
      // console.log('new Code ==========');
      // console.log(newDocsCodeArr.join(os.EOL));
      flag = true;
    } */
  });
})();
