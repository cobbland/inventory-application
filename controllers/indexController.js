const helloWorld = (req, res) => {
    res.render('index', {
        title: "Title",
        message: "Hello, World!",
    });
};

module.exports = helloWorld;