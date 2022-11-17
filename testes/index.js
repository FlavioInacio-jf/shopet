const express = require("express");
const app = express()
// Rotas
app.get("/", function(req, res){
    res.send("Seja bem vindo!") // send: usa para exibir e res: é uma resposta
})

//Parametros
app.get('/parametro/:nome', function(req, res){
    //res.send(req.params) // função params: exibe todos os parametros que vc usou
    res.send("<h1> oi "+ " " + req.params.nome) // usando o params."nome do parametro", da para fazer coisas interessantes e usar html tbm
})

app.get("/arquivo", function(req, res){
    res.sendFile(__dirname + "/index.html") //envia um arquivo html 
})

// como  acessar: localhost:8081 no navegador
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
});
