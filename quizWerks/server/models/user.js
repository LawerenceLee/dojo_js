let mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: {type: String},
    email: {type: String},
    password: {type: String}
}, {timestamp: true})
mongoose.model("user", userSchema)