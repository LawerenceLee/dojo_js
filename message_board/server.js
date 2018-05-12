const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// Session
let session = require('express-session');
app.use(session({
    secret: 'ai0nasd979YTUG:*PYsdaisdh;dspdi',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

// Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Flash
const flash = require('express-flash');
app.use(flash());

// Mongoose
const mongoose = require('mongoose');
const commentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    comment: {type: String, required: true},
})
const messageSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name field is required"]},
    message: {type: String, required: [true, "Message field is required"]},
    comments: [commentSchema],
})
mongoose.model('message', messageSchema);
mongoose.model('comment', commentSchema);
const Message = mongoose.model('message');
const Comment = mongoose.model('comment');
mongoose.connect('mongodb://localhost/messages')

// Server
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on Port ${portNum}`);
});

// Flash Errors
flashErrors = (req, err) => {
    for (var key in err.errors){
        req.flash('messagesErrors', err.errors[key].message);
    } 
}

// Routes
app.get("/", (req, res) => {
    Message.find({}, (err, messages) => {
        if (err) {
            flashErrors(req, err)
        }
        else {
            res.render('index', {userMessages: messages})
        }
    })
})

app.post("/message", (req, res) => {
    let messageInst = new Message();
    messageInst.name = req.body.name;
    messageInst.message = req.body.message;
    messageInst.save(err => {
        if (err) {
            console.log("We have an error!", err);
            flashErrors(req, err)
        }
        res.redirect("/")
    }) 
})

app.post("/comment", (req, res) => {
    let commentInst = new Comment();
    commentInst.name = req.body.name;
    commentInst.comment = req.body.comment;
    commentInst.save(err => {
        if (err) {
            console.log("We have an error!", err);
            flashErrors(req, err)
        }
        else {
            Message.findByIdAndUpdate(req.body.id, {$push: {comments: commentInst}}, (err, data) => {
                if (err) {
                    console.log("We have an error!", err);
                    flashErrors(req, err)
                }
            })
        }
        res.redirect("/")
    }) 
})