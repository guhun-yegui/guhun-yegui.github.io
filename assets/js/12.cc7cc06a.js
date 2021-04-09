(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{403:function(_,v,t){"use strict";t.r(v);var e=t(3),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("blockquote",[t("p",[_._v("面试题之 项目优化 部分")])]),_._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#_1-页面加载"}},[_._v("1.页面加载")])]),t("li",[t("a",{attrs:{href:"#_2-页面渲染"}},[_._v("2. 页面渲染")])]),t("li",[t("a",{attrs:{href:"#_2-vue-项目优化"}},[_._v("2. vue 项目优化")]),t("ul",[t("li",[t("a",{attrs:{href:"#_1-代码层面优化"}},[_._v("1. 代码层面优化")])]),t("li",[t("a",{attrs:{href:"#_2-webpack-层面优化"}},[_._v("2. webpack 层面优化")])]),t("li",[t("a",{attrs:{href:"#_3-web-层面优化"}},[_._v("3. web 层面优化")])])])])])]),t("p"),_._v(" "),t("h2",{attrs:{id:"_1-页面加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-页面加载"}},[_._v("#")]),_._v(" 1.页面加载")]),_._v(" "),t("ul",[t("li",[_._v("1.dns 预解析")]),_._v(" "),t("li",[_._v("2.使用 cdn")]),_._v(" "),t("li",[_._v("3.静态资源的压缩与合并")]),_._v(" "),t("li",[_._v("4.减少 https 请求")]),_._v(" "),t("li",[_._v("5.异步加载 defer，async")]),_._v(" "),t("li",[_._v("6.服务端渲染 ssr")]),_._v(" "),t("li",[_._v("7.多使用内存和缓存")])]),_._v(" "),t("h2",{attrs:{id:"_2-页面渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-页面渲染"}},[_._v("#")]),_._v(" 2. 页面渲染")]),_._v(" "),t("ul",[t("li",[_._v("1.css 放前面，js 放后面")]),_._v(" "),t("li",[_._v("2.减少 dom 查询，多次使用的保存为变量")]),_._v(" "),t("li",[_._v("3.减少 dom 操作，统一通过 dom 片段操作")]),_._v(" "),t("li",[_._v("4.事件函数的节流和防抖")]),_._v(" "),t("li",[_._v("5.图片懒加载")]),_._v(" "),t("li",[_._v("6.尽早进行操作， domcontentload 与 load")])]),_._v(" "),t("h2",{attrs:{id:"_2-vue-项目优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-vue-项目优化"}},[_._v("#")]),_._v(" 2. vue 项目优化")]),_._v(" "),t("h3",{attrs:{id:"_1-代码层面优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-代码层面优化"}},[_._v("#")]),_._v(" 1. 代码层面优化")]),_._v(" "),t("ul",[t("li",[_._v("1.v-if 和 v-for 不要在一起使用。v-if 的条件通过函数来处理")]),_._v(" "),t("li",[_._v("2.v-for 中加上 key，对于虚拟 dom 树查找提高性能")]),_._v(" "),t("li",[_._v("3.操作 dom 不要使用 js 原生的方式来操作。用 vue 提供的三种方式来操作 比如，ref、自定义指令 el、事件中的话用 e.target 获取 dom")]),_._v(" "),t("li",[_._v("4.尽量不要在前端进行大量的数据处理")]),_._v(" "),t("li",[_._v("5.合理使用 keep-alive 来缓存页面数据，跳过 created,mounted 钩子，他有自己特定的钩子 activted 等")]),_._v(" "),t("li",[_._v("6.路由懒加载通过 import 配合箭头函数，还有其他的方式 require")]),_._v(" "),t("li",[_._v("7.组件懒加载，异步加载")]),_._v(" "),t("li",[_._v("8.服务端渲染 ssr，优化 seo，与首屏白屏问题。")]),_._v(" "),t("li",[_._v("9.把组件中的 css 提取成单独的文件")]),_._v(" "),t("li",[_._v("10.使用字体图标或者 svg 来代替传统的 Png 等格式的图片")])]),_._v(" "),t("h3",{attrs:{id:"_2-webpack-层面优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-webpack-层面优化"}},[_._v("#")]),_._v(" 2. webpack 层面优化")]),_._v(" "),t("ul",[t("li",[_._v("1.去除无用代码 treeShaking.")]),_._v(" "),t("li",[_._v("2.减小 app.js 的体积，提取公共代码")]),_._v(" "),t("li",[_._v("3.通过按需引入第三方库，或者有些资源可以通过 script 标签引入。")]),_._v(" "),t("li",[_._v("4.关闭 SouceMap")]),_._v(" "),t("li",[_._v("5.webpack 对图片进行压缩等处理")])]),_._v(" "),t("h3",{attrs:{id:"_3-web-层面优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-web-层面优化"}},[_._v("#")]),_._v(" 3. web 层面优化")]),_._v(" "),t("ul",[t("li",[_._v("1.浏览器缓存的使用")]),_._v(" "),t("li",[_._v("2.开启 gzip 压缩")]),_._v(" "),t("li",[_._v("3.CDN 的使用，减少路由转发的次数，就近访问资源")]),_._v(" "),t("li",[_._v("4.使用 chrome 的性能分析工具，查找性能瓶颈")]),_._v(" "),t("li",[_._v("5.dns 预解析")]),_._v(" "),t("li",[_._v("6.静态资源的压缩与合并")]),_._v(" "),t("li",[_._v("7.减少 https 请求")]),_._v(" "),t("li",[_._v("8.异步加载 defer，async")])])])}),[],!1,null,null,null);v.default=a.exports}}]);