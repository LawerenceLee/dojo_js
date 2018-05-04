const express = require('express');
const app = express();

const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
})
const io = require('socket.io')(server);


app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
})

let count = 0;
io.on('connection', socket => {
    setCounter = () => {
        io.emit('set counter', count);
    }
    setCounter()

    socket.on('bttn clicked', data => {
        count = Number(data) + 1;
        setCounter()
    })

    socket.on('reset clicked', data => {
        count = 0;
        setCounter()
    })

}) // End io.on

