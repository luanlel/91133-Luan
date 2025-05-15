// db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./cadastro.db');

// Criar tabela pessoas se não existir
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS pessoas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)");
});

module.exports = db;