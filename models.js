const Sequelize = require("sequelize")
const sequelize = new Sequelize('test', 'root', 'saopaulofc1935@', {
    host: "lolcalhost",
    dialect: 'mysql'
})

const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: sequelize.TEXT
    }
})

postagem.sync({force: true})

postagem.create({
    titulo: "UM TITULO QUALQUER",
    conteudo: "CONTEUDO QUALQUER"
})

const Usuario = sequelize.define('usuarios', { 
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type:Sequelize.INTEGER
    },
    email: {
        type:Sequelize.STRING
    }
})

Usuario.create({
    nome: "joao",
    sobrenome: "matos",
    idade: 20,
    email: "kjhvcv@gmail.com"
})

Usuario.sync({force: true})