const pool = require('./pool');

async function getAllData() {
    const { rows } = await pool.query('SELECT * FROM tests');
    return rows;
}

module.exports = { getAllData };