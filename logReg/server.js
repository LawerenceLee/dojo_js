const FormValidation = require('./formValidation');
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
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "First Name is required"]},
    lastName: {type: String, required: [true, "Last Name is required"]},
    email: {type: String, required: [true, "Email is required"]},
    birthday: {type: Date, required: [true, "Birthday is required"]},
    password: {type: String, required: [true, "Password id required"]},
})
mongoose.model('user', userSchema);
const User = mongoose.model('user');
mongoose.connect('mongodb://localhost/users')

// Server
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on Port ${portNum}`);
});

// Flash Errors
flashErrors = (req, errors) => {
    console.log("Flash Errors", errors)
    for(let index in errors){
        req.flash('formErrors', errors[index]);
    } 
}

mongooseErrors = (req, err) => {
    console.log("Mongoose Errors", err)
    for (var key in err.errors){
        req.flash('formErrors', err.errors[key].message);
    }
}

app.get("/", (req, res) => {
    res.render('index')
})

app.post("/", (req, res) => {
    const formErrors = new FormValidation(req.body).errors;
    if (formErrors.length != 0) {
        flashErrors(req, formErrors);
        res.redirect("/");
    }
    else {
        let userInst = new User();
        userInst.firstName = req.body.firstName;
        userInst.lastName = req.body.lastName;
        userInst.email = req.body.email;
        userInst.birthday = req.body.birthday;
        userInst.password = req.body.password
        userInst.save(err => {
            if (err) {
                mongooseErrors(req, err)
                res.redirect("/")
            }
            else {
                res.redirect("/login")
            }
        })
    }
});

app.get("/login", (req, res) => {
    res.render('login')
})

app.post("/login", (req, res) => {
    User.findOne({email: req.body.email, password: req.body.password}, (err, user) => {
        console.log(user)
        if (err) {
            mongooseErrors(req, err)
            res.redirect("/login")
        }
        else {
            req.session.userId = user._id
            res.redirect("/success")
        }
    })
})

app.get("/success", (req, res) => {
    User.findById(req.session.userId, (err, user) => {
        if (err) {
            flashErrors(req, ['You have not signed in']);
            res.redirect('/login')
        }
        else {
            res.render('success', {user: user})
        }
    })
})