const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get('/blog', function(req, res){
    res.send("bem vindo ao meu blog!");
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send("<h1>ola" + req.params.nome + "</h1>" + "<h2> seu cargo e: " + req.params.cargo + "</h2>" + "<h3> sua cor favorita e:" +req.params.cor+ "</h3>");
})


app.listen(8081, function(){console.log("servidor rodando!");});