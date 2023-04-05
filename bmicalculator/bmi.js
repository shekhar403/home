const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.post("/bmiCalculator", function(req, res) {
    const weight = req.body.weight;
    const height = req.body.height;
    const bmi = (weight / Math.pow(height, 2)).toFixed(2);
    res.send("Your BMI is : " + bmi);
})

app.get('/bmiCalculator', function(req, res) {
    console.log(__dirname + "/bmiCalculator.html");
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen(3000, function() {
    console.log("server port : 3000");
})