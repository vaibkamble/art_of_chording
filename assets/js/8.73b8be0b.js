(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{336:function(t,e,n){var i=n(1),u=n(4),r=n(105),s=[].slice,o=function(t){return function(e,n){var i=arguments.length>2,u=i?s.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,u)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:o(u.setTimeout),setInterval:o(u.setInterval)})},337:function(t,e,n){},379:function(t,e,n){"use strict";var i=n(337);n.n(i).a},390:function(t,e,n){"use strict";n.r(e);n(336);var i=n(107),u={props:{text:{type:String,required:!0},playing:Boolean},setup:function(t){var e=Object(i.e)(!1),n=Object(i.e)(null);return Object(i.g)((function(){return t.text}),(function(){e.value=!0,n.value&&clearTimeout(n.value),n.value=setTimeout((function(){return e.value=!1}),500)})),{typing:e}}},r=(n(379),n(42)),s=Object(r.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(this._s(this.text)),e("span",{class:{typing:this.typing,cursor:!0,playing:this.playing}},[this._v("|")])])}),[],!1,null,"db5e70ee",null);e.default=s.exports}}]);