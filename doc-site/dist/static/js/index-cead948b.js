import{_ as T,i as y,D as w,n as x,r as A,c as k,w as o,o as V,a as c,d as e,b as r,u as t,j as $,p as j,h as I,g as J}from"./index-897cf5f9.js";const N=v=>(j("data-v-8a9a789b"),v=v(),I(),v),S=N(()=>c("strong",null,"数字",-1)),P={class:"btns"},G={__name:"basic",setup(v){let f=y(null),d=y(!0),m=setTimeout(function(){clearTimeout(m),d.value=!1},1500),l=w({username:"",married:"",workTimer:"",birthday:"",joinJobTime:"2022-09-23 10时28分22秒",tags:[],getUpTimer:"",hobby:[]}),F=x(function(){return{username:[{required:!0,trigger:"input",message:"请输入用户名",whitespace:!0},{validator(s,a,g){/^\d+/.test(a)?g(new Error("姓名不能以数字开头")):g()},trigger:"input"}],joinJobTime:{required:!0,trigger:["change","blur"],message:"请填写参加工作时间"},birthday:{required:!0,trigger:["change","blur"],message:"请填写生日日期"},getUpTime:[{required:!0,trigger:["change","blur"],message:"请填写每日起床时间"}],workTimer:[{required:!0,trigger:["input","change","blur"],message:"请填写工作时长"},{type:"number",trigger:["input","change","blur"],transform:s=>Number(s),min:8,message:"工作时长不能低于8小时"},{type:"number",trigger:["input","change","blur"],transform:s=>Number(s),max:12,message:"工作时长不能高于12小时"}],tags:{required:!0,type:"array",trigger:["change","blur"],min:1,message:"请至少填写一个标签"},hobby:{required:!0,type:"array",trigger:"change",min:1,message:"请至少选择一个爱好"},married:{required:!0,type:"number",trigger:"change",message:"请选择状态"}}}),B=function(){f.value.validate().then(s=>{})},b=function(){f.value.clearValidate()},n=function(){f.value.resetFields()},u=function(){f.value.clearValidate(["gender","married"])},D=function(){f.value.validateFields(["gender","married"]).then(s=>{})};return(s,a)=>{const g=A("bs-input"),C=A("bs-form-item"),p=A("bs-option"),Y=A("bs-select"),i=A("bs-date-picker"),U=A("bs-time-picker"),R=A("bs-input-number"),M=A("bs-input-tags"),h=A("bs-checkbox"),q=A("bs-radio"),z=A("bs-form"),_=A("bs-button"),H=A("demo-box");return V(),k(H,{id:"form_basic",title:{cn:"基本使用",en:"Basic usage"},description:{cn:"%3Cp%3E%E5%9F%BA%E6%9C%AC%E7%9A%84%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE%E5%9F%9F%E6%8E%A7%E5%88%B6%E5%B1%95%E7%A4%BA%EF%BC%8C%E5%8C%85%E5%90%AB%E5%B8%83%E5%B1%80%E3%80%81%E6%95%B0%E6%8D%AE%E6%A0%A1%E9%AA%8C%E3%80%81%E6%8F%90%E4%BA%A4%E3%80%82%3C%2Fp%3E%0A",en:"%3Cp%3EBasic%20form%20data%20fields%20control%20display%2C%20including%20layout%2C%20data%20validation%2C%20and%20submission.%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-form%0A%20%20%20%20%20%20ref%3D%22formRef%22%0A%20%20%20%20%20%20%3Amodel%3D%22formData%22%0A%20%20%20%20%20%20%3Arules%3D%22rules%22%3E%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20name%3D%22username%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input%20v-model%3D%22formData.username%22%3E%3C%2Fbs-input%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23hint%3E%0A%20%20%20%20%20%20%20%20%20%20%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%20%3Cstrong%3E%E6%95%B0%E5%AD%97%3C%2Fstrong%3E%20%E5%BC%80%E5%A4%B4%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%80%A7%E5%88%AB%22%0A%20%20%20%20%20%20%20%20name%3D%22gender%22%0A%20%20%20%20%20%20%20%20%3Ahide-required-asterisk%3D%22true%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22%5B%7B%20required%3A%20true%2C%20trigger%3A%20'change'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E9%80%89%E6%8B%A9%E6%80%A7%E5%88%AB'%20%7D%5D%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-select%20v-model%3D%22formData.gender%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22%22%3E%E8%AF%B7%E9%80%89%E6%8B%A9%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22man%22%3E%E7%94%B7%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-select%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E7%94%9F%E6%97%A5%22%0A%20%20%20%20%20%20%20%20name%3D%22birthday%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-date-picker%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.birthday%22%0A%20%20%20%20%20%20%20%20%20%20value-format%3D%22YYYY-MM-DD%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%9F%E6%97%A5%22%3E%3C%2Fbs-date-picker%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%AF%8F%E5%A4%A9%E8%B5%B7%E5%BA%8A%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20name%3D%22getUpTime%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-time-picker%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.getUpTime%22%0A%20%20%20%20%20%20%20%20%20%20show-footer%0A%20%20%20%20%20%20%20%20%20%20value-format%3D%22HH%3Amm%3Ass%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E6%AF%8F%E5%A4%A9%E8%B5%B7%E5%BA%8A%E6%97%B6%E9%97%B4%22%3E%3C%2Fbs-time-picker%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E5%8F%82%E5%8A%A0%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4%22%0A%20%20%20%20%20%20%20%20name%3D%22joinJobTime%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-date-picker%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.joinJobTime%22%0A%20%20%20%20%20%20%20%20%20%20%3Atime-panel-props%3D%22%7BvalueFormat%3A%20'HH%E6%97%B6mm%E5%88%86ss%E7%A7%92'%7D%22%0A%20%20%20%20%20%20%20%20%20%20%3Adate-panel-props%3D%22%7BvalueFormat%3A%20'YYYY-MM-DD'%7D%22%0A%20%20%20%20%20%20%20%20%20%20pickerType%3D%22dateTime%22%0A%20%20%20%20%20%20%20%20%20%20value-format%3D%22YYYY-MM-DD%20HH%3Amm%3Ass%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E5%8F%82%E5%8A%A0%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4%22%3E%3C%2Fbs-date-picker%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%AF%8F%E6%97%A5%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%95%BF%22%0A%20%20%20%20%20%20%20%20name%3D%22workTimer%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input-number%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.workTimer%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E5%A1%AB%E5%86%99%E6%AF%8F%E6%97%A5%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%95%BF%22%3E%3C%2Fbs-input-number%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%A0%87%E7%AD%BE%22%0A%20%20%20%20%20%20%20%20name%3D%22tags%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input-tags%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.tags%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E5%A1%AB%E5%86%99%E6%A0%87%E7%AD%BE%EF%BC%8C%E6%8C%89%E5%9B%9E%E8%BD%A6%E9%94%AE%E7%A1%AE%E8%AE%A4%22%3E%3C%2Fbs-input-tags%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%E7%88%B1%E5%A5%BD%22%20name%3D%22hobby%22%20hint%3D%22%E8%87%B3%E5%B0%91%E9%80%89%E6%8B%A9%E4%B8%80%E4%B8%AA%E7%88%B1%E5%A5%BD%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-checkbox%20v-model%3D%22formData.hobby%22%20v-if%3D%22show%22%20checked%20value%3D%22yuwen%22%3E%E8%AF%AD%E6%96%87%3C%2Fbs-checkbox%3E%0A%20%20%20%20%20%20%20%20%3Cbs-checkbox%20v-model%3D%22formData.hobby%22%20value%3D%22shuxue%22%3E%E6%95%B0%E5%AD%A6%3C%2Fbs-checkbox%3E%0A%20%20%20%20%20%20%20%20%3Cbs-checkbox%20v-model%3D%22formData.hobby%22%20value%3D%22yingyu%22%3E%E8%8B%B1%E8%AF%AD%3C%2Fbs-checkbox%3E%0A%20%20%20%20%20%20%20%20%3Cbs-checkbox%20v-model%3D%22formData.hobby%22%20value%3D%22tiyu%22%3E%E4%BD%93%E8%82%B2%3C%2Fbs-checkbox%3E%0A%20%20%20%20%20%20%20%20%3Cbs-checkbox%20v-model%3D%22formData.hobby%22%20value%3D%22wuli%22%3E%E7%89%A9%E7%90%86%3C%2Fbs-checkbox%3E%0A%20%20%20%20%20%20%20%20%3Cbs-checkbox%20v-model%3D%22formData.hobby%22%20value%3D%22shengwu%22%3E%E7%94%9F%E7%89%A9%3C%2Fbs-checkbox%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%E5%A9%9A%E5%90%A6%22%20name%3D%22married%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22formData.married%22%20%3Avalue%3D%221%22%3E%E5%B7%B2%E5%A9%9A%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%20%20%3Cbs-radio%20v-model%3D%22formData.married%22%20%3Avalue%3D%220%22%3E%E6%9C%AA%E5%A9%9A%3C%2Fbs-radio%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%3C%2Fbs-form%3E%0A%0A%20%20%20%20%3Cdiv%20class%3D%22btns%22%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22confirmForm%22%3E%E6%8F%90%E4%BA%A4%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22clearValidate%22%3E%E7%A7%BB%E9%99%A4%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22resetFields%22%3E%E6%B8%85%E7%A9%BA%E8%A1%A8%E5%8D%95%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22validateFields%22%3E%E6%A0%A1%E9%AA%8C%E9%83%A8%E5%88%86%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22clearPartialValidate%22%3E%E7%A7%BB%E9%99%A4%E9%83%A8%E5%88%86%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%3C%2Fbs-button%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20computed%2C%0A%20%20reactive%2C%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Alet%20formRef%20%3D%20ref(null)%3B%0Alet%20show%20%3D%20ref(true)%3B%0Alet%20timer%20%3D%20setTimeout(function%20()%20%7B%0A%20%20clearTimeout(timer)%3B%0A%20%20show.value%20%3D%20false%3B%0A%7D%2C%201500)%3B%0A%0Alet%20formData%20%3D%20reactive(%7B%0A%20%20username%3A%20''%2C%0A%20%20married%3A%20''%2C%0A%20%20workTimer%3A%20''%2C%0A%20%20birthday%3A%20''%2C%0A%20%20joinJobTime%3A%20'2022-09-23%2010%E6%97%B628%E5%88%8622%E7%A7%92'%2C%0A%20%20tags%3A%20%5B%5D%2C%0A%20%20getUpTimer%3A%20''%2C%0A%20%20hobby%3A%20%5B%5D%0A%7D)%3B%0Alet%20rules%20%3D%20computed(function%20()%20%7B%0A%20%20return%20%7B%0A%20%20%20%20username%3A%20%5B%0A%20%20%20%20%20%20%7B%20required%3A%20true%2C%20trigger%3A%20'input'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D'%2C%20whitespace%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20validator%20(rule%2C%20value%2C%20callback)%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(%2F%5E%5Cd%2B%2F.test(value))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%E6%95%B0%E5%AD%97%E5%BC%80%E5%A4%B4'))%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20trigger%3A%20'input'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20joinJobTime%3A%20%7B%20required%3A%20true%2C%20trigger%3A%20%5B'change'%2C%20'blur'%5D%2C%20message%3A%20'%E8%AF%B7%E5%A1%AB%E5%86%99%E5%8F%82%E5%8A%A0%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4'%20%7D%2C%0A%20%20%20%20birthday%3A%20%7B%20required%3A%20true%2C%20trigger%3A%20%5B'change'%2C%20'blur'%5D%2C%20message%3A%20'%E8%AF%B7%E5%A1%AB%E5%86%99%E7%94%9F%E6%97%A5%E6%97%A5%E6%9C%9F'%20%7D%2C%0A%20%20%20%20getUpTime%3A%20%5B%0A%20%20%20%20%20%20%7B%20required%3A%20true%2C%20trigger%3A%20%5B'change'%2C%20'blur'%5D%2C%20message%3A%20'%E8%AF%B7%E5%A1%AB%E5%86%99%E6%AF%8F%E6%97%A5%E8%B5%B7%E5%BA%8A%E6%97%B6%E9%97%B4'%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20workTimer%3A%20%5B%0A%20%20%20%20%20%20%7B%20required%3A%20true%2C%20trigger%3A%20%5B'input'%2C%20'change'%2C%20'blur'%5D%2C%20message%3A%20'%E8%AF%B7%E5%A1%AB%E5%86%99%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%95%BF'%20%7D%2C%0A%20%20%20%20%20%20%7B%20type%3A%20'number'%2C%20trigger%3A%20%5B'input'%2C%20'change'%2C%20'blur'%5D%2C%20transform%3A%20val%20%3D%3E%20Number(val)%2C%20min%3A%208%2C%20message%3A%20'%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%95%BF%E4%B8%8D%E8%83%BD%E4%BD%8E%E4%BA%8E8%E5%B0%8F%E6%97%B6'%20%7D%2C%0A%20%20%20%20%20%20%7B%20type%3A%20'number'%2C%20trigger%3A%20%5B'input'%2C%20'change'%2C%20'blur'%5D%2C%20transform%3A%20val%20%3D%3E%20Number(val)%2C%20max%3A%2012%2C%20message%3A%20'%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%95%BF%E4%B8%8D%E8%83%BD%E9%AB%98%E4%BA%8E12%E5%B0%8F%E6%97%B6'%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20tags%3A%20%7B%20required%3A%20true%2C%20type%3A%20'array'%2C%20trigger%3A%20%5B'change'%2C%20'blur'%5D%2C%20min%3A%201%2C%20message%3A%20'%E8%AF%B7%E8%87%B3%E5%B0%91%E5%A1%AB%E5%86%99%E4%B8%80%E4%B8%AA%E6%A0%87%E7%AD%BE'%20%7D%2C%0A%20%20%20%20hobby%3A%20%7B%20required%3A%20true%2C%20type%3A%20'array'%2C%20trigger%3A%20'change'%2C%20min%3A%201%2C%20message%3A%20'%E8%AF%B7%E8%87%B3%E5%B0%91%E9%80%89%E6%8B%A9%E4%B8%80%E4%B8%AA%E7%88%B1%E5%A5%BD'%20%7D%2C%0A%20%20%20%20married%3A%20%7B%20required%3A%20true%2C%20type%3A%20'number'%2C%20trigger%3A%20'change'%2C%20message%3A%20'%E8%AF%B7%E9%80%89%E6%8B%A9%E7%8A%B6%E6%80%81'%20%7D%0A%20%20%7D%3B%0A%7D)%3B%0A%0Alet%20confirmForm%20%3D%20function%20()%20%7B%0A%20%20console.log(formRef.value)%3B%0A%20%20formRef.value.validate()%0A%20%20%20%20.then(valid%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%EF%BC%9A'%2C%20valid)%3B%0A%20%20%20%20%20%20if%20(valid)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE'%2C%20formData)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%7D%3B%0Alet%20clearValidate%20%3D%20function%20()%20%7B%0A%20%20formRef.value.clearValidate()%3B%0A%7D%3B%0Alet%20resetFields%20%3D%20function%20()%20%7B%0A%20%20formRef.value.resetFields()%3B%0A%7D%3B%0Alet%20clearPartialValidate%20%3D%20function%20()%20%7B%0A%20%20formRef.value.clearValidate(%5B'gender'%2C%20'married'%5D)%3B%0A%7D%3B%0Alet%20validateFields%20%3D%20function%20()%20%7B%0A%20%20formRef.value.validateFields(%5B'gender'%2C%20'married'%5D)%0A%20%20%20%20.then(valid%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('%E9%83%A8%E5%88%86%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%EF%BC%9A'%2C%20valid)%3B%0A%20%20%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E%0A%3Cstyle%20lang%3D%22scss%22%20scoped%3E%0A.btns%7B%0A%20%20margin-top%3A%201rem%3B%0A%20%20.bs-button%7B%0A%20%20%20%20margin%3A%200%201rem%201rem%200%3B%0A%20%20%7D%0A%7D%0A%3C%2Fstyle%3E","start-version":""},{default:o(()=>[c("div",null,[e(z,{ref_key:"formRef",ref:f,model:t(l),rules:t(F)},{default:o(()=>[e(C,{label:"姓名",name:"username"},{hint:o(()=>[r(" 姓名不能以 "),S,r(" 开头 ")]),default:o(()=>[e(g,{modelValue:t(l).username,"onUpdate:modelValue":a[0]||(a[0]=E=>t(l).username=E)},null,8,["modelValue"])]),_:1}),e(C,{label:"性别",name:"gender","hide-required-asterisk":!0,rules:[{required:!0,trigger:"change",message:"请输选择性别"}]},{default:o(()=>[e(Y,{modelValue:t(l).gender,"onUpdate:modelValue":a[1]||(a[1]=E=>t(l).gender=E)},{default:o(()=>[e(p,{value:""},{default:o(()=>[r("请选择")]),_:1}),e(p,{value:"man"},{default:o(()=>[r("男")]),_:1}),e(p,{value:"woman"},{default:o(()=>[r("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(C,{label:"生日",name:"birthday"},{default:o(()=>[e(i,{modelValue:t(l).birthday,"onUpdate:modelValue":a[2]||(a[2]=E=>t(l).birthday=E),"value-format":"YYYY-MM-DD",placeholder:"请选择生日"},null,8,["modelValue"])]),_:1}),e(C,{label:"每天起床时间",name:"getUpTime"},{default:o(()=>[e(U,{modelValue:t(l).getUpTime,"onUpdate:modelValue":a[3]||(a[3]=E=>t(l).getUpTime=E),"show-footer":"","value-format":"HH:mm:ss",placeholder:"每天起床时间"},null,8,["modelValue"])]),_:1}),e(C,{label:"参加工作时间",name:"joinJobTime"},{default:o(()=>[e(i,{modelValue:t(l).joinJobTime,"onUpdate:modelValue":a[4]||(a[4]=E=>t(l).joinJobTime=E),"time-panel-props":{valueFormat:"HH时mm分ss秒"},"date-panel-props":{valueFormat:"YYYY-MM-DD"},pickerType:"dateTime","value-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择参加工作时间"},null,8,["modelValue"])]),_:1}),e(C,{label:"每日工作时长",name:"workTimer"},{default:o(()=>[e(R,{modelValue:t(l).workTimer,"onUpdate:modelValue":a[5]||(a[5]=E=>t(l).workTimer=E),placeholder:"请填写每日工作时长"},null,8,["modelValue"])]),_:1}),e(C,{label:"标签",name:"tags"},{default:o(()=>[e(M,{modelValue:t(l).tags,"onUpdate:modelValue":a[6]||(a[6]=E=>t(l).tags=E),placeholder:"请填写标签，按回车键确认"},null,8,["modelValue"])]),_:1}),e(C,{label:"爱好",name:"hobby",hint:"至少选择一个爱好"},{default:o(()=>[t(d)?(V(),k(h,{key:0,modelValue:t(l).hobby,"onUpdate:modelValue":a[7]||(a[7]=E=>t(l).hobby=E),checked:"",value:"yuwen"},{default:o(()=>[r("语文")]),_:1},8,["modelValue"])):$("",!0),e(h,{modelValue:t(l).hobby,"onUpdate:modelValue":a[8]||(a[8]=E=>t(l).hobby=E),value:"shuxue"},{default:o(()=>[r("数学")]),_:1},8,["modelValue"]),e(h,{modelValue:t(l).hobby,"onUpdate:modelValue":a[9]||(a[9]=E=>t(l).hobby=E),value:"yingyu"},{default:o(()=>[r("英语")]),_:1},8,["modelValue"]),e(h,{modelValue:t(l).hobby,"onUpdate:modelValue":a[10]||(a[10]=E=>t(l).hobby=E),value:"tiyu"},{default:o(()=>[r("体育")]),_:1},8,["modelValue"]),e(h,{modelValue:t(l).hobby,"onUpdate:modelValue":a[11]||(a[11]=E=>t(l).hobby=E),value:"wuli"},{default:o(()=>[r("物理")]),_:1},8,["modelValue"]),e(h,{modelValue:t(l).hobby,"onUpdate:modelValue":a[12]||(a[12]=E=>t(l).hobby=E),value:"shengwu"},{default:o(()=>[r("生物")]),_:1},8,["modelValue"])]),_:1}),e(C,{label:"婚否",name:"married"},{default:o(()=>[e(q,{modelValue:t(l).married,"onUpdate:modelValue":a[13]||(a[13]=E=>t(l).married=E),value:1},{default:o(()=>[r("已婚")]),_:1},8,["modelValue"]),e(q,{modelValue:t(l).married,"onUpdate:modelValue":a[14]||(a[14]=E=>t(l).married=E),value:0},{default:o(()=>[r("未婚")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),c("div",P,[e(_,{type:"primary",onClick:t(B)},{default:o(()=>[r("提交")]),_:1},8,["onClick"]),e(_,{type:"primary",onClick:t(b)},{default:o(()=>[r("移除校验结果")]),_:1},8,["onClick"]),e(_,{type:"primary",onClick:t(n)},{default:o(()=>[r("清空表单")]),_:1},8,["onClick"]),e(_,{type:"primary",onClick:t(D)},{default:o(()=>[r("校验部分表单校验结果")]),_:1},8,["onClick"]),e(_,{type:"primary",onClick:t(u)},{default:o(()=>[r("移除部分表单校验结果")]),_:1},8,["onClick"])])])]),_:1},8,["description"])}}},K=T(G,[["__scopeId","data-v-8a9a789b"]]),L=c("strong",null,"数字",-1),O={__name:"inline-form",setup(v){let f=y(null),d=w({username:"",gender:"",birthday:""}),m=x(function(){return{username:[{required:!0,trigger:"input",message:"请输入用户名",whitespace:!0},{validator(F,B,b){/^\d+/.test(B)?b(new Error("姓名不能以数字开头")):b()},trigger:"input"}],birthday:{required:!0,trigger:["change","blur"],message:"请填写生日日期"}}}),l=function(){f.value.validate().then(F=>{})};return(F,B)=>{const b=A("bs-input"),n=A("bs-form-item"),u=A("bs-option"),D=A("bs-select"),s=A("bs-date-picker"),a=A("bs-button"),g=A("bs-form"),C=A("demo-box");return V(),k(C,{id:"form_inline-form",title:{cn:"行内表单",en:"Inline form"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Elayout%3Dinline%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%AE%A9%E8%A1%A8%E5%8D%95%E5%9F%9F%E5%8F%98%E4%B8%BA%E8%A1%8C%E5%86%85%E7%9A%84%E8%A1%A8%E5%8D%95%E5%9F%9F%3C%2Fp%3E%0A",en:"%3Cp%3ESetting%20the%20%3Ccode%3Elayout%3Dinline%3C%2Fcode%3E%20attribute%20can%20make%20the%20form%20field%20an%20inline%20form%20field%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cbs-form%0A%20%20%20%20%20%20ref%3D%22formRef%22%0A%20%20%20%20%20%20layout%3D%22inline%22%0A%20%20%20%20%20%20%3Amodel%3D%22formData%22%0A%20%20%20%20%20%20%3Arules%3D%22rules%22%3E%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20name%3D%22username%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input%20v-model%3D%22formData.username%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%3E%3C%2Fbs-input%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23hint%3E%0A%20%20%20%20%20%20%20%20%20%20%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%20%3Cstrong%3E%E6%95%B0%E5%AD%97%3C%2Fstrong%3E%20%E5%BC%80%E5%A4%B4%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%80%A7%E5%88%AB%22%0A%20%20%20%20%20%20%20%20name%3D%22gender%22%0A%20%20%20%20%20%20%20%20%3Ahide-required-asterisk%3D%22true%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22%5B%7B%20required%3A%20true%2C%20trigger%3A%20'change'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E9%80%89%E6%8B%A9%E6%80%A7%E5%88%AB'%20%7D%5D%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-select%20v-model%3D%22formData.gender%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22%22%3E%E8%AF%B7%E9%80%89%E6%8B%A9%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22man%22%3E%E7%94%B7%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-select%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E7%94%9F%E6%97%A5%22%0A%20%20%20%20%20%20%20%20name%3D%22birthday%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-date-picker%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.birthday%22%0A%20%20%20%20%20%20%20%20%20%20value-format%3D%22YYYY-MM-DD%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%9F%E6%97%A5%22%3E%3C%2Fbs-date-picker%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%20%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22confirmForm%22%3E%E6%8F%90%E4%BA%A4%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%3C%2Fbs-form%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20computed%2C%0A%20%20reactive%2C%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Alet%20formRef%20%3D%20ref(null)%3B%0A%0Alet%20formData%20%3D%20reactive(%7B%0A%20%20username%3A%20''%2C%0A%20%20gender%3A%20''%2C%0A%20%20birthday%3A%20''%0A%7D)%3B%0Alet%20rules%20%3D%20computed(function%20()%20%7B%0A%20%20return%20%7B%0A%20%20%20%20username%3A%20%5B%0A%20%20%20%20%20%20%7B%20required%3A%20true%2C%20trigger%3A%20'input'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D'%2C%20whitespace%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20validator%20(rule%2C%20value%2C%20callback)%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(%2F%5E%5Cd%2B%2F.test(value))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%E6%95%B0%E5%AD%97%E5%BC%80%E5%A4%B4'))%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20trigger%3A%20'input'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20birthday%3A%20%7B%20required%3A%20true%2C%20trigger%3A%20%5B'change'%2C%20'blur'%5D%2C%20message%3A%20'%E8%AF%B7%E5%A1%AB%E5%86%99%E7%94%9F%E6%97%A5%E6%97%A5%E6%9C%9F'%20%7D%0A%20%20%7D%3B%0A%7D)%3B%0A%0Alet%20confirmForm%20%3D%20function%20()%20%7B%0A%20%20console.log(formRef.value)%3B%0A%20%20formRef.value.validate()%0A%20%20%20%20.then(valid%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%EF%BC%9A'%2C%20valid)%3B%0A%20%20%20%20%20%20if%20(valid)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE'%2C%20formData)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E","start-version":""},{default:o(()=>[c("div",null,[e(g,{ref_key:"formRef",ref:f,layout:"inline",model:t(d),rules:t(m)},{default:o(()=>[e(n,{label:"姓名",name:"username"},{hint:o(()=>[r(" 姓名不能以 "),L,r(" 开头 ")]),default:o(()=>[e(b,{modelValue:t(d).username,"onUpdate:modelValue":B[0]||(B[0]=p=>t(d).username=p),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(n,{label:"性别",name:"gender","hide-required-asterisk":!0,rules:[{required:!0,trigger:"change",message:"请输选择性别"}]},{default:o(()=>[e(D,{modelValue:t(d).gender,"onUpdate:modelValue":B[1]||(B[1]=p=>t(d).gender=p)},{default:o(()=>[e(u,{value:""},{default:o(()=>[r("请选择")]),_:1}),e(u,{value:"man"},{default:o(()=>[r("男")]),_:1}),e(u,{value:"woman"},{default:o(()=>[r("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(n,{label:"生日",name:"birthday"},{default:o(()=>[e(s,{modelValue:t(d).birthday,"onUpdate:modelValue":B[2]||(B[2]=p=>t(d).birthday=p),"value-format":"YYYY-MM-DD",placeholder:"请选择生日"},null,8,["modelValue"])]),_:1}),e(n,{label:" "},{default:o(()=>[e(a,{type:"primary",onClick:t(l)},{default:o(()=>[r("提交")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}},Q=O,W=c("h6",null,"Basic horizontal form",-1),X=c("strong",null,"数字",-1),Z=c("h6",null,"Grid horizontal form",-1),e2=c("strong",null,"数字",-1),t2={__name:"horizontal-form",setup(v){let f=y(null),d=y(null),m=w({username:"",gender:"",birthday:"",height:""}),l=x(function(){return{username:[{required:!0,trigger:"input",message:"请输入用户名",whitespace:!0},{validator(b,n,u){/^\d+/.test(n)?u(new Error("姓名不能以数字开头")):u()},trigger:"input"}],birthday:{required:!0,trigger:["change","blur"],message:"请填写生日日期"}}}),F=function(){f.value.validate().then(b=>{})},B=function(){d.value.validate().then(b=>{})};return(b,n)=>{const u=A("bs-input"),D=A("bs-form-item"),s=A("bs-option"),a=A("bs-select"),g=A("bs-date-picker"),C=A("bs-button"),p=A("bs-form"),Y=A("demo-box");return V(),k(Y,{id:"form_horizontal-form",title:{cn:"水平表单",en:"Horizontal form"},description:{cn:"%3Cp%3E%E8%AE%BE%E7%BD%AE%3Ccode%3Elayout%3Dhorizontal%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8F%AF%E4%BB%A5%E8%AE%A9%E8%A1%A8%E5%8D%95%E5%9F%9F%E5%8F%98%E4%B8%BA%E8%A1%8C%E5%86%85%E7%9A%84%E8%A1%A8%E5%8D%95%E5%9F%9F%3C%2Fp%3E%0A",en:"%3Cp%3ESetting%20the%20%3Ccode%3Elayout%3Dhorizontal%3C%2Fcode%3E%20attribute%20can%20make%20the%20form%20field%20an%20inline%20form%20field%3C%2Fp%3E%0A"},"example-code":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Ch6%3EBasic%20horizontal%20form%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-form%0A%20%20%20%20%20%20ref%3D%22formRef%22%0A%20%20%20%20%20%20layout%3D%22horizontal%22%0A%20%20%20%20%20%20%3Amodel%3D%22formData%22%0A%20%20%20%20%20%20%3Arules%3D%22rules%22%0A%20%20%20%20%20%20data-label-width%3D%22100px%22%3E%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20name%3D%22username%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input%20v-model%3D%22formData.username%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%3E%3C%2Fbs-input%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23hint%3E%0A%20%20%20%20%20%20%20%20%20%20%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%20%3Cstrong%3E%E6%95%B0%E5%AD%97%3C%2Fstrong%3E%20%E5%BC%80%E5%A4%B4%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%80%A7%E5%88%AB%22%0A%20%20%20%20%20%20%20%20name%3D%22gender%22%0A%20%20%20%20%20%20%20%20%3Ahide-required-asterisk%3D%22true%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22%5B%7B%20required%3A%20true%2C%20trigger%3A%20'change'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E9%80%89%E6%8B%A9%E6%80%A7%E5%88%AB'%20%7D%5D%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-select%20v-model%3D%22formData.gender%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22%22%3E%E8%AF%B7%E9%80%89%E6%8B%A9%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22man%22%3E%E7%94%B7%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-select%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E7%94%9F%E6%97%A5%22%0A%20%20%20%20%20%20%20%20name%3D%22birthday%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-date-picker%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.birthday%22%0A%20%20%20%20%20%20%20%20%20%20value-format%3D%22YYYY-MM-DD%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%9F%E6%97%A5%22%3E%3C%2Fbs-date-picker%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E8%BA%AB%E9%AB%98%22%0A%20%20%20%20%20%20%20%20name%3D%22height%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input%20v-model%3D%22formData.height%22%20type%3D%22number%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E8%BA%AB%E9%AB%98%22%20suffix%3D%22%E5%8E%98%E7%B1%B3%22%3E%3C%2Fbs-input%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%20%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22confirmForm%22%3E%E6%8F%90%E4%BA%A4%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%3C%2Fbs-form%3E%0A%0A%20%20%20%20%3Ch6%3EGrid%20horizontal%20form%3C%2Fh6%3E%0A%20%20%20%20%3Cbs-form%0A%20%20%20%20%20%20ref%3D%22formRef2%22%0A%20%20%20%20%20%20layout%3D%22horizontal%22%0A%20%20%20%20%20%20label-class%3D%22col-sm-2%22%0A%20%20%20%20%20%20content-class%3D%22col-sm-10%22%0A%20%20%20%20%20%20label-align%3D%22center%22%0A%20%20%20%20%20%20%3Amodel%3D%22formData%22%0A%20%20%20%20%20%20%3Arules%3D%22rules%22%3E%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%E5%A7%93%E5%90%8D%22%20name%3D%22username%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input%20v-model%3D%22formData.username%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E5%A7%93%E5%90%8D%22%3E%3C%2Fbs-input%3E%0A%20%20%20%20%20%20%20%20%3Ctemplate%20%23hint%3E%0A%20%20%20%20%20%20%20%20%20%20%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%20%3Cstrong%3E%E6%95%B0%E5%AD%97%3C%2Fstrong%3E%20%E5%BC%80%E5%A4%B4%0A%20%20%20%20%20%20%20%20%3C%2Ftemplate%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E6%80%A7%E5%88%AB%22%0A%20%20%20%20%20%20%20%20name%3D%22gender%22%0A%20%20%20%20%20%20%20%20%3Ahide-required-asterisk%3D%22true%22%0A%20%20%20%20%20%20%20%20%3Arules%3D%22%5B%7B%20required%3A%20true%2C%20trigger%3A%20'change'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E9%80%89%E6%8B%A9%E6%80%A7%E5%88%AB'%20%7D%5D%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-select%20v-model%3D%22formData.gender%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22%22%3E%E8%AF%B7%E9%80%89%E6%8B%A9%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22man%22%3E%E7%94%B7%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cbs-option%20value%3D%22woman%22%3E%E5%A5%B3%3C%2Fbs-option%3E%0A%20%20%20%20%20%20%20%20%3C%2Fbs-select%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E7%94%9F%E6%97%A5%22%0A%20%20%20%20%20%20%20%20name%3D%22birthday%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-date-picker%0A%20%20%20%20%20%20%20%20%20%20v-model%3D%22formData.birthday%22%0A%20%20%20%20%20%20%20%20%20%20value-format%3D%22YYYY-MM-DD%22%0A%20%20%20%20%20%20%20%20%20%20placeholder%3D%22%E8%AF%B7%E9%80%89%E6%8B%A9%E7%94%9F%E6%97%A5%22%3E%3C%2Fbs-date-picker%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%20%20%3Cbs-form-item%0A%20%20%20%20%20%20%20%20label%3D%22%E8%BA%AB%E9%AB%98%22%0A%20%20%20%20%20%20%20%20name%3D%22height%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-input%20v-model%3D%22formData.height%22%20type%3D%22number%22%20placeholder%3D%22%E8%AF%B7%E8%BE%93%E5%85%A5%E8%BA%AB%E9%AB%98%22%20suffix%3D%22%E5%8E%98%E7%B1%B3%22%3E%3C%2Fbs-input%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%0A%20%20%20%20%20%20%3Cbs-form-item%20label%3D%22%20%22%3E%0A%20%20%20%20%20%20%20%20%3Cbs-button%20type%3D%22primary%22%20%40click%3D%22confirmForm2%22%3E%E6%8F%90%E4%BA%A4%3C%2Fbs-button%3E%0A%20%20%20%20%20%20%3C%2Fbs-form-item%3E%0A%20%20%20%20%3C%2Fbs-form%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20setup%3E%0Aimport%20%7B%0A%20%20computed%2C%0A%20%20reactive%2C%0A%20%20ref%0A%7D%20from%20'vue'%3B%0A%0Alet%20formRef%20%3D%20ref(null)%3B%0Alet%20formRef2%20%3D%20ref(null)%3B%0A%0Alet%20formData%20%3D%20reactive(%7B%0A%20%20username%3A%20''%2C%0A%20%20gender%3A%20''%2C%0A%20%20birthday%3A%20''%2C%0A%20%20height%3A%20''%0A%7D)%3B%0Alet%20rules%20%3D%20computed(function%20()%20%7B%0A%20%20return%20%7B%0A%20%20%20%20username%3A%20%5B%0A%20%20%20%20%20%20%7B%20required%3A%20true%2C%20trigger%3A%20'input'%2C%20message%3A%20'%E8%AF%B7%E8%BE%93%E5%85%A5%E7%94%A8%E6%88%B7%E5%90%8D'%2C%20whitespace%3A%20true%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20validator%20(rule%2C%20value%2C%20callback)%20%7B%0A%20%20%20%20%20%20%20%20%20%20if%20(%2F%5E%5Cd%2B%2F.test(value))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback(new%20Error('%E5%A7%93%E5%90%8D%E4%B8%8D%E8%83%BD%E4%BB%A5%E6%95%B0%E5%AD%97%E5%BC%80%E5%A4%B4'))%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20callback()%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20trigger%3A%20'input'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%2C%0A%20%20%20%20birthday%3A%20%7B%20required%3A%20true%2C%20trigger%3A%20%5B'change'%2C%20'blur'%5D%2C%20message%3A%20'%E8%AF%B7%E5%A1%AB%E5%86%99%E7%94%9F%E6%97%A5%E6%97%A5%E6%9C%9F'%20%7D%0A%20%20%7D%3B%0A%7D)%3B%0A%0Alet%20confirmForm%20%3D%20function%20()%20%7B%0A%20%20console.log(formRef.value)%3B%0A%20%20formRef.value.validate()%0A%20%20%20%20.then(valid%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%EF%BC%9A'%2C%20valid)%3B%0A%20%20%20%20%20%20if%20(valid)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE'%2C%20formData)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%7D%3B%0A%0Alet%20confirmForm2%20%3D%20function%20()%20%7B%0A%20%20console.log(formRef.value)%3B%0A%20%20formRef2.value.validate()%0A%20%20%20%20.then(valid%20%3D%3E%20%7B%0A%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%A0%A1%E9%AA%8C%E7%BB%93%E6%9E%9C%EF%BC%9A'%2C%20valid)%3B%0A%20%20%20%20%20%20if%20(valid)%20%7B%0A%20%20%20%20%20%20%20%20console.log('%E8%A1%A8%E5%8D%95%E6%95%B0%E6%8D%AE'%2C%20formData)%3B%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D)%3B%0A%7D%3B%0A%3C%2Fscript%3E","start-version":""},{default:o(()=>[c("div",null,[W,e(p,{ref_key:"formRef",ref:f,layout:"horizontal",model:t(m),rules:t(l),"data-label-width":"100px"},{default:o(()=>[e(D,{label:"姓名",name:"username"},{hint:o(()=>[r(" 姓名不能以 "),X,r(" 开头 ")]),default:o(()=>[e(u,{modelValue:t(m).username,"onUpdate:modelValue":n[0]||(n[0]=i=>t(m).username=i),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(D,{label:"性别",name:"gender","hide-required-asterisk":!0,rules:[{required:!0,trigger:"change",message:"请输选择性别"}]},{default:o(()=>[e(a,{modelValue:t(m).gender,"onUpdate:modelValue":n[1]||(n[1]=i=>t(m).gender=i)},{default:o(()=>[e(s,{value:""},{default:o(()=>[r("请选择")]),_:1}),e(s,{value:"man"},{default:o(()=>[r("男")]),_:1}),e(s,{value:"woman"},{default:o(()=>[r("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(D,{label:"生日",name:"birthday"},{default:o(()=>[e(g,{modelValue:t(m).birthday,"onUpdate:modelValue":n[2]||(n[2]=i=>t(m).birthday=i),"value-format":"YYYY-MM-DD",placeholder:"请选择生日"},null,8,["modelValue"])]),_:1}),e(D,{label:"身高",name:"height"},{default:o(()=>[e(u,{modelValue:t(m).height,"onUpdate:modelValue":n[3]||(n[3]=i=>t(m).height=i),type:"number",placeholder:"请输入身高",suffix:"厘米"},null,8,["modelValue"])]),_:1}),e(D,{label:" "},{default:o(()=>[e(C,{type:"primary",onClick:t(F)},{default:o(()=>[r("提交")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"]),Z,e(p,{ref_key:"formRef2",ref:d,layout:"horizontal","label-class":"col-sm-2","content-class":"col-sm-10","label-align":"center",model:t(m),rules:t(l)},{default:o(()=>[e(D,{label:"姓名",name:"username"},{hint:o(()=>[r(" 姓名不能以 "),e2,r(" 开头 ")]),default:o(()=>[e(u,{modelValue:t(m).username,"onUpdate:modelValue":n[4]||(n[4]=i=>t(m).username=i),placeholder:"请输入姓名"},null,8,["modelValue"])]),_:1}),e(D,{label:"性别",name:"gender","hide-required-asterisk":!0,rules:[{required:!0,trigger:"change",message:"请输选择性别"}]},{default:o(()=>[e(a,{modelValue:t(m).gender,"onUpdate:modelValue":n[5]||(n[5]=i=>t(m).gender=i)},{default:o(()=>[e(s,{value:""},{default:o(()=>[r("请选择")]),_:1}),e(s,{value:"man"},{default:o(()=>[r("男")]),_:1}),e(s,{value:"woman"},{default:o(()=>[r("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(D,{label:"生日",name:"birthday"},{default:o(()=>[e(g,{modelValue:t(m).birthday,"onUpdate:modelValue":n[6]||(n[6]=i=>t(m).birthday=i),"value-format":"YYYY-MM-DD",placeholder:"请选择生日"},null,8,["modelValue"])]),_:1}),e(D,{label:"身高",name:"height"},{default:o(()=>[e(u,{modelValue:t(m).height,"onUpdate:modelValue":n[7]||(n[7]=i=>t(m).height=i),type:"number",placeholder:"请输入身高",suffix:"厘米"},null,8,["modelValue"])]),_:1}),e(D,{label:" "},{default:o(()=>[e(C,{type:"primary",onClick:t(B)},{default:o(()=>[r("提交")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])]),_:1})}}},o2=t2,l2=J({name:"DemoIndex",components:{Basic:K,InlineForm:Q,HorizontalForm:o2}}),a2={class:"demo-index"};function r2(v,f,d,m,l,F){const B=A("Basic"),b=A("InlineForm"),n=A("HorizontalForm"),u=A("component-doc");return V(),k(u,{"component-name":"form"},{default:o(()=>[c("div",a2,[e(B),e(b),e(n)])]),_:1})}const E2=T(l2,[["render",r2]]);export{E2 as default};
