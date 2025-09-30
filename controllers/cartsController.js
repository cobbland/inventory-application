const db = require('../db/queries');

async function allCarts(req, res) {
    const tableData = await db.getAllData();
    res.render('carts', {
        title: "Carts",
        message: "Here are all the carts",
        tableData: tableData,
    });
}

function newCart(req, res) {
    res.render('new-cart', {
        title: "New Cart",
        message: "Add a new cart",
    });
}

module.exports = { allCarts, newCart };