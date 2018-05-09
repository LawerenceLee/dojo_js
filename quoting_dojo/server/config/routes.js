const mongoose = require('mongoose')
const Quote = mongoose.model('quote')
module.exports = app => {
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
}