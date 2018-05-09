const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/static"))

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
require('./server/config/routes.js')(app)