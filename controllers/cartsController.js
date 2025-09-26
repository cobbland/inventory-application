const db = require('../db/queries');

async function helloWorld(req, res) {
    const tableData = await db.getAllData();
    res.render('index', {
        title: "Carts",
        message: "Here are all the carts",
        tableData: tableData,
    });
}

module.exports = helloWorld;