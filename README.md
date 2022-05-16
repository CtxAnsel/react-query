## react-query

- react-query基于Hooks,能够智能管理请求的一切内容，包括数据、状态、缓存，更新等
- 管理请求
  - 基本上axios等请求库封装，可以实现请求、轮询、失败重试、无限加载等功能
  - 可以在网络重连、窗口获得焦点等时机等向服务器发送请求同步状态
- 状态管理
  - 可以把服务器端的状态缓存在客户端的内存中，从而让任意组件获取这些状态
- <a href="https://react-query.tanstack.com/comparison">comparison</a>