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
    const { user } = req.query || false;
    const tableData = await db.getSomeCarts('id', cartID);
    res.render('cart', {
        title: tableData[0].title,
        tableData: tableData[0],
        user: user,
    });
}

async function editCart(req, res) {
    const { cartID } = req.params;
    const tableData = await db.getSomeCarts('id', cartID);
    res.render('edit-cart', {
        title: "Edit Cart",
        cart: tableData[0],
    });
}

async function editCartPost(req, res) {
    const { title, creator, platform } = req.body;
    const [cartType, platformSplit] = platform.split(':');
    await db.editCart(req.params.cartID, title, creator, cartType, platformSplit);
    res.redirect('/carts/id/' + req.params.cartID);
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

async function addCartToUser(req, res) {
    const { cartID } = req.params;
    const { user } = req.query || 'none';
    const tableData = await db.getSomeCarts('id', cartID);
    const usernames = await db.getUsers();
    let userCart = 'none';
    if (user !== 'none') {
        const userID = usernames.find(u => u.username === user).id;
        const usersCarts = await db.getUserData(userID);
        userCart = usersCarts.find(c => c.cart_id == cartID);
    }
    const title = `Update ${tableData[0].title} for ${ user === 'none' ? 'user' : user}`;
    res.render('add-cart-to-user', {
        title: title,
        cart: tableData[0],
        usernames: usernames,
        user: user,
        userCart: userCart,
    });
}

async function postCartToUser(req, res) {
    const { cart, username, status, rating, remove } = req.body;
    await db.postCartToUser(cart, username, status, rating, remove);
    res.redirect(`/users/id/${username}`);
}

async function deleteCart(req, res) {
    const { cartID } = req.params;
    await db.deleteCart(cartID);
    res.redirect('/carts');
}

module.exports = { 
    allCarts, someCarts, oneCart, editCart, newCart, 
    editCartPost, newCartPost, addCartToUser, postCartToUser, 
    deleteCart, 
};