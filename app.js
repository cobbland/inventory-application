const express = require('express');
const app = express();
const path = require('node:path');
require('dotenv').config()

const routesPath = path.join(__dirname, 'routes');
const indexRouter = require(path.join(routesPath, 'indexRouter.js'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Running at http://localhost:${PORT}.`)
});