const ratingSchema = mongoose.Schema({
    title: {type: String, required: [true, "A rating's title may not be blank"]},
    content: {type: String, required: [true, "A rating's content may not be blank"]},
    stars: 5,
}, {timestamp: true})

mongoose.model('rating', ratingSchema)