const mongoose = require('mongoose');
const Person = mongoose.model('person')
module.exports = {
    index: (req, res) => {
        Person.find({}, (err, people) => {
            if (err) {
                res.send(err)
            }
            else {
                res.json(people)
            }
        })
    },
    create: (req, res) => {
        let personInst = new Person({
            name: req.params.name
        });
        personInst.save(err => {
            if (err) {
                res.send(err)
            }
            else {
                res.send(`Added ${req.params.name}`)
            }
        })
    },
    destroy: (req, res) => {
        Person.findOneAndRemove({name: req.params.name}, (err, person) => {
            if (err) {
                res.send(err);
            }
            else {
                if (person === null) {
                    res.send(`${req.params.name} could not be found`)
                }
                else {
                    res.send(`Removed ${person}`)
                }
            }
        })
    },
    show: (req, res) => {
        Person.findOne({name: req.params.name}, (err, person) => {
            if (err) {
                res.send(err)
            }
            else {
                if (person === null) {
                    res.send(`${req.params.name} could not be found`)
                }
                else {
                    res.json(person)
                }
            }
        })
    }
}