(function(e){function t(t){for(var n,a,s=t[0],c=t[1],l=t[2],p=0,d=[];p<s.length;p++)a=s[p],i[a]&&d.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),i=r.n(n);i.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var n=r("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[r("span",[e._v("Vue2.0模板编译 (Vue version: "+e._s(e.version)+")")]),r("a",{staticClass:"link",attrs:{href:"https://github.com/itclanCode/vue2.0-template-explorer",target:"_blank"}},[e._v("GitHub")]),r("a",{staticClass:"link",attrs:{href:"https://coder.itclan.cn",target:"_blank"}},[e._v("博客")]),r("a",{staticClass:"link",attrs:{href:"https://frontend.itclan.cn",target:"_blank"}},[e._v("前端资源网")]),r("a",{staticClass:"link",attrs:{href:"https://itclan.cn",target:"_blank"}},[e._v("IT资源网")]),r("a",{staticClass:"link",attrs:{href:"https://tv.itclan.cn",target:"_blank"}},[e._v("精品影视")]),r("a",{staticClass:"link",attrs:{href:"https://aikelaikaifa.com",target:"_blank"}},[e._v("爱客来开发")])]),r("label",{staticClass:"with-toggle"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.stripWith,expression:"stripWith"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.stripWith)?e._i(e.stripWith,null)>-1:e.stripWith},on:{change:function(t){var r=e.stripWith,n=t.target,i=!!n.checked;if(Array.isArray(r)){var o=null,a=e._i(r,o);n.checked?a<0&&(e.stripWith=r.concat([o])):a>-1&&(e.stripWith=r.slice(0,a).concat(r.slice(a+1)))}else e.stripWith=i}}}),e._v("\n    Strip with?\n  ")]),r("label",{staticClass:"server-toggle"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.serverRender,expression:"serverRender"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.serverRender)?e._i(e.serverRender,null)>-1:e.serverRender},on:{change:function(t){var r=e.serverRender,n=t.target,i=!!n.checked;if(Array.isArray(r)){var o=null,a=e._i(r,o);n.checked?a<0&&(e.serverRender=r.concat([o])):a>-1&&(e.serverRender=r.slice(0,a).concat(r.slice(a+1)))}else e.serverRender=i}}}),e._v("\n    Server Render?\n  ")]),r("div",{staticClass:"main"},[r("codemirror",{attrs:{value:e.input,options:e.inputOptions},on:{input:e.onInput}}),r("codemirror",{attrs:{value:e.output.code,options:e.outputOptions}}),e.output.errors.length?r("pre",{staticClass:"error"},[e._v("      "),e._l(e.output.errors,function(t){return r("div",{key:String(t)},[e._v(e._s(t))])}),e._v("\n    ")],2):e._e()],1)])},o=[],a=(r("ac6a"),r("2909")),s=(r("6b54"),r("693d"),r("a7be"),r("8c2e"),r("cc10"),r("8f94")),c=r("f7fe"),l=r.n(c),u=r("e552"),p=r.n(u),d=r("a063"),h=r.n(d),v={name:"app",components:{codemirror:s["codemirror"]},data:function(){return{input:"",version:Vue.version,stripWith:!1,serverRender:!1,inputOptions:{tabSize:2,mode:"text/html",theme:"base16-light",lineNumbers:!0,line:!0},outputOptions:{tabSize:2,mode:"text/javascript",readOnly:!0,theme:"base16-dark"}}},computed:{output:function(){if(!this.input.trim())return{errors:[],code:""};var e=VueTemplateCompiler.compile(this.input,{preserveWhitespace:!1});if(e.errors.length)return{errors:e.errors,code:""};var t=this.serverRender?this.compileServer():"function render () {".concat(e.render.toString(),"}");return this.stripWith&&(t=h()(t)),{errors:[],code:p()(t,{indent_size:2,wrap_line_length:80,jslint_happy:!0})}}},mounted:function(){var e=window.location.hash.slice(1);this.input=e?decodeURIComponent(e):'<div id="app">{{ msg }}</div>',this.setHeight(),window.addEventListener("resize",this.setHeight)},methods:{onInput:l()(function(e){this.input=e,window.location.hash=encodeURIComponent(e)},500),setHeight:function(){var e=Object(a["a"])(this.$el.querySelectorAll(".CodeMirror")),t=e[0].getBoundingClientRect().top,r=window.innerHeight-t;e.forEach(function(e){return e.style.height=r+"px"})},compileServer:function(){Vue.config.silent=!0;var e=new Vue({template:this.input});return renderVueComponentToString(e,function(){}),Vue.config.silent=!1,e.$options.render.toString()}}},f=v,m=(r("034f"),r("2877")),g=Object(m["a"])(f,i,o,!1,null,null,null);g.options.__file="App.vue";var _=g.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(_)}}).$mount("#app")},"64a9":function(e,t,r){}});
//# sourceMappingURL=app.707c7507.js.map