var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html'); //處理從client送來的連線
});

app.get('/printFunction.js', function(req, res){
    res.sendFile(__dirname + '/printFunction.js'); //處理從client送來的連線
});

app.get('/style-sheet.css', function(req, res){
    res.sendFile(__dirname + '/style-sheet.css'); //處理從client送來的連線
});

//指定localhost port: 3000
http.listen(process.env.PORT || 3000, function(){
	console.log('listening on *:3000');
});

/*原本的 var app = require('express')();
var http = require('http');*/

//var server = http.createServer(app); //原本的
// app.get('/',function(request, response){ //我們要處理URL為 "/" 的HTTP GET請求
//     response.end('你好！'); //作出回應
// });

/*//原本的
//指定port: 8080
server.listen(8080,'127.0.0.1',function(){
    console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
});
*/
