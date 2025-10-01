const pool = require('./pool');

async function getUsers() {
    const { rows } = await pool.query('SELECT * FROM users;');
    return rows;
}

async function getUser(id) {
    const { rows } = await pool.query(`
        SELECT * FROM users_carts
        WHERE user_id = $1;
    `, [id]);
    return rows;
}

async function insertUser(username, password) {
    await pool.query("INSERT INTO users (username, password) VALUES ($1, $2);", [username, password]);
}

async function getCarts() {
    const { rows } = await pool.query("SELECT * FROM carts;");
    return rows;
}

async function insertCart(title, creator, cartType, platform) {
    await pool.query("INSERT INTO carts (title, creator, cart_type, platform) VALUES ($1, $2, $3, $4);", [title, creator, cartType, platform]);
}

async function getSomeCarts(field, fieldData) {
    const fieldQuery = `
        SELECT * FROM carts
        WHERE ${field} = $1;
    `;
    const { rows } = await pool.query(fieldQuery, [fieldData]);
    return rows;
}

module.exports = { getUsers, getUser, insertUser, getCarts, insertCart, getSomeCarts };