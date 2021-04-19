(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{407:function(e,t,a){"use strict";a.r(t);var v=a(3),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("面试题之 框架 部分")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-mvc-和-mvvm"}},[e._v("1.mvc 和 mvvm")])]),a("li",[a("a",{attrs:{href:"#_2-请详细说下你对-vue-生命周期的理解"}},[e._v("2.请详细说下你对 vue 生命周期的理解")])]),a("li",[a("a",{attrs:{href:"#_3-vue-的双向数据绑定原理是什么-响应式原理又是啥-还有-v-model-原理"}},[e._v("3. Vue 的双向数据绑定原理是什么 响应式原理又是啥 还有 v-model 原理")])]),a("li",[a("a",{attrs:{href:"#_4-vue-和-react-的-diff-算法"}},[e._v("4.vue 和 react 的 diff 算法")])]),a("li",[a("a",{attrs:{href:"#_5-v-for-里的-key"}},[e._v("5.v-for 里的 key")])]),a("li",[a("a",{attrs:{href:"#_5-vue-router-钩子函数"}},[e._v("5.vue-router 钩子函数")])]),a("li",[a("a",{attrs:{href:"#_6-react-和-vue-的对比"}},[e._v("6. react 和 vue 的对比")])]),a("li",[a("a",{attrs:{href:"#_7-父子组件的生命周期"}},[e._v("7.父子组件的生命周期")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"_1-mvc-和-mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mvc-和-mvvm"}},[e._v("#")]),e._v(" 1.mvc 和 mvvm")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("Model"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("contorl\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVVM")]),e._v("：是Model"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ViewModel的简写\n通过操纵 "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("M")]),e._v("（模型层） 层 ，然后 "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("V")]),e._v("（视图层） 层会自动跟着变化 ，是通过 "),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("VM")]),e._v(" 层（数据劫持 和 虚拟"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("DOM")]),e._v("机制来实现）来实现的\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVVM")]),e._v("设计模式的优点\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" 低耦合。视图（View）可以独立于Model变化和修改\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v(" 可重用性。你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑。"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("可以组件式开发\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.")]),e._v(" 自动更新"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("DOM")]),e._v("，减少直接对"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("DOM")]),e._v("的操作\n\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVVM")]),e._v("设计模式的缺点\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v("  数据绑定也使得bug很难被调试。比如你看到页面异常了，有可能是你的View的代码有bug，也可能是你的model的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v("  数据双向绑定不利于代码重用。客户端开发最常用的是View，但是数据双向绑定技术，让你在一个View都绑定了一个model，不同的模块model都不同。那就不能简单重用view了\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.")]),e._v("  一个大的模块中model也会很大，虽然使用方便了也很容易保证数据的一致性，但是长期持有，不释放内存就造成话费更多的内存。\n")])])]),a("h2",{attrs:{id:"_2-请详细说下你对-vue-生命周期的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-请详细说下你对-vue-生命周期的理解"}},[e._v("#")]),e._v(" 2.请详细说下你对 vue 生命周期的理解")]),e._v(" "),a("ul",[a("li",[e._v("vue 生命周期总共分为 8 个阶段: 创建前/后，载入前/后，更新前/后， 销毁前/后。")]),e._v(" "),a("li",[e._v("beforeCreate （创建前）vue 实例的挂载元素$el 和数据对象 data 都是 undefined, 还未初始化")]),e._v(" "),a("li",[e._v("created (创建后) 完成了 data 数据初始化, el 还未初始化")]),e._v(" "),a("li",[e._v("beforeMount (载入前) vue 实例的$el 和 data 都初始化了, 相关的 render 函数首次被调用。实例已完成以下的配置：编译模板，把 data 里面的数据和模板生成 html。注意此时还没有挂载 html 到页面上。")]),e._v(" "),a("li",[e._v("mounted (载入后) 在 el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的 html 内容替换 el 属性指向的 DOM 对象。完成模板中的 html 渲染到 html 页面中。此过程中进行 ajax 交互")]),e._v(" "),a("li",[e._v("beforeUpdate (更新前) 在数据更新之前调用，发生在虚拟 DOM 重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。")]),e._v(" "),a("li",[e._v("updated （更新后） 在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。调用时，组件 DOM 已经更新，所以可以执行依赖于 DOM 的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。")]),e._v(" "),a("li",[e._v("beforeDestroy (销毁前） 在实例销毁之前调用。实例仍然完全可用。\ndestroyed (销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。")])]),e._v(" "),a("h2",{attrs:{id:"_3-vue-的双向数据绑定原理是什么-响应式原理又是啥-还有-v-model-原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-的双向数据绑定原理是什么-响应式原理又是啥-还有-v-model-原理"}},[e._v("#")]),e._v(" 3. Vue 的双向数据绑定原理是什么 响应式原理又是啥 还有 v-model 原理")]),e._v(" "),a("blockquote",[a("p",[e._v("双向绑定：")]),e._v(" "),a("ul",[a("li",[e._v("输入框内容变化时，Data 中的数据同步变化。即 View => Data 的变化。")]),e._v(" "),a("li",[e._v("Data 中的数据变化时，文本节点的内容同步变化。即 Data => View 的变化。")])]),e._v(" "),a("p",[e._v("响应式原理：")]),e._v(" "),a("ul",[a("li",[e._v("就是指的是 Data => View 的变化原理")])]),e._v(" "),a("p",[e._v("v-model 原理：")]),e._v(" "),a("ul",[a("li",[e._v("就是指的是 View => Data")])])]),e._v(" "),a("p",[e._v("vue 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发响应的监听回调。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("View => Data\n其实就是给 input 事件绑定 oninput 事件，改变 data 里的属性的值，再触发 Data => view 去更新视图。就是 v-model 的原理")])]),e._v(" "),a("li",[a("p",[e._v("Data => view\n通过 Object.defineProperty()去劫持每一个变量的 get,set。\n在 VUE 里的话，变量一变化，set 发通知给 watcher，watcher 告知虚拟 DOM 树，叫它该比较了，我这有值变了，于是生成新的 dom 树进行一个比较，然后逐级分类比较，更新页面")]),e._v(" "),a("p",[e._v("实际上就是在劫持到 set，在里面进行 DOM 更新")])])]),e._v(" "),a("h2",{attrs:{id:"_4-vue-和-react-的-diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-和-react-的-diff-算法"}},[e._v("#")]),e._v(" 4.vue 和 react 的 diff 算法")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000038894967?utm_source=sf-related",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考资料"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("vue 和 react 区别\nvue 和 react 的 diff 算法，都是忽略跨级比较，只做同级比较。vue diff 时调动 patch 函数，参数是 vnode 和 oldVnode，分别代表新旧节点。")]),e._v(" "),a("ul",[a("li",[e._v("vue 比对节点，当节点元素类型相同，但是 className 不同，认为是不同类型元素，删除重建，而 react 会认为是同类型节点，只是修改节点属性")]),e._v(" "),a("li",[e._v("vue 的列表比对，采用从两端到中间的比对方式，而 react 则采用从左到右依次比对的方式。当一个集合，只是把最后一个节点移动到了第一个，react 会把前面的节点依次移动，而 vue 只会把最后一个节点移动到第一个。总体上，vue 的对比方式更高效。")])]),e._v(" "),a("h2",{attrs:{id:"_5-v-for-里的-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-v-for-里的-key"}},[e._v("#")]),e._v(" 5.v-for 里的 key")]),e._v(" "),a("blockquote",[a("p",[e._v("作用：")]),e._v(" "),a("ol",[a("li",[e._v("避免错误的就地复用，提高 diff 速度")]),e._v(" "),a("li",[e._v("防止数据混乱")]),e._v(" "),a("li",[e._v("不能用 index 做 KEY，\n"),a("a",{attrs:{href:"https://www.zhihu.com/question/61064119/answer/766607894",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考资料"),a("OutboundLink")],1),e._v(" > "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000038894967?utm_source=sf-related",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考资料"),a("OutboundLink")],1)])])]),e._v(" "),a("ol",[a("li",[a("p",[e._v("在进行 diff 时，会根据头头尾尾头尾尾头的顺序进行 sameVnode 对比，如果不加 key，会导致 sameVnode 里面的 a.key === b.key 为真从而认为是相同的节点，就地复用之后取改变内容。如果是中间删除一个节点的情况是无法识别出来的，会依旧一个个按顺序对比。但如果有 key 的话，sameVnode 为 false，之后会按照 key 去旧的 node 树里寻找，移动过来。然后后面的节点全都会判断为没有改变。")])]),e._v(" "),a("li",[a("p",[e._v("v-for[1，2，3],选中 2，删掉第二个 => [1，3]不加 key 的话，会先")]),e._v(" "),a("p",[e._v("① 对比 1 = 1")]),e._v(" "),a("p",[e._v("② 对比新旧 node 的第二个，2 和 3。sameVnode 为 true，认为是相同节点，就地复用。这种就地复用会改变数组里的内容，但是如果有额外不是数组 item 里面的数据，是不会变化的。")]),e._v(" "),a("p",[e._v("③ 旧 node 王二，新 node 没了，认为王二是多出的，删去")]),e._v(" "),a("p",[e._v("④ 得到结果[1，3]。！！！！但是，现在选中的是 3，不会随着 2 去除")])])]),e._v(" "),a("h2",{attrs:{id:"_5-vue-router-钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-router-钩子函数"}},[e._v("#")]),e._v(" 5.vue-router 钩子函数")]),e._v(" "),a("ul",[a("li",[e._v("router.beforeEach 全局前置守卫 进入路由之前")]),e._v(" "),a("li",[e._v("router.beforeResolve 全局解析守卫(2.5.0+) 在 beforeRouteEnter 调用之后调用")]),e._v(" "),a("li",[e._v("router.afterEach 全局后置钩子 进入路由之后")])]),e._v(" "),a("h2",{attrs:{id:"_6-react-和-vue-的对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-react-和-vue-的对比"}},[e._v("#")]),e._v(" 6. react 和 vue 的对比")]),e._v(" "),a("ol",[a("li",[e._v("共同点：")])]),e._v(" "),a("ul",[a("li",[e._v("都使用虚拟 dom")]),e._v(" "),a("li",[e._v("提倡组件化")]),e._v(" "),a("li",[e._v("注意力集中保持在核心库，而将其他功能如路由和全局状态管理交给相关的库。")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("区别：")])]),e._v(" "),a("ul",[a("li",[e._v("vue 采用 HTML 和 JS,CSS 分离的写法，更加直观。react 使用 JSX 语法")]),e._v(" "),a("li",[e._v("vue 双向绑定，react 是单向数据流")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("vue 优势")])]),e._v(" "),a("ul",[a("li",[e._v("简单的语法及项目创建,易于上手")]),e._v(" "),a("li",[e._v("更快的渲染速度和更小的体积")]),e._v(" "),a("li",[e._v("中国框架，文档更加完善")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("React 的优势")])]),e._v(" "),a("ul",[a("li",[e._v("更适用于大型应用和更好的可测试性")]),e._v(" "),a("li",[e._v("同时适用于 Web 端和原生 App")]),e._v(" "),a("li",[e._v("扩展性更强")]),e._v(" "),a("li",[e._v("支持 TS")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("总结")])]),e._v(" "),a("ul",[a("li",[e._v("当 state 特别多的时候，Watcher 会很多，会导致卡顿，所以大型应用（状态特别多的）一般用 React，更加可控。可对于易用性来说，VUE 是更容易上手的，对于项目来说新人更容易接手。")])]),e._v(" "),a("h2",{attrs:{id:"_7-父子组件的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-父子组件的生命周期"}},[e._v("#")]),e._v(" 7.父子组件的生命周期")]),e._v(" "),a("ol",[a("li",[e._v("父组建： beforeCreate -> created -> beforeMount")]),e._v(" "),a("li",[e._v("子组件： -> beforeCreate -> created -> beforeMount -> mounted")]),e._v(" "),a("li",[e._v("父组件： -> mounted")]),e._v(" "),a("li",[e._v("总结：从外到内，再从内到外")])])])}),[],!1,null,null,null);t.default=r.exports}}]);