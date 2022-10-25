# LIST

## Base

- [ ] 闭包？闭包的用途

- [ ] 事件循环
- [ ] 宏任务和微任务的区分是为了做什么? 优先级?
- [ ] async await 的原理是什么?
- [ ] async/await, generator, promise 这三者的关联和区别是什么?
- [ ] Promise then 第二个参数和 catch 的区别是什么?
- [ ] Promise finally 怎么实现的
-
- [ ] HTTP 状态码（301 302 304 的区别）
- [x] [BFC](./h5/BFC.md)
-
- [ ] ES5 和 ES6 的继承? 这两种方式除了写法, 还有其他区别吗?
- [ ] js 里 this 的设计怎么样? 有没有什么缺点啥的
- [ ] 导致 js 里 this 指向混乱的原因是什么?
- [ ] generator 是如何做到中断和恢复的
-
- [ ] Webworker
- [ ] Symbol
- [ ] 各种缓存的优先级, memory disk http2 push?
-
- [ ] xss? 如何防范?

## 前端

- [ ] 虚拟 dom 是什么? 原理? 优缺点?
- [ ] vue 和 react 在虚拟 dom 的 diff 上，做了哪些改进使得速度很快?
- [ ] vue 和 react 里的 key 的作用是什么? 为什么不能用 Index？用了会怎样? 如果不加 key 会怎样?
- [ ] vue 双向绑定的原理是什么?
- [ ] vue 的 keep-alive 的作用是什么？怎么实现的？如何刷新的?
- [ ] vue 是怎么解析 template 的? template 会变成什么?
- [ ] 如何解析指令? 模板变量? html 标签
- [ ] 用过 vue 的 render 吗? render 和 template 有什么关系
- [ ] 节流和防抖
- [ ] react 有自己封装一些自定义 hooks 吗? vue 有自己封装一些指令吗
- [ ] vue 向 react 迁移是怎么做的? 怎么保证兼容的
- [ ] vue 的双向绑定原理
- [ ] 虚拟列表怎么实现?
- [ ] react 和 vue 在技术层面的区别
- [ ] css 三列等宽布局如何实现? flex 1 是代表什么意思？分- [ ] 别有哪些属性?
- [ ] 前端安全都了解哪些? xss csrf
- [ ] csp 是为了解决什么问题的?
- [ ] https 是如何安全通信的?
-
- [ ] 错误捕捉
- [ ] 前端稳定性监控
- [ ] 前端内存处理
-
- [ ] Http 2.0 和 http3.0 对比之前的版本, 分别做了哪些改- [ ] 进?
- [ ] HTTP 3.0 基于 udp 的话, 如何保证可靠的传输?
- [ ] TCP 和 UDP 最大的区别是什么?
- [ ] CSP 除了能防止加载外域脚本, 还能做什么?
-
- [ ] Https 中间人攻击
-
- [ ] 截图怎么实现
-
- [ ] js 超过 Number 最大值的数怎么处理?

## 后台

- [ ] Nodejs 异步 IO 模型
- [ ] libuv
- [ ] Node 是怎么部署的? pm2 守护进程的原理?
- [ ] Node 开启子进程的方法有哪些?
- [ ] 进程间如何通信?
- [ ] node.js 如何调试
- [ ] koa 洋葱模型
- [ ] 中间件的异常处理是怎么做的？
- [ ] 在没有 async await 的时候, koa 是怎么实现的洋葱模- [ ] 型?
- [ ] body-parser 中间件了解过吗
- [ ] 如果浏览器端用 post 接口上传图片和一些其他字段, - [ ] header 里会有什么? koa 里如果不用 body-parser，应- [ ] 该怎么解析?
- [ ] webscoket 的连接原理
- [ ] https 是如何保证安全的? 是如何保证不被中间人攻击的?
- [ ] 前端 History 路由配置 nginx

## 架构

- [ ] 设计模式
- [ ] 微前端
- [ ] 对前端工程化的理解
- [ ] 前端性能优化都做了哪些工作
- [ ] Node 的日志和负载均衡怎么做的
- [ ] webscoket 的连接原理
- [ ] 微前端，qiankun 的特性是什么，有没有看过
- [ ] single-spa 的内部实现方式

## 构建

- [ ] webpack，load 和 plugin 有什么区别，常用的 load 和 plugin 有哪些

## 性能优化

- [ ] 做过哪些性能优化?
- [ ] qps 达到峰值了，怎么去优化

## Code

- [ ] 实现一个函数, fetchWithRetry 会自动重试 3 次，任意一次成功直接返回

## 放风筝

- [ ] [字节]64 个运动员, 8 个跑道, 如果要选出前四名, 至少跑几次?
