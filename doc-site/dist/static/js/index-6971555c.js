import{_ as s,r as o,c as a,w as i,o as d,a as e,b as A,d as n,g as B}from"./index-637c4ade.js";const C={},m=e("strong",{style:{color:"rgba(0,0,0,0.45)"}},"gray",-1);function b(r,l){const t=o("BsBackTop"),c=o("demo-box");return d(),a(c,{id:"backtop_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20Scroll%20down%20to%20see%20the%20bottom-right%0A%20%20%20%20%3Cstrong%20style%3D%22color%3A%20rgba(0%2C0%2C0%2C0.45)%22%3Egray%3C%2Fstrong%3E%0A%20%20%20%20button%0A%20%20%20%20%3CBsBackTop%3E%3C%2FBsBackTop%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{default:i(()=>[e("div",null,[A(" Scroll down to see the bottom-right "),m,A(" button "),n(t)])]),_:1})}const x=s(C,[["render",b]]);const u={},h={class:"scroll-box",id:"scrollBox1"},g={class:"scroll-content"};function F(r,l){const t=o("BsBackTop"),c=o("demo-box");return d(),a(c,{id:"backtop_in-container",title:{cn:"在容器中",en:"In container"},description:{cn:"%3Cp%3E%3Ccode%3Ebs-backup%3C%2Fcode%3E%E9%99%A4%E4%BA%86%E8%83%BD%E5%BA%94%E7%94%A8%E5%9C%A8%3Ccode%3Ebody%3C%2Fcode%3E%E4%B8%AD%EF%BC%8C%E4%B9%9F%E8%83%BD%E5%BA%94%E7%94%A8%E5%9C%A8%E5%85%B6%E4%BB%96%3Ccode%3Edom%3C%2Fcode%3E%E4%B8%AD%3C%2Fp%3E%0A",en:"%3Cp%3E%3Ccode%3Ebs-backup%3C%2Fcode%3E%20can%20be%20applied%20not%20only%20in%20%3Ccode%3Ebody%3C%2Fcode%3E%2C%20but%20also%20in%20other%20%3Ccode%3Edom%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22scroll-box%22%20id%3D%22scrollBox1%22%3E%0A%20%20%20%20%3Cdiv%20class%3D%22scroll-content%22%3E%0A%20%20%20%20%20%20%3CBsBackTop%20target%3D%22%23scrollBox1%22%20visibilityHeight%3D%2230%25%22%20style%3D%22bottom%3A%20auto%3B%22%3E%3C%2FBsBackTop%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.scroll-box%7B%0A%20%20position%3A%20relative%3B%0A%20%20max-width%3A%20400px%3B%0A%20%20height%3A%20400px%3B%0A%20%20border%3A%201px%20solid%20%23ccc%3B%0A%20%20overflow%3A%20auto%3B%0A%20%20%26%3A%3Aafter%7B%0A%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20top%3A%2045%25%3B%0A%20%20%20%20width%3A%20100%25%3B%0A%20%20%20%20content%3A%20'Scroll%20me'%3B%0A%20%20%20%20font-size%3A%202rem%3B%0A%20%20%20%20text-align%3A%20center%3B%0A%20%20%20%20color%3A%20%23999%3B%0A%20%20%7D%0A%7D%0A.scroll-content%7B%0A%20%20height%3A%201560px%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:i(()=>[e("div",h,[e("div",g,[n(t,{target:"#scrollBox1",visibilityHeight:"30%",style:{bottom:"auto"}})])])]),_:1})}const f=s(u,[["render",F],["__scopeId","data-v-8060ae69"]]),v=B({name:"DemoIndex",components:{Basic:x,InContainer:f}}),D={class:"demo-index"};function k(r,l,t,c,y,T){const p=o("Basic"),_=o("InContainer"),E=o("component-doc");return d(),a(E,{"component-name":"backtop"},{default:i(()=>[e("div",D,[n(p),n(_)])]),_:1})}const w=s(v,[["render",k]]);export{w as default};
