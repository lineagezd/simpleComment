(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-379491e3"],{"5b29":function(t,e,s){"use strict";var i=s("c794"),o=s.n(i);o.a},c740:function(t,e,s){"use strict";var i=s("23e7"),o=s("b727").findIndex,n=s("44d2"),a=s("ae40"),c="findIndex",m=!0,l=a(c);c in[]&&Array(1)[c]((function(){m=!1})),i({target:"Array",proto:!0,forced:m||!l},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(c)},c794:function(t,e,s){},f1a6:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"custom"},[s("a-row",{attrs:{gutter:16}},[t._l(t.customComments,(function(e){return s("a-col",{key:e.id,attrs:{span:8}},[s("section",{staticClass:"card"},[s("div",{staticClass:"card__title"},[s("div",{staticClass:"card__info"},[t._v(" 快捷键 : "+t._s(e.shortCuts.join(" + "))+" ")]),s("div",{staticClass:"actions"},[s("a-icon",{staticClass:"action-item",attrs:{type:"edit"},on:{click:function(s){return t.onEdit(e)}}}),s("a-icon",{staticClass:"action-item",attrs:{type:"delete"},on:{click:function(s){return t.onDelete(e)}}}),s("a-icon",{staticClass:"action-item",attrs:{type:"zoom-in"},on:{click:function(s){return t.onPreview(e)}}}),s("a-icon",{staticClass:"action-item",attrs:{type:"copy"},on:{click:function(s){return t.copyData(e.comment)}}})],1)]),s("pre",{staticClass:"card__comment"},[t._v(t._s(e.comment))])])])})),s("section",{staticClass:"add-btn",on:{click:function(e){t.modalVisible=!0}}},[s("a-icon",{staticClass:"icon",attrs:{type:"plus"}})],1)],2),s("a-modal",{attrs:{title:"添加"},on:{ok:t.setCustomConf,cancel:t.onCancel},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[s("a-input-group",{staticStyle:{margin:".5rem  0 1rem"},attrs:{compact:""}},[s("a-select",{model:{value:t.editComm.shortCuts[0],callback:function(e){t.$set(t.editComm.shortCuts,0,e)},expression:"editComm.shortCuts[0]"}},[s("a-select-option",{attrs:{value:"Ctrl"}},[t._v(" Ctrl ")])],1),s("a-input",{staticStyle:{width:"50%"},attrs:{placeholder:"可输入快捷键",maxLength:1},model:{value:t.editComm.shortCuts[1],callback:function(e){t.$set(t.editComm.shortCuts,1,e)},expression:"editComm.shortCuts[1]"}})],1),s("a-textarea",{attrs:{placeholder:"自定义注释","auto-size":{minRows:30,maxRows:45}},model:{value:t.editComm.comment,callback:function(e){t.$set(t.editComm,"comment",e)},expression:"editComm.comment"}})],1),s("a-modal",{attrs:{okText:"Copy"},on:{ok:t.copyData},model:{value:t.previewVisible,callback:function(e){t.previewVisible=e},expression:"previewVisible"}},[s("pre",[t._v(t._s(t.editComm.comment))])])],1)},o=[],n=(s("c740"),s("a434"),s("d4ec")),a=s("bee2"),c=s("2caf"),m=s("262e"),l=s("9ab4"),r=s("60a3"),u=s("e33d"),d=function(t){Object(m["a"])(s,t);var e=Object(c["a"])(s);function s(){var t;return Object(n["a"])(this,s),t=e.apply(this,arguments),t.modalVisible=!1,t.previewVisible=!1,t.editComm={id:null,comment:"",shortCuts:["Ctrl",""]},t}return Object(a["a"])(s,[{key:"created",value:function(){this.customComments=JSON.parse(localStorage.getItem("customComments")||"[]")}},{key:"setCustomConf",value:function(){var t=this;if(this.editComm.id){var e=this.customComments.findIndex((function(e){return e.id===t.editComm.id}));this.customComments[e]=Object.assign({},this.editComm)}else{var s=this.customComments[this.customComments.length-1];s&&s.id&&(this.editComm.id=s.id+1,this.customComments.push(Object.assign({},this.editComm)))}window._customComments=this.customComments,localStorage.setItem("customComments",JSON.stringify(this.customComments)),this.modalVisible=!1,this.onCancel()}},{key:"onEdit",value:function(t){this.editComm=Object.assign({},t),this.modalVisible=!0}},{key:"onDelete",value:function(t){var e=this.customComments.findIndex((function(e){return e.id===t.id}));this.customComments.splice(e,1),this.$forceUpdate(),localStorage.setItem("customComments",JSON.stringify(this.customComments))}},{key:"onPreview",value:function(t){this.editComm=Object.assign({},t),this.previewVisible=!0}},{key:"copyData",value:function(t){Object(u["a"])(t||this.editComm.comment),this.$message.success("您的注释已经复制到剪贴板啦！")}},{key:"onCancel",value:function(){this.editComm={id:null,comment:"",shortCuts:["Ctrl",""]}}}]),s}(r["e"]);d=Object(l["a"])([r["a"]],d);var C=d,h=C,f=(s("5b29"),s("2877")),p=Object(f["a"])(h,i,o,!1,null,"04c76053",null);e["default"]=p.exports}}]);