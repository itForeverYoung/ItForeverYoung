(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{444:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis-持久化策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-持久化策略"}},[s._v("#")]),s._v(" Redis 持久化策略")]),s._v(" "),t("h2",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),t("h3",{attrs:{id:"redis-有哪些持久化策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis-有哪些持久化策略"}},[s._v("#")]),s._v(" Redis 有哪些持久化策略")]),s._v(" "),t("ul",[t("li",[s._v("rdb")]),s._v(" "),t("li",[s._v("aof")]),s._v(" "),t("li",[s._v("aof rewrite")]),s._v(" "),t("li",[s._v("mix 混合持久化")])]),s._v(" "),t("h3",{attrs:{id:"aof-重写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aof-重写"}},[s._v("#")]),s._v(" aof 重写")]),s._v(" "),t("h3",{attrs:{id:"为什么会出现混合持久化策略，何时进行压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现混合持久化策略，何时进行压缩"}},[s._v("#")]),s._v(" 为什么会出现混合持久化策略，何时进行压缩")]),s._v(" "),t("h3",{attrs:{id:"生产环境应主要用哪种持久化策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生产环境应主要用哪种持久化策略"}},[s._v("#")]),s._v(" 生产环境应主要用哪种持久化策略")]),s._v(" "),t("h3",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rdb持久化使用BGSAVE命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rdb持久化执行的规则")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不持久化")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// save ""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 900s执行了1次更新")]),s._v("\nsave "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 300s执行了10次更新")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// save 300 10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 60s执行了10000次更新")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// save 60 10000")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 当bgsave执行失败后，是否停止接收客户端的写入命令")]),s._v("\nstop-writes-on-bgsave-error yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否开启rdb文件压缩")]),s._v("\nrdbcompression yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// rdb文件名称")]),s._v("\ndbfilename dump.rdb\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 开启aof持久化")]),s._v("\nappendonly yes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// aof文件名称")]),s._v("\nappendfilename "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"appendonly.aof"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次命令都先写入aof缓冲区，再写入aof文件，最安全，效率最低")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// appendfsync always")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每次命令都先写入aof缓冲区，每秒自动将缓冲区的内容写入aof文件，最合适")]),s._v("\nappendfsync everysec\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 只把命令写入aof缓冲区，至于什么时候写入aof文件由操作系统控制，可能会丢失日志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// appendfsync no")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// aof重写使用BGREWRITEAOF命令")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// aof文件重写触发的条件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 当aof文件的大小，相比于服务启动时或上一次重写后的文件大小，超过了100%，那就启动重写，配置为0则关闭自动重写")]),s._v("\nauto-aof-rewrite-percentage "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. 当aof文件大于64mb时再触发重写")]),s._v("\nauto-aof-rewrite-min-size 64mb\n")])])]),t("h2",{attrs:{id:"源码分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码分析"}},[s._v("#")]),s._v(" 源码分析")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")])])}),[],!1,null,null,null);a.default=n.exports}}]);