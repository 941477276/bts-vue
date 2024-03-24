import{_ as C,r,c as g,w as n,o as B,a as c,d as e,i as b,N as k,t as S,u as l,b as d,g as D,p as $,h as w}from"./index-897cf5f9.js";const I={};function T(a,s){const o=r("bs-progress"),p=r("demo-box");return B(),g(p,{id:"progress_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%EF%BC%8C%E9%80%9A%E8%BF%87%3Ccode%3Epercentage%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E8%BF%9B%E5%BA%A6%EF%BC%8C%E5%AE%83%E6%8E%A5%E6%94%B6%E4%B8%80%E4%B8%AA%3Ccode%3Enumber%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%EF%BC%8C%E6%88%96%3Ccode%3Exx%25%3C%2Fcode%3E%E5%BD%A2%E5%BC%8F%E7%9A%84%3Ccode%3Estring%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%20is%20to%20set%20the%20progress%20through%20the%20%3Ccode%3Epercentage%3C%2Fcode%3E%20property%2C%20which%20receives%20a%20value%20of%20type%20%3Ccode%3Enumber%3C%2Fcode%3E%2C%20or%20a%20value%20of%20type%20%3Ccode%3Estring%3C%2Fcode%3E%20in%20the%20form%20of%20%3Ccode%3Exx%25%3C%2Fcode%3E.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22primary%22%20%3Apercentage%3D%2210%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22secondary%22%20percentage%3D%2220%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22success%22%20percentage%3D%2230%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22danger%22%20percentage%3D%2240%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22warning%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22info%22%20%3Apercentage%3D%2260%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22light%22%20%3Apercentage%3D%2270%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22dark%22%20%3Apercentage%3D%2280%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(o,{"color-type":"primary",percentage:10}),e(o,{"color-type":"secondary",percentage:"20"}),e(o,{"color-type":"success",percentage:"30%"}),e(o,{"color-type":"danger",percentage:"40%"}),e(o,{"color-type":"warning",percentage:50}),e(o,{"color-type":"info",percentage:60}),e(o,{"color-type":"light",percentage:70}),e(o,{"color-type":"dark",percentage:80})])]),_:1},8,["description"])}const P=C(I,[["render",T],["__scopeId","data-v-173d7f48"]]);const z={};function L(a,s){const o=r("bs-progress"),p=r("demo-box");return B(),g(p,{id:"progress_striped",title:{cn:"条纹进度条",en:"Striped progress"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Estriped%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E5%91%88%E7%8E%B0%E6%9D%A1%E7%BA%B9%E8%BF%9B%E5%BA%A6%E6%9D%A1%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Estriped%3C%2Fcode%3E%20attribute%20to%20present%20a%20striped%20progress%20bar%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22primary%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22secondary%22%20percentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22success%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22danger%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22warning%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22info%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22light%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22dark%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(o,{striped:"","color-type":"primary",percentage:50}),e(o,{striped:"","color-type":"secondary",percentage:"50"}),e(o,{striped:"","color-type":"success",percentage:"50%"}),e(o,{striped:"","color-type":"danger",percentage:"50%"}),e(o,{striped:"","color-type":"warning",percentage:50}),e(o,{striped:"","color-type":"info",percentage:50}),e(o,{striped:"","color-type":"light",percentage:50}),e(o,{striped:"","color-type":"dark",percentage:50})])]),_:1})}const q=C(z,[["render",L],["__scopeId","data-v-edb89b44"]]);const G={class:"custom-progress-content"},N={__name:"multiple",setup(a){let s=b([{percentage:20,colorType:"primary"},{percentage:24,colorType:"success",striped:!0},{percentage:16,colorType:"warning"},{percentage:40,colorType:"info",striped:!0,animated:!0}]);return(o,p)=>{const u=r("bs-progress"),A=r("demo-box");return B(),g(A,{id:"progress_multiple",title:{cn:"分段进度条",en:"Segmented progress"},description:{cn:"%3Cp%3E%E5%BD%93%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E4%B8%AA%E8%BF%9B%E5%BA%A6%E6%9D%A1%E4%B8%8A%E6%98%BE%E7%A4%BA%E5%A4%9A%E4%B8%AA%E8%BF%9B%E5%BA%A6%E4%BF%A1%E6%81%AF%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E5%88%86%E5%BA%A6%E5%BC%8F%E8%BF%9B%E5%BA%A6%E6%9D%A1%3C%2Fp%3E%0A",en:"%3Cp%3EWhen%20you%20need%20to%20display%20multiple%20progress%20information%20on%20a%20progress%20bar%2C%20you%20can%20use%20the%20graduated%20progress%20bar%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20multiple%20%3Aprogresses%3D%22progresses%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23default%3D%22%7Bpercentage%7D%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20%3Acontent%3D%22%60Progress%3A%20%24%7Bpercentage%7D%25%60%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22custom-progress-content%22%3E%7B%7B%20percentage%20%7D%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aimport%20BsTooltip%20from%20'..%2F..%2Fbs-tooltip%2FBsTooltip.vue'%3B%0A%0Alet%20progresses%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20percentage%3A%2020%2C%0A%20%20%20%20colorType%3A%20'primary'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20percentage%3A%2024%2C%0A%20%20%20%20colorType%3A%20'success'%2C%0A%20%20%20%20striped%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20percentage%3A%2016%2C%0A%20%20%20%20colorType%3A%20'warning'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20percentage%3A%2040%2C%0A%20%20%20%20colorType%3A%20'info'%2C%0A%20%20%20%20striped%3A%20true%2C%0A%20%20%20%20animated%3A%20true%0A%20%20%7D%0A%5D)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20%3A%3Av-deep(.progress-bar)%7B%0A%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20.custom-progress-content%7B%0A%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20right%3A%200%3B%0A%20%20%20%20%20%20bottom%3A%200%3B%0A%20%20%20%20%20%20line-height%3A%2016px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(u,{multiple:"",progresses:l(s)},{default:n(({percentage:t})=>[e(k,{content:`Progress: ${t}%`},{default:n(()=>[c("span",G,S(t),1)]),_:2},1032,["content"])]),_:1},8,["progresses"])])]),_:1})}}},M=C(N,[["__scopeId","data-v-35bdd08d"]]);const V={__name:"custom-color",setup(a){let s=b(20),o=function(A){let t=0;A==-1?t=s.value-20:t=s.value+20,t<0?t=0:t>100&&(t=100),s.value=t},p=function(A){return A<=20?"#f00":A<=60?"#ffc107":A<=80?"#17a2b8":"#28a745"};const u=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}];return(A,t)=>{const E=r("bs-progress"),i=r("bs-button"),_=r("demo-box");return B(),g(_,{id:"progress_custom-color",title:{cn:"自定义颜色",en:"Custom color"},description:{cn:"%3Cp%3E%E7%BB%99%3Ccode%3Ebs-progress%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%3Ccode%3Ecolor%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%EF%BC%8C%E5%AE%83%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%B8%80%E4%B8%AA%3Ccode%3Estring%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%A2%9C%E8%89%B2%E5%80%BC%E3%80%81%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E6%88%96%E8%80%85%E4%B8%80%E4%B8%AA%3Ccode%3E%7Bcolor%3Astring%3B%20percentage%3Anumber%7D%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%95%B0%E7%BB%84%3C%2Fp%3E%0A",en:"%3Cp%3EYou%20can%20customize%20the%20color%20by%20setting%20the%20%3Ccode%3Ecolor%3C%2Fcode%3E%20attribute%20to%20the%20%3Ccode%3Ebs-progress%3C%2Fcode%3E%20component%2C%20which%20can%20be%20a%20color%20value%20of%20type%20%3Ccode%3Estring%3C%2Fcode%3E%2C%20a%20function%20or%20an%20array%20of%20type%20%3Ccode%3E%7Bcolor%3Astring%3B%20percentage%3Anumber%7D%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20color%3D%22%23f60%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20%3Acolor%3D%22customColorFn%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20%3Acolor%3D%22customColors%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-button%20%40click%3D%22handlePercentage(-1)%22%20type%3D%22primary%22%20size%3D%22sm%22%3ESub%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20%40click%3D%22handlePercentage(1)%22%20type%3D%22primary%22%20size%3D%22sm%22%20style%3D%22margin-left%3A%201rem%3B%22%3EAdd%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20percentage%20%3D%20ref(20)%3B%0Alet%20handlePercentage%20%3D%20function%20(type)%20%7B%0A%20%20let%20val%20%3D%200%3B%0A%20%20if%20(type%20%3D%3D%20-1)%20%7B%0A%20%20%20%20val%20%3D%20percentage.value%20-%2020%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20val%20%3D%20percentage.value%20%2B%2020%3B%0A%20%20%7D%0A%20%20if%20(val%20%3C%200)%20%7B%0A%20%20%20%20val%20%3D%200%3B%0A%20%20%7D%20else%20if%20(val%20%3E%20100)%20%7B%0A%20%20%20%20val%20%3D%20100%3B%0A%20%20%7D%0A%20%20percentage.value%20%3D%20val%3B%0A%7D%3B%0Alet%20customColorFn%20%3D%20function%20(percentage)%20%7B%0A%20%20if%20(percentage%20%3C%3D%2020)%20%7B%0A%20%20%20%20return%20'%23f00'%3B%0A%20%20%7D%0A%20%20if%20(percentage%20%3C%3D%2060)%20%7B%0A%20%20%20%20return%20'%23ffc107'%3B%0A%20%20%7D%0A%20%20if%20(percentage%20%3C%3D%2080)%20%7B%0A%20%20%20%20return%20'%2317a2b8'%3B%0A%20%20%7D%0A%20%20return%20'%2328a745'%3B%0A%7D%3B%0Aconst%20customColors%20%3D%20%5B%0A%20%20%7B%20color%3A%20'%23f56c6c'%2C%20percentage%3A%2020%20%7D%2C%0A%20%20%7B%20color%3A%20'%23e6a23c'%2C%20percentage%3A%2040%20%7D%2C%0A%20%20%7B%20color%3A%20'%235cb87a'%2C%20percentage%3A%2060%20%7D%2C%0A%20%20%7B%20color%3A%20'%231989fa'%2C%20percentage%3A%2080%20%7D%2C%0A%20%20%7B%20color%3A%20'%236f7ad3'%2C%20percentage%3A%20100%20%7D%0A%5D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(E,{percentage:l(s),color:"#f60"},null,8,["percentage"]),e(E,{percentage:l(s),color:l(p)},null,8,["percentage","color"]),e(E,{percentage:l(s),color:u},null,8,["percentage"]),e(i,{onClick:t[0]||(t[0]=m=>l(o)(-1)),type:"primary",size:"sm"},{default:n(()=>[d("Sub")]),_:1}),e(i,{onClick:t[1]||(t[1]=m=>l(o)(1)),type:"primary",size:"sm",style:{"margin-left":"1rem"}},{default:n(()=>[d("Add")]),_:1})])]),_:1})}}},j=C(V,[["__scopeId","data-v-910e90a8"]]);const Y={};function W(a,s){const o=r("bs-progress"),p=r("demo-box");return B(),g(p,{id:"progress_striped-animation",title:{cn:"条纹动画",en:"Striped animation"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Eanimated%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E6%98%BE%E7%A4%BA%E6%9D%A1%E7%BA%B9%E5%8A%A8%E7%94%BB%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Eanimated%3C%2Fcode%3E%20property%20to%20display%20the%20stripe%20animation%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22primary%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22secondary%22%20percentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22success%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22danger%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(o,{striped:"",animated:"","color-type":"primary",percentage:50}),e(o,{striped:"",animated:"","color-type":"secondary",percentage:"50"}),e(o,{striped:"",animated:"","color-type":"success",percentage:"50%"}),e(o,{striped:"",animated:"","color-type":"danger",percentage:"50%"})])]),_:1})}const H=C(Y,[["render",W],["__scopeId","data-v-313137d6"]]),J=D({__name:"circle",setup(a){let s=b(25);const o=function(){s.value-=5},p=function(){s.value+=5};return(u,A)=>{const t=r("bs-progress"),E=r("bs-button"),i=r("bs-button-group"),_=r("demo-box");return B(),g(_,{id:"progress_circle",title:{cn:"环形进度条",en:"Basic usage"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Etype%3Dcircle%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%8C%87%E5%AE%9A%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1%EF%BC%8C%E5%9C%A8%E7%8E%AF%E5%BD%A2%E8%BF%9B%E5%BA%A6%E6%9D%A1%E4%B8%AD%EF%BC%8C%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%60width%E5%B1%9E%E6%80%A7%E6%9D%A5%E8%AE%BE%E7%BD%AE%E5%85%B6%E5%A4%A7%E5%B0%8F%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Etype%3Dcircle%3C%2Fcode%3E%20attribute%20to%20specify%20the%20use%20of%20a%20circular%20progress%20bar.%20In%20a%20circular%20progress%20bar%2C%20its%20size%20can%20be%20set%20through%20the%20%3Ccode%3Ewidth%3C%2Fcode%3E%20attribute.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22circle%22%20%3Apercentage%3D%22percentage%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-button-group%20style%3D%22margin%3A%200%201rem%3B%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%20%40click%3D%22decrement%22%3E-%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%20%40click%3D%22increment%22%3E%2B%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22circle%22%20%3Apercentage%3D%22100%22%20status%3D%22success%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22circle%22%20%3Apercentage%3D%2270%22%20status%3D%22warning%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22circle%22%20%3Apercentage%3D%2250%22%20status%3D%22danger%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Alet%20percentage%20%3D%20ref(25)%3B%0Aconst%20decrement%20%3D%20function%20()%20%7B%0A%20%20percentage.value%20-%3D%205%3B%0A%7D%3B%0Aconst%20increment%20%3D%20function%20()%20%7B%0A%20%20percentage.value%20%2B%3D%205%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":"0.1.6"},{default:n(()=>[c("div",null,[e(t,{type:"circle",percentage:l(s)},null,8,["percentage"]),e(i,{style:{margin:"0 1rem"}},{default:n(()=>[e(E,{type:"primary",plain:"",onClick:o},{default:n(()=>[d("-")]),_:1}),e(E,{type:"primary",plain:"",onClick:p},{default:n(()=>[d("+")]),_:1})]),_:1}),e(t,{type:"circle",percentage:100,status:"success"}),e(t,{type:"circle",percentage:70,status:"warning"}),e(t,{type:"circle",percentage:50,status:"danger"})])]),_:1},8,["description"])}}});const K=C(J,[["__scopeId","data-v-a2a29d98"]]),O=D({__name:"dashboard",setup(a){let s=b(25);const o=function(){s.value-=5},p=function(){s.value+=5};return(u,A)=>{const t=r("bs-progress"),E=r("bs-button"),i=r("bs-button-group"),_=r("demo-box");return B(),g(_,{id:"progress_dashboard",title:{cn:"仪表盘",en:"Dashboard"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Etype%3Ddashboard%3C%2Fcode%3E%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%BE%88%E6%96%B9%E4%BE%BF%E5%9C%B0%E5%AE%9E%E7%8E%B0%E4%BB%AA%E8%A1%A8%E7%9B%98%E6%A0%B7%E5%BC%8F%E7%9A%84%E8%BF%9B%E5%BA%A6%E6%9D%A1%E3%80%82%E8%8B%A5%E6%83%B3%E8%A6%81%E4%BF%AE%E6%94%B9%E7%BC%BA%E5%8F%A3%E7%9A%84%E8%A7%92%E5%BA%A6%EF%BC%8C%E5%8F%AF%E4%BB%A5%E8%AE%BE%E7%BD%AE%3Ccode%3EgapDegree%3C%2Fcode%3E%E4%B8%BA%E4%BD%A0%E6%83%B3%E8%A6%81%E7%9A%84%E5%80%BC%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20%3Ccode%3Etype%3Ddashboard%3C%2Fcode%3E%20can%20easily%20implement%20a%20dashboard-style%20progress%20bar.%20If%20you%20want%20to%20modify%20the%20angle%20of%20the%20gap%2C%20you%20can%20set%20%3Ccode%3EgapDegree%3C%2Fcode%3E%20to%20the%20value%20you%20want.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22dashboard%22%20%3Apercentage%3D%22percentage%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-button-group%20style%3D%22margin%3A%200%201rem%3B%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%20%40click%3D%22decrement%22%3E-%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%20%40click%3D%22increment%22%3E%2B%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Alet%20percentage%20%3D%20ref(25)%3B%0Aconst%20decrement%20%3D%20function%20()%20%7B%0A%20%20percentage.value%20-%3D%205%3B%0A%7D%3B%0Aconst%20increment%20%3D%20function%20()%20%7B%0A%20%20percentage.value%20%2B%3D%205%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(t,{type:"dashboard",percentage:l(s)},null,8,["percentage"]),e(i,{style:{margin:"0 1rem"}},{default:n(()=>[e(E,{type:"primary",plain:"",onClick:o},{default:n(()=>[d("-")]),_:1}),e(E,{type:"primary",plain:"",onClick:p},{default:n(()=>[d("+")]),_:1})]),_:1})])]),_:1},8,["description"])}}});const Q=C(O,[["__scopeId","data-v-70fe1738"]]);const R={};function U(a,s){const o=r("bs-progress"),p=r("demo-box");return B(),g(p,{id:"progress_stroke-linecap",title:{cn:"圆角/方角边缘",en:"StrokeLinecap"},description:{cn:"%3Cp%3E%E9%80%9A%E8%BF%87%E8%AE%BE%E7%BD%AE%3Ccode%3EstrokeLinecap%3C%2Fcode%3E%E5%8F%AF%E4%BB%A5%E8%B0%83%E6%95%B4%E5%9C%86%E7%8E%AF%E8%BF%9B%E5%BA%A6%E6%9D%A1%E8%BE%B9%E7%BC%98%E7%9A%84%E5%BD%A2%E7%8A%B6%E3%80%82%3Ccode%3Esquare%3C%2Fcode%3E%E4%B8%BA%E6%96%B9%E8%A7%92%EF%BC%8C%3Ccode%3Eround%3C%2Fcode%3E%E4%B8%BA%E5%9C%86%E8%A7%92%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20shape%20of%20the%20edge%20of%20the%20circular%20progress%20bar%20can%20be%20adjusted%20by%20setting%20%3Ccode%3EstrokeLinecap%3C%2Fcode%3E.%20%3Ccode%3Esquare%3C%2Fcode%3E%20means%20square%20corners%2C%20%3Ccode%3Eround%3C%2Fcode%3E%20means%20rounded%20corners.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22circle%22%20stroke-linecap%3D%22round%22%20%3Apercentage%3D%2235%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20type%3D%22circle%22%20stroke-linecap%3D%22square%22%20%3Apercentage%3D%2235%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[e(o,{type:"circle","stroke-linecap":"round",percentage:35}),e(o,{type:"circle","stroke-linecap":"square",percentage:35})])]),_:1},8,["description"])}const X=C(R,[["render",U],["__scopeId","data-v-8fd64b51"]]),y=a=>($("data-v-c6ce3ba4"),a=a(),w(),a),Z=y(()=>c("dt",null,[d("Gradient color"),c("small",null,"(渐变色)")],-1)),e2=y(()=>c("dt",null,[d("Custom color"),c("small",null,"(自定义颜色)")],-1)),t2=y(()=>c("dt",null,[d("Segmented color"),c("small",null,"(分段颜色)")],-1)),o2=D({__name:"circle-custom-color",setup(a){const s=function(){return"#f90"},o=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}];let p=b(20),u=function(A){let t=0;A==-1?t=p.value-10:t=p.value+10,t<0?t=0:t>100&&(t=100),p.value=t};return(A,t)=>{const E=r("bs-progress"),i=r("bs-button"),_=r("bs-button-group"),m=r("demo-box");return B(),g(m,{id:"progress_circle-custom-color",title:{cn:"圆环自定义颜色",en:"Circle custom color"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Ecolor%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%EF%BC%8C%E5%AE%83%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%B8%80%E4%B8%AA%3Ccode%3Estring%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%A2%9C%E8%89%B2%E5%80%BC%E3%80%81%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E3%80%81%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E6%88%96%E8%80%85%E4%B8%80%E4%B8%AA%3Ccode%3E%7Bcolor%3Astring%3B%20percentage%3Anumber%7D%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%95%B0%E7%BB%84%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EYou%20can%20customize%20the%20color%20by%20setting%20the%20%3Ccode%3Ecolor%3C%2Fcode%3E%20property%2C%20which%20can%20be%20a%20%3Ccode%3Estring%3C%2Fcode%3E%20type%20color%20value%2C%20a%20function%2C%20an%20object%20or%20an%20%3Ccode%3E%7Bcolor%3Astring%3B%20percentage%3Anumber%7D%3C%2Fcode%3E%20type%20array.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdl%3E%0A%20%20%20%20%20%20%3Cdt%3EGradient%20color%3Csmall%3E(%E6%B8%90%E5%8F%98%E8%89%B2)%3C%2Fsmall%3E%3C%2Fdt%3E%0A%20%20%20%20%20%20%3Cdd%3E%0A%20%20%20%20%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20%20%20%20%20%3Apercentage%3D%2265%22%0A%20%20%20%20%20%20%20%20%20%20%3Acolor%3D%22%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20from%3A%20'%23108ee9'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20to%3A%20'%2387d068'%0A%20%20%20%20%20%20%20%20%20%20%7D%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%20%20%3C%2Fdd%3E%0A%20%20%20%20%3C%2Fdl%3E%0A%0A%20%20%20%20%3Cdl%3E%0A%20%20%20%20%20%20%3Cdt%3ECustom%20color%3Csmall%3E(%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2)%3C%2Fsmall%3E%3C%2Fdt%3E%0A%20%20%20%20%20%20%3Cdd%3E%0A%20%20%20%20%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20%20%20%20%20%3Apercentage%3D%2265%22%0A%20%20%20%20%20%20%20%20%20%20color%3D%22%23f30%22%0A%20%20%20%20%20%20%20%20%20%20title%3D%22custom%20color%20by%20'color'%22%3E%3C%2Fbs-progress%3E%0A%0A%20%20%20%20%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20%20%20%20%20class%3D%22color-f60%22%0A%20%20%20%20%20%20%20%20%20%20title%3D%22custom%20color%20by%20'class'%22%0A%20%20%20%20%20%20%20%20%20%20%3Apercentage%3D%2265%22%3E%3C%2Fbs-progress%3E%0A%0A%20%20%20%20%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20%20%20%20%20%3Acolor%3D%22getStrokeColor%22%0A%20%20%20%20%20%20%20%20%20%20title%3D%22custom%20color%20by%20'color%20function'%22%0A%20%20%20%20%20%20%20%20%20%20%3Apercentage%3D%2265%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%20%20%3C%2Fdd%3E%0A%20%20%20%20%3C%2Fdl%3E%0A%0A%20%20%20%20%3Cdl%3E%0A%20%20%20%20%20%20%3Cdt%3ESegmented%20color%3Csmall%3E(%E5%88%86%E6%AE%B5%E9%A2%9C%E8%89%B2)%3C%2Fsmall%3E%3C%2Fdt%3E%0A%20%20%20%20%20%20%3Cdd%3E%0A%20%20%20%20%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%20%20%20%20type%3D%22circle%22%0A%20%20%20%20%20%20%20%20%20%20stroke-linecap%3D%22round%22%0A%20%20%20%20%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20%20%20%20%20%3Acolor%3D%22customColors%22%3E%3C%2Fbs-progress%3E%0A%0A%20%20%20%20%20%20%20%20%3Cbs-button-group%20style%3D%22margin-left%3A%201rem%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20%40click%3D%22handlePercentage(-1)%22%20type%3D%22primary%22%20plain%3ESub%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20%40click%3D%22handlePercentage(1)%22%20type%3D%22primary%22%20plain%3EAdd%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-button-group%3E%0A%0A%20%20%20%20%20%20%3C%2Fdd%3E%0A%20%20%20%20%3C%2Fdl%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Aconst%20getStrokeColor%20%3D%20function%20()%20%7B%0A%20%20return%20'%23f90'%3B%0A%7D%3B%0A%0Aconst%20customColors%20%3D%20%5B%0A%20%20%7B%20color%3A%20'%23f56c6c'%2C%20percentage%3A%2020%20%7D%2C%0A%20%20%7B%20color%3A%20'%23e6a23c'%2C%20percentage%3A%2040%20%7D%2C%0A%20%20%7B%20color%3A%20'%235cb87a'%2C%20percentage%3A%2060%20%7D%2C%0A%20%20%7B%20color%3A%20'%231989fa'%2C%20percentage%3A%2080%20%7D%2C%0A%20%20%7B%20color%3A%20'%236f7ad3'%2C%20percentage%3A%20100%20%7D%0A%5D%3B%0Alet%20percentage%20%3D%20ref(20)%3B%0Alet%20handlePercentage%20%3D%20function%20(type%3A%20number)%20%7B%0A%20%20let%20val%20%3D%200%3B%0A%20%20if%20(type%20%3D%3D%20-1)%20%7B%0A%20%20%20%20val%20%3D%20percentage.value%20-%2010%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20val%20%3D%20percentage.value%20%2B%2010%3B%0A%20%20%7D%0A%20%20if%20(val%20%3C%200)%20%7B%0A%20%20%20%20val%20%3D%200%3B%0A%20%20%7D%20else%20if%20(val%20%3E%20100)%20%7B%0A%20%20%20%20val%20%3D%20100%3B%0A%20%20%7D%0A%20%20percentage.value%20%3D%20val%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0Adl%7B%0A%20%20display%3A%20inline-block%3B%0A%20%20padding-right%3A%201rem%3B%0A%20%20border-right%3A%201px%20solid%20%23eee%3B%0A%20%20margin-bottom%3A%201rem%3B%0A%20%20%26%20%2B%20dl%7B%0A%20%20%20%20margin-left%3A%201rem%3B%0A%20%20%7D%0A%20%20dt%7B%0A%20%20%20%20margin-bottom%3A%200.5rem%3B%0A%20%20%7D%0A%7D%0A.color-f60%7B%0A%20%20%3Adeep(.bs-progress-circle-path)%7B%0A%20%20%20%20stroke%3A%20%23f60%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:n(()=>[c("div",null,[c("dl",null,[Z,c("dd",null,[e(E,{type:"circle","stroke-linecap":"round",percentage:65,color:{from:"#108ee9",to:"#87d068"}})])]),c("dl",null,[e2,c("dd",null,[e(E,{type:"circle","stroke-linecap":"round",percentage:65,color:"#f30",title:"custom color by 'color'"}),e(E,{type:"circle","stroke-linecap":"round",class:"color-f60",title:"custom color by 'class'",percentage:65}),e(E,{type:"circle","stroke-linecap":"round",color:s,title:"custom color by 'color function'",percentage:65})])]),c("dl",null,[t2,c("dd",null,[e(E,{type:"circle","stroke-linecap":"round",percentage:l(p),color:o},null,8,["percentage"]),e(_,{style:{"margin-left":"1rem"}},{default:n(()=>[e(i,{onClick:t[0]||(t[0]=F=>l(u)(-1)),type:"primary",plain:""},{default:n(()=>[d("Sub")]),_:1}),e(i,{onClick:t[1]||(t[1]=F=>l(u)(1)),type:"primary",plain:""},{default:n(()=>[d("Add")]),_:1})]),_:1})])])])]),_:1},8,["description"])}}});const r2=C(o2,[["__scopeId","data-v-c6ce3ba4"]]),s2=D({name:"DemoIndex",components:{Basic:P,Striped:q,Multiple:M,CustomColor:j,StripedAnimation:H,Circle:K,Dashboard:Q,StrokeLinecap:X,GradientColor:r2}}),c2={class:"demo-index"};function n2(a,s,o,p,u,A){const t=r("Basic"),E=r("Striped"),i=r("Multiple"),_=r("CustomColor"),m=r("StripedAnimation"),F=r("Circle"),f=r("Dashboard"),v=r("StrokeLinecap"),h=r("GradientColor"),x=r("component-doc");return B(),g(x,{"component-name":"progress"},{default:n(()=>[c("div",c2,[e(t),e(E),e(i),e(_),e(m),e(F),e(f),e(v),e(h)])]),_:1})}const E2=C(s2,[["render",n2]]);export{E2 as default};