var  http = require('http');

http.createServer(function(req, res){
    res.end("oi, bem vindo ao meu site!")
}).listen(8081);

console.log("o servidor esta rodando");