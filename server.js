const { default: mongoose } = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json({ extended: true }))

mongoose.connect("mongodb://localhost:27017/project").then((res) => {
    console.log("Mongoose Connected")
}).catch((err) => {
    console.log(err)
})

const Logged = require("./models/Login")
app.post("/login", async (req, res) => {
    const { password, email, mobile, widthdrawal, problem } = req.body
    const savedetails = Logged({
        problem: problem,
        password: password,
        email: email,
        widthdrawal: widthdrawal
    })
    console.log(req.body)
    let results = await savedetails.save()
    if (results) {
        res.json({
            status: true,
        })
    }
    else {
        res.json({
            status: false,
            msg: "Failed to Login"
        })
    }
})

app.listen("8080", () => {
    console.log("At 8080")
})

app.get("/", (req, res) => {
    res.json({
        status: true
    })
})