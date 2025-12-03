const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/post')


// confg
    // template engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
// body parser
        app.use(bodyParser.urlencoded({extend: false}))
        app.use(bodyParser.json())        

// rotas

    app.get('/', function(req, res){
        Post.all().then(function(pots){
           res.render('home', {nome: "victor", sobrenome: "lima"}) 
        })
        
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("houve um erro: " + erro)
        })
    })

    app.post('/add',function(req, res){
        req.body.conteudo
        res.send("Texto: "+req.body.titulo+" conteudo: " +req.body.conteudo)
    })


app.listen(8081, function(req, res){
    console.log("servidor rodando na url http://localhost:8081");
});