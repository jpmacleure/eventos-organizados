function getIndexView(req, res) {
    res.render('index.html');
}

function getHomeView(req, res) {
    res.render('home.html');
}

module.exports = {
    getIndexView,
    getHomeView
}