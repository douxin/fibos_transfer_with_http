# 说明
FibOS 文档上的示例是手动执行脚本来完成相应操作的，那么我们如何将自动来完成相关操作的。答案就在 FibJS 中的 HTTP 模块，本项目以转账操作为例，来展示用法。

## 前提
确保正确安装了 FibOS，并安装最新版本的 fibos.js

## HTTP
FibOS 包含了 FibJS 完成的功能，而 [FibJS](http://fibjs.org/index.html) 具有完备的 HTTP Server 能力，建立一个简单的 HTTP Api 示例如下：

```js
const http = require('http');

const svr = new http.Server(8080, (req) => {
    req.response.write('hello, world');
});

svr.run();
```

将上面的代码保存为 **server.js**，通过执行 **fibos server.js** 即可在启动一个 Web 服务，端口为 **8080**，你可以在 [这里](http://fibjs.org/docs/guide/hello.md.html) 找到更复杂的示例。

 ## 自动转账
 有了上面的例子，对于自动转账，我们的方案就很明确了。将转账的操作放到 handler 内，当 HTTP Api 被调用的时候，自动完成转账的流程。

 转账操作中的 **收款人**、**转账金额**、**备注/memo**，都可以放在 HTTP body 中进行传输。

 在我们自身的业务系统内，直接调用这个转账的接口即可。