const mongoose = require('mongoose');


const storySchema = mongoose.Schema({
    author: {type: String, required: [true, "A Story's author may not be blank"]},
    title: {type: String, required: [true, "A Story's title may not be blank"]},
    desc: {type: String, required: [true, "A story's description may not be blank"]},
    timesChoosen: {type: Number, default: 0},
    ratings: [ratingsSchema],
    boards: [boardSchema],
}, {timestamp: true})

mongoose.model('story', storySchema)
