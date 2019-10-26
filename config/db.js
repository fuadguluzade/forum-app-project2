const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('ra065ji2wgqsb8vi','aqlipr84m2saw737','mj6vqcflw7xn9hql',{
    host:'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',
    // operatorsAliases: false,
    
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
})
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db