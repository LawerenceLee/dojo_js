const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Must provide a name"]},
},
    {timestamps: true}
)
mongoose.model('person', personSchema)