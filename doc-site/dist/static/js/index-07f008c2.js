import{r as s,c as l,w as o,o as d,a as C,d as e,b as c,u as i,m as E,_ as u,J as _,K as D,g as h}from"./index-897cf5f9.js";const M={__name:"basic",setup(B){let t=function(){E("This is a normal message")};return(r,A)=>{const a=s("bs-button"),n=s("demo-box");return d(),l(n,{id:"message_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%3Ccode%3EMessage%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E4%B8%BB%E8%A6%81%E7%94%A8%E6%9D%A5%E4%BF%A1%E6%81%AF%E6%8F%90%E9%86%92%E5%8F%8D%E9%A6%88%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20%3Ccode%3EMessage%3C%2Fcode%3E%20component%20is%20mainly%20used%20for%20information%20reminder%20feedback%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22info%22%20%40click%3D%22showMsg%22%3EDisplay%20a%20normal%20message%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20showMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage('This%20is%20a%20normal%20message')%3B%0A%7D%3B%0A%3C%2Fscript%3E","start-version":""},{default:o(()=>[C("div",null,[e(a,{type:"info",onClick:i(t)},{default:o(()=>[c("Display a normal message")]),_:1},8,["onClick"])])]),_:1})}}},v=M;const w={__name:"other-types",setup(B){let t=function(){E("This is a normal message")},r=function(){E.success("This is a normal message")},A=function(){E.warning("This is a normal message")},a=function(){E.danger("This is a normal message")};return(n,g)=>{const m=s("bs-button"),p=s("demo-box");return d(),l(p,{id:"message_other-types",title:{cn:"其他类型",en:"Other type"},description:{cn:"%3Cp%3E%3Ccode%3EMessage%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E5%85%B1%E6%9C%89%E6%99%AE%E9%80%9A(%E9%BB%98%E8%AE%A4)%E3%80%81%E6%88%90%E5%8A%9F%E3%80%81%E8%AD%A6%E5%91%8A%E3%80%81%E9%94%99%E8%AF%AF4%E7%A7%8D%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%AE%83%E4%BB%AC%E5%88%86%E5%88%AB%E5%AF%B9%E5%BA%94%3Ccode%3Einfo%3C%2Fcode%3E%E3%80%81%3Ccode%3Esuccess%3C%2Fcode%3E%E3%80%81%3Ccode%3Edanger%3C%2Fcode%3E%E3%80%81%3Ccode%3Ewarning%3C%2Fcode%3E%3B%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20%3Ccode%3EMessage%3C%2Fcode%3E%20component%20has%20four%20types%EF%BC%9Anormal%20(default)%2C%20success%2C%20warning%2C%20and%20error%2C%20which%20correspond%20to%20%3Ccode%3Einfo%3C%2Fcode%3E%2C%20%3Ccode%3Esuccess%3C%2Fcode%3E%2C%20%3Ccode%3Edanger%3C%2Fcode%3E%2C%20and%20%3Ccode%3Ewarning%3C%2Fcode%3E%3B%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20plain%20type%3D%22info%22%20%40click%3D%22showMsg%22%3Eshow%20normal%20message%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20plain%20type%3D%22success%22%20%40click%3D%22successMsg%22%3Eshow%20success%20message%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20plain%20type%3D%22warning%22%20%40click%3D%22warningMsg%22%3Eshow%20warning%20message%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20plain%20type%3D%22danger%22%20%40click%3D%22dangerMsg%22%3Eshow%20danger%20message%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20showMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage('This%20is%20a%20normal%20message')%3B%0A%7D%3B%0Alet%20successMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage.success('This%20is%20a%20normal%20message')%3B%0A%7D%3B%0Alet%20warningMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage.warning('This%20is%20a%20normal%20message')%3B%0A%7D%3B%0Alet%20dangerMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage.danger('This%20is%20a%20normal%20message')%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:o(()=>[C("div",null,[e(m,{plain:"",type:"info",onClick:i(t)},{default:o(()=>[c("show normal message")]),_:1},8,["onClick"]),e(m,{plain:"",type:"success",onClick:i(r)},{default:o(()=>[c("show success message")]),_:1},8,["onClick"]),e(m,{plain:"",type:"warning",onClick:i(A)},{default:o(()=>[c("show warning message")]),_:1},8,["onClick"]),e(m,{plain:"",type:"danger",onClick:i(a)},{default:o(()=>[c("show danger message")]),_:1},8,["onClick"])])]),_:1},8,["description"])}}},y=u(w,[["__scopeId","data-v-53b86627"]]),k={__name:"message-merge",setup(B){let t=function(){E.info({message:"This is a normal message",grouping:!0})};return(r,A)=>{const a=s("bs-button"),n=s("demo-box");return d(),l(n,{id:"message_message-merge",title:{cn:"相同内容消息合并",en:"Merge messages"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%20%3Ccode%3Egrouping%3C%2Fcode%3E%20%E4%B8%BA%20%3Ccode%3Etrue%3C%2Fcode%3E%EF%BC%8C%E5%86%85%E5%AE%B9%E7%9B%B8%E5%90%8C%E7%9A%84%20%3Ccode%3Emessage%3C%2Fcode%3E%20%E5%B0%86%E8%A2%AB%E5%90%88%E5%B9%B6%E3%80%82%E8%AF%A5%E7%89%B9%E6%80%A7%E7%89%B9%E5%88%AB%E9%80%82%E7%94%A8%E4%BA%8Eapi%E6%8E%A5%E5%8F%A3%E6%8A%A5%E9%94%99%E4%BF%A1%E6%81%AF%E6%8F%90%E7%A4%BA%EF%BC%81%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20%3Ccode%3Egrouping%3C%2Fcode%3E%20to%20%3Ccode%3Etrue%3C%2Fcode%3E%2C%20%3Ccode%3Emessage%3C%2Fcode%3E%20with%20the%20same%20content%20will%20be%20merged.%20This%20feature%20is%20especially%20suitable%20for%20API%20interface%20error%20message%20prompts!%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22success%22%20plain%20%40click%3D%22showMsg%22%3EClick%20me%20more%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20showMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage.info(%7B%0A%20%20%20%20message%3A%20'This%20is%20a%20normal%20message'%2C%0A%20%20%20%20grouping%3A%20true%0A%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E","start-version":""},{default:o(()=>[C("div",null,[e(a,{type:"success",plain:"",onClick:i(t)},{default:o(()=>[c("Click me more")]),_:1},8,["onClick"])])]),_:1},8,["description"])}}},x=k,T={__name:"forever-message",setup(B){let t=function(){E({type:"danger",message:"This is a never disappear message!",duration:0,onClose(){alert("The message was manually closed")}})};return(r,A)=>{const a=s("bs-button"),n=s("demo-box");return d(),l(n,{id:"message_forever-message",title:{cn:"永不消失的消息",en:"Forever message"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%20%3Ccode%3Eduration%3C%2Fcode%3E%20%E4%B8%BA%20%3Ccode%3E0%3C%2Fcode%3E%EF%BC%8C%E6%B6%88%E6%81%AF%E5%B0%86%E6%B0%B8%E8%BF%9C%E4%B8%8D%E4%BC%9A%E6%B6%88%E5%A4%B1%EF%BC%8C%E9%99%A4%E9%9D%9E%E6%89%8B%E5%8A%A8%E5%85%B3%E9%97%AD%E5%AE%83%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20%3Ccode%3Eduration%3C%2Fcode%3E%20to%20%3Ccode%3E0%3C%2Fcode%3E%2C%20the%20message%20will%20never%20disappear%20unless%20it%20is%20manually%20turned%20off%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22danger%22%20plain%20%40click%3D%22showMsg%22%3EClick%20me%20more%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0A%0Alet%20showMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage(%7B%0A%20%20%20%20type%3A%20'danger'%2C%0A%20%20%20%20message%3A%20'This%20is%20a%20never%20disappear%20message!'%2C%0A%20%20%20%20duration%3A%200%2C%0A%20%20%20%20onClose%20()%20%7B%0A%20%20%20%20%20%20alert('The%20message%20was%20manually%20closed')%3B%0A%20%20%20%20%7D%0A%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E","start-version":""},{default:o(()=>[C("div",null,[e(a,{type:"danger",plain:"",onClick:i(t)},{default:o(()=>[c("Click me more")]),_:1},8,["onClick"])])]),_:1})}}},N=T;const V={__name:"custom-content",setup(B){let t=function(){E.success({icon:e("strong",{style:{color:"#fff",fontSize:"1.2rem"}},{default:()=>[e(_)]}),message:e("div",null,{default:()=>[e(D,{style:{marginRight:"0.5rem"}},{default:()=>"徽章"}),"This is a normal message！"]})})},r=function(){E.warning({message:e("div",null,{default:()=>[e(_,{style:{fontSize:"1.2rem",verticalAlign:"middle",marginRight:"0.5rem"}}),"this is a function message!"]})})};return(A,a)=>{const n=s("bs-button"),g=s("demo-box");return d(),l(g,{id:"message_custom-content",title:{cn:"自定义消息内容",en:"Custom message content"},description:{cn:"%3Cp%3E%3Ccode%3EMessage%3C%2Fcode%3E%E7%BB%84%E4%BB%B6%E7%9A%84%E6%B6%88%E6%81%AF%E5%86%85%E5%AE%B9%E5%8F%AF%E4%BB%A5%E4%B8%BA%E5%AD%97%E7%AC%A6%E4%B8%B2%E3%80%81%E5%87%BD%E6%95%B0(%E5%87%BD%E6%95%B0%E9%9C%80%E8%BF%94%E5%9B%9Estring%E6%88%96VNode)%E3%80%81VNode%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20message%20content%20of%20the%20%3Ccode%3EMessage%3C%2Fcode%3E%20component%20can%20be%20a%20string%2C%20a%20function%20(the%20function%20needs%20to%20return%20a%20string%20or%20VNode)%2C%20VNode%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22success%22%20plain%20%40click%3D%22showMsg%22%3EVNode%20message%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22warning%22%20plain%20%40click%3D%22showMsg2%22%3EFunction%20message%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20BsMessage%20%7D%20from%20'bts-vue'%3B%0Aimport%20%7B%20createVNode%20%7D%20from%20'vue'%3B%0Aimport%20%7B%20BsiBootstrapFill%20%7D%20from%20'vue3-bootstrap-icon%2Fes%2Ficons%2FBsiBootstrapFill'%3B%0Aimport%20BsBadge%20from%20'..%2F..%2Fbs-badge%2FBsBadge.vue'%3B%0A%0Alet%20showMsg%20%3D%20function%20()%20%7B%0A%20%20BsMessage.success(%7B%0A%20%20%20%20icon%3A%20createVNode('strong'%2C%20%7B%0A%20%20%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20'%23fff'%2C%0A%20%20%20%20%20%20%20%20fontSize%3A%20'1.2rem'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%20%7B%20default%3A%20()%20%3D%3E%20%5BcreateVNode(BsiBootstrapFill)%5D%20%7D)%2C%0A%20%20%20%20message%3A%20createVNode('div'%2C%20null%2C%20%7B%0A%20%20%20%20%20%20default%3A%20()%20%3D%3E%20%5B%0A%20%20%20%20%20%20%20%20createVNode(BsBadge%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%7B%20marginRight%3A%20'0.5rem'%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%20%7B%20default%3A%20()%20%3D%3E%20'%E5%BE%BD%E7%AB%A0'%20%7D)%2C%0A%20%20%20%20%20%20%20%20'This%20is%20a%20normal%20message%EF%BC%81'%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D)%0A%20%20%7D)%3B%0A%7D%3B%0A%0Alet%20showMsg2%20%3D%20function%20()%20%7B%0A%20%20BsMessage.warning(%7B%0A%20%20%20%20message%3A%20createVNode('div'%2C%20null%2C%20%7B%0A%20%20%20%20%20%20default%3A%20()%20%3D%3E%20%5B%0A%20%20%20%20%20%20%20%20createVNode(BsiBootstrapFill%2C%20%7B%0A%20%20%20%20%20%20%20%20%20%20style%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fontSize%3A%20'1.2rem'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20verticalAlign%3A%20'middle'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20marginRight%3A%20'0.5rem'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D)%2C%0A%20%20%20%20%20%20%20%20'this%20is%20a%20function%20message!'%0A%20%20%20%20%20%20%5D%0A%20%20%20%20%7D)%0A%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:o(()=>[C("div",null,[e(n,{type:"success",plain:"",onClick:i(t)},{default:o(()=>[c("VNode message")]),_:1},8,["onClick"]),e(n,{type:"warning",plain:"",onClick:i(r)},{default:o(()=>[c("Function message")]),_:1},8,["onClick"])])]),_:1},8,["description"])}}},$=u(V,[["__scopeId","data-v-f9d2a6db"]]),S=h({name:"DemoIndex",components:{Basic:v,OtherTypes:y,MessageMerge:x,ForeverMessage:N,CustomMessage:$}}),z={class:"demo-index"};function I(B,t,r,A,a,n){const g=s("Basic"),m=s("OtherTypes"),p=s("MessageMerge"),F=s("ForeverMessage"),f=s("CustomMessage"),b=s("component-doc");return d(),l(b,{"component-name":"message"},{default:o(()=>[C("div",z,[e(g),e(m),e(p),e(F),e(f)])]),_:1})}const R=u(S,[["render",I]]);export{R as default};