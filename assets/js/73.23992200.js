(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{432:function(s,t,e){"use strict";e.r(t);var n=e(42),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq"}},[s._v("#")]),s._v(" RocketMQ")]),s._v(" "),e("h2",{attrs:{id:"command"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command"}},[s._v("#")]),s._v(" command")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("mvn -Prelease-all -DskipTests clean install -U\n\ncd distribution/target/rocketmq"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("-4.7")]),s._v("."),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("/rocketmq"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("-4.7")]),s._v("."),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动nameserver")]),s._v("\nnohup sh bin/mqnamesrv \n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看当前的namesrv日志")]),s._v("\ntail -f ~/logs/rocketmqlogs/namesrv.log\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动rockermq broker")]),s._v("\nnohup sh bin/mqbroker -n localhost"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9876")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看当前的broker日志")]),s._v("\ntail -f ~/logs/rocketmqlogs/broker.log\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭broker")]),s._v("\nsh bin/mqshutdown broker\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关闭namesrv")]),s._v("\nsh bin/mqshutdown namesrv\n")])])]),e("h2",{attrs:{id:"应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#应用"}},[s._v("#")]),s._v(" 应用")])])}),[],!1,null,null,null);t.default=a.exports}}]);