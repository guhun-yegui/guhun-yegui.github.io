(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{402:function(e,t,a){"use strict";a.r(t);var r=a(3),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("blockquote",[a("p",[e._v("面试题之 框架 部分")])]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#_1-mvc-和-mvvm"}},[e._v("1.mvc 和 mvvm")])]),a("li",[a("a",{attrs:{href:"#_2-请详细说下你对-vue-生命周期的理解"}},[e._v("2.请详细说下你对 vue 生命周期的理解")])]),a("li",[a("a",{attrs:{href:"#_3-vue-的双向数据绑定原理是什么"}},[e._v("3. Vue 的双向数据绑定原理是什么")])]),a("li",[a("a",{attrs:{href:"#_4-vue-和-react-的-diff-算法"}},[e._v("4.vue 和 react 的 diff 算法")])]),a("li",[a("a",{attrs:{href:"#_5-vue-router-钩子函数"}},[e._v("5.vue-router 钩子函数")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"_1-mvc-和-mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-mvc-和-mvvm"}},[e._v("#")]),e._v(" 1.mvc 和 mvvm")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVC")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("Model"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("view"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("contorl\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVVM")]),e._v("：是Model"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("View"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ViewModel的简写\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVVM")]),e._v("设计模式的优点\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v("  双向绑定技术，当Model变化时，View"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Model会自动更新，View也会自动变化。很好的做到数据的一致性\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v("  由于控制器的功能大都移动到View上处理，大大的对控制器进行了瘦身\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.")]),e._v("  View的功能进一步强化，具有控制的部分功能，\n     若想无限增强它的功能，甚至控制器的全部功能几乎都可以迁移到各个View上\n　（不过这样不可取，那样View干不了属于它职责范围内的事情）。\n　   View可以像控制器一样具有自己都View"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Model\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.")]),e._v("  可以对View或ViewController的数据处理部分抽象出来一个函数处理model。\n      这样它们专职页面布局和页面跳转，它们必然更一步的简化。\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("MVVM")]),e._v("设计模式的缺点\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v("  数据绑定也使得bug很难被调试。比如你看到页面异常了，有可能是你的View的代码有bug，也可能是你的model的代码有问题。数据绑定使得一个位置的Bug被快速传递到别的位置，要定位原始出问题的地方就变得不那么容易了。\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v("  数据双向绑定不利于代码重用。客户端开发最常用的是View，但是数据双向绑定技术，让你在一个View都绑定了一个model，不同的模块model都不同。那就不能简单重用view了\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.")]),e._v("  一个大的模块中model也会很大，虽然使用方便了也很容易保证数据的一致性，但是长期持有，不释放内存就造成话费更多的内存。\n")])])]),a("h2",{attrs:{id:"_2-请详细说下你对-vue-生命周期的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-请详细说下你对-vue-生命周期的理解"}},[e._v("#")]),e._v(" 2.请详细说下你对 vue 生命周期的理解")]),e._v(" "),a("ul",[a("li",[e._v("vue 生命周期总共分为 8 个阶段: 创建前/后，载入前/后，更新前/后， 销毁前/后。")]),e._v(" "),a("li",[e._v("beforeCreate （创建前）vue 实例的挂载元素$el 和数据对象 data 都是 undefined, 还未初始化")]),e._v(" "),a("li",[e._v("created (创建后) 完成了 data 数据初始化, el 还未初始化")]),e._v(" "),a("li",[e._v("beforeMount (载入前) vue 实例的$el 和 data 都初始化了, 相关的 render 函数首次被调用。实例已完成以下的配置：编译模板，把 data 里面的数据和模板生成 html。注意此时还没有挂载 html 到页面上。")]),e._v(" "),a("li",[e._v("mounted (载入后) 在 el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的 html 内容替换 el 属性指向的 DOM 对象。完成模板中的 html 渲染到 html 页面中。此过程中进行 ajax 交互")]),e._v(" "),a("li",[e._v("beforeUpdate (更新前) 在数据更新之前调用，发生在虚拟 DOM 重新渲染和打补丁之前。可以在该钩子中进一步地更改状态，不会触发附加的重渲染过程。")]),e._v(" "),a("li",[e._v("updated （更新后） 在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。调用时，组件 DOM 已经更新，所以可以执行依赖于 DOM 的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用。")]),e._v(" "),a("li",[e._v("beforeDestroy (销毁前） 在实例销毁之前调用。实例仍然完全可用。\ndestroyed (销毁后） 在实例销毁之后调用。调用后，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务器端渲染期间不被调用。")])]),e._v(" "),a("h2",{attrs:{id:"_3-vue-的双向数据绑定原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-vue-的双向数据绑定原理是什么"}},[e._v("#")]),e._v(" 3. Vue 的双向数据绑定原理是什么")]),e._v(" "),a("p",[e._v("vue.js 是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。")]),e._v(" "),a("h2",{attrs:{id:"_4-vue-和-react-的-diff-算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-vue-和-react-的-diff-算法"}},[e._v("#")]),e._v(" 4.vue 和 react 的 diff 算法")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000038894967?utm_source=sf-related",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考资料"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("vue 和 react 区别\nvue 和 react 的 diff 算法，都是忽略跨级比较，只做同级比较。vue diff 时调动 patch 函数，参数是 vnode 和 oldVnode，分别代表新旧节点。")]),e._v(" "),a("ul",[a("li",[e._v("vue 比对节点，当节点元素类型相同，但是 className 不同，认为是不同类型元素，删除重建，而 react 会认为是同类型节点，只是修改节点属性")]),e._v(" "),a("li",[e._v("vue 的列表比对，采用从两端到中间的比对方式，而 react 则采用从左到右依次比对的方式。当一个集合，只是把最后一个节点移动到了第一个，react 会把前面的节点依次移动，而 vue 只会把最后一个节点移动到第一个。总体上，vue 的对比方式更高效。")])]),e._v(" "),a("h2",{attrs:{id:"_5-vue-router-钩子函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-vue-router-钩子函数"}},[e._v("#")]),e._v(" 5.vue-router 钩子函数")]),e._v(" "),a("ul",[a("li",[e._v("router.beforeEach 全局前置守卫 进入路由之前")]),e._v(" "),a("li",[e._v("router.beforeResolve 全局解析守卫(2.5.0+) 在 beforeRouteEnter 调用之后调用")]),e._v(" "),a("li",[e._v("router.afterEach 全局后置钩子 进入路由之后")])])])}),[],!1,null,null,null);t.default=s.exports}}]);