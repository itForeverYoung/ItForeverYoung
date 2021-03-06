# Mycat

## 系统参数配置

**server.XML**

1. system：定义了连接Mycat服务器的系统配置信息。
	1. 例如是否开启实时统计功能，是否开启全加班一致性检测。
2. user：定义了连接Mycat服务器的账号密码，以及该账号可进行的数据库操作。
	1. Benchmark：mycat连接服务降级处理
	2. usingDecrypt：是否对密码加密默认 0 否 如需要开启配置 1。
	3. privileges子节点：对用户的 schema 及 下级的 table 进行精细化的 DML 权限控制。check字段默认false，不检查。
		1. Schema/Table 上的 dml属性描述
		说明                      事例（禁止增删改查）
		insert,update,select,delete   0000
		2. 设置了schema,但只设置了个别table或未设置table的DML，自动继承schema的DML属性

## 逻辑库配置

**schema.XML**

1. dataHost（配置物理库分片映射）：
	1. heartbeat：mycat对物理库的心跳检测
	2. writeHost：一个逻辑主机对应的后端的物理主机映射，写实例。如果一个writeHost宕机，则其绑定的所有readHost都不可用。
	3. readHost：一个逻辑主机对应的后端的物理主机映射，读实例。
		4. host：实例名称
		5. url：数据库实例连接地址，native时，IPaddress:port，jdbc形式时，特殊指定。
		6. user，password：
		7. weight：配置在readhost中作为读节点的权重。
		8. usingDecrypt：是否对密码加密，默认为0，否，开启需设置为1。
	4. 如果配置读写分离、多写、主从需要配置多个writeHost或readHost即可。
	5. maxCon：指定每个读写实例连接池的最大连接。标签内嵌套的 writeHost、readHost 标签都会使用这个属性的值来实例化出连接池的最大连接数。
	6. minCon：指定每个读写实例连接池的最小连接，初始化连接池的大小。
	7. balance：
		1. balance=‘0’，不开启读写分离，所有读操作都发送到当前可用的 writeHost上。
		2. balance="1"，全部的 readHost 与 stand by writeHost 参与 select 语句的负载均衡，简单的说，当双主双从模式(M1->S1，M2->S2，并且 M1 与 M2 互为主备)，正常情况下，M2,S1,S2 都参与 select 语句的负载均衡。
		3. balance="2"，所有读操作都随机的在 writeHost、readhost 上分发。
		4. balance="3"，所有读请求随机的分发到 writeHost 对应的readhost 执行，writeHost 不负担读压力。
	8. writeType（1.5之后已废弃）：
		1. writeType="0", 所有写操作发送到配置的第一个 writeHost，第一个挂了切到还生存的第二个 writeHost，重新启动后已切换后的为准，切换记录在配置文件中:dnindex.properties
		2. writeType="1"，所有写操作都随机的发送到配置的 writeHost
	9. switchType：
		1. -1：不自动切换
		2. 1：默认值，自动切换
		3. 2：基于MySQL主从状态决定是否切换。心跳语句为 show slave status
		4. 基于 MySQL galary cluster 的切换机制（适合集群）（1.4.1）。心跳语句为 show status like ‘wsrep%’
	10. dbType：后端连接的数据库类型。
	11. dbDriver：目前有两种，native和jdbc
	12. heartbeat：心跳检查。
	13. 主从切换语句：show slave status
2. dataNode（配置分片）：
	1. name：数据库别名
	2. database：指定了需要连接的具体数据库名称。
	3. dataHost：指定该数据库所属的数据库实例。
	4. 为了避免单节点主机并发限制，尽量将读写压力大的分片节点均衡的放在不同的节点主机上。
3. schema（配置逻辑库）：定义了Mycat的所有逻辑数据库
	1. table（配置逻辑表）：定义了Mycat的所有逻辑表，所有需要拆分的表都要使用这个字段定义。
		1. name：表名
		2. dataNode：表对应的分片
		3. rule：表要采用的数据切分方式，名称对应rule.xml中的配置，如果要分片，必须设置。
		4. ruleRequired：用来指定表是否要绑定分片规则，配置为true时，则必须要配置rule。
		5. primaryKey：该逻辑表对应真实表的主键。分片的规则是使用非主键进行分片，在使用主键查询时，会发送查询语句到所有配置的DN上，如果使用该属性配置真实表的主键。难么 MyCat 会缓存主键与具体 DN 的信息，那么再次使用非主键进行查询的时候就不会进行广播式的查询，就会直接发送语句给具体的 DN，但是尽管配置该属性，如果缓存并没有命中的话，还是会发送语句给具体的 DN，来获得数据。
		6. type：目前逻辑表只分“全局表”和“普通表”，未设置global的就是普通表。
		7. autoIncrement：mysql 对非自增长主键，使用 last_insert_id()是不会返回结果的，只会返回 0。所以，只有定义了自增长主键的表才可以用 last_insert_id()返回主键值。mycat 目前提供了自增长主键功能，但是如果对应的 mysql 节点上数据表，没有定义 auto_increment，那么在 mycat 层调用 last_insert_id()也是不会返回结果的。由于 insert 操作的时候没有带入分片键，mycat 会先取下这个表对应的全局序列，然后赋值给分片键。这样才能正常的插入到数据库中，最后使用 last_insert_id()才会返回插入的分片键值。
		8. subTables：
		9. needAddLimit：指定表是否需要自动在每个语句后添加limit限制。
		10. childTable：定义E-R分片的子表，通过标签上的属性与父表联系。
			1. name：子表名称
			2. joinKey：插入子表的时候会使用这个列的值查找父表存储的数据节点，子表中保存的对应父表的字段。
			3. parentKey：属性指定的值一般为与父表建立关联关系的列名，父表中保存的与子表有关的字段。
		4. 逻辑表
		5. 分片表：原本数据很多，需切分到多个数据库，这样所有的分片构成了完整的数据。
		6. 非分片表：只有一个表，不需要进行数据切分。
		7. EP表：基于E-R关系的数据分片策略，子表的记录和父表记录存放在同一个数据分片上，即字表依赖父表，通过表分组保证数据join不会跨库操作。
		8. 全局表：业务系统中往往存在一些类似于字典表的表，这些表的特性是：
			1. 变动不频繁
			2. 数据量总体变化不大。
			3. 数据规模不大，很少有超过数十万条记录。
		Mycat通过数据冗余来解决这类表的join，即每个分片都有一份数据copy，所以把这些表定义为全局表。
	2. checkSQLschema：
	3. sqlMaxLimit：设置该值为具体值时，会默认在执行的sql语句后加上limit，此举是用于减少过多的数据返回。当sql显式指定了limit时，不受该属性影响。当schema为非拆分库时，该字段不起作用。
4. sequence：全局序列号
5. 多租户：
	1. 独立数据库，一个租户对应一个database
	2. 共享数据库，隔离数据架构，多个租户共享一个database，但一个租户对应一个schema
	3. 共享数据库，共享数据架构，多个租户共享database和schema

## 表切分规则配置

**rule.XML**

1. tableRule：定义了逻辑表的拆分信息
	1. name：配置表的分片规则，即schema.xml中table标签中对应的rule="sharding-by-hour" 
	2. columns：表的切分字段
	3. algorithm：规则对应的切分规则：映射到function的name。
2. function（分片规则配置）：
	1. name：切分规则名称，与tableRule中的algorithm匹配。
	2. 切分规则对应的切分类，写死，需要哪种规则，则配置哪种。
	3. property：切分规则对应的不同属性，不同的切分规则配置不同。

## 分页查询逻辑

1. 当只使用limit时，mycat会把查询语句用到不同的分片上，获取到各个分片的数据后，谁先返回，则显示谁的结果集。所以，会导致多次查询会获得不同的结果集。
2. 当使用order by和limit时，mycat会把查询语句用到不同的分片上，获取到返回数据之后，再进行一次order by，然后返回最终的排序后的结果集。
3. 当使用order by和limit并且有offset（偏移量）时，mycat会将查询语句进行处理。
	1. 原本的查询语句：`select * from XXX order by id asc limit offset，count`
	2. 首先，将语句改写为：`select * from XXX order by id asc limit 0, (offset+count)`下发到不同的分片上来获得单个分片的结果集，然后，将获取到的结果集重新排序后，得到最小序列，然后返回偏移量为offset的结果集。
	3. 显而易见，这种查询方式，在偏移量很大时相当影响性能（即便在不使用mycat的单库情况下，也存在该问题，因为MySQL的limit查询，是在获取到offset条记录时，再将之前的结果抛除），因为每个分片都需要返回offset+count条结果，并且需重新排序然后得到最终的结果集。
	4.  select * from customer1 order by id asc limit 15000, 200, 
        route={
               1 -> dn1{SELECT *
            FROM customer1
            ORDER BY id ASC
            LIMIT 0, 15200}
               2 -> dn2{SELECT *
            FROM customer1
            ORDER BY id ASC
            LIMIT 0, 15200}
               3 -> dn3{SELECT *
            FROM customer1
            ORDER BY id ASC
            LIMIT 0, 15200}
        } rrs 
	5. 优化思路：
	  5. 首先，单个分片上的查询，尽量命中索引，从而提高单个分片的查询速度。
	  6. 然后，利用延迟关联，先使用子查询获取符合条件的记录的id，然后再根据id获取结果集。


## 跨库join查询

1. 对于数据量相对来说固定，不会随时间增长而出现大幅度增长的表，我们可以使用全局表，通过数据冗余来解决join的问题。
2. 对于明显的一对多的父子表（ER分片表），可以使用childTable标签，将对应的子表的数据和父表保存在同一个数据库中，具体的分片规则是父表来定义，这样同样可以解决join问题。
3. 对于必须分片保存的多对多关联的数据表，解决跨库join的方案如下：
	1. 多对多情况下，如：主表 A+关系表+主表 B”。
	2. 可以考虑把关系表配置成双向复制的。（目前不知道mycat是否支持此设置）
4. catletT
5. ShareJoin（开发版，mycat的SQL注释），跨分片join，基于HBT的方式实现。目前支持 2 个表的 join,原理就是解析SQL语句，拆分成单表的SQL语句执行，然后把各个节点的数据汇集。

## 如何水平扩容

1. 主键分片
2. 非主键分片

## 分片后的唯一id生成规则

1. UUID（不考虑），简单，性能好，可保证唯一，数据迁移或合并时不受影响。但是，UUID没有排序，无法保证id趋增，字符串存储，查询效率低，需要的存储空间大，传输时数据量大。
2. SnowFlake雪花算法，
3. 数据库id自增：
	1. 利用数据库表id自增的特性，每次保存时，从该id表获取最新的id。
	2. 根据不同的业务进行分片，不同的业务id使用不同的id表生成。
	3. 使用主从配置，来保证id表的可用性。
4. redis生成id：
5. Leaf-segment数据库方案
6. Leaf-snowflake方案

## 分片规则

分片字段选择：
	1. 尽量避免跨库join
	2. 尽可能将数据平均的分散在不同的分片上
	3. 该字段是业务中使用最频繁或最重要的查询条件（如：创建时间、类别）
	4. 使用非主键分片时，mycat会在第一次查询之后，将id和node（分片）的关系进行缓存，在二次查询时，会优先查询缓存中是否有id和node的映射关系
	5. 如无上述字段，则选用id字段。

## 常用分片规则

1. 分片枚举（hash-int），在分片字段固定的情况下，可使用此规则。（例如，数据要按照省市来进行分片）
2. 固定分片hash算法（func1），
3. 规范约定（rang-long），提前规划好某个范围属于某个分片
4. 取模（mod-long），根据分片字段对count进行十进制取模。当批量插入时，会出现插入多数据分片的情况，增大了事务一致性的难度
5. 按日期（天）分片（sharding-by-date），对时间分片字段进行判断，在sBeginDate之后，sEndDate之前，每隔sPartionDay天，分一个片。如果配置了sEndDate，代表当数据到了这个时间后，会再循环从开始时间插入。
6. 取模范围约束（sharding-by-pattern），取模和规范的结合，分片字段对patternValue进行十进制取模，mapFile路径下的配置文件中的1-32代表%patternValue后分布的范围，=1代表在分区1，如果id不是数据，就会分配在defaultNode默认节点。
7. 截取数字做 hash 求模范围约束（sharding-by-prefixpattern），此规则支持数据符号字母取模，分片字段对patternValue进行取模，截取ASCII的prefixLength位数，再参考6进行分片。
8. 应用指定（sharding-by-substring），分片字段中需要包含想要保存的分片信息，该规则会从分片字段的startIndex位开始，截取size长度，以此判断分片，若没有，则保存到默认分片defaultPartition。
9. 截取数字 hash 解析（sharding-by-stringhash），
10. 一致性 hash（murmur），
11. 按单月小时拆分（sharding-by-hour），对时间分片字段按照splitOneDay（一天切分的分片数）分到不同的不同的分片上。
12. 范围求模分片（rang-mod），对分片字段，先进行范围分片计算出分片组，组内再进行求模。数据扩容时，安好分片组进行扩容，原有分片数据不需要迁移，组内再取模分片，可使数据较分布的较均匀。defaultNode是超出范围后的默认节点顺序号。如：0-200M=5，0-200M代表数据范围，=5代表该数据范围中的分片数量。
13. 日期范围 hash 分片（range-date-hash），同样是先分组，再按照日期hash进行组内分片。sPartionDay代表多少天分一个分片组，groupPartionSize代表一个分片组有几个分片。
14. 冷热数据分片（sharding-by-hotdate），
15. 自然月分片（sharding-by-month），
15. crc32slot 分片算法-有状态分片算法，

## MySQL查询优化

1. 当数据量过大时，如何使用limit。
	1. 首先先查询得到id的集合
	2. 然后，再根据id查询记录
2. 主键为自增时，每次查询都带上上一次查询的最大的id，这样也可避免MySQL做无用的扫描。

## 需调研的问题

1. 分页查询逻辑（排序）
2. 跨库join查询
3. 如何水平扩容
4. 分片后的唯一id生成规则