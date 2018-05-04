const express = require('express');
const app = express();
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
})
const io = require('socket.io')(server);
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render('index');
});

const color = 'green';
io.on('connection', socket => {
    setColor = color => {
        io.emit('set color', color);
    };
    setColor(color);

    socket.on('update color', data => {
        setColor(data);
    });

}) // end io.on

