const db = require('../db/queries');

async function allCarts(req, res) {
    const tableData = await db.getCarts();
    res.render('carts', {
        title: "Carts",
        tableData: tableData,
    });
}

async function someCarts(req, res) {
    const { field, fieldData } = req.params;
    const tableData = await db.getSomeCarts(field, fieldData);
    const message = `Here are all the ${fieldData} ${field}s`
    res.render('carts', {
        title: fieldData,
        tableData: tableData,
    });
}

async function oneCart(req, res) {
    const { cartID } = req.params;
    const tableData = await db.getSomeCarts('id', cartID);
    res.render('cart', {
        title: tableData[0].title,
        tableData: tableData,
    });
}

function newCart(req, res) {
    res.render('new-cart', {
        title: "New Cart",
    });
}

async function newCartPost(req, res) {
    const { title, creator, platform } = req.body;
    const [cartType, platformSplit] = platform.split(':');
    await db.insertCart(title, creator, cartType, platformSplit);
    res.redirect('/carts');
}

module.exports = { allCarts, someCarts, oneCart, newCart, newCartPost };