(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{10:function(t,e,s){"use strict";function r(t,e,s,r,n,a,c,o){var i,p="function"==typeof t?t.options:t;if(e&&(p.render=e,p.staticRenderFns=s,p._compiled=!0),r&&(p.functional=!0),a&&(p._scopeId="data-v-"+a),c?(i=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},p._ssrRegister=i):n&&(i=o?function(){n.call(this,this.$root.$options.shadowRoot)}:n),i)if(p.functional){p._injectStyles=i;var v=p.render;p.render=function(t,e){return i.call(e),v(t,e)}}else{var _=p.beforeCreate;p.beforeCreate=_?[].concat(_,i):[i]}return{exports:t,options:p}}s.d(e,"a",(function(){return r}))},160:function(t,e,s){"use strict";s.r(e);var r=s(10),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-typescript"}},[t._v("#")]),t._v(" 安装 TypeScript")]),t._v(" "),s("p",[t._v("通过 npm 安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" typescript -g\n")])])]),s("p",[t._v("以上命令会在全局环境下安装 "),s("code",[t._v("tsc")]),t._v(" 和 "),s("code",[t._v("tsserver")]),t._v(" 两个命令，安装完成之后，我们就可以在任何地方执行它了。")]),t._v(" "),s("h2",{attrs:{id:"tsserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsserver"}},[t._v("#")]),t._v(" tsserver")]),t._v(" "),s("p",[t._v("TypeScript 独立服务器(又名 tsserver )是一个节点可执行文件，它封装了 TypeScript 编译器和语言服务，并通过 JSON 协议公开它们。tsserver 非常适合编辑器和 IDE 支持。")]),t._v(" "),s("p",[t._v("一般工作中不常用到它。"),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/wiki/Standalone-Server-%28tsserver%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("进一步了解tsserver"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"tsc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsc"}},[t._v("#")]),t._v(" tsc")]),t._v(" "),s("p",[t._v("tsc 为 typescript compiler 的缩写，即 TypeScript 编译器，用于将 TS 代码编译为 JS 代码。使用方法如下：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("$ tsc index.ts\n")])])]),s("p",[t._v("编译成功后，就会在相同目录下生成一个同名 js 文件，你也可以通过命令参数来修改默认的输出名称。")]),t._v(" "),s("p",[t._v("默认情况下编译器以 ECMAScript 3（ES3）为目标。可以通过 "),s("code",[t._v("tsc -h")]),t._v(" 命令查看相关帮助，可以了解更多的配置。")]),t._v(" "),s("p",[t._v("我们约定使用 TypeScript 编写的文件以 "),s("code",[t._v(".ts")]),t._v(" 为后缀，用 TypeScript 编写 React 时，以 "),s("code",[t._v(".tsx")]),t._v(" 为后缀。")])])}),[],!1,null,null,null);e.default=n.exports}}]);