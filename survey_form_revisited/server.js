const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');


const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
})
const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(session({
    secret: 'aoup98)*HNh08hiah09hba',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}))

app.get("/", (req, res) => {
    res.render('index');
})


io.on('connection', socket => {
    socket.on('form submit', data => {
        console.log(data)
        let randomNum = Math.floor(Math.random() * 1000)
        socket.emit('present submission', {formData: data, number: randomNum})
    })
})