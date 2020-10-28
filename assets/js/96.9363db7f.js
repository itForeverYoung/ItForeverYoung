(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{602:function(v,_,t){"use strict";t.r(_);var r=t(4),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"消息中间件专题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息中间件专题"}},[v._v("#")]),v._v(" 消息中间件专题")]),v._v(" "),t("h2",{attrs:{id:"为什么需要mq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要mq"}},[v._v("#")]),v._v(" 为什么需要MQ")]),v._v(" "),t("h3",{attrs:{id:"优点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("ol",[t("li",[v._v("解耦")]),v._v(" "),t("li",[v._v("异步")]),v._v(" "),t("li",[v._v("削峰")])]),v._v(" "),t("h3",{attrs:{id:"缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("ol",[t("li",[v._v("系统可用性降低")]),v._v(" "),t("li",[v._v("系统复杂性升高")]),v._v(" "),t("li",[v._v("数据一致性问题")])]),v._v(" "),t("h2",{attrs:{id:"三种主流mq对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三种主流mq对比"}},[v._v("#")]),v._v(" 三种主流MQ对比")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("特性")]),v._v(" "),t("th",[v._v("Rabbit MQ")]),v._v(" "),t("th",[v._v("Rocket MQ")]),v._v(" "),t("th",[v._v("Kafka")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("支持的协议")]),v._v(" "),t("td",[v._v("AMQP")]),v._v(" "),t("td",[v._v("自定义协议")]),v._v(" "),t("td",[v._v("基于TCP的自定义协议")])]),v._v(" "),t("tr",[t("td",[v._v("消息存储方式")]),v._v(" "),t("td",[v._v("内存, 磁盘, 支持少量堆积")]),v._v(" "),t("td",[v._v("磁盘, 支持大量堆积")]),v._v(" "),t("td",[v._v("内存, 磁盘, 支持大量堆积")])]),v._v(" "),t("tr",[t("td",[v._v("消息消费方式")]),v._v(" "),t("td",[v._v("推模式")]),v._v(" "),t("td",[v._v("拉模式"),t("br"),v._v("(PushConsumer也是通过拉模式实现的)")]),v._v(" "),t("td",[v._v("拉模式")])]),v._v(" "),t("tr",[t("td",[v._v("重复消息")]),v._v(" "),t("td",[v._v("at least once"),t("br"),v._v("at most once")]),v._v(" "),t("td",[v._v("at least once"),t("br"),v._v("at most once")]),v._v(" "),t("td",[v._v("at least once")])]),v._v(" "),t("tr",[t("td",[v._v("顺序消息")]),v._v(" "),t("td",[v._v("不支持.")]),v._v(" "),t("td",[v._v("支持."),t("br"),v._v("全局顺序消息, 性能较差."),t("br"),v._v("分区顺序消息, 性能较好.")]),v._v(" "),t("td",[v._v("支持."),t("br"),v._v("全局顺序消息, 性能较差."),t("br"),v._v("分区顺序消息, 性能较好.")])]),v._v(" "),t("tr",[t("td",[v._v("定时消息")]),v._v(" "),t("td"),v._v(" "),t("td",[v._v("简单支持, 只支持18个固定的延时等级.")]),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("事务消息")]),v._v(" "),t("td",[v._v("不支持.")]),v._v(" "),t("td",[v._v("简单支持, "),t("br"),v._v("即只能保证本地事务和消息投递成功/失败的事务, "),t("br"),v._v("如果consumer端事务执行失败, 只能进行事务补偿操作.")]),v._v(" "),t("td",[v._v("不支持.")])]),v._v(" "),t("tr",[t("td",[v._v("回溯消息")]),v._v(" "),t("td",[v._v("不支持.")]),v._v(" "),t("td",[v._v("支持根据时间点的回溯.")]),v._v(" "),t("td",[v._v("支持根据offset的回溯.")])]),v._v(" "),t("tr",[t("td",[v._v("消息确认")]),v._v(" "),t("td",[v._v("支持."),t("br"),v._v("producer,"),t("br"),v._v("消息投递到目标队列后,返回成功."),t("br"),v._v("consumer,"),t("br"),v._v("可通过设置autoAck=false来开启显式确认.")]),v._v(" "),t("td",[v._v("支持.")]),v._v(" "),t("td",[v._v("支持.")])]),v._v(" "),t("tr",[t("td",[v._v("消息重试")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("吞吐量")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("并发度")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("可靠性")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("时效性")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("持久性")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("单机TPS")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("开发语言")]),v._v(" "),t("td",[v._v("Erlang")]),v._v(" "),t("td",[v._v("Java")]),v._v(" "),t("td",[v._v("Scala")])]),v._v(" "),t("tr",[t("td",[v._v("负载均衡")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")]),v._v(" "),t("tr",[t("td",[v._v("集群方式")]),v._v(" "),t("td",[v._v("简单集群, "),t("br"),v._v("支持镜像队列.")]),v._v(" "),t("td",[v._v("nameServer可集群部署, 不同节点之间无通信,"),t("br"),v._v("broker支持master-slave的一对多集群部署.")]),v._v(" "),t("td",[v._v("leader-slave的无状态集群,"),t("br"),v._v("依赖zookeeper.")])]),v._v(" "),t("tr",[t("td",[v._v("客户端支持语言")]),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("h2",{attrs:{id:"一些基础概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些基础概念"}},[v._v("#")]),v._v(" 一些基础概念")]),v._v(" "),t("h3",{attrs:{id:"producer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#producer"}},[v._v("#")]),v._v(" Producer")]),v._v(" "),t("p",[v._v("消息生产者.")]),v._v(" "),t("h3",{attrs:{id:"consumer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consumer"}},[v._v("#")]),v._v(" Consumer")]),v._v(" "),t("p",[v._v("消息消费者.")]),v._v(" "),t("h2",{attrs:{id:"消息消费模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#消息消费模式"}},[v._v("#")]),v._v(" 消息消费模式")]),v._v(" "),t("h3",{attrs:{id:"推模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推模式"}},[v._v("#")]),v._v(" 推模式")]),v._v(" "),t("p",[v._v("消息由broker主动推送给consumer.")]),v._v(" "),t("h4",{attrs:{id:"优点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("ol",[t("li",[v._v("实时性高, broker一有消息就可以主动推送给消费者,")]),v._v(" "),t("li",[v._v("消费者实现简单, 只需要等待消息到达即可.")])]),v._v(" "),t("h4",{attrs:{id:"缺点-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("ol",[t("li",[v._v("broker消息推送的速率和consumer消费的速率难以平衡,\n"),t("ol",[t("li",[v._v("因为broker有消息就会主动推送, 那如果突然有大批量的消息过来, 全部推送给consumer, 那consumer可能消费不过来, 就会引发问题,")]),v._v(" "),t("li",[v._v("consumer的宿主机的性能不一致, 那有的消费者消费速度快, 有的消费者消费速度慢, 但是broker并不知道哪个consumer性能好, 所以就没有办法平衡不同的consumer的推送速率,")]),v._v(" "),t("li",[v._v("当然, 上述的问题, 可以通过添加额外逻辑去判断, 比如说, consumer可以选择拒绝消费本次推送过来的消息, 这样broker再去轮询(假设是轮询方式)下一个consumer节点进行推送, 再复杂点, broker可以再维护一份consumer消费状态, 但是, 这样带来的问题就是broker实现起来会很复杂.")])])]),v._v(" "),t("li",[v._v("消息的批量处理实现起来比较复杂, 一般来说, 推模式应该是来一条消息就把这个消息推送给consumer, 如果要实现批量推送, 有两种方式,\n"),t("ol",[t("li",[v._v("在broker端进行配置, 每次缓存N条消息后再推送给consumer, 但是, 这样带来的问题是, broker并不知道consumer的消费能力是多少, 一旦批量推送的消息超过consumer的消费能力, 可能会被拒绝,")]),v._v(" "),t("li",[v._v("在consumer端进行配置, 当一个新的consumer加入进来后, 先根据设置将自己的最大消费能力告知broker, 然后, 在broker端维护一份consumer的消费能力, 但是, 这样处理的问题是, broker实现起来会比较复杂.")])])]),v._v(" "),t("li",[v._v("broker的工作量比较大, 就影响了broker服务器的性能.")])]),v._v(" "),t("p",[v._v("所以说, 推模式适用于消息量不大, 消费能力强, 但是对实时性要求特别高的情况.")]),v._v(" "),t("h3",{attrs:{id:"拉模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拉模式"}},[v._v("#")]),v._v(" 拉模式")]),v._v(" "),t("p",[v._v("消息由consumer主动到broker拉取.")]),v._v(" "),t("h4",{attrs:{id:"优点-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[v._v("#")]),v._v(" 优点")]),v._v(" "),t("ol",[t("li",[v._v("consumer可以根据自己的消费能力, 定时发起拉取请求, 甚至可以当发现消费不过来的时候, 暂停拉取消息,")]),v._v(" "),t("li",[v._v("broker的实现简单, 只需要保存消息即可, 有consumer的拉取请求, 就给它消息,")]),v._v(" "),t("li",[v._v("相对于推模式来说, 拉模式更容易实现消息的批量处理, consumer可以根据自己的消费能力, 一次性拉取多条消息.")])]),v._v(" "),t("h4",{attrs:{id:"缺点-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[v._v("#")]),v._v(" 缺点")]),v._v(" "),t("ol",[t("li",[v._v("消息延迟, 也就是实时性相对于推模式, 比较差, 既然是consumer主动拉取, 那consumer如何知道来新消息了呢, 那它只能不停地去轮询, 轮询间隔设定的过短, 就会导致有很多无用请求, 设定的过长, 就会导致消息拉取的实时性比较差,")]),v._v(" "),t("li",[v._v("忙请求, 其实和1有些类似, 就是说, 即便是在一段时间内没有任何消息到达, consumer还是必须定时去请求broker拉取数据, 但是又没有数据到达, 所以就是忙请求了.")])]),v._v(" "),t("h3",{attrs:{id:"二者对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二者对比"}},[v._v("#")]),v._v(" 二者对比")]),v._v(" "),t("p",[v._v("推模式和拉模式, 都各自有优缺点, 那应该如何选择呢, 我们看一下主流的消息中间件是如何选择的.")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("MQ")]),v._v(" "),t("th",[v._v("推模式")]),v._v(" "),t("th",[v._v("拉模式")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("Rocket MQ")]),v._v(" "),t("td",[v._v("❌")]),v._v(" "),t("td",[v._v("✅")])]),v._v(" "),t("tr",[t("td",[v._v("Kafka")]),v._v(" "),t("td",[v._v("❌")]),v._v(" "),t("td",[v._v("✅")])]),v._v(" "),t("tr",[t("td",[v._v("Rabbit MQ")]),v._v(" "),t("td",[v._v("✅")]),v._v(" "),t("td",[v._v("❌")])])])]),v._v(" "),t("p",[t("strong",[v._v("注: 简单提一句, Rocket MQ在提供的Java API中虽然同时支持Push和Pull, 但是它的Push也是通过Pull来实现的, 所以这里我们还是将其视为只支持拉模式.")])])])}),[],!1,null,null,null);_.default=a.exports}}]);