const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'y2w3wxldca8enczv.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'q0vpuwzzux1zupzy',
    password: 'xgvvrsnydjnrfhg1',
    database: 'xekmgpypt35bjgxt'
})

module.exports = connection;