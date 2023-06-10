const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

const versionFilePath = path.resolve(__dirname, '../src/version.ts');

console.log('生成版本号文件完成，当前版本号：', packageJson.version);
fs.writeFileSync(versionFilePath, `export default '${packageJson.version}';`, 'utf-8');
