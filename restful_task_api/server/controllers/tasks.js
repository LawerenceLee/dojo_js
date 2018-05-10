const mongoose = require('mongoose');
const Task = mongoose.model('task');
module.exports = {
    index: (req, res) => {
        Task.find({}, (err, tasks) => {
            if (err) {
                res.send(err.message)
            }
            else {
                res.json(tasks)
            }
        })
    },
    show: (req, res) => {
        Task.findById(req.params.taskId, (err, task) => {
            if (err) {
                res.send(err.message)
            }
            else {
                res.json(task)
            }
        })
    },
    create: (req, res) => {
        let taskInst = new Task({
            title: req.body.taskTitle,
            desc: req.body.taskDesc,
            completed: req.body.taskComp,
        })
        taskInst.save(err => {
            if (err) {
                res.send(err.message);
            }
            else {
                res.send(taskInst)
            }
        })
        
    }, 
    update: (req, res) => {
        Task.findById(req.params.taskId, (err, task) => {
            if (err) {
                res.send(err)
            }
            else {
                task.title = req.body.taskTitle;
                task.desc = req.body.taskDesc;
                task.completed = req.body.taskComp;
                task.save(err => {
                    if (err) {
                        res.send(err.message)
                    }
                    else {
                        res.send('Saved')
                    }
                })
            }
        })
    },
    destroy: (req, res) => {
        Task.findByIdAndRemove(req.params.taskId, err => {
            if (err) {
                res.send(err.message)
            }
            else {
                res.send("Deleted")
            }
        })
        
    },
}