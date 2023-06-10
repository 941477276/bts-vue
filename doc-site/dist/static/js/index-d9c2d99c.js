import{i as C,r as E,c as A,w as u,o as p,a as t,d as l,u as d,k as a,t as f,b as c,g as V,_ as T}from"./index-637c4ade.js";const g={__name:"basic",setup(B){let e=C(new Date);return(n,m)=>{const i=E("BsTimePicker"),r=E("demo-box");return p(),A(r,{id:"time-picker_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time%22%20placeholder%3D%22Select%20a%20time%22%3E%3C%2FBsTimePicker%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time%20%3D%20ref(new%20Date())%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[l(i,{modelValue:d(e),"onUpdate:modelValue":m[0]||(m[0]=o=>a(e)?e.value=o:e=o),placeholder:"Select a time"},null,8,["modelValue"])])]),_:1})}}},H=g,x=t("h6",null,[c("Display formatting("),t("code",null,'format="HH时mm分ss秒"'),c(")")],-1),w=t("h6",null,[c("Value formatting("),t("code",null,'value-format="HH时mm分ss秒"'),c(")")],-1),P={__name:"format",setup(B){let e=C(new Date),n=C("18时02分25秒");return(m,i)=>{const r=E("BsTimePicker"),o=E("demo-box");return p(),A(o,{id:"time-picker_format",title:{cn:"格式化",en:"Format"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3EDisplay%20formatting(%3Ccode%3Eformat%3D%22HH%E6%97%B6mm%E5%88%86ss%E7%A7%92%22%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time1%22%20format%3D%22HH%E6%97%B6mm%E5%88%86ss%E7%A7%92%22%3E%3C%2FBsTimePicker%3E%0A%20%20%20%20%3Cp%3EValue%EF%BC%9A%7B%7B%20time1%20%7D%7D%3C%2Fp%3E%0A%0A%20%20%20%20%3Ch6%3EValue%20formatting(%3Ccode%3Evalue-format%3D%22HH%E6%97%B6mm%E5%88%86ss%E7%A7%92%22%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time2%22%20value-format%3D%22HH%E6%97%B6mm%E5%88%86ss%E7%A7%92%22%3E%3C%2FBsTimePicker%3E%0A%20%20%20%20%3Cp%3EValue%EF%BC%9A%7B%7B%20time2%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time1%20%3D%20ref(new%20Date())%3B%0Alet%20time2%20%3D%20ref('18%E6%97%B602%E5%88%8625%E7%A7%92')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[x,l(r,{modelValue:d(e),"onUpdate:modelValue":i[0]||(i[0]=s=>a(e)?e.value=s:e=s),format:"HH时mm分ss秒"},null,8,["modelValue"]),t("p",null,"Value："+f(d(e)),1),w,l(r,{modelValue:d(n),"onUpdate:modelValue":i[1]||(i[1]=s=>a(n)?n.value=s:n=s),"value-format":"HH时mm分ss秒"},null,8,["modelValue"]),t("p",null,"Value："+f(d(n)),1)])]),_:1})}}},z=P,y=t("h6",null,[c("Only hours and minutes("),t("code",null,'format="HH:mm"'),c(")")],-1),S=t("h6",null,[c("Only minutes and seconds("),t("code",null,'format="mm:ss"'),c(")")],-1),U={__name:"choose-time",setup(B){let e=C(new Date),n=C(new Date);return(m,i)=>{const r=E("BsTimePicker"),o=E("demo-box");return p(),A(o,{id:"time-picker_choose-time",title:{cn:"选择时分",en:"Choose time"},description:{cn:"%3Cp%3E%E4%B8%8B%E6%8B%89%E6%B5%AE%E7%AA%97%E4%B8%AD%E7%9A%84%E5%88%97%E4%BC%9A%E9%9A%8F%E7%9D%80%3Ccode%3Eformat%3C%2Fcode%3E%E5%8F%98%E5%8C%96%EF%BC%8C%E5%BD%93%E7%95%A5%E5%8E%BB%3Ccode%3Eformat%3C%2Fcode%3E%E4%B8%AD%E7%9A%84%E6%9F%90%E9%83%A8%E5%88%86%E6%97%B6%EF%BC%8C%E6%B5%AE%E5%B1%82%E4%B8%AD%E5%AF%B9%E5%BA%94%E7%9A%84%E5%88%97%E4%B9%9F%E4%BC%9A%E6%B6%88%E5%A4%B1%E3%80%82%E6%B3%A8%E6%84%8F%EF%BC%8Cformat%E5%8F%AA%E6%98%AF%E6%94%B9%E5%8F%98%E6%98%BE%E7%A4%BA%E7%9A%84%E6%A0%BC%E5%BC%8F%EF%BC%8C%E5%B9%B6%E9%9D%9E%E6%94%B9%E5%8F%98%3Ccode%3Emodel-value%3C%2Fcode%3E%E5%80%BC%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20columns%20in%20the%20drop-down%20will%20change%20with%20%3Ccode%3Eformat%3C%2Fcode%3E%2C%20when%20a%20certain%20part%20in%20%3Ccode%3Eformat%3C%2Fcode%3E%20is%20omitted%2C%20the%20corresponding%20columns%20in%20the%20drop-down%20will%20also%20disappear.%20Note%20that%20format%20only%20changes%20the%20displayed%20format%2C%20not%20the%20%3Ccode%3Emodel-value%3C%2Fcode%3E%20value.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3EOnly%20hours%20and%20minutes(%3Ccode%3Eformat%3D%22HH%3Amm%22%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time1%22%20format%3D%22HH%3Amm%22%3E%3C%2FBsTimePicker%3E%0A%0A%20%20%20%20%3Ch6%3EOnly%20minutes%20and%20seconds(%3Ccode%3Eformat%3D%22mm%3Ass%22%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time2%22%20format%3D%22mm%3Ass%22%3E%3C%2FBsTimePicker%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time1%20%3D%20ref(new%20Date())%3B%0Alet%20time2%20%3D%20ref(new%20Date())%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[y,l(r,{modelValue:d(e),"onUpdate:modelValue":i[0]||(i[0]=s=>a(e)?e.value=s:e=s),format:"HH:mm"},null,8,["modelValue"]),S,l(r,{modelValue:d(n),"onUpdate:modelValue":i[1]||(i[1]=s=>a(n)?n.value=s:n=s),format:"mm:ss"},null,8,["modelValue"])])]),_:1},8,["description"])}}},$=U,N={__name:"use-12-hours",setup(B){let e=C("09:27:30 am");return(n,m)=>{const i=E("BsTimePicker"),r=E("demo-box");return p(),A(r,{id:"time-picker_use-12-hours",title:{cn:"12小时制",en:"12-hour"},description:{cn:"%3Cp%3E12%E5%B0%8F%E6%97%B6%E5%88%B6%E7%9A%84%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%E5%99%A8%EF%BC%8C%E8%AE%BE%E7%BD%AE%3Ccode%3Euse12Hours%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E5%BC%80%E5%90%AF12%E5%B0%8F%E6%97%B6%E5%88%B6%EF%BC%8C%E9%BB%98%E8%AE%A4%E7%9A%84%3Ccode%3Eformat%3C%2Fcode%3E%E4%B8%BA%3Ccode%3Ehh%3Amm%3Ass%20a%3C%2Fcode%3E%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3E12-hour%20time%20selector%2C%20set%20%3Ccode%3Euse12Hours%3C%2Fcode%3E%20attribute%20to%20enable%2012-hour%20format%2C%20default%20%3Ccode%3Eformat%3C%2Fcode%3E%20is%20%3Ccode%3Ehh%3Amm%3Ass%20a%3C%2Fcode%3E.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time%22%20use12-hours%20value-format%3D%22h%3Amm%3Ass%22%3E%3C%2FBsTimePicker%3E%0A%20%20%20%20%3Cp%3EValue%EF%BC%9A%7B%7B%20time%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time%20%3D%20ref('09%3A27%3A30%20am')%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[l(i,{modelValue:d(e),"onUpdate:modelValue":m[0]||(m[0]=o=>a(e)?e.value=o:e=o),"use12-hours":"","value-format":"h:mm:ss"},null,8,["modelValue"]),t("p",null,"Value："+f(d(e)),1)])]),_:1},8,["description"])}}},O=N,M=t("h6",null,"Disable picker(整体禁用)",-1),L=t("h6",null,"Disabled some options(禁用部分时分秒)",-1),I={__name:"disabled",setup(B){let e=C(new Date),n=C(new Date),m=function(o,s){return o>20},i=function(o,s,F){return s<40},r=function(o,s,F,D){return F>20&&F<35};return(o,s)=>{const F=E("BsTimePicker"),D=E("demo-box");return p(),A(D,{id:"time-picker_disabled",title:{cn:"禁用",en:"Disabled"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Edisabled%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E7%A6%81%E7%94%A8%E6%97%B6%E9%97%B4%E9%80%89%E6%8B%A9%EF%BC%8C%E8%AE%BE%E7%BD%AE%3Ccode%3Edisabled-hours%3C%2Fcode%3E%E3%80%81%3Ccode%3Edisabled-minutes%3C%2Fcode%3E%E3%80%81%3Ccode%3Edisabled-seconds%3C%2Fcode%3E%E5%8F%AF%E5%88%86%E5%88%AB%E7%A6%81%E7%94%A8%E6%97%B6%E3%80%81%E5%88%86%E3%80%81%E7%A7%92%3C%2Fp%3E%0A",en:"%3Cp%3E12-hour%20time%20selector%2C%20set%20%3Ccode%3Euse12Hours%3C%2Fcode%3E%20attribute%20to%20enable%2012-hour%20format%2C%20default%20%3Ccode%3Eformat%3C%2Fcode%3E%20is%20%3Ccode%3Ehh%3Amm%3Ass%20a%3C%2Fcode%3E.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3EDisable%20picker(%E6%95%B4%E4%BD%93%E7%A6%81%E7%94%A8)%3C%2Fh6%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time1%22%20disabled%3E%3C%2FBsTimePicker%3E%0A%0A%20%20%20%20%3Ch6%3EDisabled%20some%20options(%E7%A6%81%E7%94%A8%E9%83%A8%E5%88%86%E6%97%B6%E5%88%86%E7%A7%92)%3C%2Fh6%3E%0A%20%20%20%20%3CBsTimePicker%0A%20%20%20%20%20%20v-model%3D%22time2%22%0A%20%20%20%20%20%20%3Adisabled-hours%3D%22disabledHours%22%0A%20%20%20%20%20%20%3Adisabled-minutes%3D%22disabledMinutes%22%0A%20%20%20%20%20%20%3Adisabled-seconds%3D%22disabledSeconds%22%3E%3C%2FBsTimePicker%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time1%20%3D%20ref(new%20Date())%3B%0Alet%20time2%20%3D%20ref(new%20Date())%3B%0A%0Alet%20disabledHours%20%3D%20function%20(hour%2C%20use12Hours)%20%7B%0A%20%20return%20hour%20%3E%2020%3B%0A%7D%3B%0Alet%20disabledMinutes%20%3D%20function%20(hour%2C%20minute%2C%20use12Hours)%20%7B%0A%20%20return%20minute%20%3C%2040%3B%0A%7D%3B%0Alet%20disabledSeconds%20%3D%20function%20(hour%2C%20minute%2C%20second%2C%20use12Hours)%20%7B%0A%20%20return%20second%20%3E%2020%20%26%26%20second%20%3C%2035%3B%0A%7D%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[M,l(F,{modelValue:d(e),"onUpdate:modelValue":s[0]||(s[0]=_=>a(e)?e.value=_:e=_),disabled:""},null,8,["modelValue"]),L,l(F,{modelValue:d(n),"onUpdate:modelValue":s[1]||(s[1]=_=>a(n)?n.value=_:n=_),"disabled-hours":d(m),"disabled-minutes":d(i),"disabled-seconds":d(r)},null,8,["modelValue","disabled-hours","disabled-minutes","disabled-seconds"])])]),_:1},8,["description"])}}},R=I,j=t("h6",null,[c("Large size("),t("code",null,"size=lg"),c(")")],-1),q=t("h6",null,"Default size",-1),G=t("h6",null,[c("Small size("),t("code",null,"size=sm"),c(")")],-1),J={__name:"size",setup(B){let e=C(new Date);return(n,m)=>{const i=E("bs-time-picker"),r=E("demo-box");return p(),A(r,{id:"time-picker_size",title:{cn:"不同大小",en:"Different size"},description:{cn:"%3Cp%3E%3Ccode%3Ebs-time-picker%3C%2Fcode%3E%E6%9C%89%E5%A4%A7%E3%80%81%E4%B8%AD%E3%80%81%E5%B0%8F3%E7%A7%8D%E5%B0%BA%E5%AF%B8%EF%BC%8C%E9%80%9A%E8%BF%87%3Ccode%3Esize%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E6%9D%A5%E8%AE%BE%E7%BD%AE%E5%AE%83%E4%BB%AC%EF%BC%8C%E5%AE%83%E4%BB%AC%E5%AF%B9%E5%BA%94%E7%9A%84%E5%80%BC%E4%B8%BA%3Ccode%3Elg%3C%2Fcode%3E%E3%80%81%3Ccode%3E%E9%BB%98%E8%AE%A4%3C%2Fcode%3E%E3%80%81%3Ccode%3Esm%3C%2Fcode%3E%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3E%3Ccode%3Ebs-time-picker%3C%2Fcode%3E%20has%20three%20sizes%EF%BC%9Alarge%2C%20medium%2C%20and%20small.%20They%20are%20set%20through%20the%20%3Ccode%3Esize%3C%2Fcode%3E%20attribute%2C%20and%20their%20corresponding%20values%20are%20%3Ccode%3Elg%3C%2Fcode%3E%2C%20%3Ccode%3Edefault%3C%2Fcode%3E%2C%20and%20%3Ccode%3Elg%3C%2Fcode%3E.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3ELarge%20size(%3Ccode%3Esize%3Dlg%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-time-picker%20v-model%3D%22time%22%20size%3D%22lg%22%20clearable%3E%3C%2Fbs-time-picker%3E%0A%0A%20%20%20%20%3Ch6%3EDefault%20size%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-time-picker%20v-model%3D%22time%22%20clearable%3E%3C%2Fbs-time-picker%3E%0A%0A%20%20%20%20%3Ch6%3ESmall%20size(%3Ccode%3Esize%3Dsm%3C%2Fcode%3E)%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-time-picker%20v-model%3D%22time%22%20size%3D%22sm%22%20clearable%3E%3C%2Fbs-time-picker%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time%20%3D%20ref(new%20Date())%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[j,l(i,{modelValue:d(e),"onUpdate:modelValue":m[0]||(m[0]=o=>a(e)?e.value=o:e=o),size:"lg",clearable:""},null,8,["modelValue"]),q,l(i,{modelValue:d(e),"onUpdate:modelValue":m[1]||(m[1]=o=>a(e)?e.value=o:e=o),clearable:""},null,8,["modelValue"]),G,l(i,{modelValue:d(e),"onUpdate:modelValue":m[2]||(m[2]=o=>a(e)?e.value=o:e=o),size:"sm",clearable:""},null,8,["modelValue"])])]),_:1},8,["description"])}}},K=J,Q={__name:"custom-trigger",setup(B){let e=C();return(n,m)=>{const i=E("bs-button"),r=E("BsTimePicker"),o=E("demo-box");return p(),A(o,{id:"time-picker_custom-trigger",title:{cn:"自定义触发",en:"Custom trigger"},description:{cn:"%3Cp%3E%E9%80%9A%E8%BF%87%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E5%8F%AF%E4%BB%A5%E8%87%AA%E5%AE%9A%E4%B9%89%E8%A7%A6%E5%8F%91%E6%98%BE%E7%A4%BA%E4%B8%8B%E6%8B%89%E7%9A%84%E5%85%83%E7%B4%A0%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20element%20that%20triggers%20the%20display%20of%20the%20drop-down%20can%20be%20customized%20through%20the%20default%20slot%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time%22%20value-format%3D%22HH%3Amm%3Ass%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3EButton%20trigger%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTimePicker%3E%0A%20%20%20%20%3Cp%3EValue%3A%20%7B%7B%20time%20%7C%7C%20'--'%20%7D%7D%3C%2Fp%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time%20%3D%20ref()%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[l(r,{modelValue:d(e),"onUpdate:modelValue":m[0]||(m[0]=s=>a(e)?e.value=s:e=s),"value-format":"HH:mm:ss"},{default:u(()=>[l(i,{type:"primary",plain:""},{default:u(()=>[c("Button trigger")]),_:1})]),_:1},8,["modelValue"]),t("p",null,"Value: "+f(d(e)||"--"),1)])]),_:1})}}},W=Q,X={__name:"show-bottom-button",setup(B){let e=C(new Date);return(n,m)=>{const i=E("BsTimePicker"),r=E("demo-box");return p(),A(r,{id:"time-picker_show-bottom-button",title:{cn:"显示底部按钮",en:"Show bottom button"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Eshow-footer%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E6%98%BE%E7%A4%BA%E5%BA%95%E9%83%A8%E6%8C%89%E9%92%AE%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Eshow-footer%3C%2Fcode%3E%20property%20to%20display%20the%20bottom%20button%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTimePicker%20v-model%3D%22time%22%20show-footer%3E%3C%2FBsTimePicker%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20time%20%3D%20ref(new%20Date())%3B%0A%3C%2Fscript%3E"},{default:u(()=>[t("div",null,[l(i,{modelValue:d(e),"onUpdate:modelValue":m[0]||(m[0]=o=>a(e)?e.value=o:e=o),"show-footer":""},null,8,["modelValue"])])]),_:1})}}},Y=X,Z=V({name:"DemoIndex",components:{Basic:H,Format:z,ChooseTime:$,Use12Hour:O,Disabled:R,Size:K,CustomTrigger:W,ShowBottomButton:Y}}),ee={class:"demo-index"};function oe(B,e,n,m,i,r){const o=E("Basic"),s=E("Format"),F=E("ChooseTime"),D=E("Use12Hour"),_=E("Disabled"),h=E("Size"),b=E("CustomTrigger"),v=E("ShowBottomButton"),k=E("component-doc");return p(),A(k,{"component-name":"time-picker"},{default:u(()=>[t("div",ee,[l(o),l(s),l(F),l(D),l(_),l(h),l(b),l(v)])]),_:1})}const Ee=T(Z,[["render",oe]]);export{Ee as default};
