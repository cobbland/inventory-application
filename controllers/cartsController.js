const db = require('../db/queries');

async function allCarts(req, res) {
    const tableData = await db.getCarts();
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

async function newCartPost(req, res) {
    const { title, creator, platform } = req.body;
    const [cartType, platformSplit] = platform.split(':');
    await db.insertCart(title, creator, cartType, platformSplit);
    res.redirect('/carts');
}

module.exports = { allCarts, newCart, newCartPost };