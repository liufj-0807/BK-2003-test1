//静态资源服务器
//1.导入模块
const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
//2.使用http创建web实例对象
const server = http.createServer();

//3.监听request请求
server.on('request',(req,res)=>{
    //5.获取请求地址
    let pathname = req.url;
    //对"/"做处理"
    pathname = pathname === '/' ?'/index.html' :pathname;
    //图标处理
    // if(pathname !== '/favicon.ico'){  
    // }
    let filename = path.join(__dirname,'public',pathname);
    // 6. 读取文件并输出
    fs.readFile(filename,(err,data)=>{
        if(err){
            res.statusCode = 500;
            res.end('server internal error');
        }else{
            res.end(data);
        }
    })
})
//4.启动服务
server.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})