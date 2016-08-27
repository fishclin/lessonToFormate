var app = require('express')();
var http = require('http').Server(app);

/*原本不能跑的待測試 var app = require('express')();
var http = require('http');*/

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//var server = http.createServer(app); //原本不能跑的待測試

app.get('/',function(request, response){ //我們要處理URL為 "/" 的HTTP GET請求
    response.end('你好！'); //作出回應
});

//指定localhost port: 3000
http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});

/*//原本不能跑的待測試
//指定port: 8080
server.listen(8080,'127.0.0.1',function(){
    console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
});
*/
