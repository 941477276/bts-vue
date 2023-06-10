import{_ as u,r as d,c as b,w as t,o as l,a as p,d as o,b as e,g as A}from"./index-637c4ade.js";const f={},F=p("hr",null,null,-1);function y(C,c){const n=d("bs-button"),s=d("bs-button-group"),E=d("bs-dropdown-item"),r=d("bs-dropdown"),a=d("demo-box");return l(),b(a,{id:"button-group_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E4%BD%BF%E7%94%A8%E6%8C%89%E9%92%AE%E7%BB%84%E5%B0%86%E4%B8%80%E7%B3%BB%E5%88%97%E6%8C%89%E9%92%AE%E7%BB%84%E5%90%88%E5%9C%A8%E4%B8%80%E8%A1%8C%E4%B8%AD%EF%BC%8C%E5%B8%B8%E7%94%A8%E4%BA%8E%E5%A4%9A%E9%A1%B9%E7%B1%BB%E4%BC%BC%E6%93%8D%E4%BD%9C%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EUse%20a%20button%20group%20to%20group%20a%20series%20of%20buttons%20on%20a%20row%2C%20often%20for%20multiple%20similar%20actions.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button-group%20title%3D%22a%20button%20group%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ELeft%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3EMiddle%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ERight%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%20%20%3Chr%3E%0A%20%20%20%20%3Cbs-button-group%3E%0A%20%20%20%20%20%20%3Cbs-dropdown%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ELeft%20Dropdown%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EHtml%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3ECss%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EJavascript%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-dropdown%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22success%22%3Esuccess%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-dropdown%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ECentro%20Dropdown%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EHtml%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3ECss%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EJavascript%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-dropdown%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22warning%22%3Ewarning%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-dropdown%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ERight%20Dropdown%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EHtml%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3ECss%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EJavascript%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-dropdown%3E%0A%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[p("div",null,[o(s,{title:"a button group"},{default:t(()=>[o(n,{type:"secondary"},{default:t(()=>[e("Left")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Middle")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Right")]),_:1})]),_:1}),F,o(s,null,{default:t(()=>[o(r,null,{content:t(()=>[o(E,null,{default:t(()=>[e("Html")]),_:1}),o(E,null,{default:t(()=>[e("Css")]),_:1}),o(E,null,{default:t(()=>[e("Javascript")]),_:1})]),default:t(()=>[o(n,{type:"primary"},{default:t(()=>[e("Left Dropdown")]),_:1})]),_:1}),o(n,{type:"success"},{default:t(()=>[e("success")]),_:1}),o(r,null,{content:t(()=>[o(E,null,{default:t(()=>[e("Html")]),_:1}),o(E,null,{default:t(()=>[e("Css")]),_:1}),o(E,null,{default:t(()=>[e("Javascript")]),_:1})]),default:t(()=>[o(n,{type:"primary"},{default:t(()=>[e("Centro Dropdown")]),_:1})]),_:1}),o(n,{type:"warning"},{default:t(()=>[e("warning")]),_:1}),o(r,null,{content:t(()=>[o(E,null,{default:t(()=>[e("Html")]),_:1}),o(E,null,{default:t(()=>[e("Css")]),_:1}),o(E,null,{default:t(()=>[e("Javascript")]),_:1})]),default:t(()=>[o(n,{type:"primary"},{default:t(()=>[e("Right Dropdown")]),_:1})]),_:1})]),_:1})])]),_:1},8,["description"])}const w=u(f,[["render",y]]),B={};function g(C,c){const n=d("bs-button"),s=d("bs-dropdown-item"),E=d("bs-dropdown"),r=d("bs-button-group"),a=d("demo-box");return l(),b(a,{id:"button-group_vertical",title:{cn:"垂直的",en:"Vertical variation"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Evertical%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E4%BD%BF%E4%B8%80%E7%BB%84%E6%8C%89%E9%92%AE%E5%9E%82%E7%9B%B4%E6%8E%92%E5%B8%83%E8%80%8C%E4%B8%8D%E6%98%AF%E6%B0%B4%E5%B9%B3%E6%8E%92%E5%B8%83%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Evertical%3C%2Fcode%3E%20attribute%20to%20make%20a%20group%20of%20buttons%20arranged%20vertically%20instead%20of%20horizontally%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-button-group%20vertical%3E%0A%20%20%20%20%20%20%3Cbs-dropdown%20placement%3D%22right%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ETop%20Dropdown%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EHtml%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3ECss%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EJavascript%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-dropdown%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22success%22%3Esuccess%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-dropdown%20placement%3D%22right%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ECentro%20Dropdown%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EHtml%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3ECss%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EJavascript%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-dropdown%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22warning%22%3Ewarning%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-dropdown%20placement%3D%22right%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3EBottom%20Dropdown%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EHtml%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3ECss%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-dropdown-item%3EJavascript%3C%2Fbs-dropdown-item%3E%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-dropdown%3E%0A%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[p("div",null,[o(r,{vertical:""},{default:t(()=>[o(E,{placement:"right"},{content:t(()=>[o(s,null,{default:t(()=>[e("Html")]),_:1}),o(s,null,{default:t(()=>[e("Css")]),_:1}),o(s,null,{default:t(()=>[e("Javascript")]),_:1})]),default:t(()=>[o(n,{type:"primary"},{default:t(()=>[e("Top Dropdown")]),_:1})]),_:1}),o(n,{type:"success"},{default:t(()=>[e("success")]),_:1}),o(E,{placement:"right"},{content:t(()=>[o(s,null,{default:t(()=>[e("Html")]),_:1}),o(s,null,{default:t(()=>[e("Css")]),_:1}),o(s,null,{default:t(()=>[e("Javascript")]),_:1})]),default:t(()=>[o(n,{type:"primary"},{default:t(()=>[e("Centro Dropdown")]),_:1})]),_:1}),o(n,{type:"warning"},{default:t(()=>[e("warning")]),_:1}),o(E,{placement:"right"},{content:t(()=>[o(s,null,{default:t(()=>[e("Html")]),_:1}),o(s,null,{default:t(()=>[e("Css")]),_:1}),o(s,null,{default:t(()=>[e("Javascript")]),_:1})]),default:t(()=>[o(n,{type:"primary"},{default:t(()=>[e("Bottom Dropdown")]),_:1})]),_:1})]),_:1})])]),_:1})}const D=u(B,[["render",g]]),v={},h={style:{"margin-top":"1rem"}},x={style:{"margin-top":"1rem"}};function H(C,c){const n=d("bs-button"),s=d("bs-button-group"),E=d("demo-box");return l(),b(E,{id:"button-group_size",title:{cn:"不同尺寸",en:"Different sizes"},description:{cn:"%3Cp%3E%E6%8C%89%E9%92%AE%E7%BB%84%E4%B8%8E%E6%8C%89%E9%92%AE%E4%B8%80%E6%A0%B7%E6%9C%893%E4%B8%AA%E5%B0%BA%E5%AF%B8%E5%A4%A7%E5%B0%8F%EF%BC%8C%E5%88%86%E5%88%AB%E4%B8%BA%3Ccode%3Esm%3C%2Fcode%3E%E3%80%81%3Ccode%3Elg%3C%2Fcode%3E%E5%92%8C%E9%BB%98%E8%AE%A4%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20button%20group%20has%203%20sizes%20like%20the%20button%2C%20which%20are%20%3Ccode%3Esm%3C%2Fcode%3E%2C%20%3Ccode%3Elg%3C%2Fcode%3E%20and%20default%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%0A%20%20%20%20%20%20%3Cbs-button-group%20title%3D%22%E6%8C%89%E9%92%AE%E7%BB%84%22%20size%3D%22sm%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ELeft%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3EMiddle%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ERight%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A%201rem%3B%22%3E%0A%20%20%20%20%20%20%3Cbs-button-group%20title%3D%22%E6%8C%89%E9%92%AE%E7%BB%84%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ELeft%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3EMiddle%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ERight%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Cdiv%20style%3D%22margin-top%3A%201rem%3B%22%3E%0A%20%20%20%20%20%20%3Cbs-button-group%20title%3D%22%E6%8C%89%E9%92%AE%E7%BB%84%22%20size%3D%22lg%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ELeft%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3EMiddle%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22secondary%22%3ERight%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Fbs-button-group%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[p("div",null,[p("div",null,[o(s,{title:"按钮组",size:"sm"},{default:t(()=>[o(n,{type:"secondary"},{default:t(()=>[e("Left")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Middle")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Right")]),_:1})]),_:1})]),p("div",h,[o(s,{title:"按钮组"},{default:t(()=>[o(n,{type:"secondary"},{default:t(()=>[e("Left")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Middle")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Right")]),_:1})]),_:1})]),p("div",x,[o(s,{title:"按钮组",size:"lg"},{default:t(()=>[o(n,{type:"secondary"},{default:t(()=>[e("Left")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Middle")]),_:1}),o(n,{type:"secondary"},{default:t(()=>[e("Right")]),_:1})]),_:1})])])]),_:1})}const J=u(v,[["render",H]]),$=A({name:"DemoIndex",components:{Basic:w,Vertical:D,Size:J}}),z={class:"demo-index"};function L(C,c,n,s,E,r){const a=d("Basic"),i=d("Vertical"),m=d("Size"),_=d("component-doc");return l(),b(_,{"component-name":"button-group"},{default:t(()=>[p("div",z,[o(a),o(i),o(m)])]),_:1})}const M=u($,[["render",L]]);export{M as default};
