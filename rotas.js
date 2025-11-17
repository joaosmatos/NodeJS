const express = require("express");
const app = express();


app.get("/", function(req, res){
    res.send("seja bem-vindo ao meu app!");
});

app.get("/sobre", function(req, res){
    res.send("minha pagina sobre");
});

app.get("/blog", function(req, res){
    res.send("bem-vindo ao meu blog!");
})




app.listen(8081, function(){
    console.log("servidor odando na url http://localhost:8081");
});// essa tem que ser a ultima linha do seu codigo, localhost:8081