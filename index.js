var express=require("express");
var app = express();
var http=require('http').Server(app);
app.use(express.static(__dirname+'/'));
app.get('/',(req,res)=>{
	res.sendFile(__dirname+'/index.html');
});
var port=process.env.PORT||3000
http.listen(port,()=>{
	console.log('listening on port:'+port)
});
