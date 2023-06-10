import{_,i as D,r as s,c as v,w as a,o as u,a as l,d as A,b as i,t as g,u as e,k as x,v as h,x as L,p as w,h as F,g as y}from"./index-637c4ade.js";const S=t=>(w("data-v-b0c5ca27"),t=t(),F(),t),$={class:"a-box"},k=S(()=>l("code",null,"bs-collapse-transition",-1)),I={__name:"basic",setup(t){let o=D(!0),E=function(n){},p=function(n){},f=function(n){},B=function(n){},r=function(n){},c=function(n){};return(n,d)=>{const m=s("bs-button"),C=s("bs-collapse-transition"),b=s("demo-box");return u(),v(b,{id:"collapse-transition_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%3Ccode%3Ebs-collapse-transition%3C%2Fcode%3E%E7%9A%84%E7%94%A8%E6%B3%95%E5%BE%88%E7%AE%80%E5%8D%95%EF%BC%8C%E5%8F%AA%E8%A6%81%E4%BC%A0%E9%80%92%E4%B8%80%E4%B8%AA%E7%BB%84%E4%BB%B6%E6%88%96dom%E5%85%83%E7%B4%A0%E7%BB%99%E5%AE%83%E5%B0%B1%E8%A1%8C%E4%BA%86%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20usage%20of%20%3Ccode%3Ebs-collapse-transition%3C%2Fcode%3E%20is%20very%20simple%2C%20just%20pass%20a%20component%20or%20dom%20element%20to%20it%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22show%20%3D%20!show%22%3E%7B%7B%20show%20%3F%20'Hide'%20%3A%20'Show'%20%7D%7D%20box%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-collapse-transition%0A%20%20%20%20%20%20%40before-enter%3D%22onBeforeEnter%22%0A%20%20%20%20%20%20%40enter%3D%22onEnter%22%0A%20%20%20%20%20%20%40after-enter%3D%22onAfterEnter%22%0A%20%20%20%20%20%20%40before-leave%3D%22onBeforeLeave%22%0A%20%20%20%20%20%20%40leave%3D%22onLeave%22%0A%20%20%20%20%20%20%40after-leave%3D%22onAfterLeave%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22a-box%22%20v-show%3D%22show%22%3E%0A%20%20%20%20%20%20%20%20The%20usage%20of%20%3Ccode%3Ebs-collapse-transition%3C%2Fcode%3E%20is%20very%20simple%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fbs-collapse-transition%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20show%20%3D%20ref(true)%3B%0A%0Alet%20onBeforeEnter%20%3D%20function%20(el)%20%7B%0A%20%20console.log('onBeforeEnter'%2C%20el)%3B%0A%7D%3B%0Alet%20onEnter%20%3D%20function%20(el)%20%7B%0A%20%20console.log('onEnter'%2C%20el)%3B%0A%7D%3B%0Alet%20onAfterEnter%20%3D%20function%20(el)%20%7B%0A%20%20console.log('onAfterEnter'%2C%20el)%3B%0A%7D%3B%0Alet%20onBeforeLeave%20%3D%20function%20(el)%20%7B%0A%20%20console.log('onBeforeLeave'%2C%20el)%3B%0A%7D%3B%0Alet%20onLeave%20%3D%20function%20(el)%20%7B%0A%20%20console.log('onLeave'%2C%20el)%3B%0A%7D%3B%0Alet%20onAfterLeave%20%3D%20function%20(el)%20%7B%0A%20%20console.log('onAfterLeave'%2C%20el)%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.a-box%7B%0A%20%20padding%3A%204rem%201rem%3B%0A%20%20max-width%3A%20600px%3B%0A%20%20border%3A%201px%20solid%20var(--primary)%3B%0A%20%20margin-top%3A%201rem%3B%0A%20%20text-align%3A%20center%3B%0A%20%20color%3A%20%23fff%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:a(()=>[l("div",null,[A(m,{type:"primary",onClick:d[0]||(d[0]=j=>x(o)?o.value=!e(o):o=!e(o))},{default:a(()=>[i(g(e(o)?"Hide":"Show")+" box",1)]),_:1}),A(C,{onBeforeEnter:e(E),onEnter:e(p),onAfterEnter:e(f),onBeforeLeave:e(B),onLeave:e(r),onAfterLeave:e(c)},{default:a(()=>[h(l("div",$,[i(" The usage of "),k,i(" is very simple ")],512),[[L,e(o)]])]),_:1},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])])]),_:1})}}},T=_(I,[["__scopeId","data-v-b0c5ca27"]]),N=y({name:"DemoIndex",components:{Basic:T}}),V={class:"demo-index"};function H(t,o,E,p,f,B){const r=s("Basic"),c=s("component-doc");return u(),v(c,{"component-name":"collapse-transition"},{default:a(()=>[l("div",V,[A(r)])]),_:1})}const q=_(N,[["render",H]]);export{q as default};
