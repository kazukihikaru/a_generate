(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},s=[];function r(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"00cfaf4c"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=a[t]=[e,o]}));e.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=r(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",l.name="ChunkLoadError",l.type=o,l.request=s,n[1](l)}a[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/aicd_generate/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"35cc":function(t,e,n){t.exports=n.p+"img/title.cf713ac8.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],r=(n("034f"),n("2877")),i={},c=Object(r["a"])(i,a,s,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/aicd_generate/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7"),n("3ca3"),n("ddb0");var p=n("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{directives:[{name:"show",rawName:"v-show",value:0==t.isShow,expression:"isShow == false"}]},[o("Input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("Name(*X)")])]),o("Input",{model:{value:t.id,callback:function(e){t.id=e},expression:"id"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("Identify Card No")])]),o("Input",{model:{value:t.count,callback:function(e){t.count=e},expression:"count"}},[o("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("Count")])]),o("Button",{attrs:{type:"submit"},on:{click:t.showToggle}},[t._v("Show(is showing then scroll bottom and click to visable)")])],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[t._m(0),t._l(t.report,(function(e){return o("div",{key:e,staticStyle:{background:"#eee",padding:"20px"}},[o("div",[o("Row",[o("div",{staticStyle:{width:"100%",background:"#fff"}},[o("div",[o("img",{staticStyle:{width:"100%",height:"40px"},attrs:{src:n("35cc")}})])])]),o("div",{staticClass:"card"},[o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("姓名")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[o("img",{staticStyle:{"margin-top":"5px","margin-bottom":"-7px"},attrs:{src:n("a33f")}}),t._v(t._s(t.name))])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("证件类型")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[t._v("身份证")])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("证件号码")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[t._v(t._s(t.id.substr(0,4)+"***********"+t.id.substr(14,t.id.split("").length)))])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("样本编号")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[t._v(t._s(e.testNo))])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text blue"},[t._v("采样时间")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack blue"},[t._v(t._s(e.testTime))])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("检测机构")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[t._v(t._s(t.hostipal[Math.floor(Math.random()*t.hostipal.length)]))])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("检测时间")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[t._v(t._s(e.reportTime))])])],1),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text"},[t._v("检测项目")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack"},[t._v("核酸")])])],1),o("hr",{staticStyle:{border:"1px dotted",color:"#ccc"}}),o("br"),o("Row",{staticStyle:{height:"40px"}},[o("Col",{attrs:{span:"8"}},[o("span",{staticClass:"text blue"},[t._v("检测结果")])]),o("Col",{attrs:{span:"16"}},[o("span",{staticClass:"textBlack blue"},[t._v("ORF1a/b阴性, N基因阴性")])])],1)],1)],1)])}))],2),o("Row",[o("Col",{attrs:{span:"24"}},[o("Div",{staticStyle:{color:"#fff",height:"30px"},attrs:{type:"submit"},on:{click:t.showToggle}},[t._v("不显示")])],1)],1)],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span",{staticStyle:{"font-size":"12px"}},[t._v("本查询服务由上海市健康委员会提供")])])}],h=n("5a0c"),v=n.n(h);function m(t){var e=Math.floor((Math.random()+Math.floor(9*Math.random()+1))*Math.pow(10,t-1));return e}var g={data:function(){return{id:"",name:"",title:"Hello",count:10,report:[],isShow:!1,genearteShow:!0,hostipal:["上海金域医学检验所","上海枫林医学检验所","上海华大医学检验所","上海艾迪康医学检验所","上海之江医学检验所","上海兰卫医学检验所","上海贝瑞和康医学检验所","上海中检医学检验所","上海千麦博米乐医学检验所","上海宝藤医学检验所","上海华测艾普医学检验所","上海市瑞金医院","上海市长宁区中心医院","上海市杨浦区中心医院","上海市中山医院","上海市华山医院"]}},components:{},onLoad:function(){},methods:{showToggle:function(){this.isShow,this.genearteShow=!1,this.makeReport(),this.isShow=!this.isShow},makeReport:function(){for(var t=0;t<this.count;t++){var e=t+1,n=v()().subtract(e,"day").format("YYYY-MM-DD HH:mm:ss"),o=v()(n,"YYYY-MM-DD HH:mm:ss").add(2,"day"),a={testTime:n,reportTime:o.format("YYYY-MM-DD"),testNo:m(10)};this.report.push(a)}}},mounted:function(){this.$on("offline",(function(){alert("You are offline! The website will not work")}))}},b=g,w=(n("cccb"),Object(r["a"])(b,f,d,!1,null,null,null)),x=w.exports;o["default"].use(p["a"]);var C=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new p["a"]({mode:"history",base:"/aicd_generate/",routes:C}),S=y,k=n("2f62");o["default"].use(k["a"]);var _=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),A=n("f825"),B=n.n(A);n("f8ce");o["default"].config.productionTip=!1,o["default"].use(B.a),new o["default"]({router:S,store:_,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},a33f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAYCAYAAAB5j+RNAAADL0lEQVRIie2WwUsbWRzHP+8lI2poYoXmoKtskyDkMGIQtAWFFsQczFbcv8ib4D+g0L148rY9CgqCssGYU/fQNE4DgrgFlUQbHc3Emff2EFsa1ky62mV78ANzGWbe7/P7vS9vRmitNT8o8v8W8ONB7q48yLVG31y301ZOKYXned/TCIBqtYptX6JV62d85WpXV6ysrLC4uIhSPqv8CzzPY2tri4WFBc6r5whxBznXdTE6OnBdl8PDQ5aXlnBd915iWmt2d/Osrq5i2zZCgp9dSzkpJVII5ubmiEajvC8WWV5exqk5+OXkNjzPQylFPp/nzZvfCQaD/Do3x5MnUd/3RMsvhNYgBEopSh9KvP7tNY7jkEwmSafTPP35aaNpv325oVKpkMvlWFtbw3VdZmdnmZ6eRkr/yAdbazeKSimJJ+IMDw+Tz+exLIuTkxOGhoZIpVIkEgkCgcDXXX1egGq1SvaPLO8K79jf38e9dkkkEqSn0wjZvqnWcl9Ru7rCsiyCwSDPnz8jl9tlc3OTbDZLJBIhFovR399PKBRCeR5Hx8eUSiUq5TL162s816Wvr4+joyMury65dq/pMIy2U/8GOU2pVOLg4IB4PM6rX17x4sVLcrkc29vblMtlyuUyOzs7QGPShmFQr9cxDIPR0VFSqRSmabK0tMSfb99SKBQwTRMpJcJH8BvkBEfHx0TCYcbGxjA6OohGo8zMzPDBsvjr40cymQz1eh3HcVBK0dPTw8bGBrVajampKQYHB1FKMTk5iWVZrK+vY5omaFBatcxeWzmlFOPj4ziOw8TEBGdnZ/Q+fszp6SnV83O6uroYGRkhHA43Za9YLFIsFvn06QwYaGQ3Hqe3t5dKpYLWGgQI7jE5KSWRSIRMJoPWmu7uboQU2LaN4zgMDPxE+NEjAoFA0xYlk0n29vYoFN5jmsMAhEIh5ufnEQKUupG737Y2EEI0LVSr1XBdl76+fgKB4D+KxGKxxkFuGF/uaa2RUqKUQmvtKwZ+51wbtNbYtk1nZyfB4O09Xlxc0NXZhZCiKVef5ZqPoO8o96WQ5yF9ijQmBPhkqxX3lvsvefjZvCs/tNzf7gNjHcWfLCQAAAAASUVORK5CYII="},cccb:function(t,e,n){"use strict";n("5ced")}});
//# sourceMappingURL=app.dab372f7.js.map