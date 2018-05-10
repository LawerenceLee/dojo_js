const mongoose = require('mongoose');
const Wolf = mongoose.model('wolf');
module.exports = {
    index: (req, res) => {
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
        });
    },

    new: (req, res) => {
        res.render('form');
    },

    show: (req, res) => {
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
    },
    
    create: (req, res) => {
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
    },

    edit: (req, res) => {
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
    },

    update: (req, res) => {
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
    },

    destroy: (req, res) => {
        Wolf.findByIdAndRemove(req.params.id, err => {
            if (err) {
                console.log("Error: ", err)
                for(var key in err.errors){
                    req.flash('wolfErrors', err.errors[key].message);
                }
            }
            res.redirect('/')
        })
    },
}