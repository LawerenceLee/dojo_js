const mongoose = require('mongoose')
const Quote = mongoose.model('quote')
const quotes = require('../controllers/quotes')
module.exports = app => {
    app.get("/", (req, res) => {
        quotes.index(req, res);
    })

    app.get("/quotes", (req, res) => {
        quotes.show(req, res);
    })

    app.post("/quotes", (req, res) => {
        quotes.create(req, res);
    })
}