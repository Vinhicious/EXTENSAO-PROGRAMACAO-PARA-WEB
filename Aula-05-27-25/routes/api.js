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

//rota para CREATE: INSERT
router.post('/', (req, res) => {
    const{nome, email} = req.body;
    
    //executar a instrução sql
    db.query('INSERT INTO users(nome, email) VALUES (?, ?)', [nome, email], (err, results) =>{
        if (err) return res.status(500).send(err);
        res.status(201).json({id: results.insertId, nome, email});
    })
})

//rota para a atualização(UPDATE)
router.put('/:id', (req, res) => {
    const {nome, email} = req.body;
    const {id} = req.params;

    //executar a instrução sql
    db.query('UPDATE users SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (err, results) => {
        if (err) return res.status(500).send(err);
        res.json({id, nome, email});
    })
})

//rota para a exclusão(DELETE)
router.delete('/:id', (req, res) => {
    const {id} = req.params

    //instrução sql
    db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.sendStatus(204);
    })
})
module.exports = router;

