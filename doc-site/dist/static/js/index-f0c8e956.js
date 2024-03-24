import{i as o,r as i,c as b,w as u,o as m,a as n,d as E,u as t,k as r,m as v,g as k,_ as x}from"./index-897cf5f9.js";const V=n("h6",null,"Show radio",-1),K=n("h6",null,"Only leaf nodes can be selected(只能选择叶子节点)",-1),w={__name:"basic",setup(p){let _=o([{label:"一级 1",id:"1",children:[{label:"二级 1-1",id:"1_1",children:[{label:"三级 1-1-1",id:"1_1_1"}]}]},{label:"一级 2",id:"2",children:[{label:"二级 2-1",id:"2_1",children:[{label:"三级 2-1-1",id:"2_1_1",children:[{label:"四级 2-1-1-1",id:"2_1_1_1"},{label:"四级 2-1-1-2",id:"2_1_1_2",children:[{label:"五级 2-1-1-2-1",id:"2_1_1_2_1"},{label:"五级 2-1-1-2-2",id:"2_1_1_2_2"}]},{label:"四级 2-1-1-3",id:"2_1_1_3"}]}]},{label:"二级 2-2",id:"2_2"},{label:"二级 2-3",id:"2_3"}]},{label:"一级 3",id:"3",children:[{label:"二级 3-1",id:"3_1"},{label:"二级 3-2",id:"3_2",children:[{label:"三级 3-2-1",id:"3_2_1"},{label:"三级 3-2-2",id:"3_2_2"}]}]}]),A=o(),d=o();return(c,l)=>{const a=i("bs-tree-select"),B=i("demo-box");return m(),b(B,{id:"tree-select_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%3C%2Fp%3E%0A",en:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-tree-select%20v-model%3D%22checkedKeys1%22%20%3Atree-data%3D%22treeData1%22%20node-key%3D%22id%22%20clearable%3E%3C%2Fbs-tree-select%3E%0A%20%20%20%20%3Ch6%3EShow%20radio%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-tree-select%20show-radio%20radio-visible%20v-model%3D%22checkedKeys1%22%20%3Atree-data%3D%22treeData1%22%20node-key%3D%22id%22%3E%3C%2Fbs-tree-select%3E%0A%20%20%20%20%3Ch6%3EOnly%20leaf%20nodes%20can%20be%20selected(%E5%8F%AA%E8%83%BD%E9%80%89%E6%8B%A9%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9)%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-tree-select%20check-strictly%20v-model%3D%22checkedKeys2%22%20%3Atree-data%3D%22treeData1%22%20node-key%3D%22id%22%3E%3C%2Fbs-tree-select%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20treeData1%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%201'%2C%0A%20%20%20%20id%3A%20'1'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%201-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'1_1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%201-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'1_1_1'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%202'%2C%0A%20%20%20%20id%3A%20'2'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%202-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%94%E7%BA%A7%202-1-1-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2_1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%94%E7%BA%A7%202-1-1-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2_2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_3'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-2'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_2'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-3'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_3'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%203'%2C%0A%20%20%20%20id%3A%20'3'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%203-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'3_1'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%203-2'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'3_2'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%203-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'3_2_1'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%203-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'3_2_2'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D)%3B%0A%0Alet%20checkedKeys1%20%3D%20ref()%3B%0Alet%20checkedKeys2%20%3D%20ref()%3B%0A%3C%2Fscript%3E","start-version":""},{default:u(()=>[n("div",null,[E(a,{modelValue:t(A),"onUpdate:modelValue":l[0]||(l[0]=e=>r(A)?A.value=e:A=e),"tree-data":t(_),"node-key":"id",clearable:""},null,8,["modelValue","tree-data"]),V,E(a,{"show-radio":"","radio-visible":"",modelValue:t(A),"onUpdate:modelValue":l[1]||(l[1]=e=>r(A)?A.value=e:A=e),"tree-data":t(_),"node-key":"id"},null,8,["modelValue","tree-data"]),K,E(a,{"check-strictly":"",modelValue:t(d),"onUpdate:modelValue":l[2]||(l[2]=e=>r(d)?d.value=e:d=e),"tree-data":t(_),"node-key":"id"},null,8,["modelValue","tree-data"])])]),_:1})}}},M=w,N=n("h6",null,"Show checkbox",-1),g=n("h6",null,"Check strictly(父子不强关联)",-1),I={__name:"multiple",setup(p){let _=o([{label:"一级 1",id:"1",children:[{label:"二级 1-1",id:"1_1",children:[{label:"三级 1-1-1",id:"1_1_1"}]}]},{label:"一级 2",id:"2",children:[{label:"二级 2-1",id:"2_1",children:[{label:"三级 2-1-1",id:"2_1_1",children:[{label:"四级 2-1-1-1",id:"2_1_1_1"},{label:"四级 2-1-1-2",id:"2_1_1_2",children:[{label:"五级 2-1-1-2-1",id:"2_1_1_2_1"},{label:"五级 2-1-1-2-2",id:"2_1_1_2_2"}]},{label:"四级 2-1-1-3",id:"2_1_1_3"}]}]},{label:"二级 2-2",id:"2_2"},{label:"二级 2-3",id:"2_3"}]},{label:"一级 3",id:"3",children:[{label:"二级 3-1",id:"3_1"},{label:"二级 3-2",id:"3_2",children:[{label:"三级 3-2-1",id:"3_2_1"},{label:"三级 3-2-2",id:"3_2_2"}]}]}]),A=o(["1_1","2_1_1_1","2_1_1_3"]),d=o(["1","1_1"]);return(c,l)=>{const a=i("bs-tree-select"),B=i("demo-box");return m(),b(B,{id:"tree-select_multiple",title:{cn:"多选",en:"Multiple choice"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Emultiple%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%A4%9A%E9%80%89%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Emultiple%3C%2Fcode%3E%20attribute%20to%20allow%20multiple%20selections%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-tree-select%20v-model%3D%22checkedKeys1%22%20%3Atree-data%3D%22treeData1%22%20multiple%20node-key%3D%22id%22%20clearable%3E%3C%2Fbs-tree-select%3E%0A%20%20%20%20%3Ch6%3EShow%20checkbox%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-tree-select%20v-model%3D%22checkedKeys1%22%20%3Atree-data%3D%22treeData1%22%0A%20%20%20%20%20%20%3Acheckbox-visible%3D%22true%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20clearable%0A%20%20%20%20%20%20node-key%3D%22id%22%3E%3C%2Fbs-tree-select%3E%0A%20%20%20%20%3Ch6%3ECheck%20strictly(%E7%88%B6%E5%AD%90%E4%B8%8D%E5%BC%BA%E5%85%B3%E8%81%94)%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-tree-select%0A%20%20%20%20%20%20v-model%3D%22checkedKeys2%22%0A%20%20%20%20%20%20%3Atree-data%3D%22treeData1%22%0A%20%20%20%20%20%20%3Acheckbox-visible%3D%22true%22%0A%20%20%20%20%20%20%3Acheck-strictly%3D%22true%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20node-key%3D%22id%22%0A%20%20%20%20%20%20clearable%3E%3C%2Fbs-tree-select%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20treeData1%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%201'%2C%0A%20%20%20%20id%3A%20'1'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%201-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'1_1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%201-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'1_1_1'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%202'%2C%0A%20%20%20%20id%3A%20'2'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%202-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%94%E7%BA%A7%202-1-1-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2_1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%94%E7%BA%A7%202-1-1-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2_2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_3'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-2'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_2'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-3'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_3'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%203'%2C%0A%20%20%20%20id%3A%20'3'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%203-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'3_1'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%203-2'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'3_2'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%203-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'3_2_1'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%203-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'3_2_2'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D)%3B%0A%0Alet%20checkedKeys1%20%3D%20ref(%5B'1_1'%2C%20'2_1_1_1'%2C%20'2_1_1_3'%5D)%3B%0Alet%20checkedKeys2%20%3D%20ref(%5B'1'%2C%20'1_1'%5D)%3B%0A%3C%2Fscript%3E","start-version":""},{default:u(()=>[n("div",null,[E(a,{modelValue:t(A),"onUpdate:modelValue":l[0]||(l[0]=e=>r(A)?A.value=e:A=e),"tree-data":t(_),multiple:"","node-key":"id",clearable:""},null,8,["modelValue","tree-data"]),N,E(a,{modelValue:t(A),"onUpdate:modelValue":l[1]||(l[1]=e=>r(A)?A.value=e:A=e),"tree-data":t(_),"checkbox-visible":!0,multiple:"",clearable:"","node-key":"id"},null,8,["modelValue","tree-data"]),g,E(a,{modelValue:t(d),"onUpdate:modelValue":l[2]||(l[2]=e=>r(d)?d.value=e:d=e),"tree-data":t(_),"checkbox-visible":!0,"check-strictly":!0,multiple:"","node-key":"id",clearable:""},null,8,["modelValue","tree-data"])])]),_:1})}}},S=I,$={__name:"async-data",setup(p){let _=o([{label:"一级 1",id:"1",children:[{label:"二级 1-1",id:"1_1",children:[{label:"三级 1-1-1",id:"1_1_1"}]}]},{label:"一级 2",id:"2",children:[{label:"二级 2-1",id:"2_1",children:[{label:"三级 2-1-1",id:"2_1_1",children:[{label:"四级 2-1-1-1",id:"2_1_1_1"},{label:"四级 2-1-1-2",id:"2_1_1_2",children:[{label:"五级 2-1-1-2-1",id:"2_1_1_2_1"},{label:"五级 2-1-1-2-2",id:"2_1_1_2_2"}]},{label:"四级 2-1-1-3",id:"2_1_1_3"}]}]},{label:"二级 2-2",id:"2_2"},{label:"二级 2-3",id:"2_3"}]},{label:"一级 3",id:"3",children:[{label:"二级 3-1",id:"3_1"},{label:"二级 3-2",id:"3_2",children:[{label:"三级 3-2-1",id:"3_2_1"},{label:"三级 3-2-2",id:"3_2_2"}]}]}]),A=o([{label:"1级节点",value:"1_1"},{label:"1_2级节点",value:"1_2"},{label:"1_3_1级节点",value:"1_3_1"},{label:"1_5_1级节点",value:"1_5_1"},{label:"1_6级节点",value:"1_6"},{label:"1_5_2级节点",value:"1_5_2"},{label:"1_5_3级节点",value:"1_5_3"}]),d=o(["1_1","2_1_1_1","2_1_1_3"]),c=function(a,B){return parseInt(Math.random()*(B-a+1)+a+"")},l=function(a,B){return new Promise(function(e,D){let C=Math.floor(Math.random()*10),f=[],h=-1;C>=4&&(h=c(2,C-1));for(let s=1;s<=C;s++)f.push({label:`${B.level+1}级${h==s?"(叶子节点)":""} ${s}`,id:`${a.id}_${s}`,isLeaf:h==s});let F=c(1,10),y=setTimeout(function(){if(clearTimeout(y),F%3==0){D(),v.warning("节点加载失败!");return}a.children=f,e(!0)},c(500,1500))})};return(a,B)=>{const e=i("bs-tree-select"),D=i("demo-box");return m(),b(D,{id:"tree-select_async-data",title:{cn:"异步加载数据",en:"Async load data"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Elazy%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%B9%B6%E8%AE%BE%E7%BD%AE%3Ccode%3Etree-props%3C%2Fcode%3E%E7%9A%84%3Ccode%3EloadDataFn%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E5%BC%82%E6%AD%A5%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Elazy%3C%2Fcode%3E%20property%20and%20set%20the%20%3Ccode%3EloadDataFn%3C%2Fcode%3E%20property%20of%20%3Ccode%3Etree-props%3C%2Fcode%3E%20to%20load%20data%20asynchronously%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-tree-select%0A%20%20%20%20%20%20v-model%3D%22checkedKeys1%22%0A%20%20%20%20%20%20%3Atree-data%3D%22treeData1%22%0A%20%20%20%20%20%20%3Alazy%3D%22true%22%0A%20%20%20%20%20%20%3Atree-props%3D%22%7B%0A%20%20%20%20%20%20%20%20loadDataFn%3A%20loadDataFn5%0A%20%20%20%20%20%20%7D%22%0A%20%20%20%20%20%20%3Acheckbox-visible%3D%22true%22%0A%20%20%20%20%20%20%3Alabels%3D%22labels%22%0A%20%20%20%20%20%20multiple%0A%20%20%20%20%20%20node-key%3D%22id%22%0A%20%20%20%20%20%20clearable%3E%3C%2Fbs-tree-select%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20treeData1%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%201'%2C%0A%20%20%20%20id%3A%20'1'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%201-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'1_1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%201-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'1_1_1'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%202'%2C%0A%20%20%20%20id%3A%20'2'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%202-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%94%E7%BA%A7%202-1-1-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2_1'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%94%E7%BA%A7%202-1-1-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_2_2'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%9B%9B%E7%BA%A7%202-1-1-3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'2_1_1_3'%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-2'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_2'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%202-3'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'2_3'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20label%3A%20'%E4%B8%80%E7%BA%A7%203'%2C%0A%20%20%20%20id%3A%20'3'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%203-1'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'3_1'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20'%E4%BA%8C%E7%BA%A7%203-2'%2C%0A%20%20%20%20%20%20%20%20id%3A%20'3_2'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%203-2-1'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'3_2_1'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E4%B8%89%E7%BA%A7%203-2-2'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%20'3_2_2'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D)%3B%0Alet%20labels%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'1%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_1'%20%7D%2C%0A%20%20%7B%20label%3A%20'1_2%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_2'%20%7D%2C%0A%20%20%7B%20label%3A%20'1_3_1%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_3_1'%20%7D%2C%0A%20%20%7B%20label%3A%20'1_5_1%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_5_1'%20%7D%2C%0A%20%20%7B%20label%3A%20'1_6%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_6'%20%7D%2C%0A%20%20%7B%20label%3A%20'1_5_2%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_5_2'%20%7D%2C%0A%20%20%7B%20label%3A%20'1_5_3%E7%BA%A7%E8%8A%82%E7%82%B9'%2C%20value%3A%20'1_5_3'%20%7D%0A%5D)%3B%0A%0Alet%20checkedKeys1%20%3D%20ref(%5B'1_1'%2C%20'2_1_1_1'%2C%20'2_1_1_3'%5D)%3B%0A%0Alet%20randoms%20%3D%20function%20(min%2C%20max)%20%7B%0A%20%20return%20parseInt((Math.random()%20*%20(max%20-%20min%20%2B%201)%20%2B%20min)%20%2B%20'')%3B%0A%7D%3B%0A%2F%2F%20%E5%8A%A0%E8%BD%BD%E8%8A%82%E7%82%B9%E5%87%BD%E6%95%B0%0Alet%20loadDataFn5%20%3D%20function%20(nodeData%2C%20nodeState)%20%7B%0A%20%20console.log('nodeData'%2C%20nodeData)%3B%0A%20%20return%20new%20Promise(function%20(resolve%2C%20reject)%20%7B%0A%20%20%20%20let%20count%20%3D%20Math.floor(Math.random()%20*%2010)%3B%0A%20%20%20%20let%20nodes%20%3D%20%5B%5D%3B%0A%0A%20%20%20%20let%20leafNodeIndex%20%3D%20-1%3B%20%2F%2F%20%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9%E7%B4%A2%E5%BC%95%0A%20%20%20%20if%20(count%20%3E%3D%204)%20%7B%0A%20%20%20%20%20%20leafNodeIndex%20%3D%20randoms(2%2C%20count%20-%201)%3B%0A%20%20%20%20%7D%0A%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%3D%20count%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20nodes.push(%7B%0A%20%20%20%20%20%20%20%20label%3A%20%60%24%7BnodeState.level%20%2B%201%7D%E7%BA%A7%24%7BleafNodeIndex%20%3D%3D%20i%20%3F%20'(%E5%8F%B6%E5%AD%90%E8%8A%82%E7%82%B9)'%20%3A%20''%7D%20%24%7Bi%7D%60%2C%0A%20%20%20%20%20%20%20%20id%3A%20%60%24%7BnodeData.id%7D_%24%7Bi%7D%60%2C%0A%20%20%20%20%20%20%20%20isLeaf%3A%20leafNodeIndex%20%3D%3D%20i%0A%20%20%20%20%20%20%7D)%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20let%20randomNum%20%3D%20randoms(1%2C%2010)%3B%0A%20%20%20%20let%20timer%20%3D%20setTimeout(function%20()%20%7B%0A%20%20%20%20%20%20clearTimeout(timer)%3B%0A%20%20%20%20%20%20if%20(randomNum%20%25%203%20%3D%3D%200)%20%7B%0A%20%20%20%20%20%20%20%20reject()%3B%0A%20%20%20%20%20%20%20%20BsMessage.warning('%E8%8A%82%E7%82%B9%E5%8A%A0%E8%BD%BD%E5%A4%B1%E8%B4%A5!')%3B%0A%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20nodeData.children%20%3D%20nodes%3B%0A%20%20%20%20%20%20resolve(true)%3B%0A%20%20%20%20%7D%2C%20randoms(500%2C%201500))%3B%0A%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E","start-version":""},{default:u(()=>[n("div",null,[E(e,{modelValue:t(d),"onUpdate:modelValue":B[0]||(B[0]=C=>r(d)?d.value=C:d=C),"tree-data":t(_),lazy:!0,"tree-props":{loadDataFn:t(l)},"checkbox-visible":!0,labels:t(A),multiple:"","node-key":"id",clearable:""},null,8,["modelValue","tree-data","tree-props","labels"])])]),_:1})}}},U=$,z=k({name:"DemoIndex",components:{Basic:M,Multiple:S,AsyncData:U}}),T={class:"demo-index"};function j(p,_,A,d,c,l){const a=i("Basic"),B=i("Multiple"),e=i("AsyncData"),D=i("component-doc");return m(),b(D,{"component-name":"tree-select"},{default:u(()=>[n("div",T,[E(a),E(B),E(e)])]),_:1})}const O=x(z,[["render",j]]);export{O as default};