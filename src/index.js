const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const { json } = require('express');
const port = 8081;
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
// app.get("/welcome", (req, res) => {
//     res.status(200).type(`text/plain`).send("Welcome to Dominos!")
// })
// app.get("/contact", (req, res) => {
//     res.status(200).json({
//         phone: '18602100000',
//         email: 'guestcaredominos@jublfood.com'
//     })
// })
app.get("*", (req, res) => {
    res.status(404).send("NOT FOUND")
})




app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;