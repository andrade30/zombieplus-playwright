const { Pool } = require('pg');

const DbConfig = {
    user: 'msgnvjct',
    host: 'isabelle.db.elephantsql.com',
    database: 'msgnvjct',
    password: '959b1c8e5a0c3d2fbb4e7b1a9c8b0e',
    port: 5432
}

export async function executeSQL(sqlScript) {
    try {
        const pool = new Pool(DbConfig);
        const client = await pool.connect();

        const result = await client.query(sqlScript);
        console.log(result.rows);
    } catch (error) {
        console.log('Erro ao executar o script SQL:', error);
    }
}