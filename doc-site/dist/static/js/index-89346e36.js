import{_ as p,i as C,r as a,c as u,w as F,o as _,a as B,d as s,u as d,k as A,y as D,B as b,p as g,h,g as y}from"./index-c2c69b7b.js";const k={__name:"basic",setup(c){let e=C(50),E=C([40,60]);return(o,t)=>{const i=a("BsSlider"),l=a("demo-box");return _(),u(l,{id:"slider_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%EF%BC%8C%E4%BD%BF%E7%94%A8%3Ccode%3Ev-model%3C%2Fcode%3E%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E6%95%B0%E6%8D%AE%EF%BC%9B%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%3Ccode%3Erange%3C%2Fcode%3E%E5%8F%AF%E5%BC%80%E5%90%AF%E5%8F%8C%E6%BB%91%E5%9D%97%EF%BC%8C%E8%AE%BE%E7%BD%AE%E5%B1%9E%E6%80%A7%3Ccode%3Edisabled%3C%2Fcode%3E%E5%8F%AF%E7%A6%81%E7%94%A8%E6%BB%91%E5%9D%97%E3%80%82%20%E6%B3%A8%E6%84%8F%EF%BC%9A%E5%8D%95%E6%BB%91%E5%9D%97%E6%97%B6%EF%BC%8C%3Ccode%3EmodelValue%3C%2Fcode%3E%E5%80%BC%E4%B8%BA%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%BD%93%E6%BB%91%E5%9D%97%E4%B8%BA%E5%8F%8C%E6%BB%91%E5%9D%97%E6%97%B6%EF%BC%8C%3Ccode%3EmodelValue%3C%2Fcode%3E%E5%80%BC%E4%B8%BA%3Ccode%3Eint%5B%5D%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%20is%20to%20use%20%3Ccode%3Ev-model%3C%2Fcode%3E%20to%20bind%20data%20in%20two%20directions%3B%20set%20the%20attribute%20%3Ccode%3Erange%3C%2Fcode%3E%20to%20enable%20double%20sliders%2C%20and%20set%20the%20attribute%20%3Ccode%3Edisabled%3C%2Fcode%3E%20to%20disable%20the%20sliders.%20Note%EF%BC%9AWhen%20the%20slider%20is%20single%2C%20the%20%3Ccode%3EmodelValue%3C%2Fcode%3E%20value%20is%20a%20number%20type%2C%20and%20when%20the%20slider%20is%20a%20double%20slider%2C%20the%20%3Ccode%3EmodelValue%3C%2Fcode%3E%20value%20is%20an%20%3Ccode%3Eint%5B%5D%3C%2Fcode%3E%20type.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsSlider%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3CBsSlider%20range%20v-model%3D%22slider2%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3CBsSlider%20range%20disabled%20%3Amodel-value%3D%22%5B40%2C%2060%5D%22%3E%3C%2FBsSlider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20slider%20%3D%20ref(50)%3B%0Alet%20slider2%20%3D%20ref(%5B40%2C%2060%5D)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-slider%7B%0A%20%20margin-bottom%3A%200.5rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:F(()=>[B("div",null,[s(i,{modelValue:d(e),"onUpdate:modelValue":t[0]||(t[0]=n=>A(e)?e.value=n:e=n)},null,8,["modelValue"]),s(i,{range:"",modelValue:d(E),"onUpdate:modelValue":t[1]||(t[1]=n=>A(E)?E.value=n:E=n)},null,8,["modelValue"]),s(i,{range:"",disabled:"","model-value":[40,60]})])]),_:1},8,["description"])}}},w=p(k,[["__scopeId","data-v-7f64e715"]]);const I={class:"vertical-slider-wrapper"},U={__name:"veritcal",setup(c){let e=C(33),E=C([40,60]),o=C({0:"0°C",24:"24°C",30:{label:"30°C",style:{color:"#ffe584"}},50:"50°C",100:{label:D("span",[D(b),"100°C"]),style:{color:"#f00",fontWeight:"bold"}}}),t=C([15,37]);return(i,l)=>{const n=a("BsSlider"),m=a("demo-box");return _(),u(m,{id:"slider_veritcal",title:{cn:"垂直模式",en:"Vertical"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Evertical%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E5%91%88%E7%8E%B0%E5%9E%82%E7%9B%B4%E7%9A%84%E6%BB%91%E5%9D%97%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Evertical%3C%2Fcode%3E%20property%20to%20render%20a%20vertical%20slider%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22vertical-slider-wrapper%22%3E%0A%20%20%20%20%3CBsSlider%20vertical%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3CBsSlider%20vertical%20range%20v-model%3D%22slider2%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3CBsSlider%20vertical%20%3Amarks%3D%22marks%22%20range%20v-model%3D%22slider3%22%3E%3C%2FBsSlider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20BsiInfoCircleFill%20%7D%20from%20'vue3-bootstrap-icon%2Fes%2Ficons%2FBsiInfoCircleFill'%3B%0A%0Alet%20slider%20%3D%20ref(33)%3B%0Alet%20slider2%20%3D%20ref(%5B40%2C%2060%5D)%3B%0Alet%20marks%20%3D%20ref(%7B%0A%20%200%3A%20'0%C2%B0C'%2C%0A%20%2024%3A%20'24%C2%B0C'%2C%0A%20%2030%3A%20%7B%0A%20%20%20%20label%3A%20'30%C2%B0C'%2C%0A%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20color%3A%20'%23ffe584'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%2050%3A%20'50%C2%B0C'%2C%0A%20%20100%3A%20%7B%0A%20%20%20%20label%3A%20h('span'%2C%20%5Bh(BsiInfoCircleFill)%2C%20'100%C2%B0C'%5D)%2C%0A%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20color%3A%20'%23f00'%2C%0A%20%20%20%20%20%20fontWeight%3A%20'bold'%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%3B%0Alet%20slider3%20%3D%20ref(%5B15%2C%2037%5D)%3B%0A%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.vertical-slider-wrapper%7B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3A%20space-around%3B%0A%20%20.bs-slider%7B%0A%20%20%20%20height%3A%2015rem%3B%0A%20%20%7D%0A%7D%0A%2F*.bs-slider%7B%0A%20%20margin-right%3A%203rem%3B%0A%7D*%2F%0A%3C%2Fstyle%3E"},{default:F(()=>[B("div",I,[s(n,{vertical:"",modelValue:d(e),"onUpdate:modelValue":l[0]||(l[0]=r=>A(e)?e.value=r:e=r)},null,8,["modelValue"]),s(n,{vertical:"",range:"",modelValue:d(E),"onUpdate:modelValue":l[1]||(l[1]=r=>A(E)?E.value=r:E=r)},null,8,["modelValue"]),s(n,{vertical:"",marks:d(o),range:"",modelValue:d(t),"onUpdate:modelValue":l[2]||(l[2]=r=>A(t)?t.value=r:t=r)},null,8,["marks","modelValue"])])]),_:1})}}},R=p(U,[["__scopeId","data-v-33a7041c"]]);const f=c=>(g("data-v-aedf3549"),c=c(),h(),c),T=f(()=>B("h6",null,"Normal(普通的)",-1)),N=f(()=>B("h6",null,"No crossing allowed(不允许交叉)",-1)),j=f(()=>B("h6",null,"Range min: 3，Rang max: 10(区间值最小值为3，最大值为10)",-1)),W={__name:"range",setup(c){let e=C([7,21]),E=C([40,60]),o=C([15,25]);return(t,i)=>{const l=a("BsSlider"),n=a("demo-box");return _(),u(n,{id:"slider_range",title:{cn:"区间模式",en:"Range"},description:{cn:"%3Cp%3E%E5%8C%BA%E9%97%B4%E6%A8%A1%E5%BC%8F%E5%8D%B3%E4%B8%BA%E5%8F%8C%E6%BB%91%E5%9D%97%E6%A8%A1%E5%BC%8F%EF%BC%8C%E8%AE%BE%E7%BD%AE%3Ccode%3Erange%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E5%BC%80%E5%90%AF%E5%8C%BA%E9%97%B4%E6%A8%A1%E5%BC%8F%EF%BC%8C%E5%BD%93%E5%BC%80%E5%90%AF%E5%8C%BA%E9%97%B4%E6%A8%A1%E5%BC%8F%E5%90%8E%3Ccode%3EmodelValue%3C%2Fcode%3E%E9%9C%80%E4%B8%BA%E4%B8%80%E4%B8%AA%E9%95%BF%E5%BA%A6%E4%B8%BA2%E7%9A%84%3Ccode%3Eint%3C%2Fcode%3E%E6%95%B0%E7%BB%84%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20interval%20mode%20is%20the%20double%20slider%20mode.%20Set%20the%20%3Ccode%3Erange%3C%2Fcode%3E%20attribute%20to%20enable%20the%20interval%20mode.%20When%20the%20interval%20mode%20is%20enabled%2C%20%3Ccode%3EmodelValue%3C%2Fcode%3E%20needs%20to%20be%20an%20%3Ccode%3Eint%3C%2Fcode%3E%20array%20with%20a%20length%20of%202%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3ENormal(%E6%99%AE%E9%80%9A%E7%9A%84)%3C%2Fh6%3E%0A%20%20%20%20%3CBsSlider%20range%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3Ch6%3ENo%20crossing%20allowed(%E4%B8%8D%E5%85%81%E8%AE%B8%E4%BA%A4%E5%8F%89)%3C%2Fh6%3E%0A%20%20%20%20%3CBsSlider%20range%20%3Aenable-cross%3D%22false%22%20v-model%3D%22slider2%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3Ch6%3ERange%20min%3A%203%EF%BC%8CRang%20max%3A%2010(%E5%8C%BA%E9%97%B4%E5%80%BC%E6%9C%80%E5%B0%8F%E5%80%BC%E4%B8%BA3%EF%BC%8C%E6%9C%80%E5%A4%A7%E5%80%BC%E4%B8%BA10)%3C%2Fh6%3E%0A%20%20%20%20%3CBsSlider%0A%20%20%20%20%20%20range%0A%20%20%20%20%20%20%3Arange-min%3D%223%22%0A%20%20%20%20%20%20%3Arange-max%3D%2210%22%0A%20%20%20%20%20%20%3Aenable-cross%3D%22false%22%0A%20%20%20%20%20%20v-model%3D%22slider3%22%3E%3C%2FBsSlider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20slider%20%3D%20ref(%5B7%2C%2021%5D)%3B%0Alet%20slider2%20%3D%20ref(%5B40%2C%2060%5D)%3B%0Alet%20slider3%20%3D%20ref(%5B15%2C%2025%5D)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-slider%7B%0A%20%20margin-bottom%3A%200.5rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:F(()=>[B("div",null,[T,s(l,{range:"",modelValue:d(e),"onUpdate:modelValue":i[0]||(i[0]=m=>A(e)?e.value=m:e=m)},null,8,["modelValue"]),N,s(l,{range:"","enable-cross":!1,modelValue:d(E),"onUpdate:modelValue":i[1]||(i[1]=m=>A(E)?E.value=m:E=m)},null,8,["modelValue"]),j,s(l,{range:"","range-min":3,"range-max":10,"enable-cross":!1,modelValue:d(o),"onUpdate:modelValue":i[2]||(i[2]=m=>A(o)?o.value=m:o=m)},null,8,["modelValue"])])]),_:1},8,["description"])}}},M=p(W,[["__scopeId","data-v-aedf3549"]]);const z={class:"vertical-breakpoint-step-box"},$={__name:"step",setup(c){let e=C(65);return(E,o)=>{const t=a("BsSlider"),i=a("demo-box");return _(),u(i,{id:"slider_step",title:{cn:"显示断点",en:"Show step"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Eshow-step%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E6%98%BE%E7%A4%BA%E6%BB%91%E5%9D%97%E6%96%AD%E7%82%B9%EF%BC%8C%E6%96%AD%E7%82%B9%E9%80%9A%E5%B8%B8%E4%B8%8E%3Ccode%3Estep%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E6%90%AD%E9%85%8D%E4%BD%BF%E7%94%A8%EF%BC%8C%3Ccode%3Estep%3C%2Fcode%3E%E9%BB%98%E8%AE%A4%E5%80%BC%E4%B8%BA1%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Eshow-step%3C%2Fcode%3E%20attribute%20to%20display%20the%20slider%20breakpoint.%20The%20breakpoint%20is%20usually%20used%20in%20conjunction%20with%20the%20%3Ccode%3Estep%3C%2Fcode%3E%20attribute.%20The%20default%20value%20of%20%3Ccode%3Estep%3C%2Fcode%3E%20is%201%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsSlider%20show-steps%20%3Astep%3D%2210%22%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3Cdiv%20class%3D%22vertical-breakpoint-step-box%22%3E%0A%20%20%20%20%20%20%3CBsSlider%20vertical%20show-steps%20%3Astep%3D%2210%22%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%20%20%3CBsSlider%20vertical%20show-steps%20%3Astep%3D%2210%22%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20slider%20%3D%20ref(65)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-slider%7B%0A%20%20margin-bottom%3A%201rem%3B%0A%7D%0A.vertical-breakpoint-step-box%7B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3A%20space-between%3B%0A%20%20.bs-slider%7B%0A%20%20%20%20height%3A%2015rem%3B%0A%20%20%20%20margin-bottom%3A%200%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"},{default:F(()=>[B("div",null,[s(t,{"show-steps":"",step:10,modelValue:d(e),"onUpdate:modelValue":o[0]||(o[0]=l=>A(e)?e.value=l:e=l)},null,8,["modelValue"]),B("div",z,[s(t,{vertical:"","show-steps":"",step:10,modelValue:d(e),"onUpdate:modelValue":o[1]||(o[1]=l=>A(e)?e.value=l:e=l)},null,8,["modelValue"]),s(t,{vertical:"","show-steps":"",step:10,modelValue:d(e),"onUpdate:modelValue":o[2]||(o[2]=l=>A(e)?e.value=l:e=l)},null,8,["modelValue"])])])]),_:1},8,["description"])}}},q=p($,[["__scopeId","data-v-2aafc357"]]);const v=c=>(g("data-v-06926421"),c=c(),h(),c),G=v(()=>B("h6",null,"Normal(普通的)",-1)),H=v(()=>B("h6",null,[B("code",null,"included=false")],-1)),J=v(()=>B("h6",null,"Range(区间)",-1)),K={__name:"marks",setup(c){let e=C({0:"0°C",24:"24°C",30:{label:"30°C",style:{color:"#ffe584"}},50:"50°C",100:{label:D("span",[D(b),"100°C"]),style:{color:"#f00",fontWeight:"bold"}}}),E=C(10),o=C(15),t=C([20,35]);return(i,l)=>{const n=a("BsSlider"),m=a("demo-box");return _(),u(m,{id:"slider_marks",title:{cn:"显示标记",en:"Show mark"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Emarks%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E6%98%BE%E7%A4%BA%E6%A0%87%E8%AE%B0%EF%BC%8C%3Ccode%3Emarks%3C%2Fcode%3E%E4%B8%BA%E4%B8%80%E4%B8%AA%3Ccode%3Ekey%3C%2Fcode%3E%E4%B8%BA%3Ccode%3Enumber%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%EF%BC%8C%3Ccode%3Evalue%3C%2Fcode%3E%E4%B8%BA%3Ccode%3Estring%3C%2Fcode%3E%E6%88%96%3Ccode%3Eobject%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%AF%B9%E8%B1%A1%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Emarks%3C%2Fcode%3E%20attribute%20to%20display%20the%20mark%2C%20%3Ccode%3Emarks%3C%2Fcode%3E%20is%20an%20object%20whose%20%3Ccode%3Ekey%3C%2Fcode%3E%20is%20of%20type%20%3Ccode%3Enumber%3C%2Fcode%3E%2C%20and%20%3Ccode%3Evalue%3C%2Fcode%3E%20is%20of%20type%20%3Ccode%3Estring%3C%2Fcode%3E%20or%20%3Ccode%3Eobject%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3ENormal(%E6%99%AE%E9%80%9A%E7%9A%84)%3C%2Fh6%3E%0A%20%20%20%20%3CBsSlider%20%3Amarks%3D%22marks%22%20v-model%3D%22slider%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3Ch6%3E%3Ccode%3Eincluded%3Dfalse%3C%2Fcode%3E%3C%2Fh6%3E%0A%20%20%20%20%3CBsSlider%20%3Amarks%3D%22marks%22%20%3Aincluded%3D%22false%22%20v-model%3D%22slider2%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3Ch6%3ERange(%E5%8C%BA%E9%97%B4)%3C%2Fh6%3E%0A%20%20%20%20%3CBsSlider%20%3Amarks%3D%22marks%22%20range%20v-model%3D%22slider3%22%3E%3C%2FBsSlider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20h%2C%20ref%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20BsiInfoCircleFill%20%7D%20from%20'vue3-bootstrap-icon%2Fes%2Ficons%2FBsiInfoCircleFill'%3B%0A%0Alet%20marks%20%3D%20ref(%7B%0A%20%200%3A%20'0%C2%B0C'%2C%0A%20%2024%3A%20'24%C2%B0C'%2C%0A%20%2030%3A%20%7B%0A%20%20%20%20label%3A%20'30%C2%B0C'%2C%0A%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20color%3A%20'%23ffe584'%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%2050%3A%20'50%C2%B0C'%2C%0A%20%20100%3A%20%7B%0A%20%20%20%20%2F%2F%20label%3A%20'100%C2%B0C'%2C%0A%20%20%20%20label%3A%20h('span'%2C%20%5Bh(BsiInfoCircleFill)%2C%20'100%C2%B0C'%5D)%2C%0A%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20color%3A%20'%23f00'%2C%0A%20%20%20%20%20%20fontWeight%3A%20'bold'%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)%3B%0A%0Alet%20slider%20%3D%20ref(10)%3B%0Alet%20slider2%20%3D%20ref(15)%3B%0Alet%20slider3%20%3D%20ref(%5B20%2C%2035%5D)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-slider.has-marks%7B%0A%20%20margin-bottom%3A%201.5rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:F(()=>[B("div",null,[G,s(n,{marks:d(e),modelValue:d(E),"onUpdate:modelValue":l[0]||(l[0]=r=>A(E)?E.value=r:E=r)},null,8,["marks","modelValue"]),H,s(n,{marks:d(e),included:!1,modelValue:d(o),"onUpdate:modelValue":l[1]||(l[1]=r=>A(o)?o.value=r:o=r)},null,8,["marks","modelValue"]),J,s(n,{marks:d(e),range:"",modelValue:d(t),"onUpdate:modelValue":l[2]||(l[2]=r=>A(t)?t.value=r:t=r)},null,8,["marks","modelValue"])])]),_:1})}}},L=p(K,[["__scopeId","data-v-06926421"]]);const O={__name:"custom-tip",setup(c){let e=C(50);return(E,o)=>{const t=a("BsSlider"),i=a("demo-box");return _(),u(i,{id:"slider_custom-tip",title:{cn:"自定义提示",en:"Custom tooltip"},description:{cn:"%3Cp%3E%E4%BD%BF%E7%94%A8%3Ccode%3EtooltipFormatter%3C%2Fcode%3E%E5%8F%AF%E4%BB%A5%E6%A0%BC%E5%BC%8F%E5%8C%96Tooltip%E7%9A%84%E5%86%85%E5%AE%B9%EF%BC%8C%E5%AE%83%E6%8E%A5%E6%94%B6%E4%B8%80%E4%B8%AA%3Ccode%3EFunction%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E6%95%B0%E6%8D%AE%3C%2Fp%3E%0A",en:"%3Cp%3ETooltip%20content%20can%20be%20formatted%20using%20%3Ccode%3EtooltipFormatter%3C%2Fcode%3E%2C%20it%20receives%20a%20%3Ccode%3EFunction%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsSlider%20v-model%3D%22slider%22%20%3Amin%3D%223%22%20%3Amax%3D%2293%22%20%3Atooltip-formatter%3D%22(val)%20%3D%3E%20%7B%20return%20'%E5%BD%93%E5%89%8D%E5%80%BC%E4%B8%BA%EF%BC%9A'%20%2B%20val%3B%7D%22%3E%3C%2FBsSlider%3E%0A%20%20%20%20%3CBsSlider%20v-model%3D%22slider%22%20%3Amin%3D%223%22%20%3Amax%3D%2293%22%20tooltip-raw-content%20%3Atooltip-formatter%3D%22(val)%20%3D%3E%20%7B%20return%20%60%E5%BD%93%E5%89%8D%E5%80%BC%E4%B8%BA%EF%BC%9A%3Cstrong%20style%3D'font-size%3A%201.2rem%3B'%3E%24%7Bval%7D%3C%2Fstrong%3E%60%3B%7D%22%3E%3C%2FBsSlider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20slider%20%3D%20ref(50)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-slider%7B%0A%20%20margin-bottom%3A%200.5rem%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:F(()=>[B("div",null,[s(t,{modelValue:d(e),"onUpdate:modelValue":o[0]||(o[0]=l=>A(e)?e.value=l:e=l),min:3,max:93,"tooltip-formatter":l=>"当前值为："+l},null,8,["modelValue","tooltip-formatter"]),s(t,{modelValue:d(e),"onUpdate:modelValue":o[1]||(o[1]=l=>A(e)?e.value=l:e=l),min:3,max:93,"tooltip-raw-content":"","tooltip-formatter":l=>`当前值为：<strong style='font-size: 1.2rem;'>${l}</strong>`},null,8,["modelValue","tooltip-formatter"])])]),_:1})}}},P=p(O,[["__scopeId","data-v-86e0e154"]]),Q=y({name:"DemoIndex",components:{Basic:w,Vertical:R,Range:M,Step:q,Marks:L,CustomTip:P}}),X={class:"demo-index"};function Y(c,e,E,o,t,i){const l=a("Basic"),n=a("Vertical"),m=a("Range"),r=a("Step"),V=a("Marks"),S=a("CustomTip"),x=a("component-doc");return _(),u(x,{"component-name":"slider"},{default:F(()=>[B("div",X,[s(l),s(n),s(m),s(r),s(V),s(S)])]),_:1})}const e2=p(Q,[["render",Y]]);export{e2 as default};