(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{425:function(t,a,s){"use strict";s.r(a);var l=s(2),e=Object(l.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("hr"),t._v(" "),s("p",[t._v("title: 杂项笔记\nlang: zh\ndisplay: home\ndescription: 杂项笔记\nimage: https://picsum.photos/536/354?random&date=2023-04-12\ndate: 2019-09-21\ntags:")]),t._v(" "),s("ul",[s("li",[t._v("笔记\ncategories:")]),t._v(" "),s("li",[t._v("经验")])]),t._v(" "),s("hr"),t._v(" "),s("blockquote",[s("p",[t._v("杂项笔记")])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-挂了-clash-代理之后-github-还是连接不上"}},[t._v("1. 挂了 clash 代理之后，github 还是连接不上")])]),s("li",[s("a",{attrs:{href:"#_2-喜抱的问题"}},[t._v("2. 喜抱的问题")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-挂了-clash-代理之后-github-还是连接不上"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-挂了-clash-代理之后-github-还是连接不上"}},[t._v("#")]),t._v(" 1. 挂了 clash 代理之后，github 还是连接不上")]),t._v(" "),s("p",[t._v("因为 git 拉代码默认端口没有从 clash 代理的端口走,设置一下端口就行。")]),t._v(" "),s("p",[t._v("但是关闭 clash 的话，就拉不了代码了。因为关了 clash,7890 这个端口就没有了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("git config --global http.proxy http://127.0.0.1:7890\n​\ngit config --global https.proxy https://127.0.0.1:7890\n")])])]),s("h2",{attrs:{id:"_2-喜抱的问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-喜抱的问题"}},[t._v("#")]),t._v(" 2. 喜抱的问题")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("项目经理也是研发这边的领导，以及产品经理责任心很弱。起不到引领作用。产品经理似乎只负责出设计，产品开发成什么样，有没有按产品的思路走根本不管。（有个 bug 关联到小窗播放是否算退出直播间的问题。我看代码里逻辑是算退出，然后我跟产品产品，产品说不算退出。我反馈现在代码是按退出算的。他说那我不知道，肯定算退出。旁边的另一个前端也不说话，这块逻辑是他写的。然后我问了其他员工，都说是按退出算。那我只能先按退出算去修改问题，跟现有代码统一，不然的话改动太大而且关系到其他人负责的东西）然后领导兼项目经理，经常不在，两天漏一次面就问一下进度，基本也不管事。整个团队处于群龙无首的状态。")])]),t._v(" "),s("li",[s("p",[t._v("4 个后台 3 个前端，没有技术经理。后续我可以作为前端的技术经理，但是后端很不统一，分模块完全不互通，接口规范各不相同，一个商品列表表格，要从 3 个不通的人共 4 个接口取数据然后整合，且数据格式完全不一致（说是数据不在一个库内，互不相同）")])]),t._v(" "),s("li",[s("p",[t._v("原本有一个年限较高前端，主要代码就是他开发的，但是开发完之后就跑了，然后我就是顶替他的位置。留了一些比较棘手的 bug，就等我来填这个坑。我入职现在主要就是修 bug。而且有的 Bug 是 C 端的，没有日志也没人复现，后来我给加了埋点跟踪数据排查解决了。还有像个别机型直播画面模糊，这个我也没有经验只能是从头了解这方面的东西，慢慢排查。关键领导觉得就是是不是哪边 SDK 用的不对改下就好了这种。然后其他模块暂时也没什么事，整个开发团队就我在忙，其他人闲的打游戏")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);