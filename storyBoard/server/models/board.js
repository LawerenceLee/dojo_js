const boardSchema = mongoose.Schema({
    boardTitle: {type: String, required: [true, "A Board's title may not be blank"]},
    boardStory: {type: String, required: [true, "A Board's story may not be blank"]},
    timesChoosen: {type: Number, default: 0},
    boardOptions = [],
}, {timestamp: true})

mongoose.model('board', boardSchema)