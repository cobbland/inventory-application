const db = require('../db/queries');

async function helloWorld(req, res) {
    const tableData = await db.getAllData();
    res.render('index', {
        title: "Home",
        message: "Hello, World!",
        tableData: tableData,
    });
}

module.exports = helloWorld;