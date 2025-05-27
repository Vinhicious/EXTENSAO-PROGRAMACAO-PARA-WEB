const express = require('express');
const app = express();
const port = 3000;

//rotas
app.get('/', (req, res) =>{
    res.send("Front Funcionando")
});

//criar conexão com o banco
const db = require('./db');

const apiRoutes = require('./routes/api')
app.use('/api/users', apiRoutes);

//estabelecer a ligação do servidor
app.listen(port, () =>{
    console.log("Servidor está funcionando")
});