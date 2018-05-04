const express = require('express');
const app = express();
const session = require('express-session');


const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
})

app.set('view engine', 'ejs');
app.use(session({
    secret: 'uu4u739^&Uhoug9ejbvou99&&979gy08',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}))

app.get("/", (req, res) => {
    if (!req.session.counter) {
        req.session.counter = 0;
    }
    req.session.counter += 1
    res.render('index', {counter: req.session.counter});
})