const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');


const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
})

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(session({
    secret: 'aoup98)*HNh08hiah09hba',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}))

app.get("/", (req, res) => {
    res.render('index')
})

app.post("/results", (req, res) => {
    console.log("POST DATA\n\n", req.body)
    res.render('results', {results: req.body});
})