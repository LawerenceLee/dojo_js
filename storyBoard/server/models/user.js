const userSchema = mongoose.Schema({
    firstName: {type: String, required: [true, "First Name may not be blank"]},
    lastName: {type: String, required: [true, "Last Name may not be blank"]},
    username: {type: String, required: [true, "username may not be blank"]},
    location: {type: String, required: [true, "location may not be blank"]},
    password: {type: String, required: [true, "password may not be blank"]}, 
    faveGenres: [],
    stories: [storySchema],
}, {timestamp: true})

mongoose.model('user', userSchema)