const mysql = require('mysql2');

//criar estrutura de conexão com o banco
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'catolica',
    database: 'userdb3',
    port: 3307
});

//estabelecer conexão

db.connect((err) =>{
    if (err) throw err;
    console.log('Conectado ao banco de dados')
});

module.exports = db;