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
    const username = await db.getUsername(id);
    const tableData = await db.getUserData(id);
    res.render('user', {
        title: username,
        userID: id,
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

async function deleteUser(req, res) {
    const { id } = req.params;
    await db.deleteUser(id);
    res.redirect('/users');
}

module.exports = { allUsers, oneUser, newUser, newUserPost, deleteUser };