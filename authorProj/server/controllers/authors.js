
    const mongoose = require("mongoose");
    const Authors = mongoose.model("author");

    returnObjBuilder = (res) => {
        return (err, data) => {
            if (err) { console.log(err); res.json({ message: "error", error: err.message }) }
            else { res.json({ message: "success", data: data }) }
        }
    }

    module.exports = {
        index: (req, res) => {
            Authors.find({}, returnObjBuilder(res))
        },
        show: (req, res) => {
            Authors.findById(req.params.authorId, returnObjBuilder(res))
        },
        create: (req, res) => {
            Authors.create(req.body, returnObjBuilder(res))
        },
        update: (req, res) => {
            Authors.findByIdAndUpdate(req.params.authorId, req.body, returnObjBuilder(res))
        },
        destroy: (req, res) => {
            Authors.findByIdAndRemove(req.params.authorId, returnObjBuilder(res))
        },
    }
