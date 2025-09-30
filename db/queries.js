const pool = require('./pool');

async function getAllData() {
    const { rows } = await pool.query('SELECT * FROM tests;');
    return rows;
}

async function insertUser(username) {
    await pool.query("INSERT INTO tests (name) VALUES ($1);", [username]);
}

module.exports = { getAllData, insertUser };