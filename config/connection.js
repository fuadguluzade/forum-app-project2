const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'aqlipr84m2saw737',
    password: 'mj6vqcflw7xn9hql',
    database: 'ra065ji2wgqsb8vi'
})

module.exports = connection;