const express = require('express');
const app = express();

// Server Config
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
});
app.set('view engine', 'ejs');

// Socket Import and Shared session
const io = require('socket.io')(server);

// Users
let users = ['joy'];
doesUserExist = username => {
    for (let x=0; x<users.length; x++) {
        if (users[x] === username) return true;
    }
    return false 
}

// Routes
app.get('/', (req, res) => {
    res.render('index');
})

// Sockets
io.on('connection', socket => {
    io.on('disconnect', data => {
        users.splice(users.indexOf(socket.username), 1)
    })


    getUsername = () => {
        socket.emit('get username')
    }
    getUsername()


    flash = message => {
        socket.emit('flash message', message)
    }


    socket.on('new user', username => {
        if (!doesUserExist(username)) {
            socket.username = username;
            users.push(socket.username);
            flash(`Welcome ${username}`)
            socket.emit('reveal chat')
        }
        else {
            flash('User already exists')
            getUsername()
        }
    })

    socket.on('sent message', message => {
        io.emit(
            'display message',
            {username: socket.username, message: message},
        );
    })


}) // end io.on