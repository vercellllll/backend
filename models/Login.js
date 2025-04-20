const { default: mongoose } = require("mongoose");
const LoginSchema = new mongoose.Schema({
    password: String,
    email: String,
    mobile: String,
    problem: String,
    widthdrawal: String,
})

const Logged = mongoose.model("Login", LoginSchema)
module.exports = Logged;