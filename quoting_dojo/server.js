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
const QuoteSchema = new mongoose.Schema({
    author: {type: String, required: true},
    quote: {type: String, required: true},
    date: {type: Date},
})
mongoose.model('quote', QuoteSchema);
const Quote = mongoose.model('quote');
mongoose.connect('mongodb://localhost/quotes')

// Server
const portNum = 8000;
const server = app.listen(portNum, () => {
    console.log(`Listening on Port ${portNum}`);
});

// Routes
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/quotes", (req, res) => {
    Quote.find({}, (err, quotes) => {
        if (err) {
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('quoteErrors', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.render('quotes', {quotes: quotes});
        }
    })
})

app.post("/quotes", (req, res) => {
    let quoteInst = new Quote();
    quoteInst.author = req.body.author;
    quoteInst.quote = req.body.quote;
    quoteInst.date = Date();
    quoteInst.save(err => {
        if (err) {
            console.log("We have an error!", err);
            for(var key in err.errors){
                req.flash('quoteErrors', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            res.redirect("/quotes")
        }
    })
})