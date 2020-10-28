(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{572:function(s,t,a){"use strict";a.r(t);var r=a(4),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"高并发系统设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高并发系统设计"}},[s._v("#")]),s._v(" 高并发系统设计")]),s._v(" "),a("h2",{attrs:{id:"设计一个秒杀系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计一个秒杀系统"}},[s._v("#")]),s._v(" 设计一个秒杀系统")]),s._v(" "),a("h3",{attrs:{id:"需要考虑的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要考虑的问题"}},[s._v("#")]),s._v(" 需要考虑的问题")]),s._v(" "),a("ol",[a("li",[s._v("防止超卖")]),s._v(" "),a("li",[s._v("避免缓存出现宕机")]),s._v(" "),a("li",[s._v("服务降级，限流，熔断")])]),s._v(" "),a("h3",{attrs:{id:"解决思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决思路"}},[s._v("#")]),s._v(" 解决思路")]),s._v(" "),a("ol",[a("li",[s._v("首先考虑单一原则，我们专门设计一个秒杀系统，使用单独的数据库，这样的话，即便秒杀系统挂了，也不会影响其他服务。")]),s._v(" "),a("li",[s._v("秒杀系统集群部署，既然单机服务怕挂掉，那我就多部署几个服务，前端可以通过Nginx进行负载均衡。")]),s._v(" "),a("li",[s._v("Redis也进行集群部署，主从模式/Sentinel 哨兵模式/cluster 集群模式")]),s._v(" "),a("li",[s._v("缓存预热，把相关的商品信息，秒杀数量等等全都加载到缓存中，尽量保证在秒杀阶段这些信息都能命中缓存。")]),s._v(" "),a("li",[s._v("静态资源加载到cdn中，尽量减少前端服务的压力。")]),s._v(" "),a("li",[s._v("对请求URL进行加密，避免有人直接通过查看服务端URL写脚本发送大量请求。")]),s._v(" "),a("li",[s._v("在前端页面做限流，间隔100ms（配置）之内的重复点击，不发送请求。")]),s._v(" "),a("li",[s._v("在网关层做限流，同一个ip地址的请求超过10次（配置）后即不做处理，避免有人通过查看url直接把请求打到服务端。")]),s._v(" "),a("li",[s._v("在service层，先抢库存，写一个lua脚本，有库存时就-1返回true，没库存时就返回false。")]),s._v(" "),a("li",[s._v("当service层返回false时，前端可以直接提示用户秒杀失败，这样就避免了用户的无效点击（对用户来说无效，但是对系统来说可是实打实的一次请求，所以此处也是限流）。")]),s._v(" "),a("li",[s._v("当某个请求抢库存成功之后，将创建订单的动作组装一个message发布到mq中，订单系统从mq中接受message开始真正的创建订单。")]),s._v(" "),a("li",[s._v("创建订单完成后，可以异步发送消息提示用户，秒杀成功。")]),s._v(" "),a("li",[a("s",[s._v("如果有多种商品秒杀，上述第9步也有可能发生单点故障，毕竟Redis的qps也是有上限的，即便是我们做了集群部署。那么此时可以考虑，把减库存、创建订单两个动作组装成一个message发布到mq中，然后异步处理。")])]),s._v(" "),a("li",[s._v("服务降级其实就是考虑到资源不够用的问题，由于此时我们主要考虑秒杀系统，所以可以把用户管理、地址管理等等服务降级。")]),s._v(" "),a("li",[s._v("上述设计中，步骤7，8，9，10其实都属于限流操作。")]),s._v(" "),a("li",[s._v("上述设计中，其实没有具体的熔断措施，但是，因为一开始，就把秒杀系统做成了一个独立的系统，并且与其他系统的交互都是通过mq，所以即便是秒杀系统宕机，也不会影响其他服务。")])]),s._v(" "),a("p",[a("strong",[s._v("注：考虑到Redis的访问速度很快，一般的秒杀可以参考思路9、10，如果是商品很多的秒杀活动，可以把步骤9、10更换为步骤11。")])]),s._v(" "),a("h2",{attrs:{id:"分布式锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式锁"}},[s._v("#")]),s._v(" 分布式锁")]),s._v(" "),a("h3",{attrs:{id:"zookeeper-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-实现"}},[s._v("#")]),s._v(" zookeeper 实现")]),s._v(" "),a("h3",{attrs:{id:"redis-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-实现"}},[s._v("#")]),s._v(" Redis 实现")]),s._v(" "),a("h3",{attrs:{id:"mysql-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-实现"}},[s._v("#")]),s._v(" MySQL 实现")]),s._v(" "),a("h2",{attrs:{id:"分布式事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式事务"}},[s._v("#")]),s._v(" 分布式事务")]),s._v(" "),a("h3",{attrs:{id:"tcc-两阶段提交协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcc-两阶段提交协议"}},[s._v("#")]),s._v(" tcc（两阶段提交协议）")]),s._v(" "),a("h3",{attrs:{id:"最大努力保证模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最大努力保证模式"}},[s._v("#")]),s._v(" 最大努力保证模式")]),s._v(" "),a("h3",{attrs:{id:"事务补偿机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务补偿机制"}},[s._v("#")]),s._v(" 事务补偿机制")]),s._v(" "),a("h2",{attrs:{id:"负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡"}},[s._v("#")]),s._v(" 负载均衡")]),s._v(" "),a("h3",{attrs:{id:"硬件负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#硬件负载均衡"}},[s._v("#")]),s._v(" 硬件负载均衡")]),s._v(" "),a("h4",{attrs:{id:"f5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#f5"}},[s._v("#")]),s._v(" F5")]),s._v(" "),a("h3",{attrs:{id:"软件负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件负载均衡"}},[s._v("#")]),s._v(" 软件负载均衡")]),s._v(" "),a("h4",{attrs:{id:"四层负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四层负载均衡"}},[s._v("#")]),s._v(" 四层负载均衡")]),s._v(" "),a("h5",{attrs:{id:"lvs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lvs"}},[s._v("#")]),s._v(" lvs")]),s._v(" "),a("h4",{attrs:{id:"七层负载均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七层负载均衡"}},[s._v("#")]),s._v(" 七层负载均衡")]),s._v(" "),a("h5",{attrs:{id:"nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[s._v("#")]),s._v(" Nginx")]),s._v(" "),a("p",[s._v("upstream 配置")]),s._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[s._v("Syntax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nDefault"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("\nContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" Nginx负载均衡支持将客户端请求代理转发到一组"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v("虚拟服务池\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" load_pass "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ip_hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 采用"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ip_hash")]),s._v("的调度算法\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 下面是轮询的调度算法\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" weight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 当前节点的权重是"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" down"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 当前节点是宕机的，不参与负载\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" backup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 预留的备份服务器\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" max_conns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" max_conns：当前节点支持的tcp最大连接数\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" max_fails"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" fail_timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" max_fails：允许请求失败的次数 fail_timeout：超过最大的失败次数后，服务暂停访问的时间\n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 健康检查需要依赖第三方模块：nginx_upstream_check_module\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# interval 检测间隔时间，单位为毫秒")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rise 表示请求2次正常，标记此后端的状态为up")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fall 表示请求3次失败，标记此后端的状态为down")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# type 类型为tcp")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# timeout 超时时间，单位为毫秒")]),s._v("\n check interval"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v(" rise"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" fall"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timeout")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" type"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("tcp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("aaa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("load_pass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" proxy_params"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" 当出现指定错误时，将请求转移到其他节点上\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_next_upstream")]),s._v(" error "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timeout")]),s._v(" http_500 http_502 http_503 http_504"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])])]),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" proxy_params的配置\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("IP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$remote_addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_set_header")]),s._v(" X"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("For "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$proxy_add_x_forwarded_for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_connect_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_send_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_read_timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffering")]),s._v(" on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffer_size")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_buffers")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("k"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("调度算法")]),s._v(" "),a("ol",[a("li",[s._v("轮询")]),s._v(" "),a("li",[s._v("加权轮询")]),s._v(" "),a("li",[s._v("ip_hash")])]),s._v(" "),a("h5",{attrs:{id:"haproxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#haproxy"}},[s._v("#")]),s._v(" HAProxy")]),s._v(" "),a("h4",{attrs:{id:"阿里云slb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阿里云slb"}},[s._v("#")]),s._v(" 阿里云SLB")]),s._v(" "),a("h2",{attrs:{id:"了解哪些限流方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解哪些限流方案"}},[s._v("#")]),s._v(" 了解哪些限流方案")]),s._v(" "),a("h2",{attrs:{id:"如何实现一个熔断器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现一个熔断器"}},[s._v("#")]),s._v(" 如何实现一个熔断器")])])}),[],!1,null,null,null);t.default=e.exports}}]);