const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    author: {type: String, required: true},
    quote: {type: String, required: true},
    date: {type: Date},
})
mongoose.model('quote', QuoteSchema);