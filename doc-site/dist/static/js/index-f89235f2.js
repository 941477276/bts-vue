import{i as u,r as d,c as D,w as s,o as v,a as b,d as E,b as p,k as a,l as f,C as w,F as y,u as B,_ as F,p as k,h as g,m as x,g as h}from"./index-637c4ade.js";const $={__name:"basic",setup(m){let e=u(!1);return(i,l)=>{const C=d("bs-button"),o=d("bs-drawer"),t=d("demo-box");return v(),D(t,{id:"drawer_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%EF%BC%8C%E4%BD%BF%E7%94%A8%3Ccode%3Ev-model%3Avisible%3C%2Fcode%3E%E6%9D%A5%E6%98%BE%E7%A4%BA%2F%E9%9A%90%E8%97%8F%E6%8A%BD%E5%B1%89%EF%BC%8C%E6%8C%89%3Ccode%3EESC%3C%2Fcode%3E%E9%94%AE%E5%8F%AF%E4%BB%A5%E5%85%B3%E9%97%AD%E6%8A%BD%E5%B1%89%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%2C%20use%20%3Ccode%3Ev-model%3Avisible%3C%2Fcode%3E%20to%20show%2Fhide%20the%20drawer%2C%20press%20the%20%3Ccode%3EESC%3C%2Fcode%3E%20key%20to%20close%20the%20drawer%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible%20%3D%20true%22%3EShow%20drawer%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible%22%0A%20%20%20%20%20%20title%3D%22%E6%B8%A9%E9%A6%A8%E6%8F%90%E7%A4%BA%22%3E%0A%20%20%20%20%20%20%3Cp%20v-for%3D%22item%20in%2030%22%20%3Akey%3D%22item%22%3EThis%20is%20a%20Bootstrap%20drawer!%3C%2Fp%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3E%E7%A1%AE%E5%AE%9A%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20visible%20%3D%20ref(false)%3B%0A%3C%2Fscript%3E"},{default:s(()=>[b("div",null,[E(C,{type:"primary",onClick:l[0]||(l[0]=r=>a(e)?e.value=!0:e=!0)},{default:s(()=>[p("Show drawer")]),_:1}),E(o,{visible:B(e),"onUpdate:visible":l[1]||(l[1]=r=>a(e)?e.value=r:e=r),title:"温馨提示"},{footer:s(()=>[E(C,{type:"primary"},{default:s(()=>[p("确定")]),_:1})]),default:s(()=>[(v(),f(y,null,w(30,r=>b("p",{key:r},"This is a Bootstrap drawer!")),64))]),_:1},8,["visible"])])]),_:1})}}},S=$;const _=m=>(k("data-v-836a3062"),m=m(),g(),m),U=_(()=>b("p",null,"这是一个向上的抽屉弹窗！",-1)),N=_(()=>b("p",null,"这是一个向右的抽屉弹窗！",-1)),T=_(()=>b("p",null,"这是一个向下的抽屉弹窗！",-1)),I=_(()=>b("p",null,"这是一个向左的抽屉弹窗！",-1)),V={__name:"directions",setup(m){let e=u(!1),i=u(!1),l=u(!1),C=u(!1);return(o,t)=>{const r=d("bs-button"),c=d("bs-drawer"),A=d("demo-box");return v(),D(A,{id:"drawer_directions",title:{cn:"不同方向",en:"Directions"},description:{cn:"%3Cp%3E%3Ccode%3Ebs-drawer%3C%2Fcode%3E%E5%8F%AF%E4%BB%A5%E5%9C%A8%3Ccode%3Etop%3C%2Fcode%3E%E3%80%81%3Ccode%3Eright%3C%2Fcode%3E%E3%80%81%3Ccode%3Ebottom%3C%2Fcode%3E%E3%80%81%3Ccode%3Eleft%3C%2Fcode%3E4%E6%96%B9%E4%B8%AA%E6%96%B9%E5%90%91%E4%B8%8A%E6%98%BE%E7%A4%BA%3C%2Fp%3E%0A",en:"%3Cp%3E%3Ccode%3Ebs-drawer%3C%2Fcode%3E%20can%20be%20displayed%20in%204%20directions%EF%BC%9A%20%3Ccode%3Etop%3C%2Fcode%3E%2C%20%3Ccode%3Eright%3C%2Fcode%3E%2C%20%3Ccode%3Ebottom%3C%2Fcode%3E%2C%20%3Ccode%3Eleft%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible1%20%3D%20true%22%3Etop%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible2%20%3D%20true%22%3Eright%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible3%20%3D%20true%22%3Ebottom%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible4%20%3D%20true%22%3Eleft%3C%2Fbs-button%3E%0A%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible1%22%0A%20%20%20%20%20%20placement%3D%22top%22%0A%20%20%20%20%20%20title%3D%22%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%22%3E%0A%20%20%20%20%20%20%3Cp%3E%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E5%90%91%E4%B8%8A%E7%9A%84%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%EF%BC%81%3C%2Fp%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible2%22%0A%20%20%20%20%20%20placement%3D%22right%22%0A%20%20%20%20%20%20title%3D%22%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%22%3E%0A%20%20%20%20%20%20%3Cp%3E%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E5%90%91%E5%8F%B3%E7%9A%84%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%EF%BC%81%3C%2Fp%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible3%22%0A%20%20%20%20%20%20placement%3D%22bottom%22%0A%20%20%20%20%20%20title%3D%22%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%22%3E%0A%20%20%20%20%20%20%3Cp%3E%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E5%90%91%E4%B8%8B%E7%9A%84%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%EF%BC%81%3C%2Fp%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible4%22%0A%20%20%20%20%20%20placement%3D%22left%22%0A%20%20%20%20%20%20title%3D%22%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%22%3E%0A%20%20%20%20%20%20%3Cp%3E%E8%BF%99%E6%98%AF%E4%B8%80%E4%B8%AA%E5%90%91%E5%B7%A6%E7%9A%84%E6%8A%BD%E5%B1%89%E5%BC%B9%E7%AA%97%EF%BC%81%3C%2Fp%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20visible1%20%3D%20ref(false)%3B%0Alet%20visible2%20%3D%20ref(false)%3B%0Alet%20visible3%20%3D%20ref(false)%3B%0Alet%20visible4%20%3D%20ref(false)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:s(()=>[b("div",null,[E(r,{type:"primary",onClick:t[0]||(t[0]=n=>a(e)?e.value=!0:e=!0)},{default:s(()=>[p("top")]),_:1}),E(r,{type:"primary",onClick:t[1]||(t[1]=n=>a(i)?i.value=!0:i=!0)},{default:s(()=>[p("right")]),_:1}),E(r,{type:"primary",onClick:t[2]||(t[2]=n=>a(l)?l.value=!0:l=!0)},{default:s(()=>[p("bottom")]),_:1}),E(r,{type:"primary",onClick:t[3]||(t[3]=n=>a(C)?C.value=!0:C=!0)},{default:s(()=>[p("left")]),_:1}),E(c,{visible:B(e),"onUpdate:visible":t[4]||(t[4]=n=>a(e)?e.value=n:e=n),placement:"top",title:"抽屉弹窗"},{default:s(()=>[U]),_:1},8,["visible"]),E(c,{visible:B(i),"onUpdate:visible":t[5]||(t[5]=n=>a(i)?i.value=n:i=n),placement:"right",title:"抽屉弹窗"},{default:s(()=>[N]),_:1},8,["visible"]),E(c,{visible:B(l),"onUpdate:visible":t[6]||(t[6]=n=>a(l)?l.value=n:l=n),placement:"bottom",title:"抽屉弹窗"},{default:s(()=>[T]),_:1},8,["visible"]),E(c,{visible:B(C),"onUpdate:visible":t[7]||(t[7]=n=>a(C)?C.value=n:C=n),placement:"left",title:"抽屉弹窗"},{default:s(()=>[I]),_:1},8,["visible"])])]),_:1})}}},M=F(V,[["__scopeId","data-v-836a3062"]]),L=b("h6",null,"在“确定”按钮转圈圈期间点击任何位置都无法关闭弹窗！",-1),R={__name:"async-close",setup(m){let e=u(!1),i=u(!1),l=function(){if(e.value)return;e.value=!0;let C=setTimeout(function(){clearTimeout(C),e.value=!1,x.success("数据提交完成！"),i.value=!1},3e3)};return(C,o)=>{const t=d("bs-button"),r=d("bs-drawer"),c=d("demo-box");return v(),D(c,{id:"drawer_async-close",title:{cn:"异步关闭",en:"Async close"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Eclose-disabled%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E6%8A%BD%E5%B1%89%E5%B0%86%E6%97%A0%E6%B3%95%E8%87%AA%E5%8A%A8%E5%85%B3%E9%97%AD%EF%BC%8C%E9%99%A4%E9%9D%9E%E6%89%8B%E5%8A%A8%E5%85%B3%E9%97%AD%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Eclose-disabled%3C%2Fcode%3E%20attribute%20drawer%20will%20not%20be%20closed%20automatically%20unless%20closed%20manually%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible%20%3D%20true%22%3EShow%20async%20close%20modal%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20title%3D%22%E6%8F%90%E4%BA%A4%E6%95%B0%E6%8D%AE%22%0A%20%20%20%20%20%20%3Aclose-disabled%3D%22closeDisabled%22%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible%22%3E%0A%20%20%20%20%20%20%3Ch6%3E%E5%9C%A8%E2%80%9C%E7%A1%AE%E5%AE%9A%E2%80%9D%E6%8C%89%E9%92%AE%E8%BD%AC%E5%9C%88%E5%9C%88%E6%9C%9F%E9%97%B4%E7%82%B9%E5%87%BB%E4%BB%BB%E4%BD%95%E4%BD%8D%E7%BD%AE%E9%83%BD%E6%97%A0%E6%B3%95%E5%85%B3%E9%97%AD%E5%BC%B9%E7%AA%97%EF%BC%81%3C%2Fh6%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23footer%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%0A%20%20%20%20%20%20%20%20%20%20type%3D%22primary%22%0A%20%20%20%20%20%20%20%20%20%20%3Aloading%3D%22closeDisabled%22%0A%20%20%20%20%20%20%20%20%20%20%3Adisabled%3D%22closeDisabled%22%0A%20%20%20%20%20%20%20%20%20%20%40click%3D%22submitData%22%3E%E6%8F%90%E4%BA%A4%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20closeDisabled%20%3D%20ref(false)%3B%0Alet%20visible%20%3D%20ref(false)%3B%0Alet%20submitData%20%3D%20function%20()%20%7B%0A%20%20if%20(closeDisabled.value)%20%7B%0A%20%20%20%20return%3B%0A%20%20%7D%0A%20%20closeDisabled.value%20%3D%20true%3B%0A%20%20let%20timer%20%3D%20setTimeout(function%20()%20%7B%0A%20%20%20%20clearTimeout(timer)%3B%0A%20%20%20%20closeDisabled.value%20%3D%20false%3B%0A%20%20%20%20BsMessage.success('%E6%95%B0%E6%8D%AE%E6%8F%90%E4%BA%A4%E5%AE%8C%E6%88%90%EF%BC%81')%3B%0A%20%20%20%20visible.value%20%3D%20false%3B%0A%20%20%7D%2C%203000)%3B%0A%7D%3B%0A%3C%2Fscript%3E"},{default:s(()=>[b("div",null,[E(t,{type:"primary",onClick:o[0]||(o[0]=A=>a(i)?i.value=!0:i=!0)},{default:s(()=>[p("Show async close modal")]),_:1}),E(r,{title:"提交数据","close-disabled":B(e),visible:B(i),"onUpdate:visible":o[1]||(o[1]=A=>a(i)?i.value=A:i=A)},{footer:s(()=>[E(t,{type:"primary",loading:B(e),disabled:B(e),onClick:B(l)},{default:s(()=>[p("提交")]),_:1},8,["loading","disabled","onClick"])]),default:s(()=>[L]),_:1},8,["close-disabled","visible"])])]),_:1})}}},j=R,q=b("h5",null,"一级弹窗",-1),z=b("h5",null,"二级弹窗",-1),G=b("h5",null,"三级弹窗",-1),H={__name:"drawer-nesting",setup(m){let e=u(!1),i=u(!1),l=u(!1);return(C,o)=>{const t=d("bs-button"),r=d("bs-drawer"),c=d("demo-box");return v(),D(c,{id:"drawer_drawer-nesting",title:{cn:"嵌套抽屉",en:"Nesting drawer"},description:{cn:"%3Cp%3E%E5%B5%8C%E5%A5%97%E7%9A%84%E6%8A%BD%E5%B1%89%3C%2Fp%3E%0A",en:"%3Cp%3ENested%20drawers%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible%20%3D%20true%22%3EShow%20drawer%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20title%3D%22%E4%B8%80%E7%BA%A7%E5%BC%B9%E7%AA%97%22%0A%20%20%20%20%20%20v-model%3Avisible%3D%22visible%22%0A%20%20%20%20%20%20width%3D%2260%25%22%3E%0A%20%20%20%20%20%20%3Ch5%3E%E4%B8%80%E7%BA%A7%E5%BC%B9%E7%AA%97%3C%2Fh5%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible2%20%3D%20true%22%3E%E6%98%BE%E7%A4%BA%E4%BA%8C%E7%BA%A7%E5%BC%B9%E7%AA%97%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20%20%20title%3D%22%E4%BA%8C%E7%BA%A7%E5%BC%B9%E7%AA%97%22%0A%20%20%20%20%20%20%20%20v-model%3Avisible%3D%22visible2%22%0A%20%20%20%20%20%20%20%20width%3D%2240%25%22%3E%0A%20%20%20%20%20%20%20%20%3Ch5%3E%E4%BA%8C%E7%BA%A7%E5%BC%B9%E7%AA%97%3C%2Fh5%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22visible3%20%3D%20true%22%3E%E6%98%BE%E7%A4%BA%E4%B8%89%E7%BA%A7%E5%BC%B9%E7%AA%97%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-drawer%0A%20%20%20%20%20%20%20%20%20%20title%3D%22%E4%B8%89%E7%BA%A7%E5%BC%B9%E7%AA%97%22%0A%20%20%20%20%20%20%20%20%20%20width%3D%2220%25%22%0A%20%20%20%20%20%20%20%20%20%20v-model%3Avisible%3D%22visible3%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Ch5%3E%E4%B8%89%E7%BA%A7%E5%BC%B9%E7%AA%97%3C%2Fh5%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%20%20%3C%2Fbs-drawer%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20visible%20%3D%20ref(false)%3B%0Alet%20visible2%20%3D%20ref(false)%3B%0Alet%20visible3%20%3D%20ref(false)%3B%0A%3C%2Fscript%3E"},{default:s(()=>[b("div",null,[E(t,{type:"primary",onClick:o[0]||(o[0]=A=>a(e)?e.value=!0:e=!0)},{default:s(()=>[p("Show drawer")]),_:1}),E(r,{title:"一级弹窗",visible:B(e),"onUpdate:visible":o[5]||(o[5]=A=>a(e)?e.value=A:e=A),width:"60%"},{default:s(()=>[q,E(t,{type:"primary",onClick:o[1]||(o[1]=A=>a(i)?i.value=!0:i=!0)},{default:s(()=>[p("显示二级弹窗")]),_:1}),E(r,{title:"二级弹窗",visible:B(i),"onUpdate:visible":o[4]||(o[4]=A=>a(i)?i.value=A:i=A),width:"40%"},{default:s(()=>[z,E(t,{type:"primary",onClick:o[2]||(o[2]=A=>a(l)?l.value=!0:l=!0)},{default:s(()=>[p("显示三级弹窗")]),_:1}),E(r,{title:"三级弹窗",width:"20%",visible:B(l),"onUpdate:visible":o[3]||(o[3]=A=>a(l)?l.value=A:l=A)},{default:s(()=>[G]),_:1},8,["visible"])]),_:1},8,["visible"])]),_:1},8,["visible"])])]),_:1})}}},J=H,K=h({name:"DemoIndex",components:{Basic:S,Directions:M,AsyncClose:j,DrawerNesting:J}}),O={class:"demo-index"};function P(m,e,i,l,C,o){const t=d("Basic"),r=d("Directions"),c=d("AsyncClose"),A=d("DrawerNesting"),n=d("component-doc");return v(),D(n,{"component-name":"drawer"},{default:s(()=>[b("div",O,[E(t),E(r),E(c),E(A)])]),_:1})}const W=F(K,[["render",P]]);export{W as default};
