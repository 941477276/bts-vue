import{_ as g,r as o,c as a,w as n,o as A,a as i,d as e,i as D,u as E,b as u,g as y}from"./index-637c4ade.js";const F={};function f(d,s){const r=o("bs-progress"),c=o("demo-box");return A(),a(c,{id:"progress_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%EF%BC%8C%E9%80%9A%E8%BF%87%3Ccode%3Epercentage%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E8%AE%BE%E7%BD%AE%E8%BF%9B%E5%BA%A6%EF%BC%8C%E5%AE%83%E6%8E%A5%E6%94%B6%E4%B8%80%E4%B8%AA%3Ccode%3Enumber%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%EF%BC%8C%E6%88%96%3Ccode%3Exx%25%3C%2Fcode%3E%E5%BD%A2%E5%BC%8F%E7%9A%84%3Ccode%3Estring%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%20is%20to%20set%20the%20progress%20through%20the%20%3Ccode%3Epercentage%3C%2Fcode%3E%20property%2C%20which%20receives%20a%20value%20of%20type%20%3Ccode%3Enumber%3C%2Fcode%3E%2C%20or%20a%20value%20of%20type%20%3Ccode%3Estring%3C%2Fcode%3E%20in%20the%20form%20of%20%3Ccode%3Exx%25%3C%2Fcode%3E.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22primary%22%20%3Apercentage%3D%2210%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22secondary%22%20percentage%3D%2220%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22success%22%20percentage%3D%2230%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22danger%22%20percentage%3D%2240%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22warning%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22info%22%20%3Apercentage%3D%2260%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22light%22%20%3Apercentage%3D%2270%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20color-type%3D%22dark%22%20%3Apercentage%3D%2280%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:n(()=>[i("div",null,[e(r,{"color-type":"primary",percentage:10}),e(r,{"color-type":"secondary",percentage:"20"}),e(r,{"color-type":"success",percentage:"30%"}),e(r,{"color-type":"danger",percentage:"40%"}),e(r,{"color-type":"warning",percentage:50}),e(r,{"color-type":"info",percentage:60}),e(r,{"color-type":"light",percentage:70}),e(r,{"color-type":"dark",percentage:80})])]),_:1},8,["description"])}const v=g(F,[["render",f],["__scopeId","data-v-b9b7794d"]]);const x={};function h(d,s){const r=o("bs-progress"),c=o("demo-box");return A(),a(c,{id:"progress_striped",title:{cn:"条纹进度条",en:"Striped progress"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Estriped%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E5%91%88%E7%8E%B0%E6%9D%A1%E7%BA%B9%E8%BF%9B%E5%BA%A6%E6%9D%A1%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Estriped%3C%2Fcode%3E%20attribute%20to%20present%20a%20striped%20progress%20bar%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22primary%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22secondary%22%20percentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22success%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22danger%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22warning%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22info%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22light%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20color-type%3D%22dark%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:n(()=>[i("div",null,[e(r,{striped:"","color-type":"primary",percentage:50}),e(r,{striped:"","color-type":"secondary",percentage:"50"}),e(r,{striped:"","color-type":"success",percentage:"50%"}),e(r,{striped:"","color-type":"danger",percentage:"50%"}),e(r,{striped:"","color-type":"warning",percentage:50}),e(r,{striped:"","color-type":"info",percentage:50}),e(r,{striped:"","color-type":"light",percentage:50}),e(r,{striped:"","color-type":"dark",percentage:50})])]),_:1})}const $=g(x,[["render",h],["__scopeId","data-v-5c0f9202"]]),S={__name:"multiple",setup(d){let s=D([{percentage:20,colorType:"primary"},{percentage:24,colorType:"success",striped:!0},{percentage:16,colorType:"warning"},{percentage:40,colorType:"info",striped:!0,animated:!0}]);return(r,c)=>{const C=o("bs-progress"),p=o("demo-box");return A(),a(p,{id:"progress_multiple",title:{cn:"分段进度条",en:"Segmented progress"},description:{cn:"%3Cp%3E%E5%BD%93%E9%9C%80%E8%A6%81%E5%9C%A8%E4%B8%80%E4%B8%AA%E8%BF%9B%E5%BA%A6%E6%9D%A1%E4%B8%8A%E6%98%BE%E7%A4%BA%E5%A4%9A%E4%B8%AA%E8%BF%9B%E5%BA%A6%E4%BF%A1%E6%81%AF%E7%9A%84%E6%97%B6%E5%80%99%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8%E5%88%86%E5%BA%A6%E5%BC%8F%E8%BF%9B%E5%BA%A6%E6%9D%A1%3C%2Fp%3E%0A",en:"%3Cp%3EWhen%20you%20need%20to%20display%20multiple%20progress%20information%20on%20a%20progress%20bar%2C%20you%20can%20use%20the%20graduated%20progress%20bar%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20multiple%20%3Aprogresses%3D%22progresses%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20progresses%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20percentage%3A%2020%2C%0A%20%20%20%20colorType%3A%20'primary'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20percentage%3A%2024%2C%0A%20%20%20%20colorType%3A%20'success'%2C%0A%20%20%20%20striped%3A%20true%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20percentage%3A%2016%2C%0A%20%20%20%20colorType%3A%20'warning'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20percentage%3A%2040%2C%0A%20%20%20%20colorType%3A%20'info'%2C%0A%20%20%20%20striped%3A%20true%2C%0A%20%20%20%20animated%3A%20true%0A%20%20%7D%0A%5D)%3B%0A%3C%2Fscript%3E"},{default:n(()=>[i("div",null,[e(C,{multiple:"",progresses:E(s)},null,8,["progresses"])])]),_:1})}}},k=S;const w={__name:"custom-color",setup(d){let s=D(20),r=function(p){let t=0;p==-1?t=s.value-20:t=s.value+20,t<0?t=0:t>100&&(t=100),s.value=t},c=function(p){return p<=20?"#f00":p<=60?"#ffc107":p<=80?"#17a2b8":"#28a745"};const C=[{color:"#f56c6c",percentage:20},{color:"#e6a23c",percentage:40},{color:"#5cb87a",percentage:60},{color:"#1989fa",percentage:80},{color:"#6f7ad3",percentage:100}];return(p,t)=>{const l=o("bs-progress"),B=o("bs-button"),m=o("demo-box");return A(),a(m,{id:"progress_custom-color",title:{cn:"自定义颜色",en:"Custom color"},description:{cn:"%3Cp%3E%E7%BB%99%3Ccode%3Ebs-progress%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%3Ccode%3Ecolor%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%EF%BC%8C%E5%AE%83%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%B8%80%E4%B8%AA%3Ccode%3Estring%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E9%A2%9C%E8%89%B2%E5%80%BC%E3%80%81%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%E6%88%96%E8%80%85%E4%B8%80%E4%B8%AA%3Ccode%3E%7Bcolor%3Astring%3B%20percentage%3Anumber%7D%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%95%B0%E7%BB%84%3C%2Fp%3E%0A",en:"%3Cp%3EYou%20can%20customize%20the%20color%20by%20setting%20the%20%3Ccode%3Ecolor%3C%2Fcode%3E%20attribute%20to%20the%20%3Ccode%3Ebs-progress%3C%2Fcode%3E%20component%2C%20which%20can%20be%20a%20color%20value%20of%20type%20%3Ccode%3Estring%3C%2Fcode%3E%2C%20a%20function%20or%20an%20array%20of%20type%20%3Ccode%3E%7Bcolor%3Astring%3B%20percentage%3Anumber%7D%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20color%3D%22%23f60%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20%3Acolor%3D%22customColorFn%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%0A%20%20%20%20%20%20%3Apercentage%3D%22percentage%22%0A%20%20%20%20%20%20%3Acolor%3D%22customColors%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-button%20%40click%3D%22handlePercentage(-1)%22%20type%3D%22primary%22%20size%3D%22sm%22%3ESub%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20%40click%3D%22handlePercentage(1)%22%20type%3D%22primary%22%20size%3D%22sm%22%20style%3D%22margin-left%3A%201rem%3B%22%3EAdd%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20percentage%20%3D%20ref(20)%3B%0Alet%20handlePercentage%20%3D%20function%20(type)%20%7B%0A%20%20let%20val%20%3D%200%3B%0A%20%20if%20(type%20%3D%3D%20-1)%20%7B%0A%20%20%20%20val%20%3D%20percentage.value%20-%2020%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20val%20%3D%20percentage.value%20%2B%2020%3B%0A%20%20%7D%0A%20%20if%20(val%20%3C%200)%20%7B%0A%20%20%20%20val%20%3D%200%3B%0A%20%20%7D%20else%20if%20(val%20%3E%20100)%20%7B%0A%20%20%20%20val%20%3D%20100%3B%0A%20%20%7D%0A%20%20percentage.value%20%3D%20val%3B%0A%7D%3B%0Alet%20customColorFn%20%3D%20function%20(percentage)%20%7B%0A%20%20if%20(percentage%20%3C%3D%2020)%20%7B%0A%20%20%20%20return%20'%23f00'%3B%0A%20%20%7D%0A%20%20if%20(percentage%20%3C%3D%2060)%20%7B%0A%20%20%20%20return%20'%23ffc107'%3B%0A%20%20%7D%0A%20%20if%20(percentage%20%3C%3D%2080)%20%7B%0A%20%20%20%20return%20'%2317a2b8'%3B%0A%20%20%7D%0A%20%20return%20'%2328a745'%3B%0A%7D%3B%0Aconst%20customColors%20%3D%20%5B%0A%20%20%7B%20color%3A%20'%23f56c6c'%2C%20percentage%3A%2020%20%7D%2C%0A%20%20%7B%20color%3A%20'%23e6a23c'%2C%20percentage%3A%2040%20%7D%2C%0A%20%20%7B%20color%3A%20'%235cb87a'%2C%20percentage%3A%2060%20%7D%2C%0A%20%20%7B%20color%3A%20'%231989fa'%2C%20percentage%3A%2080%20%7D%2C%0A%20%20%7B%20color%3A%20'%236f7ad3'%2C%20percentage%3A%20100%20%7D%0A%5D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:n(()=>[i("div",null,[e(l,{percentage:E(s),color:"#f60"},null,8,["percentage"]),e(l,{percentage:E(s),color:E(c)},null,8,["percentage","color"]),e(l,{percentage:E(s),color:C},null,8,["percentage"]),e(B,{onClick:t[0]||(t[0]=_=>E(r)(-1)),type:"primary",size:"sm"},{default:n(()=>[u("Sub")]),_:1}),e(B,{onClick:t[1]||(t[1]=_=>E(r)(1)),type:"primary",size:"sm",style:{"margin-left":"1rem"}},{default:n(()=>[u("Add")]),_:1})])]),_:1})}}},T=g(w,[["__scopeId","data-v-c7758887"]]);const z={};function I(d,s){const r=o("bs-progress"),c=o("demo-box");return A(),a(c,{id:"progress_striped-animation",title:{cn:"条纹动画",en:"Striped animation"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Eanimated%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E6%98%BE%E7%A4%BA%E6%9D%A1%E7%BA%B9%E5%8A%A8%E7%94%BB%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Eanimated%3C%2Fcode%3E%20property%20to%20display%20the%20stripe%20animation%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22primary%22%20%3Apercentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22secondary%22%20percentage%3D%2250%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22success%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%20%20%3Cbs-progress%20striped%20animated%20color-type%3D%22danger%22%20percentage%3D%2250%25%22%3E%3C%2Fbs-progress%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-progress%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:n(()=>[i("div",null,[e(r,{striped:"",animated:"","color-type":"primary",percentage:50}),e(r,{striped:"",animated:"","color-type":"secondary",percentage:"50"}),e(r,{striped:"",animated:"","color-type":"success",percentage:"50%"}),e(r,{striped:"",animated:"","color-type":"danger",percentage:"50%"})])]),_:1})}const P=g(z,[["render",I],["__scopeId","data-v-9d98a814"]]),M=y({name:"DemoIndex",components:{Basic:v,Striped:$,Multiple:k,CustomColor:T,StripedAnimation:P}}),N={class:"demo-index"};function V(d,s,r,c,C,p){const t=o("Basic"),l=o("Striped"),B=o("Multiple"),m=o("CustomColor"),_=o("StripedAnimation"),b=o("component-doc");return A(),a(b,{"component-name":"progress"},{default:n(()=>[i("div",N,[e(t),e(l),e(B),e(m),e(_)])]),_:1})}const Y=g(M,[["render",V]]);export{Y as default};
