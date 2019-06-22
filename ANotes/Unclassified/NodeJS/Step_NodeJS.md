NodeJS







# 回调函数



同步执行VS异步执行

        //同步示例 顺序执行输出
            var fs = require("fs");
            var data = fs.readFileSync('input.txt');
            console.log(data.toString());
            console.log("程序执行结束!");
        //异步示例 回调函数代码后面的语句会比回调函数里面的语句先执行
            var fs = require("fs");
            fs.readFile('input.txt', function (err, data) {
                if (err) return console.error(err);
                console.log(data.toString());
            });
            console.log("程序执行结束!");


# 模块系统

            // world.js
            exports.world = function() {
                var v1;
                this.cons = function(){
                    console.log('Hello World');
                }                
            }
            // hello.js
            function Hello() { 
                var name; 
                this.setName = function(thyName) { 
                    name = thyName; 
                }; 
            }; 
            module.exports = Hello;
            // main.js
            var hello = require('./hello);
            var h1 = new hello();




# 网络



    //GET/POST请求
        // 响应GET请求
        var http = require('http');
        var url = require('url');
        var util = require('util');        
        http.createServer(function(req, res){
            res.writeHead(200, {'Content-Type': 'text/plain'});        
            // 解析 url 参数
            var params = url.parse(req.url, true).query;
            res.write("网站名：" + params.name);
            res.write("\n网站 URL：" + params.url);
            res.end();        
        }).listen(3000);
    
        // 响应POST请求
        var http = require('http');
        var querystring = require('querystring');
        
        var postHTML = 
            '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
            '<body>' +
            '<form method="post">' +
            '网站名： <input name="name"><br>' +
            '网站 URL： <input name="url"><br>' +
            '<input type="submit">' +
            '</form>' +
            '</body></html>';
        
        http.createServer(function (req, res) {
            var body = "";
            req.on('data', function (chunk) {
                body += chunk;
            });
            req.on('end', function () {
                // 解析参数
                body = querystring.parse(body);
                // 设置响应头部信息及编码
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
                if(body.name && body.url) { // 输出提交的数据
                    res.write("网站名：" + body.name);
                    res.write("<br>");
                    res.write("网站 URL：" + body.url);
                } else {  // 输出表单
                    res.write(postHTML);
                }
                res.end();
            });
        }).listen(3000);




# 操作数据库



## Mongodb

安装与运行

创建数据库与数据表

增删改查数据表



# 常用库



## socket.io

### 安装

npm安装       

```
npm install socket.io
```

直接引用 

```
<script src="https://cdn.bootcss.com/socket.io/1.7.3/socket.io.js"></script>
```



### 创建实例

#### 服务端

node原生

    var app = require('http').createServer(handler)
    var io = require('socket.io')(app);


express

    var app = require('express')();
    var http = require('http').Server(app);
    var io = require('socket.io')(http);


#### 客户端

```
<script src="/socket.io/socket.io.js"></script>
var socket = io();
//或 var socket=io.connect('http://127.0.0.1:3000');
```



### 事件管理

.on     绑定

事件

connection

disconection

自定义



### Server端方法

emit    发送



### client端方法







# 常用框架



## express



    安装
        npm安装：npm install express
        生成器安装：
            先安装生成器： npm install express-generator -g
            express指令： express -h
                Usage: express [options] [dir]
                Options:
                    -h, --help          output usage information
                    -V, --version       output the version number
                    -e, --ejs           add ejs engine support (defaults to jade)
                        --hbs           add handlebars engine support
                    -H, --hogan         add hogan.js engine support
                    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
                        --git           add .gitignore
                    -f, --force         force on non-empty directory
            创建一个命名为 myapp 的应用：express myapp，然后安装所有依赖包：cd myapp, npm install
    
    路由
        app.METHOD(path, [callback...], callback)



        关于静态资源路径问题
            app.use()指定资源根目录
            app.METHOD(locationReg,function(req, res){
                fs.readFile(locationFile,...)
            })
            fs.readFile中的文件地址是相对于本js文件的路径
            app.METHOD()下面fs.readFile中locationFile文件(如html文件)内引用的静态文件是相对于locationReg的，而不是相对于资源根目录或本js文件
    
        响应HTTP请求
            跨域问题的解决
                app.all('*', function(req, res, next) {
                    res.header("Access-Control-Allow-Origin", "*");
                    next();
                });
            读取参数和返回数据
                app.get('/requestGet', function(req, res){
                    res.send({ dataReturn: 'you sent '+req.query });
                    res.end();
                });




## koa















