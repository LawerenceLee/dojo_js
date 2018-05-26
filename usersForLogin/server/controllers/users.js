
    const mongoose = require("mongoose");
    const Users = mongoose.model("user");

    returnObjBuilder = (res) => {
        return (err, data) => {
            if (err) { res.json({ message: "error", error: err.message }) }
            else { res.json({ message: "success", data: data }) }
        }
    }

    module.exports = {
        index: (req, res) => {
            Users.find({}, returnObjBuilder(res))
        },
        show: (req, res) => {
            Users.findById(req.params.userId, returnObjBuilder(res))
        },
        create: (req, res) => {
            Users.create(req.body, returnObjBuilder(res))
        },
        update: (req, res) => {
            Users.findByIdAndUpdate(req.params.userId, req.body, returnObjBuilder(res))
        },
        destroy: (req, res) => {
            Users.findByIdAndRemove(req.params.userId, returnObjBuilder(res))
        },
    }
