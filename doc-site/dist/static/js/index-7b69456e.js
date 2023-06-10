import{_ as d,r as o,c as r,w as t,o as c,a as l,d as e,b as E,i as _,u as B,p as y,h as D,k as g,j as $,g as I}from"./index-637c4ade.js";const V={};function R(A,p){const i=o("bs-button"),n=o("BsTooltip"),s=o("demo-box");return c(),r(s,{id:"tooltip_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E6%9C%80%E7%AE%80%E5%8D%95%E7%9A%84%E7%94%A8%E6%B3%95%EF%BC%8C%E9%BC%A0%E6%A0%87%E7%A7%BB%E5%85%A5%E7%9A%84%E6%97%B6%E5%80%99%E6%98%BE%E7%A4%BATooltip%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%20is%20to%20display%20the%20Tooltip%20when%20the%20mouse%20is%20enter%20in%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%20content%3D%22A%20tooltip!%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3EHover%20me%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[l("div",null,[e(n,{content:"A tooltip!"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("Hover me")]),_:1})]),_:1})])]),_:1})}const M=d(V,[["render",R]]);const P={},H={class:"directions-box"},z={class:"direction-top"},L={class:"direction-left-right"},O={class:"direction-left"},S={class:"direction-right"},N={class:"direction-bottom"};function U(A,p){const i=o("bs-button"),n=o("bs-tooltip"),s=o("demo-box");return c(),r(s,{id:"tooltip_placements",title:{cn:"显示位置",en:"Placements"},description:{cn:"%3Cp%3E%E6%9C%8912%E4%B8%AA%E4%B8%8D%E5%90%8C%E7%9A%84%E6%96%B9%E5%90%91%E6%98%BE%E7%A4%BATooltip%3C%2Fp%3E%0A",en:"%3Cp%3EThere%20are%2012%20different%20directions%20to%20display%20the%20Tooltip%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22directions-box%22%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22direction-top%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22top-start%22%20content%3D%22placement%EF%BC%9Atop-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Etop-start%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22top%22%20content%3D%22placement%EF%BC%9Atop%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Etop%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22top-end%22%20content%3D%22placement%EF%BC%9Atop-end%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Etop-end%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22direction-left-right%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22direction-left%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22left-start%22%20content%3D%22placement%EF%BC%9Aleft-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Eleft-start%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22left%22%20content%3D%22placement%EF%BC%9Aleft%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Eleft%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22left-end%22%20content%3D%22placement%EF%BC%9Aleft-end%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Eleft-end%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22direction-right%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22right-start%22%20content%3D%22placement%EF%BC%9Aright-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Eright-start%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22right%22%20content%3D%22placement%EF%BC%9Aright%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Eright%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22right-end%22%20content%3D%22placement%EF%BC%9Aright-end%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Eright-end%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3Cdiv%20class%3D%22direction-bottom%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22bottom-start%22%20content%3D%22placement%EF%BC%9Abottom-start%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Ebottom-start%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22bottom%22%20content%3D%22placement%EF%BC%9Abottom%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Ebottom%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%20%20%3Cbs-tooltip%20placement%3D%22bottom-end%22%20content%3D%22placement%EF%BC%9Abottom-end%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20plain%3Ebottom-end%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-tooltip%3E%0A%20%20%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.directions-box%7B%0A%20%20max-width%3A%20500px%3B%0A%7D%0A.direction-top%2C%0A.direction-bottom%7B%0A%20%20text-align%3A%20center%3B%0A%20%20.bs-button%7B%0A%20%20%20%20%26%20%2B%20.bs-button%7B%0A%20%20%20%20%20%20margin-left%3A%2025px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A.direction-left-right%7B%0A%20%20display%3A%20flex%3B%0A%20%20justify-content%3A%20space-between%3B%0A%20%20flex-wrap%3A%20wrap%3B%0A%20%20margin%3A%2020px%200%3B%0A%7D%0A.direction-left%2C%0A.direction-right%7B%0A%20%20.bs-button%7B%0A%20%20%20%20display%3A%20block%3B%0A%20%20%20%20%26%20%2B%20.bs-button%7B%0A%20%20%20%20%20%20margin-top%3A%2025px%3B%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[l("div",H,[l("div",z,[e(n,{placement:"top-start",content:"placement：top-start"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("top-start")]),_:1})]),_:1}),e(n,{placement:"top",content:"placement：top"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("top")]),_:1})]),_:1}),e(n,{placement:"top-end",content:"placement：top-end"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("top-end")]),_:1})]),_:1})]),l("div",L,[l("div",O,[e(n,{placement:"left-start",content:"placement：left-start"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("left-start")]),_:1})]),_:1}),e(n,{placement:"left",content:"placement：left"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("left")]),_:1})]),_:1}),e(n,{placement:"left-end",content:"placement：left-end"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("left-end")]),_:1})]),_:1})]),l("div",S,[e(n,{placement:"right-start",content:"placement：right-start"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("right-start")]),_:1})]),_:1}),e(n,{placement:"right",content:"placement：right"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("right")]),_:1})]),_:1}),e(n,{placement:"right-end",content:"placement：right-end"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("right-end")]),_:1})]),_:1})])]),l("div",N,[e(n,{placement:"bottom-start",content:"placement：bottom-start"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("bottom-start")]),_:1})]),_:1}),e(n,{placement:"bottom",content:"placement：bottom"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("bottom")]),_:1})]),_:1}),e(n,{placement:"bottom-end",content:"placement：bottom-end"},{default:t(()=>[e(i,{type:"primary",plain:""},{default:t(()=>[E("bottom-end")]),_:1})]),_:1})])])])]),_:1})}const j=d(P,[["render",U],["__scopeId","data-v-34672ec9"]]);const X={};function Y(A,p){const i=o("bs-button"),n=o("BsTooltip"),s=o("demo-box");return c(),r(s,{id:"tooltip_trigger",title:{cn:"触发方式",en:"Trigger"},description:{cn:"%3Cp%3ETooltip%E9%BB%98%E8%AE%A4%E6%94%AF%E6%8C%81%3Ccode%3Ehover%3C%2Fcode%3E%E3%80%81%3Ccode%3Eclick%3C%2Fcode%3E%E3%80%81%3Ccode%3Efocus%3C%2Fcode%3E%E3%80%81%3Ccode%3Econtextmenu%3C%2Fcode%3E%E8%A7%A6%E5%8F%91%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20simplest%20usage%20is%20to%20display%20the%20Tooltip%20when%20the%20mouse%20is%20enter%20in%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%20trigger%3D%22click%22%20content%3D%22%E6%88%91%E6%98%AF%E7%94%B1click%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ETrigger%20by%20click%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E6%98%AF%E7%94%B1hover%E8%A7%A6%E5%8F%91%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ETrigger%20by%20hover%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20trigger%3D%22focus%22%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E6%98%AF%E7%94%B1focus%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%EF%BC%8C%E9%BC%A0%E6%A0%87%E5%B7%A6%E9%94%AE%E6%8C%89%E4%BD%8F%E8%A7%A6%E5%8F%91%E5%85%83%E7%B4%A0%E4%B8%8D%E5%8A%A8%E5%8D%B3%E5%8F%AF%E8%A7%A6%E5%8F%91%EF%BC%8C%E7%82%B9%E5%87%BB%E9%A1%B5%E9%9D%A2%E6%88%96%E9%A1%B5%E9%9D%A2%E5%A4%96%E4%BB%BB%E6%84%8F%E4%BD%8D%E7%BD%AE%E5%B0%B1%E4%BC%9A%E9%9A%90%E8%97%8F%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ETrigger%20by%20focus%EF%BC%88%E9%BC%A0%E6%A0%87%E5%B7%A6%E9%94%AE%E6%8C%89%E4%BD%8F%E6%88%91%E4%B8%8D%E6%94%BE%EF%BC%89%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20trigger%3D%22contextmenu%22%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E6%98%AF%E7%94%B1contextmenu%E4%BA%8B%E4%BB%B6%E8%A7%A6%E5%8F%91%EF%BC%8C%E5%8D%B3%E9%BC%A0%E6%A0%87%E5%8F%B3%E9%94%AE%E8%A7%A6%E5%8F%91%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3ETrigger%20by%20contextmenu%EF%BC%88%E9%BC%A0%E6%A0%87%E5%8F%B3%E9%94%AE%E8%A7%A6%E5%8F%91%EF%BC%89%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[e(n,{trigger:"click",content:"我是由click事件触发！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("Trigger by click")]),_:1})]),_:1}),e(n,{content:"我是由hover触发！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("Trigger by hover")]),_:1})]),_:1}),e(n,{trigger:"focus",content:"我是由focus事件触发，鼠标左键按住触发元素不动即可触发，点击页面或页面外任意位置就会隐藏！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("Trigger by focus（鼠标左键按住我不放）")]),_:1})]),_:1}),e(n,{trigger:"contextmenu",content:"我是由contextmenu事件触发，即鼠标右键触发！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("Trigger by contextmenu（鼠标右键触发）")]),_:1})]),_:1})])]),_:1})}const q=d(X,[["render",Y],["__scopeId","data-v-1b6d59c3"]]);const G={};function J(A,p){const i=o("bs-button"),n=o("BsTooltip"),s=o("demo-box");return c(),r(s,{id:"tooltip_theme",title:{cn:"不同主题",en:"theme"},description:{cn:"%3Cp%3ETooltip%E9%BB%98%E8%AE%A4%E6%9C%89%3Ccode%3Edark%3C%2Fcode%3E%E3%80%81%3Ccode%3Elight%3C%2Fcode%3E2%E7%A7%8D%E4%B8%BB%E9%A2%98%3C%2Fp%3E%0A",en:"%3Cp%3ETooltip%20has%20two%20themes%20%3Ccode%3Edark%3C%2Fcode%3E%20and%20%3Ccode%3Elight%3C%2Fcode%3E%20by%20default%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%20content%3D%22dark%E4%B8%BB%E9%A2%98%E7%9A%84Tooltip%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3Etheme%20dark%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%20%20%3CBsTooltip%20placement%3D%22top%22%20theme%3D%22light%22%20content%3D%22light%E4%B8%BB%E9%A2%98%E7%9A%84Tooltip%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3Etheme%20light%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%20%20%3CBsTooltip%20theme%3D%22custom%22%20theme-class%3D%22theme-pink%22%20content%3D%22%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%BB%E9%A2%98%E7%9A%84Tooltip%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3Ecustom%20theme%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E%0A%3Cstyle%20lang%3D%22scss%22%3E%0A.bs-tooltip%7B%0A%20%20%26.theme-pink%7B%0A%20%20%20%20box-shadow%3A%200%203px%206px%20-4px%20%230000001f%2C%200%206px%2016px%20%2300000014%2C%200%209px%2028px%208px%20%230000000d%3B%0A%20%20%20%20color%3A%20%23fff%3B%0A%20%20%20%20background-color%3A%20%23eb2f96%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[e(n,{content:"dark主题的Tooltip！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("theme dark")]),_:1})]),_:1}),e(n,{placement:"top",theme:"light",content:"light主题的Tooltip！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("theme light")]),_:1})]),_:1}),e(n,{theme:"custom","theme-class":"theme-pink",content:"自定义主题的Tooltip！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("custom theme")]),_:1})]),_:1})])]),_:1})}const K=d(G,[["render",J],["__scopeId","data-v-e54ac5c2"]]);const v=A=>(y("data-v-4a119103"),A=A(),D(),A),Q=v(()=>l("h6",{style:{"margin-bottom":"5px","font-weight":"600"}},"自定义内容的Tooltip！",-1)),W=v(()=>l("p",null,[E(" 我是一个使用了"),l("mark",{style:{"font-size":"1.5em",padding:"0 5px"}},[l("strong",null,"插槽")]),E("的Tooltip！ ")],-1)),Z={__name:"custom-content",setup(A){let p=_(`
  <h6 style="margin-bottom: 5px;font-weight: 600;">自定义内容的Tooltip！</h6>
  <p>
    我是一个使用了<mark style="font-size: 1.5em;padding: 0 5px;"><strong>HTML文本</strong></mark>的Tooltip！
  </p>`);return(i,n)=>{const s=o("bs-button"),a=o("BsTooltip"),C=o("demo-box");return c(),r(C,{id:"tooltip_custom-content",title:{cn:"自定义内容",en:"Custom content"},description:{cn:"%3Cp%3E%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%3Ccode%3Econtent%3C%2Fcode%3E%E6%8F%92%E6%A7%BD%E6%88%96%3Ccode%3Eraw-content%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E6%9D%A5%E8%87%AA%E5%AE%9A%E4%B9%89Tooltip%E7%9A%84%E5%86%85%E5%AE%B9%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20content%20of%20the%20Tooltip%20can%20be%20customized%20through%20the%20%3Ccode%3Econtent%3C%2Fcode%3E%20slot%20or%20the%20%3Ccode%3Eraw-content%3C%2Fcode%3E%20prop%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%20placement%3D%22bottom-start%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3EUse%20slot%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Ctemplate%20%23content%3E%0A%20%20%20%20%20%20%20%20%3Ch6%20style%3D%22margin-bottom%3A%205px%3Bfont-weight%3A%20600%3B%22%3E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%E7%9A%84Tooltip%EF%BC%81%3C%2Fh6%3E%0A%20%20%20%20%20%20%20%20%3Cp%3E%0A%20%20%20%20%20%20%20%20%20%20%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BD%BF%E7%94%A8%E4%BA%86%3Cmark%20style%3D%22font-size%3A%201.5em%3Bpadding%3A%200%205px%3B%22%3E%3Cstrong%3E%E6%8F%92%E6%A7%BD%3C%2Fstrong%3E%3C%2Fmark%3E%E7%9A%84Tooltip%EF%BC%81%0A%20%20%20%20%20%20%20%20%3C%2Fp%3E%0A%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20%3Acontent%3D%22rawContent%22%0A%20%20%20%20%20%20%3Ais-raw-content%3D%22true%22%0A%20%20%20%20%20%20placement%3D%22top-start%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3EUse%20html%20string%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20rawContent%20%3D%20ref(%60%0A%20%20%3Ch6%20style%3D%22margin-bottom%3A%205px%3Bfont-weight%3A%20600%3B%22%3E%E8%87%AA%E5%AE%9A%E4%B9%89%E5%86%85%E5%AE%B9%E7%9A%84Tooltip%EF%BC%81%3C%2Fh6%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E4%BD%BF%E7%94%A8%E4%BA%86%3Cmark%20style%3D%22font-size%3A%201.5em%3Bpadding%3A%200%205px%3B%22%3E%3Cstrong%3EHTML%E6%96%87%E6%9C%AC%3C%2Fstrong%3E%3C%2Fmark%3E%E7%9A%84Tooltip%EF%BC%81%0A%20%20%3C%2Fp%3E%60)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[e(a,{placement:"bottom-start"},{content:t(()=>[Q,W]),default:t(()=>[e(s,{type:"primary"},{default:t(()=>[E("Use slot")]),_:1})]),_:1}),e(a,{content:B(p),"is-raw-content":!0,placement:"top-start"},{default:t(()=>[e(s,{type:"primary"},{default:t(()=>[E("Use html string")]),_:1})]),_:1},8,["content"])])]),_:1})}}},t2=d(Z,[["__scopeId","data-v-4a119103"]]);const e2={};function o2(A,p){const i=o("bs-button"),n=o("BsTooltip"),s=o("demo-box");return c(),r(s,{id:"tooltip_transition",title:{cn:"过渡效果",en:"Transition"},description:{cn:"%3Cp%3ETooltip%E9%BB%98%E8%AE%A4%E6%9C%89%3Ccode%3Efade%3C%2Fcode%3E%E3%80%81%3Ccode%3Escale%3C%2Fcode%3E2%E7%A7%8D%E8%BF%87%E6%B8%A1%E6%95%88%E6%9E%9C%3C%2Fp%3E%0A",en:"%3Cp%3ETooltip%20has%20two%20transition%20effects%20of%20%3Ccode%3Efade%3C%2Fcode%3E%20and%20%3Ccode%3Escale%3C%2Fcode%3E%20by%20default%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%20content%3D%22%E9%BB%98%E8%AE%A4%E8%BF%87%E6%B8%A1%E6%95%88%E6%9E%9C%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3Efade(default)%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20transition-name%3D%22scale%22%0A%20%20%20%20%20%20content%3D%22scale%E7%9A%84%E8%BF%87%E6%B8%A1%E6%95%88%E6%9E%9C%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3Escale%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[e(n,{content:"默认过渡效果！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("fade(default)")]),_:1})]),_:1}),e(n,{"transition-name":"scale",content:"scale的过渡效果！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("scale")]),_:1})]),_:1})])]),_:1})}const n2=d(e2,[["render",o2],["__scopeId","data-v-73d734c7"]]),i2={__name:"controlled-mode",setup(A){let p=_(!1);return(i,n)=>{const s=o("bs-button"),a=o("BsTooltip"),C=o("demo-box");return c(),r(C,{id:"tooltip_controlled-mode",title:{cn:"受控模式",en:"Controlled mode"},description:{cn:"%3Cp%3E%E7%BB%99Tooltip%E6%B7%BB%E5%8A%A0%3Ccode%3Evisible%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%EF%BC%8Ctooltip%E5%B0%B1%E6%98%AF%E5%8F%97%E6%8E%A7%E7%9A%84%EF%BC%8C%E5%AE%83%E6%8E%A5%E6%94%B6%E4%B8%80%E4%B8%AA%3Ccode%3Eboolean%3C%2Fcode%3E%E7%B1%BB%E5%9E%8B%E7%9A%84%E5%80%BC%3C%2Fp%3E%0A",en:"%3Cp%3EAdd%20%3Ccode%3Evisible%3C%2Fcode%3E%20attribute%20to%20Tooltip%2C%20tooltip%20is%20controlled%2C%20it%20receives%20a%20%3Ccode%3Eboolean%3C%2Fcode%3E%20type%20value%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20%3Avisible%3D%22visible%22%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E6%98%AF%E4%B8%80%E4%B8%AA%E7%94%B1%E7%88%B6%E7%BB%84%E4%BB%B6%E6%8E%A7%E5%88%B6%E7%9A%84Tooltip%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%0A%20%20%20%20%20%20%20%20type%3D%22primary%22%0A%20%20%20%20%20%20%20%20%40mouseenter%3D%22visible%20%3D%20true%22%0A%20%20%20%20%20%20%20%20%40mouseleave%3D%22visible%20%3D%20false%22%3EControlled%20tooltip%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20visible%20%3D%20ref(false)%3B%0A%3C%2Fscript%3E"},{default:t(()=>[l("div",null,[e(a,{visible:B(p),content:"我是一个由父组件控制的Tooltip！"},{default:t(()=>[e(s,{type:"primary",onMouseenter:n[0]||(n[0]=m=>g(p)?p.value=!0:p=!0),onMouseleave:n[1]||(n[1]=m=>g(p)?p.value=!1:p=!1)},{default:t(()=>[E("Controlled tooltip")]),_:1})]),_:1},8,["visible"])])]),_:1})}}},E2=i2;const l2={__name:"virtual-trigger",setup(A){let p=()=>document.getElementById("btn2"),i=_(!1),n=_({top:0,left:0,bottom:0,right:0}),s=_({getBoundingClientRect(){return n.value}}),a=m=>{n.value=DOMRect.fromRect({width:0,height:0,x:m.clientX,y:m.clientY+10})},C=function(){i.value=!i.value,i.value?document.addEventListener("mousemove",a,!1):document.removeEventListener("mousemove",a,!1)};return(m,f)=>{const u=o("BsTooltip"),b=o("bs-button"),F=o("demo-box");return c(),r(F,{id:"tooltip_virtual-trigger",title:{cn:"触发方式",en:"Trigger"},description:{cn:"%3Cp%3E%E8%99%9A%E6%8B%9F%E8%A7%A6%E5%8F%91%E6%98%AF%E6%8C%87Tooltip%E5%8F%AF%E4%BB%A5%E9%80%9A%E8%BF%87%E5%A4%96%E9%83%A8dom%E6%88%96%E6%97%A0dom%E6%96%B9%E5%BC%8F%E8%A7%A6%E5%8F%91%EF%BC%8C%E6%B7%BB%E5%8A%A0%3Ccode%3Evirtual-triggering%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%BC%80%E5%90%AF%E8%99%9A%E6%8B%9F%E8%A7%A6%E5%8F%91%3C%2Fp%3E%0A",en:"%3Cp%3EVirtual%20triggering%20means%20that%20Tooltip%20can%20be%20triggered%20by%20external%20dom%20or%20no%20dom%2C%20adding%20%3Ccode%3Evirtual-triggering%3C%2Fcode%3E%20attribute%20can%20enable%20virtual%20triggering%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20virtual-triggering%0A%20%20%20%20%20%20virtual-ref%3D%22%23btn1%22%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E7%94%B1id%E4%B8%BAbtn1%E7%9A%84%E5%85%83%E7%B4%A0%E8%A7%A6%E5%8F%91%22%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20virtual-triggering%0A%20%20%20%20%20%20%3Avirtual-ref%3D%22getEle%22%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E7%94%B1virtualRef1%E8%A7%A6%E5%8F%91%22%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20virtual-triggering%0A%20%20%20%20%20%20%3Avisible%3D%22virtualVisible%22%0A%20%20%20%20%20%20%3Avirtual-ref%3D%22virtualRef%22%0A%20%20%20%20%20%20content%3D%22%E6%88%91%E7%9C%9F%E6%AD%A3%E7%9A%84%E8%99%9A%E6%8B%9F%E8%A7%A6%E5%8F%91%EF%BC%81%22%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%0A%20%20%20%20%3Cbs-button%20id%3D%22btn1%22%20type%3D%22primary%22%3E%E6%88%91%E7%9A%84id%E6%98%AFbtn1%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20id%3D%22btn2%22%20type%3D%22primary%22%3E%E6%88%91%E7%9A%84id%E6%98%AFbtn2%3C%2Fbs-button%3E%0A%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22noDomTriggerClick%22%3E%E6%97%A0dom%E8%A7%A6%E5%8F%91(%E7%82%B9%E5%87%BB%E6%88%91)%3C%2Fbs-button%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0A%0Alet%20getEle%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20document.getElementById('btn2')%3B%0A%7D%3B%0Alet%20virtualVisible%20%3D%20ref(false)%3B%0A%0Alet%20position%20%3D%20ref(%7B%0A%20%20top%3A%200%2C%0A%20%20left%3A%200%2C%0A%20%20bottom%3A%200%2C%0A%20%20right%3A%200%0A%7D)%3B%0Alet%20virtualRef%20%3D%20ref(%7B%0A%20%20getBoundingClientRect%20()%20%7B%0A%20%20%20%20return%20position.value%3B%0A%20%20%7D%0A%7D)%3B%0Alet%20setPosition%20%3D%20(e)%20%3D%3E%20%7B%0A%20%20position.value%20%3D%20DOMRect.fromRect(%7B%0A%20%20%20%20width%3A%200%2C%0A%20%20%20%20height%3A%200%2C%0A%20%20%20%20x%3A%20e.clientX%2C%0A%20%20%20%20y%3A%20e.clientY%20%2B%2010%0A%20%20%7D)%3B%0A%7D%3B%0Alet%20noDomTriggerClick%20%3D%20function%20()%20%7B%0A%20%20virtualVisible.value%20%3D%20!virtualVisible.value%3B%0A%20%20if%20(virtualVisible.value)%20%7B%0A%20%20%20%20document.addEventListener('mousemove'%2C%20setPosition%2C%20false)%3B%0A%20%20%7D%20else%20%7B%0A%20%20%20%20document.removeEventListener('mousemove'%2C%20setPosition%2C%20false)%3B%0A%20%20%7D%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.bs-button%7B%0A%20%20margin%3A%200%201rem%201rem%200%3B%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[e(u,{"virtual-triggering":"","virtual-ref":"#btn1",content:"我由id为btn1的元素触发"}),e(u,{"virtual-triggering":"","virtual-ref":B(p),content:"我由virtualRef1触发"},null,8,["virtual-ref"]),e(u,{"virtual-triggering":"",visible:B(i),"virtual-ref":B(s),content:"我真正的虚拟触发！"},null,8,["visible","virtual-ref"]),e(b,{id:"btn1",type:"primary"},{default:t(()=>[E("我的id是btn1")]),_:1}),e(b,{id:"btn2",type:"primary"},{default:t(()=>[E("我的id是btn2")]),_:1}),e(b,{type:"primary",onClick:B(C)},{default:t(()=>[E("无dom触发(点击我)")]),_:1},8,["onClick"])])]),_:1})}}},p2=d(l2,[["__scopeId","data-v-fbe22b1e"]]);const s2=A=>(y("data-v-9f27ed32"),A=A(),D(),A),A2=s2(()=>l("div",{class:"tooltip-container",id:"tooltipContainer"}," 通过浏览器调试工具查看下我的dom结构吧！ ",-1)),r2={__name:"container",setup(A){let p=_(!1),i=setTimeout(function(){clearTimeout(i),p.value=!0},0);return(n,s)=>{const a=o("bs-button"),C=o("BsTooltip"),m=o("demo-box");return c(),r(m,{id:"tooltip_container",title:{cn:"父级容器",en:"Parent container"},description:{cn:"%3Cp%3ETooltip%E7%BB%84%E4%BB%B6%E6%94%AF%E6%8C%81%E5%B0%86tooltip%20popper%E6%8F%92%E5%85%A5%E5%88%B0%E6%8C%87%E5%AE%9A%E7%9A%84dom%E4%B8%AD%EF%BC%88%E9%BB%98%E8%AE%A4%E4%B8%BA%3Ccode%3Ebody%3C%2Fcode%3E%EF%BC%89%3C%2Fp%3E%0A",en:"%3Cp%3EThe%20Tooltip%20component%20supports%20inserting%20the%20tooltip%20popper%20into%20the%20specified%20dom%20(the%20default%20is%20%3Ccode%3Ebody%3C%2Fcode%3E)%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%20class%3D%22tooltip-container%22%20id%3D%22tooltipContainer%22%3E%0A%20%20%20%20%20%20%E9%80%9A%E8%BF%87%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B0%83%E8%AF%95%E5%B7%A5%E5%85%B7%E6%9F%A5%E7%9C%8B%E4%B8%8B%E6%88%91%E7%9A%84dom%E7%BB%93%E6%9E%84%E5%90%A7%EF%BC%81%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3CBsTooltip%0A%20%20%20%20%20%20v-if%3D%22render%22%0A%20%20%20%20%20%20teleported%0A%20%20%20%20%20%20append-to%3D%22%23tooltipContainer%22%0A%20%20%20%20%20%20raw-content%0A%20%20%20%20%20%20content%3D%22%E7%9C%8B%E5%88%B0%E6%88%91%E7%9A%84dom%E5%9C%A8%E5%93%AA%E4%BA%86%E5%90%97%EF%BC%9F%3Cbr%3E%E5%98%BB%E5%98%BB%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3EA%20tooltip%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%3B%0Alet%20render%20%3D%20ref(false)%3B%0Alet%20timer%20%3D%20setTimeout(function%20()%20%7B%0A%20%20clearTimeout(timer)%3B%0A%20%20render.value%20%3D%20true%3B%0A%7D%2C%200)%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.tooltip-container%7B%0A%20%20height%3A%2060px%3B%0A%20%20line-height%3A%2060px%3B%0A%20%20max-width%3A%20600px%3B%0A%20%20margin-bottom%3A%2020px%3B%0A%20%20color%3A%20var(--primary)%3B%0A%20%20text-align%3A%20center%3B%0A%20%20background-color%3A%20rgba(64%2C158%2C%20255%2C%200.5)%3B%0A%20%20%3A%3Av-deep(.bs-tooltip)%7B%0A%20%20%20%20line-height%3A%201.5%3B%0A%20%20%20%20color%3A%20var(--primary)%3B%0A%20%20%20%20font-size%3A%201.2rem%3B%0A%20%20%20%20font-weight%3A%20600%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E"},{default:t(()=>[l("div",null,[A2,B(p)?(c(),r(C,{key:0,teleported:"","append-to":"#tooltipContainer","raw-content":"",content:"看到我的dom在哪了吗？<br>嘻嘻！"},{default:t(()=>[e(a,{type:"primary"},{default:t(()=>[E("A tooltip")]),_:1})]),_:1})):$("",!0)])]),_:1},8,["description"])}}},c2=d(r2,[["__scopeId","data-v-9f27ed32"]]),a2={};function d2(A,p){const i=o("bs-button"),n=o("BsTooltip"),s=o("demo-box");return c(),r(s,{id:"tooltip_destroy-on-hide",title:{cn:"隐藏即销毁",en:"Destroy on hide"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Edestroy-on-hide%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E5%9C%A8Tooltip%E9%9A%90%E8%97%8F%E5%90%8E%E7%AB%8B%E5%8D%B3%E9%94%80%E6%AF%81tooltip%20dom%3C%2Fp%3E%0A",en:"%3Cp%3ESet%20the%20%3Ccode%3Edestroy-on-hide%3C%2Fcode%3E%20attribute%20to%20destroy%20the%20tooltip%20dom%20immediately%20after%20the%20Tooltip%20is%20hidden%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3CBsTooltip%20destroy-on-hide%20content%3D%22Tooltip%20popper%E9%9A%90%E8%97%8F%E5%85%B6dom%E5%B0%B1%E4%BC%9A%E8%A2%AB%E9%94%80%E6%AF%81%EF%BC%81%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%3EA%20tooltip%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2FBsTooltip%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E"},{default:t(()=>[l("div",null,[e(n,{"destroy-on-hide":"",content:"Tooltip popper隐藏其dom就会被销毁！"},{default:t(()=>[e(i,{type:"primary"},{default:t(()=>[E("A tooltip")]),_:1})]),_:1})])]),_:1})}const C2=d(a2,[["render",d2]]),m2=I({name:"DemoIndex",components:{Basic:M,Placements:j,Trigger:q,Theme:K,CustomContent:t2,TooltipTransition:n2,ControlledMode:E2,VirtualTrigger:p2,Container:c2,DestroyOnHide:C2}}),B2={class:"demo-index"};function _2(A,p,i,n,s,a){const C=o("Basic"),m=o("Placements"),f=o("Trigger"),u=o("Theme"),b=o("CustomContent"),F=o("TooltipTransition"),h=o("ControlledMode"),T=o("VirtualTrigger"),x=o("Container"),k=o("DestroyOnHide"),w=o("component-doc");return c(),r(w,{"component-name":"tooltip"},{default:t(()=>[l("div",B2,[e(C),e(m),e(f),e(u),e(b),e(F),e(h),e(T),e(x),e(k)])]),_:1})}const b2=d(m2,[["render",_2]]);export{b2 as default};
