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
const WolfSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
})
mongoose.model('wolf', WolfSchema);
const Wolf = mongoose.model('wolf');
mongoose.connect('mongodb://localhost/wolves')

// Server
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on Port ${portNum}`);
});

// Routes
app.get("/", (req, res) => {
    Wolf.find({}, (err, wolves) => {
        if (err) {
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('wolfErrors', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.render('index', {wolves: wolves});
        }
    })
})

app.get("/wolves/new", (req, res) => {
    res.render('form');
})

app.get("/wolves/:id", (req, res) => {
    Wolf.findById(req.params.id, (err, wolf) => {
        if (err) {
            console.log("Error: ", err)
            for(var key in err.errors){
                req.flash('wolfErrors', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.render('wolf', {wolf: wolf})
        }
    })
});


app.post("/wolves", (req, res) => {
    let wolfInst = new Wolf();
    wolfInst.name = req.body.name;
    wolfInst.age = req.body.age;
    wolfInst.save(err => {
        if (err) {
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('wolfErrors', err.errors[key].message);
            }
            res.redirect('/wolves/new');
        }
        else {
            res.redirect("/")
        }
    })
});

app.get("/wolves/:id/edit", (req, res) => {
    Wolf.findById(req.params.id, (err, wolf) => {
        if (err) {
            console.log("Error: ", err)
            for(var key in err.errors){
                req.flash('wolfErrors', err.errors[key].message);
            }
            res.redirect(`/wolves/${req.params.id}`);
        }
        else {
            res.render('updateForm', {wolf: wolf})
        }
    })
})

app.post("/wolves/:id", (req, res) => {
    Wolf.update({_id: req.params.id}, {name: req.body.name, age: req.body.age}, err => {
        if (err) {
            console.log("Error: ", err)
            for(var key in err.errors){
                req.flash('wolfErrors', err.errors[key].message);
            }
            Wolf.findById(req.params.id, (err, wolf) => {
                if (err) {
                    console.log("Error: ", err)
                }
                else {
                res.render('updateForm', {wolf: wolf})
                }
            })
        }
        else {
            res.redirect(`/wolves/${req.params.id}`);
        }
    })
})

app.get("/wolves/:id/destroy", (req, res) => {
    Wolf.findByIdAndRemove(req.params.id, err => {
        if (err) {
            console.log("Error: ", err)
            for(var key in err.errors){
                req.flash('wolfErrors', err.errors[key].message);
            }
        }
        res.redirect('/')
    })
});