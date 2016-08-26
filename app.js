var express = require('express');
var app = express(); //建立Express個體
var http = require('http');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var server = http.createServer(app);

app.get('/',function(request, response){ //我們要處理URL為 "/" 的HTTP GET請求
    response.end('你好！'); //作出回應
});

//指定port: 8080
server.listen(8080,'127.0.0.1',function(){
    console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
});


//指定localhost port: 3000
/*http.listen(process.env.PORT || 3000, function(){
    console.log('listening on *:3000');
});*/