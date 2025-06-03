const express = require('express');
const app = express();
const port = 3000;

//criar conexão com o banco
const db = require('./db');

//disponibilizar o caminho dos arquivos estaticos
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))

//rotas
app.get('/', (req, res) =>{
    //res.send("Front Funcionando")
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());//lidar com os dados relacionados ao json
const apiRoutes = require('./routes/api')
app.use('/api/users', apiRoutes);

//estabelecer a ligação do servidor
app.listen(port, () =>{
    console.log("Servidor está funcionando")
});
