const path = require('path');
const fs = require('fs');

function writeFileSync (targetPath, content) {
  let targetDirname = path.dirname(targetPath);
  // 如果目标文件所在文件夹不存在，则先创建文件夹
  if (!fs.existsSync(targetDirname)) {
    mkdir(targetDirname);
  }
  fs.writeFileSync(targetPath, content);
}

function copy (sourcePath, targetPath) {
  if (!fs.existsSync(sourcePath)) {
    console.error(`[copy failed]: "${sourcePath}" not exist!`);
    return;
  }
  let targetDirname = path.dirname(targetPath);
  // 如果目标文件所在文件夹不存在，则先创建文件夹
  if (!fs.existsSync(targetDirname)) {
    mkdir(targetDirname);
  }
  fs.writeFileSync(targetPath, fs.readFileSync(sourcePath, 'utf-8'));
}

function mkdir (targetPath) {
  if (fs.existsSync(targetPath)) {
    return;
  }
  fs.mkdirSync(targetPath, { recursive: true });
}

// 递归删除文件夹
function deleteFolder(path) {
  var files = [];
  if (fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index){
      var curPath = path + "/" + file;
      if (fs.statSync(curPath).isDirectory()) { // recurse
        deleteFolder(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
}

// 删除文件
function deleteFile (filePath) {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

exports.deleteFolder = deleteFolder;
exports.writeFileSync = writeFileSync;
exports.copy = copy;
exports.mkdir = mkdir;
exports.deleteFile = deleteFile;
