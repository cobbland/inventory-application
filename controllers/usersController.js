const db = require('../db/queries');

async function helloWorld(req, res) {
    const tableData = await db.getAllData();
    res.render('index', {
        title: "Users",
        message: "Here are all the users",
        tableData: tableData,
    });
}

module.exports = helloWorld;