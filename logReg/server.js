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
const secretSchema = new mongoose.Schema({
    authorId: {type: String},
    content: {type: String, required: [true, "Secret field must be completed"]},
    comments: [{type: String}],
})
const userSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "First Name is required"]},
    lastName: {type: String, required: [true, "Last Name is required"]},
    email: {type: String, required: [true, "Email is required"]},
    birthday: {type: Date, required: [true, "Birthday is required"]},
    password: {type: String, required: [true, "Password is required"]},
})
mongoose.model('user', userSchema);
mongoose.model('secret', secretSchema);
const User = mongoose.model('user');
const Secret = mongoose.model('secret')
mongoose.connect('mongodb://localhost/users')

// Bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;


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

// Mongoose Errors
mongooseErrors = (req, err) => {
    console.log("Mongoose Errors", err)
    for (var key in err.errors){
        req.flash('formErrors', err.errors[key].message);
    }
}

// Register Form
app.get("/", (req, res) => {
    res.render('index')
})

// Register
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
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
                console.log('Bcrypt Error', err);
                res.redirect("/")
            }
            else {
                userInst.password = hash
                userInst.save(err => {
                    if (err) {
                        mongooseErrors(req, err)
                        res.redirect("/")
                    }
                    else {
                        res.redirect("/login")
                    }
                });
            }
        });
    }
});

// Login Form
app.get("/login", (req, res) => {
    res.render('login')
})

// Login
app.post("/login", (req, res) => {
    User.findOne({email: req.body.email}, (err, user) => {
        if (err) {
            mongooseErrors(req, err)
            res.redirect("/login")
        }
        else {
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) {
                    console.log('Bcrypt Error', err);
                    res.redirect("/login") 
                }
                else if (result === true) {
                    req.session.userId = user._id
                    res.redirect("/secrets")
                }
                else {
                    flashErrors(req, ['Credentials do not match our records'])
                    res.redirect("/login") 
                }
            })
        }
    })
})
// Logout and remove userId from session
app.get("/logout", (req, res) => {
    req.session.userId = null;
    res.redirect('/login')
})

// Show all Secrets
app.get("/secrets", (req, res) => {
    if (req.session.userId === null || req.session.userId === undefined) {
        res.redirect('/login');
    }
    else {
        Secret.find({}, (err, secrets) => {
            if (err) {
                flashErrors(req, ['You have not signed in']);
                res.redirect('/login')
            }
            else {
                res.render('secrets', {secrets: secrets, userId: req.session.userId})
            }
        })
    }
})

// Create a secret
app.post("/secrets", (req, res) => {
    let secretInst = new Secret();
    secretInst.authorId = req.session.userId;
    secretInst.content = req.body.secret;
    secretInst.save(err => {
        if (err) {
            mongooseErrors(req, err)
        }
        res.redirect("/secrets")
    })
})

// Show a single secret w/ its comments
app.get("/secrets/:secretId", (req, res) => {
    Secret.findById(req.params.secretId, (err, secret) => {
        if (err) {
            mongooseErrors(req, err);
            res.redirect('/secrets');
        }
        else {
            res.render('oneSecret', {secret: secret});
        }
    })
})

// Add comment to Secret
app.post("/secrets/:secretId/comment", (req, res) => {
    if (req.body.comment) {
        Secret.findByIdAndUpdate(req.params.secretId, {$push: {comments: req.body.comment}}, (err) => {
            if (err) {mongooseErrors(req, err)}
        })
    }
    else {
        flashErrors(req, ['Comment field may not be blank']);
    }
    res.redirect(`/secrets/${req.params.secretId}`)
})

// Destroy Secret
app.get("/secrets/:secretId/destroy", (req, res) => {
    Secret.findById(req.params.secretId, (err, secret) => {
        if (err) {
            flash(req, ['Secret does not exist']);
        }
        else {
            if (secret.authorId === req.session.userId) {
                secret.remove();
            }
            else {
                flashErrors(req, ['You do not have permission to do that'])
            }
        }
        res.redirect("/secrets")
    })
})