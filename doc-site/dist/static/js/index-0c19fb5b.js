import{i as m,r as E,c as C,w as u,o as p,a as n,d,b as r,t as c,g as _,_ as D}from"./index-ac3d549c.js";const V={style:{"margin-top":"0.5rem"}},f={__name:"basic",setup(A){const e=m("");return(i,o)=>{const a=E("bs-radio"),s=E("demo-box");return p(),C(s,{id:"radio_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E4%BD%BF%E7%94%A8%20%3Ccode%3Ev-model%3C%2Fcode%3E%20%E5%AE%9E%E7%8E%B0%E6%95%B0%E6%8D%AE%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EUse%20%3Ccode%3Ev-model%3C%2Fcode%3E%20for%20two-way%20data%20binding.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22vue%22%3EVue%3C%2Fbs-radio%3E%0A%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22react%22%20label%3D%22React%22%20%2F%3E%0A%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22angular%22%3EAngular%3C%2Fbs-radio%3E%0A%20%20%20%20%3Cp%20style%3D%22margin-top%3A%200.5rem%3B%22%3EYour%20choose%20is%3A%20%3Cstrong%3E%7B%7B%20jsFramework%20%7C%7C%20'--'%20%7D%7D%3C%2Fstrong%3E%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Aconst%20jsFramework%20%3D%20ref('')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[n("div",null,[d(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value=t),value:"vue"},{default:u(()=>[r("Vue")]),_:1},8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=t=>e.value=t),value:"react",label:"React"},null,8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value=t),value:"angular"},{default:u(()=>[r("Angular")]),_:1},8,["modelValue"]),n("p",V,[r("Your choose is: "),n("strong",null,c(e.value||"--"),1)])])]),_:1},8,["description"])}}},g=f,w={style:{"margin-top":"0.5rem"}},k={__name:"disabled",setup(A){const e=m("");return(i,o)=>{const a=E("bs-radio"),s=E("demo-box");return p(),C(s,{id:"radio_disabled",title:{cn:"禁用状态",en:"Disabled"},description:{cn:"%3Cp%3E%E6%B7%BB%E5%8A%A0%3Ccode%3Edisabled%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E8%AE%BE%E7%BD%AE%E4%B8%BA%E4%B8%8D%E5%8F%AF%E7%94%A8%E7%8A%B6%E6%80%81%3C%2Fp%3E%0A",en:"%3Cp%3EAdding%20%3Ccode%3Edisabled%3C%2Fcode%3E%20attribute%20can%20be%20set%20to%20unavailable%20state%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22vue%22%3EVue%3C%2Fbs-radio%3E%0A%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22react%22%20label%3D%22React%22%20disabled%20%2F%3E%0A%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22angular%22%20disabled%3EAngular%3C%2Fbs-radio%3E%0A%20%20%20%20%3Cp%20style%3D%22margin-top%3A%200.5rem%3B%22%3EYour%20choose%20is%3A%20%3Cstrong%3E%7B%7B%20jsFramework%20%7C%7C%20'--'%20%7D%7D%3C%2Fstrong%3E%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Aconst%20jsFramework%20%3D%20ref('')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[n("div",null,[d(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=t=>e.value=t),value:"vue"},{default:u(()=>[r("Vue")]),_:1},8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=t=>e.value=t),value:"react",label:"React",disabled:""},null,8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=t=>e.value=t),value:"angular",disabled:""},{default:u(()=>[r("Angular")]),_:1},8,["modelValue"]),n("p",w,[r("Your choose is: "),n("strong",null,c(e.value||"--"),1)])])]),_:1})}}},x=k,j=n("h6",null,"数字类型",-1),U=n("h6",null,"Boolean类型",-1),$={__name:"different-values",setup(A){const e=m(""),i=m("");return(o,a)=>{const s=E("bs-radio"),t=E("demo-box");return p(),C(t,{id:"radio_different-values",title:{cn:"不同类型的值",en:"Different types of values"},description:{cn:"%3Cp%3E%3Ccode%3Ebs-radio%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E5%8F%AF%E4%BB%A5%E6%8E%A5%E5%8F%97%3Ccode%3Estring%3C%2Fcode%3E%E3%80%81%3Ccode%3Enumber%3C%2Fcode%3E%E3%80%81%3Ccode%3Eboolean%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20%3Ccode%3Ebs-radio%3C%2Fcode%3E%20component%20can%20accept%20%3Ccode%3Estring%3C%2Fcode%3E%2C%20%3Ccode%3Enumber%3C%2Fcode%3E%2C%20%3Ccode%3Eboolean%3C%2Fcode%3E%20values%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3E%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B%3C%2Fh6%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22numValue%22%20%3Avalue%3D%221%22%3EMan%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22numValue%22%20%3Avalue%3D%222%22%3EWoman%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22numValue%22%20%3Avalue%3D%223%22%3EShemale%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22numValue%22%20%3Avalue%3D%224%22%3EUnknown%3C%2Fbs-radio%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Ch6%3EBoolean%E7%B1%BB%E5%9E%8B%3C%2Fh6%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22boolValue%22%20%3Avalue%3D%22true%22%3EOn%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22boolValue%22%20%3Avalue%3D%22false%22%3EOff%3C%2Fbs-radio%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Aconst%20numValue%20%3D%20ref('')%3B%0Aconst%20boolValue%20%3D%20ref('')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[n("div",null,[j,n("div",null,[d(s,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value=l),value:1},{default:u(()=>[r("Man")]),_:1},8,["modelValue"]),d(s,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value=l),value:2},{default:u(()=>[r("Woman")]),_:1},8,["modelValue"]),d(s,{modelValue:e.value,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value=l),value:3},{default:u(()=>[r("Shemale")]),_:1},8,["modelValue"]),d(s,{modelValue:e.value,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value=l),value:4},{default:u(()=>[r("Unknown")]),_:1},8,["modelValue"])]),U,n("div",null,[d(s,{modelValue:i.value,"onUpdate:modelValue":a[4]||(a[4]=l=>i.value=l),value:!0},{default:u(()=>[r("On")]),_:1},8,["modelValue"]),d(s,{modelValue:i.value,"onUpdate:modelValue":a[5]||(a[5]=l=>i.value=l),value:!1},{default:u(()=>[r("Off")]),_:1},8,["modelValue"])])])]),_:1})}}},R=$,y={style:{"margin-top":"0.5rem"}},G={__name:"group",setup(A){const e=m("");return(i,o)=>{const a=E("bs-radio"),s=E("bs-radio-group"),t=E("demo-box");return p(),C(t,{id:"radio_group",title:{cn:"单选组合",en:"Radio group"},description:{cn:"%3Cp%3E%3Ccode%3Ebts-vue%3C%2Fcode%3E%E6%8F%90%E4%BE%9B%E4%BA%86%3Ccode%3Ebs-radio-group%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E6%9D%A5%E5%B0%86%E5%A4%9A%E4%B8%AA%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE%E8%BF%9B%E8%A1%8C%E7%BB%84%E5%90%88%EF%BC%8C%E7%BB%84%E5%90%88%E5%90%8E%E6%97%A0%E9%9C%80%E5%9C%A8%E6%AF%8F%E4%B8%80%E4%B8%AA%3Ccode%3Ebs-radio%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E4%B8%AD%E9%83%BD%E7%BB%91%E5%AE%9A%3Ccode%3Ev-model%3C%2Fcode%3E%EF%BC%8C%20%E8%80%8C%E5%8F%AA%E9%9C%80%E5%9C%A8%3Ccode%3Ebs-radio-group%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E4%B8%8A%E7%BB%91%E5%AE%9A%3Ccode%3Ev-model%3C%2Fcode%3E%EF%BC%8C%E5%9C%A8%3Ccode%3Ebs-radio%3C%2Fcode%3E%E4%B8%AD%E8%AE%BE%E7%BD%AE%3Ccode%3Evalue%3C%2Fcode%3E%E5%8D%B3%E5%8F%AF%3C%2Fp%3E%0A",en:"%3Cp%3E%3Ccode%3Ebts-vue%3C%2Fcode%3E%20provides%20the%20%3Ccode%3Ebs-radio-group%3C%2Fcode%3E%20component%20to%20combine%20multiple%20radio%20buttons.%20After%20the%20combination%2C%20there%20is%20no%20need%20to%20bind%20%3Ccode%3Ev-model%3C%2Fcode%3E%20in%20each%20%3Ccode%3Ebs-radio%3C%2Fcode%3E%20component.%20Instead%2C%20just%20bind%20%3Ccode%3Ev-model%3C%2Fcode%3E%20on%20the%20%3Ccode%3Ebs-radio-group%3C%2Fcode%3E%20component%20and%20set%20%3Ccode%3Evalue%3C%2Fcode%3E%20in%20%3Ccode%3Ebs-radio%3C%2Fcode%3E%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-radio-group%20v-model%3D%22jsFramework%22%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22vue%22%3EVue%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22react%22%20label%3D%22React%22%20%2F%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22angular%22%3EAngular%3C%2Fbs-radio%3E%0A%20%20%20%20%3C%2Fbs-radio-group%3E%0A%20%20%20%20%3Cp%20style%3D%22margin-top%3A%200.5rem%3B%22%3EYour%20choose%20is%3A%20%3Cstrong%3E%7B%7B%20jsFramework%20%7C%7C%20'--'%20%7D%7D%3C%2Fstrong%3E%20%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Aconst%20jsFramework%20%3D%20ref('')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[n("div",null,[d(s,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=l=>e.value=l)},{default:u(()=>[d(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),value:"vue"},{default:u(()=>[r("Vue")]),_:1},8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),value:"react",label:"React"},null,8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value=l),value:"angular"},{default:u(()=>[r("Angular")]),_:1},8,["modelValue"])]),_:1},8,["modelValue"]),n("p",y,[r("Your choose is: "),n("strong",null,c(e.value||"--"),1)])])]),_:1},8,["description"])}}},Y=G,O={__name:"group-disabled",setup(A){const e=m("");return(i,o)=>{const a=E("bs-radio"),s=E("bs-radio-group"),t=E("demo-box");return p(),C(t,{id:"radio_group-disabled",title:{cn:"单选组合——禁用",en:"Radio group--disabled"},description:{cn:"%3Cp%3E%E7%BB%99%3Ccode%3Ebs-radio-group%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E8%AE%BE%E7%BD%AE%3Ccode%3Edisabled%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E7%A6%81%E7%94%A8%E6%89%80%E6%9C%89%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Edisabled%3C%2Fcode%3E%20attribute%20to%20the%20%3Ccode%3Ebs-radio-group%3C%2Fcode%3E%20component%20to%20disable%20all%20radio%20buttons%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-radio-group%20v-model%3D%22jsFramework%22%20disabled%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22vue%22%3EVue%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22react%22%20label%3D%22React%22%20%2F%3E%0A%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22jsFramework%22%20value%3D%22angular%22%3EAngular%3C%2Fbs-radio%3E%0A%20%20%20%20%3C%2Fbs-radio-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Aconst%20jsFramework%20%3D%20ref('')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[n("div",null,[d(s,{modelValue:e.value,"onUpdate:modelValue":o[3]||(o[3]=l=>e.value=l),disabled:""},{default:u(()=>[d(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=l=>e.value=l),value:"vue"},{default:u(()=>[r("Vue")]),_:1},8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=l=>e.value=l),value:"react",label:"React"},null,8,["modelValue"]),d(a,{modelValue:e.value,"onUpdate:modelValue":o[2]||(o[2]=l=>e.value=l),value:"angular"},{default:u(()=>[r("Angular")]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])]),_:1})}}},S=O,N=_({name:"DemoIndex",components:{Basic:g,Disabled:x,DifferentValues:R,Group:Y,GroupDisabled:S}}),I={class:"demo-index"};function M(A,e,i,o,a,s){const t=E("Basic"),l=E("Disabled"),v=E("DifferentValues"),F=E("Group"),b=E("GroupDisabled"),B=E("component-doc");return p(),C(B,{"component-name":"radio"},{default:u(()=>[n("div",I,[d(t),d(l),d(v),d(F),d(b)])]),_:1})}const W=D(N,[["render",M]]);export{W as default};