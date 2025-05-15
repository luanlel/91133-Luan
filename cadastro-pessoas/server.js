// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

// Permitir ler dados de formulários
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos HTML, CSS e JS da pasta public
app.use(express.static('public'));

// Rota para cadastrar pessoa
app.post('/cadastrar', (req, res) => {
    const {nome} = req.body;
    db.run("insert into pessoas (nome) values (?)", [nome], (err) => {
        if (err) return res.status(500).send("Erro ao cadastrar pessoa");
        res.status(200).send("Pessoa cadastrada com sucesso");
    });
});

// Rota para listar pessoas
app.get('/listar', (req, res) => {
    db.all("select * from pessoas", [], (err, rows) => {
        if (err) return res.status(500).send("Erro ao listar pessoas");
        res.json(rows);
    });
});

// Rodar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});