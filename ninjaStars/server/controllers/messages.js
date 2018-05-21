
    const mongoose = require("mongoose");
    const Messages = mongoose.model("message");

    returnObjBuilder = (res) => {
        return (err, data) => {
            if (err) { res.json({ message: "error", error: err.message }) }
            else { res.json({ message: "success", data: data }) }
        }
    }

    module.exports = {
        index: (req, res) => {
            Messages.find({}, returnObjBuilder(res))
        },
        show: (req, res) => {
            Messages.findById(req.params.messageId, returnObjBuilder(res))
        },
        create: (req, res) => {
            Messages.create(req.body, returnObjBuilder(res))
        },
        update: (req, res) => {
            Messages.findByIdAndUpdate(req.params.messageId, req.body, returnObjBuilder(res))
        },
        destroy: (req, res) => {
            Messages.findByIdAndRemove(req.params.messageId, returnObjBuilder(res))
        },
    }
