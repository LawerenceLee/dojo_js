
    let mongoose = require("mongoose");
    const authorsSchema = mongoose.Schema({
        name: {type: String, required: [true, "Name cannot be blank"], minlength: [3, "Name may not be less than 3 characters long"]},
    }, {timestamp: true})
    // authorsSchema.path('name').validate(name => {
    //     return name.length >= 3;
    // })
    mongoose.model("author", authorsSchema)
    