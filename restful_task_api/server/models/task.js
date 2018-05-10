let mongoose = require('mongoose');
const taskSchema = mongoose.Schema({
    title: {type: String, required: [true, "Title cannot be blank"]},
    desc: {type: String, default: ""},
    completed: {type: Boolean, default: false}
}, {timestamp: true})
mongoose.model('task', taskSchema)