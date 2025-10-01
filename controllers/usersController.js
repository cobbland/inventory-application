const db = require('../db/queries');

async function allUsers(req, res) {
    const tableData = await db.getUsers();
    res.render('users', {
        title: "Users",
        tableData: tableData,
    });
}

async function oneUser(req, res) {
    const { id } = req.params;
    const tableData = await db.getUser(id);
    res.render('user', {
        title: tableData[0].username,
        tableData: tableData,
    });
}

function newUser(req, res) {
    res.render('new-user', {
        title: "New User",
        message: "Add a new user",
    });
}

async function newUserPost(req, res) {
    const { username, password } = req.body;
    await db.insertUser(username, password);
    res.redirect('/users');
}

module.exports = { allUsers, oneUser, newUser, newUserPost };