
    let mongoose = require("mongoose");
    const messagesSchema = mongoose.Schema({
        username: {type: String, required: [true, "Username cannot be blank"]},
        content: {type: String, required: [true, "Message cannot be blank"]},
    }, {timestamp: true})
    mongoose.model("message", messagesSchema)
    
