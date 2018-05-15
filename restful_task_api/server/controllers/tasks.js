const mongoose = require('mongoose');
const Task = mongoose.model('task');

returnObjBuilder = (res) => {
    return (err, data) => {
        if (err) { res.json({ message: "error", error: err.message }) }
        else { res.json({ message: "success", data: data }) }
    }
}

module.exports = {
    index: (req, res) => {
        Task.find({}, returnObjBuilder(res))
    },
    show: (req, res) => {
        Task.findById(req.params.taskId, returnObjBuilder(res))
    },
    create: (req, res) => {
        Task.create(req.body, returnObjBuilder(res))
    }, 
    update: (req, res) => {
        Task.findByIdAndUpdate(req.params.taskId, req.body, returnObjBuilder(res))
    },
    destroy: (req, res) => {
        Task.findByIdAndRemove(req.params.taskId, returnObjBuilder(res))
    },
}