const db = require('../db/queries');

async function allUsers(req, res) {
    const tableData = await db.getAllData();
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

module.exports = { allUsers, newUser };