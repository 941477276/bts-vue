import{i as m,r as o,c as B,w as d,o as c,a as l,d as A,u as C,k as p,t as v,m as h,b as i,l as D,j as b,g as V,_ as y}from"./index-637c4ade.js";const x={style:{"margin-top":"0.5rem"}},j={__name:"basic",setup(r){let e=m([{label:"HTML",value:"html"}]);return(u,E)=>{const t=o("BsInputTags"),n=o("demo-box");return c(),B(n,{id:"input-tags_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%3Ccode%3Einput-tag%3C%2Fcode%3E%E6%98%AF%E4%B8%80%E7%A7%8D%E5%B8%B8%E7%94%A8%E4%BA%8E%E7%BB%99%E6%9F%90%E4%BB%B6%E7%89%A9%E4%BD%93%E8%AE%BE%E7%BD%AE%E6%A0%87%E7%AD%BE%E6%88%96%E5%B1%9E%E6%80%A7%E7%9A%84%E7%BB%84%E4%BB%B6%3C%2Fp%3E%0A",en:"%3Cp%3E%3Ccode%3Einput-tag%3C%2Fcode%3E%20is%20a%20component%20commonly%20used%20to%20set%20a%20tag%20or%20property%20for%20an%20object%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsInputTags%20v-model%3D%22values1%22%3E%3C%2FBsInputTags%3E%0A%20%20%20%20%3Cp%20style%3D%22margin-top%3A%200.5rem%3B%22%3EValues%3A%20%7B%7B%20values1.map(item%20%3D%3E%20item.label)%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20values1%20%3D%20ref(%5B%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%20%7D%5D)%3B%0A%3C%2Fscript%3E"},{default:d(()=>[l("div",null,[A(t,{modelValue:C(e),"onUpdate:modelValue":E[0]||(E[0]=a=>p(e)?e.value=a:e=a)},null,8,["modelValue"]),l("p",x,"Values: "+v(C(e).map(a=>a.label)),1)])]),_:1})}}},L=j,I={style:{"margin-top":"0.5rem"}},z={__name:"max-count",setup(r){let e=m([{label:"HTML",value:"html"},{label:"Css",value:"css"},{label:"Javascript",value:"javascript"}]),u=function(){h.warning("标签数量不能超过5个！")},E=function(t){};return(t,n)=>{const a=o("BsInputTags"),s=o("demo-box");return c(),B(s,{id:"input-tags_max-count",title:{cn:"限制最大输入个数",en:"Limit count"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Etag-limit%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E8%BE%93%E5%85%A5Tag%E7%9A%84%E6%9C%80%E5%A4%A7%E6%95%B0%E9%87%8F%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Etag-limit%3C%2Fcode%3E%20attribute%20to%20limit%20the%20maximum%20number%20of%20tags%20allowed%20to%20be%20entered%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsInputTags%0A%20%20%20%20%20%20v-model%3D%22values1%22%0A%20%20%20%20%20%20%3Atag-limit%3D%225%22%0A%20%20%20%20%20%20%40limited%3D%22onLimited%22%0A%20%20%20%20%20%20%40tag-close%3D%22onTagClose%22%3E%3C%2FBsInputTags%3E%0A%20%20%20%20%3Cp%20style%3D%22margin-top%3A%200.5rem%3B%22%3EValues%3A%20%7B%7B%20values1.map(item%20%3D%3E%20item.label)%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20values1%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%20%7D%2C%0A%20%20%7B%20label%3A%20'Css'%2C%20value%3A%20'css'%20%7D%2C%0A%20%20%7B%20label%3A%20'Javascript'%2C%20value%3A%20'javascript'%20%7D%0A%5D)%3B%0Alet%20onLimited%20%3D%20function%20()%20%7B%0A%20%20BsMessage.warning('%E6%A0%87%E7%AD%BE%E6%95%B0%E9%87%8F%E4%B8%8D%E8%83%BD%E8%B6%85%E8%BF%875%E4%B8%AA%EF%BC%81')%3B%0A%7D%3B%0Alet%20onTagClose%20%3D%20function%20(tag)%20%7B%0A%20%20console.log('tag%E6%A0%87%E7%AD%BE%E5%85%B3%E9%97%AD%E4%BA%8B%E4%BB%B6'%2C%20tag)%3B%0A%7D%3B%0A%3C%2Fscript%3E"},{default:d(()=>[l("div",null,[A(a,{modelValue:C(e),"onUpdate:modelValue":n[0]||(n[0]=g=>p(e)?e.value=g:e=g),"tag-limit":5,onLimited:C(u),onTagClose:C(E)},null,8,["modelValue","onLimited","onTagClose"]),l("p",I,"Values: "+v(C(e).map(g=>g.label)),1)])]),_:1})}}},M=z,H=l("h6",null,[i("Large size("),l("code",null,"size=lg"),i(")")],-1),U=l("h6",null,"Default size",-1),w=l("h6",null,[i("Small size("),l("code",null,"size=sm"),i(")")],-1),J={__name:"sizes",setup(r){let e=m([{label:"HTML",value:"html"}]);return(u,E)=>{const t=o("bs-input-tags"),n=o("demo-box");return c(),B(n,{id:"input-tags_sizes",title:{cn:"不同大小",en:"Size"},description:{cn:"%3Cp%3E%3Ccode%3Ebs-input-tag%3C%2Fcode%3E%E6%9C%89%E5%A4%A7%E3%80%81%E4%B8%AD%E3%80%81%E5%B0%8F3%E7%A7%8D%E5%B0%BA%E5%AF%B8%EF%BC%8C%E9%80%9A%E8%BF%87%3Ccode%3Esize%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E6%9D%A5%E8%AE%BE%E7%BD%AE%E5%AE%83%E4%BB%AC%EF%BC%8C%E5%AE%83%E4%BB%AC%E5%AF%B9%E5%BA%94%E7%9A%84%E5%80%BC%E4%B8%BA%3Ccode%3Elg%3C%2Fcode%3E%E3%80%81%3Ccode%3E%E9%BB%98%E8%AE%A4%3C%2Fcode%3E%E3%80%81%3Ccode%3Esm%3C%2Fcode%3E%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3E%3Ccode%3Ebs-input-tag%3C%2Fcode%3E%20has%20three%20sizes%EF%BC%9Alarge%2C%20medium%2C%20and%20small.%20They%20are%20set%20through%20the%20%3Ccode%3Esize%3C%2Fcode%3E%20attribute%2C%20and%20their%20corresponding%20values%20are%20%3Ccode%3Elg%3C%2Fcode%3E%2C%20%3Ccode%3Edefault%3C%2Fcode%3E%2C%20and%20%3Ccode%3Elg%3C%2Fcode%3E.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3ELarge%20size(%3Ccode%3Esize%3Dlg%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-input-tags%20v-model%3D%22values1%22%20size%3D%22lg%22%3E%3C%2Fbs-input-tags%3E%0A%0A%20%20%20%20%3Ch6%3EDefault%20size%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-input-tags%20v-model%3D%22values1%22%3E%3C%2Fbs-input-tags%3E%0A%0A%20%20%20%20%3Ch6%3ESmall%20size(%3Ccode%3Esize%3Dsm%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-input-tags%20v-model%3D%22values1%22%20size%3D%22sm%22%3E%3C%2Fbs-input-tags%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20values1%20%3D%20ref(%5B%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%20%7D%5D)%3B%0A%3C%2Fscript%3E"},{default:d(()=>[l("div",null,[H,A(t,{modelValue:C(e),"onUpdate:modelValue":E[0]||(E[0]=a=>p(e)?e.value=a:e=a),size:"lg"},null,8,["modelValue"]),U,A(t,{modelValue:C(e),"onUpdate:modelValue":E[1]||(E[1]=a=>p(e)?e.value=a:e=a)},null,8,["modelValue"]),w,A(t,{modelValue:C(e),"onUpdate:modelValue":E[2]||(E[2]=a=>p(e)?e.value=a:e=a),size:"sm"},null,8,["modelValue"])])]),_:1},8,["description"])}}},S=J,R=l("h6",null,[i("Use "),l("code",null,"tag"),i(" slot")],-1),$={key:0,style:{color:"#f00"}},k={key:1,style:{color:"#f00"}},N={key:2,style:{color:"#f00"}},P=l("h6",null,[i("Use "),l("code",null,"tagType"),i(" attr")],-1),Y={__name:"custom-tag",setup(r){let e=m([{label:"HTML",value:"html",tagEffect:"plain",tagType:"primary"},{label:"Css",value:"css"},{label:"Javascript",value:"javascript"},{label:"Vue.js",value:"vue"},{label:"React.js",value:"react"}]),u=m([{label:"HTML",value:"html",tagType:"primary"},{label:"Css",value:"css"},{label:"Javascript",value:"javascript",tagType:"success"},{label:"Vue.js",value:"vue",tagType:"warning"},{label:"React.js",value:"react",tagType:"danger"},{label:"Angular.js",value:"angular",tagClass:"angular-tag"}]);return(E,t)=>{const n=o("BsInputTags"),a=o("demo-box");return c(),B(a,{id:"input-tags_custom-tag",title:{cn:"自定义标签",en:"Custom tag"},description:{cn:"%3Cp%3E%E9%80%9A%E8%BF%87%3Ccode%3Etag%3C%2Fcode%3E%E6%8F%92%E6%A7%BD%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%AE%9A%E4%B9%89Tag%EF%BC%8C%E4%B9%9F%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%3Ccode%3EtagType%3C%2Fcode%3E%E6%9D%A5%E8%AE%BE%E7%BD%AETag%E7%9A%84%E7%B1%BB%E5%9E%8B%3C%2Fp%3E%0A",en:"%3Cp%3EYou%20can%20customize%20the%20Tag%20through%20the%20%3Ccode%3Etag%3C%2Fcode%3E%20slot%2C%20and%20you%20can%20also%20set%20the%20type%20of%20the%20Tag%20through%20%3Ccode%3EtagType%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3EUse%20%3Ccode%3Etag%3C%2Fcode%3E%20slot%3C%2Fh6%3E%0A%20%20%20%20%3CBsInputTags%20v-model%3D%22values1%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23tag%3D%22tag%22%3E%0A%20%20%20%20%20%20%20%20%7B%7B%20tag.label%20%7D%7D%0A%20%20%20%20%20%20%20%20%3Csmall%20style%3D%22color%3A%20%23f00%3B%22%20v-if%3D%22tag.value%20%3D%3D%20'html'%22%3E(%E8%B6%85%E6%96%87%E6%9C%AC%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80)%3C%2Fsmall%3E%0A%20%20%20%20%20%20%20%20%3Csmall%20style%3D%22color%3A%20%23f00%3B%22%20v-if%3D%22tag.value%20%3D%3D%20'css'%22%3E(%E5%B1%82%E5%8F%A0%E6%A0%B7%E5%BC%8F%E8%A1%A8)%3C%2Fsmall%3E%0A%20%20%20%20%20%20%20%20%3Csmall%20style%3D%22color%3A%20%23f00%3B%22%20v-if%3D%22tag.value%20%3D%3D%20'javascript'%22%3E(%E8%84%9A%E6%9C%AC%E8%AF%AD%E8%A8%80)%3C%2Fsmall%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FBsInputTags%3E%0A%0A%20%20%20%20%3Ch6%3EUse%20%3Ccode%3EtagType%3C%2Fcode%3E%20attr%3C%2Fh6%3E%0A%20%20%20%20%3CBsInputTags%20v-model%3D%22values2%22%3E%3C%2FBsInputTags%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20values1%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%2C%20tagEffect%3A%20'plain'%2C%20tagType%3A%20'primary'%20%7D%2C%0A%20%20%7B%20label%3A%20'Css'%2C%20value%3A%20'css'%20%7D%2C%0A%20%20%7B%20label%3A%20'Javascript'%2C%20value%3A%20'javascript'%20%7D%2C%0A%20%20%7B%20label%3A%20'Vue.js'%2C%20value%3A%20'vue'%20%7D%2C%0A%20%20%7B%20label%3A%20'React.js'%2C%20value%3A%20'react'%20%7D%0A%5D)%3B%0Alet%20values2%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%2C%20tagType%3A%20'primary'%20%7D%2C%0A%20%20%7B%20label%3A%20'Css'%2C%20value%3A%20'css'%20%7D%2C%0A%20%20%7B%20label%3A%20'Javascript'%2C%20value%3A%20'javascript'%2C%20tagType%3A%20'success'%20%7D%2C%0A%20%20%7B%20label%3A%20'Vue.js'%2C%20value%3A%20'vue'%2C%20tagType%3A%20'warning'%20%7D%2C%0A%20%20%7B%20label%3A%20'React.js'%2C%20value%3A%20'react'%2C%20tagType%3A%20'danger'%20%7D%2C%0A%20%20%7B%20label%3A%20'Angular.js'%2C%20value%3A%20'angular'%2C%20tagClass%3A%20'angular-tag'%20%7D%0A%5D)%3B%0A%3C%2Fscript%3E"},{default:d(()=>[l("div",null,[R,A(n,{modelValue:C(e),"onUpdate:modelValue":t[0]||(t[0]=s=>p(e)?e.value=s:e=s)},{tag:d(s=>[i(v(s.label)+" ",1),s.value=="html"?(c(),D("small",$,"(超文本标记语言)")):b("",!0),s.value=="css"?(c(),D("small",k,"(层叠样式表)")):b("",!0),s.value=="javascript"?(c(),D("small",N,"(脚本语言)")):b("",!0)]),_:1},8,["modelValue"]),P,A(n,{modelValue:C(u),"onUpdate:modelValue":t[1]||(t[1]=s=>p(u)?u.value=s:u=s)},null,8,["modelValue"])])]),_:1})}}},q=Y,G={style:{color:"#f00"}},K={__name:"view-tag-limit",setup(r){let e=m([{label:"HTML",value:"html",tagEffect:"plain",tagType:"primary"},{label:"Css",value:"css"},{label:"Javascript",value:"javascript"},{label:"Vue.js",value:"vue"},{label:"React.js",value:"react"}]);return(u,E)=>{const t=o("BsInputTags"),n=o("demo-box");return c(),B(n,{id:"input-tags_view-tag-limit",title:{cn:"Tag显示数量限制",en:"View tag limit"},description:{cn:"%3Cp%3E%E4%B8%BA%3Ccode%3Ebs-input-tags%3C%2Fcode%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Emax-tag-count%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E9%99%90%E5%88%B6%E6%98%BE%E7%A4%BA%E5%9C%A8%E7%95%8C%E9%9D%A2%E4%B8%ADTag%E7%9A%84%E6%95%B0%E9%87%8F%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Emax-tag-count%3C%2Fcode%3E%20attribute%20for%20%3Ccode%3Ebs-input-tags%3C%2Fcode%3E%20to%20limit%20the%20number%20of%20Tags%20displayed%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsInputTags%0A%20%20%20%20%20%20v-model%3D%22values2%22%0A%20%20%20%20%20%20%3Amax-tag-count%3D%223%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23maxTagPlaceholder%3D%22data%22%3E%0A%20%20%20%20%20%20%20%20%E8%BF%98%E6%9C%89%20%3Cstrong%20style%3D%22color%3A%20%23f00%3B%22%3E%7B%7B%20data.omittedCount%20%7D%7D%3C%2Fstrong%3E%20%E4%B8%AATag%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FBsInputTags%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Alet%20values2%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%2C%20tagEffect%3A%20'plain'%2C%20tagType%3A%20'primary'%20%7D%2C%0A%20%20%7B%20label%3A%20'Css'%2C%20value%3A%20'css'%20%7D%2C%0A%20%20%7B%20label%3A%20'Javascript'%2C%20value%3A%20'javascript'%20%7D%2C%0A%20%20%7B%20label%3A%20'Vue.js'%2C%20value%3A%20'vue'%20%7D%2C%0A%20%20%7B%20label%3A%20'React.js'%2C%20value%3A%20'react'%20%7D%0A%5D)%3B%0A%3C%2Fscript%3E"},{default:d(()=>[l("div",null,[A(t,{modelValue:C(e),"onUpdate:modelValue":E[0]||(E[0]=a=>p(e)?e.value=a:e=a),"max-tag-count":3},{maxTagPlaceholder:d(a=>[i(" 还有 "),l("strong",G,v(a.omittedCount),1),i(" 个Tag ")]),_:1},8,["modelValue"])])]),_:1})}}},O=K,Q=l("h6",null,"Disabled",-1),W=l("h6",null,"Tab disabled close(标签禁用关闭)",-1),X={__name:"disabled",setup(r){let e=m([{label:"HTML",value:"html",tagEffect:"plain",tagType:"primary"},{label:"Css",value:"css"},{label:"Javascript",value:"javascript"}]),u=m([{label:"HTML",value:"html",disabled:!0},{label:"Css",value:"css",disabled:!0},{label:"Javascript",value:"javascript",disabled:!0},{label:"Vue.js",value:"vue"},{label:"React.js",value:"react"},{label:"Angular.js",value:"angular"}]);return(E,t)=>{const n=o("BsInputTags"),a=o("demo-box");return c(),B(a,{id:"input-tags_disabled",title:{cn:"禁用",en:"Disabled"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Edisabled%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E7%A6%81%E7%94%A8%3Ccode%3Ebs-input-tags%3C%2Fcode%3E%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Edisabled%3C%2Fcode%3E%20attribute%20to%20disable%20the%20%3Ccode%3Ebs-input-tags%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3EDisabled%3C%2Fh6%3E%0A%20%20%20%20%3CBsInputTags%20disabled%20v-model%3D%22values1%22%3E%3C%2FBsInputTags%3E%0A%20%20%20%20%3Ch6%3ETab%20disabled%20close(%E6%A0%87%E7%AD%BE%E7%A6%81%E7%94%A8%E5%85%B3%E9%97%AD)%3C%2Fh6%3E%0A%20%20%20%20%3CBsInputTags%20v-model%3D%22values2%22%3E%3C%2FBsInputTags%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20values1%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%2C%20tagEffect%3A%20'plain'%2C%20tagType%3A%20'primary'%20%7D%2C%0A%20%20%7B%20label%3A%20'Css'%2C%20value%3A%20'css'%20%7D%2C%0A%20%20%7B%20label%3A%20'Javascript'%2C%20value%3A%20'javascript'%20%7D%0A%5D)%3B%0A%0Alet%20values2%20%3D%20ref(%5B%0A%20%20%7B%20label%3A%20'HTML'%2C%20value%3A%20'html'%2C%20disabled%3A%20true%20%7D%2C%0A%20%20%7B%20label%3A%20'Css'%2C%20value%3A%20'css'%2C%20disabled%3A%20true%20%7D%2C%0A%20%20%7B%20label%3A%20'Javascript'%2C%20value%3A%20'javascript'%2C%20disabled%3A%20true%20%7D%2C%0A%20%20%7B%20label%3A%20'Vue.js'%2C%20value%3A%20'vue'%20%7D%2C%0A%20%20%7B%20label%3A%20'React.js'%2C%20value%3A%20'react'%20%7D%2C%0A%20%20%7B%20label%3A%20'Angular.js'%2C%20value%3A%20'angular'%20%7D%0A%5D)%3B%0A%3C%2Fscript%3E"},{default:d(()=>[l("div",null,[Q,A(n,{disabled:"",modelValue:C(e),"onUpdate:modelValue":t[0]||(t[0]=s=>p(e)?e.value=s:e=s)},null,8,["modelValue"]),W,A(n,{modelValue:C(u),"onUpdate:modelValue":t[1]||(t[1]=s=>p(u)?u.value=s:u=s)},null,8,["modelValue"])])]),_:1})}}},Z=X,e2=V({name:"DemoIndex",components:{Basic:L,MaxCount:M,Sizes:S,CustomTag:q,ViewTagLimit:O,Disabled:Z}}),a2={class:"demo-index"};function l2(r,e,u,E,t,n){const a=o("Basic"),s=o("MaxCount"),g=o("Sizes"),_=o("CustomTag"),F=o("ViewTagLimit"),T=o("Disabled"),f=o("component-doc");return c(),B(f,{"component-name":"input-tags"},{default:d(()=>[l("div",a2,[A(a),A(s),A(g),A(_),A(F),A(T)])]),_:1})}const s2=y(e2,[["render",l2]]);export{s2 as default};
