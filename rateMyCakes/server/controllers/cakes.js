const mongoose = require('mongoose');
const Cake = mongoose.model('cake');

returnObjBuilder = (res) => {
    return (err, data) => {
        if (err) { res.json({ message: "error", error: err.message }) }
        else { res.json({ message: "success", data: data }) }
    }
}

module.exports = {
    index: (req, res) => {
        Cake.find({}, returnObjBuilder(res))
    },
    create: (req, res) => {
        Cake.create(req.body, returnObjBuilder(res))
    }, 
    update: (req, res) => {
        Cake.findByIdAndUpdate(req.params.cakesId, req.body, {new: true}, returnObjBuilder(res))
    },
}