const express = require('express');
const router = express.Router();

//conectar ao banco
const db = require('../db');

//criar rotas
//listar todod os usuarios - READ
router.get('/', (req, res) =>{
    //executar consulta sql
    db.query('SELECT * FROM users', (err, results) =>{
        if (err) return res.status(500).send(err);
        res.json(results);
    })
});

module.exports = router;