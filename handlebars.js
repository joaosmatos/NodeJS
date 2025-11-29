const express = require('express');
const app = express();
const handlebars = require('express-handlebars')


// confg
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
// conexão com o banco de dados MYSQL

const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', 'saopaulofc1935@', {
    host: "lolcalhost",
    dialect: 'mysql'
})


app.listen(8081, function(req, res){
    console.log("servidor rodando na url http://localhost:8081");
});