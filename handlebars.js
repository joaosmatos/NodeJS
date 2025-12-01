const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')


// confg
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
// body parser
        app.use(bodyParser.urlencoded({extend: false}))
        app.use(bodyParser.json())        
// conexão com o banco de dados MYSQL

const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', 'saopaulofc1935@', {
    host: "lolcalhost",
    dialect: 'mysql'
})
// rotas

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add',function(req, res){
        req.body.conteudo
        res.send("Texto: "+req.body.titulo+" conteudo: " +req.body.conteudo)
    })


app.listen(8081, function(req, res){
    console.log("servidor rodando na url http://localhost:8081");
});