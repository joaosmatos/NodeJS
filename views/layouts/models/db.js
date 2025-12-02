const Sequelize = requeri('sequelize')
// conexão com o banco de dados MYSQL

const Sequelize = require("sequelize")
const sequelize = new Sequelize('postapp', 'root', 'saopaulofc1935@', {
    host: "lolcalhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}