const db = require('../db/queries');

async function allUsers(req, res) {
    const tableData = await db.getUsers();
    res.render('users', {
        title: "Users",
        message: "Here are all the users",
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

module.exports = { allUsers, newUser, newUserPost };