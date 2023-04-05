const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


app.get("/", function(req, res) {
    // res.sendFile("index.html");
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res) {
    const result = Number(req.body.num1) + Number(req.body.num2);
    res.send("<h1>The addition of the numbers is " + result + ".</h1>");
})

app.listen("3000", function() { 
    console.log("Server is running on port 3000.")
 })