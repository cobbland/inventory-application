const db = require('../db/queries');

async function helloWorld(req, res) {
    res.render('index', {
        title: "Home",
        message: "Hello, World!",
    });
}

module.exports = helloWorld;