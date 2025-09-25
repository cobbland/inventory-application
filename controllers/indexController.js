const db = require('../db/queries');

async function helloWorld(req, res) {
    const tableData = await db.getAllData();
    res.render('index', {
        title: "Title",
        message: "Hello, World!",
        tableData: tableData,
    });
}

module.exports = helloWorld;