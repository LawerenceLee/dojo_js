const mongoose = require('mongoose');
const WolfSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
})
mongoose.model('wolf', WolfSchema);