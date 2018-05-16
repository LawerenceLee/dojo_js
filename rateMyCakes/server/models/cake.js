let mongoose = require('mongoose');
// const ratingSchema = mongoose.Schema({
//     stars: {type: Number, min: 1, max: 5, required: [true, "Must provide a star rating"]},
//     comment: {type: String, required: [true, "Must provide a comment"]}
// })
// mongoose.model('rating', ratingSchema)
const cakeSchema = mongoose.Schema({
    baker: {type: String, required: [true, "Baker Name cannot be blank"]},
    url: {type: String, required: [true, "Image Url may not be blank"]},
    ratings: [],
}, {timestamp: true})
mongoose.model('cake', cakeSchema)