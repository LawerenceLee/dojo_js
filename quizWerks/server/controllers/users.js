const mongoose = require("mongoose");
const Users = mongoose.model("user");

userValidation = form => {
    let errors = [];
    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
    if (!emailRegex.test(form.email)) {
        errors.push("Email is not in the correct format")
    }
    if (form.username === "") {
        errors.push("Username may not be blank")
    }
    else if (form.username.length <=2) {
        errors.push("Username must be at least 3 characters")
    }
    if (form.password.length <= 7) {
        errors.push("Password needs to be at least 8 characters in length")
    }
    if (form.password !== form.passwordConfirm) {
        console.log(form)
        errors.push("Passwords do not match")
    }
    return errors;
}

returnObjBuilder = res => {
    return (err, data) => {
        if (err) { res.json({ message: "error", error: err.message }) }
        else { res.json({ message: "success", data: data }) }
    }
}

module.exports = {
    index: (req, res) => {
        Users.find({}, returnObjBuilder(res))
    },
    show: (req, res) => {
        Users.findById(req.params.userId, returnObjBuilder(res))
    },
    create: (req, res) => {
        let errors = userValidation(req.body)
        if (errors.length > 0) {
            res.json({message: 'error', error: errors});
        }
        else {
            Users.create(req.body, returnObjBuilder(res))
        }
    },
    update: (req, res) => {
        // let errors = userValidation(req.body)
        // if (errors.length > 0) {
        //     res.json({message: 'error', error: errors});
        // }
        // else {
        //     Users.findByIdAndUpdate(req.params.userId, req.body, returnObjBuilder(res))
        // }
    },
    destroy: (req, res) => {
        Users.findByIdAndRemove(req.params.userId, returnObjBuilder(res))
    },
}
