(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{409:function(t,a,s){"use strict";s.r(a);var e=s(3),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("面试题之 框架 部分")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-mvc-和-mvvm"}},[t._v("1.mvc 和 mvvm")])]),s("li",[s("a",{attrs:{href:"#_2-请详细说下你对-vue-生命周期的理解"}},[t._v("2.请详细说下你对 vue 生命周期的理解")])]),s("li",[s("a",{attrs:{href:"#_3-vue-的双向数据绑定原理是什么-响应式原理又是啥-还有-v-model-原理"}},[t._v("3. Vue 的双向数据绑定原理是什么 响应式原理又是啥 还有 v-model 原理")])]),s("li",[s("a",{attrs:{href:"#_4-vue-和-react-的-diff-算法"}},[t._v("4.vue 和 react 的 diff 算法")])]),s("li",[s("a",{attrs:{href:"#_5-v-for-里的-key"}},[t._v("5.v-for 里的 key")])]),s("li",[s("a",{attrs:{href:"#_5-vue-router-钩子函数"}},[t._v("5.vue-router 钩子函数")])]),s("li",[s("a",{attrs:{href:"#_6-react-和-vue-的对比"}},[t._v("6. react 和 vue 的对比")])]),s("li",[s("a",{attrs:{href:"#_7-父子组件的生命周期"}},[t._v("7.父子组件的生命周期")])]),s("li",[s("a",{attrs:{href:"#_8-vue-多层组件传值-provide-inject"}},[t._v("8. vue 多层组件传值 provide/inject")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-mvc-和-mvvm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-mvc-和-mvvm"}},[t._v("#")]),t._v(" 1.mvc 和 mvvm")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MVC")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("contorl\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MVVM")]),t._v("：是Model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("View"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ViewModel的简写\n通过操纵 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("M")]),t._v("（模型层） 层 ，然后 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("V")]),t._v("（视图层） 层会自动跟着变化 ，是通过 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("VM")]),t._v(" 层（数据劫持 和 虚拟"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("机制来实现）来实现的\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MVVM")]),t._v("设计模式的优点\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v(" 低耦合。视图（View）可以独立于Model变化和修改\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v(" 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("可以组件式开发\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v(" 自动更新"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("，减少直接对"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("的操作\n\n\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("MVVM")]),t._v("设计模式的缺点\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("  数据绑定也使得bug很难被调试。比如你看到页面异常了，有可能是你的View的代码有bug，也可能是你的model的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("  数据双向绑定不利于代码重用。客户端开发最常用的是View，但是数据双向绑定技术，让你在一个View都绑定了一个model，不同的模块model都不同。那就不能简单重用view了\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("  一个大的模块中model也会很大，虽然使用方便了也很容易保证数据的一致性，但是长期持有，不释放内存就造成话费更多的内存。\n")])])]),s("h2",{attrs:{id:"_2-请详细说下你对-vue-生命周期的理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-请详细说下你对-vue-生命周期的理解"}},[t._v("#")]),t._v(" 2.请详细说下你对 vue 生命周期的理解")]),t._v(" "),s("ul",[s("li",[t._v("vue 生命周期总共分为 8 个阶段: 创建前/后，载入前/后，更新前/后， 销毁前/后。")]),t._v(" "),s("li",[t._v("beforeCreate （创建前）vue 实例的挂载元素$el 和数据对象 data 都是 undefined, 还未初始化")]),t._v(" "),s("li",[t._v("created (创建后) 完成了 data 数据初始化, el 还未初始化")]),t._v(" "),s("li",[t._v("beforeMount (载入前) vue 实例的$el 和 data 都初始化了, 相关的 render 函数首次被调用。实例已完成以下的配置：编译模板，把 data 里面的数据和模板生成 html。注意此时还没有挂载 html 到页面上。")]),t._v(" "),s("li",[t._v("mounted (载入后) 在 el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的 html 内容替换 el 属性指向的 DOM 对象。完成模板中的 html 渲染到 html 页面中。此过程中进行 ajax 交互")]),t._v(" "),s("li",[t._v("beforeUpdate (更新前) 在数据更新之前调用，发生在虚拟 DOM 重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。")]),t._v(" "),s("li",[t._v("updated （更新后） 在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。调用时，组件 DOM 已经更新，所以可以执行依赖于 DOM 的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。")]),t._v(" "),s("li",[t._v("beforeDestroy (销毁前） 在实例销毁之前调用。实例仍然完全可用。\ndestroyed (销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。")])]),t._v(" "),s("h2",{attrs:{id:"_3-vue-的双向数据绑定原理是什么-响应式原理又是啥-还有-v-model-原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-的双向数据绑定原理是什么-响应式原理又是啥-还有-v-model-原理"}},[t._v("#")]),t._v(" 3. Vue 的双向数据绑定原理是什么 响应式原理又是啥 还有 v-model 原理")]),t._v(" "),s("blockquote",[s("p",[t._v("双向绑定：")]),t._v(" "),s("ul",[s("li",[t._v("输入框内容变化时，Data 中的数据同步变化。即 View => Data 的变化。")]),t._v(" "),s("li",[t._v("Data 中的数据变化时，文本节点的内容同步变化。即 Data => View 的变化。")])]),t._v(" "),s("p",[t._v("响应式原理：")]),t._v(" "),s("ul",[s("li",[t._v("就是指的是 Data => View 的变化原理")])]),t._v(" "),s("p",[t._v("v-model 原理：")]),t._v(" "),s("ul",[s("li",[t._v("就是指的是 View => Data")])])]),t._v(" "),s("p",[t._v("vue 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发响应的监听回调。")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("View => Data\n其实就是给 input 事件绑定 oninput 事件，改变 data 里的属性的值，再触发 Data => view 去更新视图。就是 v-model 的原理")])]),t._v(" "),s("li",[s("p",[t._v("Data => view\n通过 Object.defineProperty()去劫持每一个变量的 get,set。\n在 VUE 里的话，变量一变化，set 发通知给 watcher，watcher 告知虚拟 DOM 树，叫它该比较了，我这有值变了，于是生成新的 dom 树进行一个比较，然后逐级分类比较，更新页面")]),t._v(" "),s("p",[t._v("实际上就是在劫持到 set，在里面进行 DOM 更新")])])]),t._v(" "),s("h2",{attrs:{id:"_4-vue-和-react-的-diff-算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-和-react-的-diff-算法"}},[t._v("#")]),t._v(" 4.vue 和 react 的 diff 算法")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000038894967?utm_source=sf-related",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("vue 和 react 区别\nvue 和 react 的 diff 算法，都是忽略跨级比较，只做同级比较。vue diff 时调动 patch 函数，参数是 vnode 和 oldVnode，分别代表新旧节点。")]),t._v(" "),s("ul",[s("li",[t._v("vue 比对节点，当节点元素类型相同，但是 className 不同，认为是不同类型元素，删除重建，而 react 会认为是同类型节点，只是修改节点属性")]),t._v(" "),s("li",[t._v("vue 的列表比对，采用从两端到中间的比对方式，而 react 则采用从左到右依次比对的方式。当一个集合，只是把最后一个节点移动到了第一个，react 会把前面的节点依次移动，而 vue 只会把最后一个节点移动到第一个。总体上，vue 的对比方式更高效。")])]),t._v(" "),s("h2",{attrs:{id:"_5-v-for-里的-key"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-v-for-里的-key"}},[t._v("#")]),t._v(" 5.v-for 里的 key")]),t._v(" "),s("blockquote",[s("p",[t._v("作用：")]),t._v(" "),s("ol",[s("li",[t._v("避免错误的就地复用，提高 diff 速度")]),t._v(" "),s("li",[t._v("防止数据混乱")]),t._v(" "),s("li",[t._v("不能用 index 做 KEY，\n"),s("a",{attrs:{href:"https://www.zhihu.com/question/61064119/answer/766607894",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),s("OutboundLink")],1),t._v(" > "),s("a",{attrs:{href:"https://segmentfault.com/a/1190000038894967?utm_source=sf-related",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考资料"),s("OutboundLink")],1)])])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("在进行 diff 时，会根据头头尾尾头尾尾头的顺序进行 sameVnode 对比，如果不加 key，会导致 sameVnode 里面的 a.key === b.key 为真从而认为是相同的节点，就地复用之后取改变内容。如果是中间删除一个节点的情况是无法识别出来的，会依旧一个个按顺序对比。但如果有 key 的话，sameVnode 为 false，之后会按照 key 去旧的 node 树里寻找，移动过来。然后后面的节点全都会判断为没有改变。")])]),t._v(" "),s("li",[s("p",[t._v("v-for[1，2，3],选中 2，删掉第二个 => [1，3]不加 key 的话，会先")]),t._v(" "),s("p",[t._v("① 对比 1 = 1")]),t._v(" "),s("p",[t._v("② 对比新旧 node 的第二个，2 和 3。sameVnode 为 true，认为是相同节点，就地复用。这种就地复用会改变数组里的内容，但是如果有额外不是数组 item 里面的数据，是不会变化的。")]),t._v(" "),s("p",[t._v("③ 旧 node 王二，新 node 没了，认为王二是多出的，删去")]),t._v(" "),s("p",[t._v("④ 得到结果[1，3]。！！！！但是，现在选中的是 3，不会随着 2 去除")])])]),t._v(" "),s("h2",{attrs:{id:"_5-vue-router-钩子函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-router-钩子函数"}},[t._v("#")]),t._v(" 5.vue-router 钩子函数")]),t._v(" "),s("ul",[s("li",[t._v("router.beforeEach 全局前置守卫 进入路由之前")]),t._v(" "),s("li",[t._v("router.beforeResolve 全局解析守卫(2.5.0+) 在 beforeRouteEnter 调用之后调用")]),t._v(" "),s("li",[t._v("router.afterEach 全局后置钩子 进入路由之后")])]),t._v(" "),s("h2",{attrs:{id:"_6-react-和-vue-的对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-react-和-vue-的对比"}},[t._v("#")]),t._v(" 6. react 和 vue 的对比")]),t._v(" "),s("ol",[s("li",[t._v("共同点：")])]),t._v(" "),s("ul",[s("li",[t._v("都使用虚拟 dom")]),t._v(" "),s("li",[t._v("提倡组件化")]),t._v(" "),s("li",[t._v("注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("区别：")])]),t._v(" "),s("ul",[s("li",[t._v("vue 采用 HTML 和 JS,CSS 分离的写法，更加直观。react 使用 JSX 语法")]),t._v(" "),s("li",[t._v("vue 双向绑定，react 是单向数据流")])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("vue 优势")])]),t._v(" "),s("ul",[s("li",[t._v("简单的语法及项目创建,易于上手")]),t._v(" "),s("li",[t._v("更快的渲染速度和更小的体积")]),t._v(" "),s("li",[t._v("中国框架，文档更加完善")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("React 的优势")])]),t._v(" "),s("ul",[s("li",[t._v("更适用于大型应用和更好的可测试性")]),t._v(" "),s("li",[t._v("同时适用于 Web 端和原生 App")]),t._v(" "),s("li",[t._v("扩展性更强")]),t._v(" "),s("li",[t._v("支持 TS")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("总结")])]),t._v(" "),s("ul",[s("li",[t._v("当 state 特别多的时候，Watcher 会很多，会导致卡顿，所以大型应用（状态特别多的）一般用 React，更加可控。可对于易用性来说，VUE 是更容易上手的，对于项目来说新人更容易接手。")])]),t._v(" "),s("h2",{attrs:{id:"_7-父子组件的生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-父子组件的生命周期"}},[t._v("#")]),t._v(" 7.父子组件的生命周期")]),t._v(" "),s("ol",[s("li",[t._v("父组建： beforeCreate -> created -> beforeMount")]),t._v(" "),s("li",[t._v("子组件： -> beforeCreate -> created -> beforeMount -> mounted")]),t._v(" "),s("li",[t._v("父组件： -> mounted")]),t._v(" "),s("li",[t._v("总结：从外到内，再从内到外")])]),t._v(" "),s("h2",{attrs:{id:"_8-vue-多层组件传值-provide-inject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-vue-多层组件传值-provide-inject"}},[t._v("#")]),t._v(" 8. vue 多层组件传值 provide/inject")]),t._v(" "),s("p",[t._v("可以往子孙组件传递数据，包括变量和方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div\n    id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("router"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("view\n      v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"isRouterAlive"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'App'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    MergeTipDialog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    BreakNetTip\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      isShow"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      isRouterAlive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 父组件中返回要传给下级的数据")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("provide")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      reload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reload\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRouterAlive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isRouterAlive "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("popup"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("assign\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),t._v("\n    @success"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"successHandle"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"confirm-d-tit"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("span "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gray-small-btn"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("span"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("strong"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("将被分配给"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("strong"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a\n      slot"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reference"')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"unite-btn"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      指派\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("popup"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("assign"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PopupAssign "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../PopupAssign'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引用vue reload方法")]),t._v("\n  inject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reload'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  components"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    PopupAssign\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nmethods"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...mapActions(['freshList']),")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("successHandle")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);