//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); /// PLus besoin d'installer npm bordy-parser depuis express 4.16+, il faut juste call : 

// app.use(express.urlencoded({extended: true}));


///////////////////////////////////////////SIMPLE ADDER ///////////////////////////////////////////////////
app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html"); 
});

app.post("/", function(req, res) {

   var num1 = Number(req.body.num1); /// Number() de d'entendre le contenu de req.body.num comme un chiffre et non une string, l'opérateur + , n'additionne pas les string mais les mets côte à côte. 
   var num2 = Number(req.body.num2);

   var result = num1 + num2;


    res.send("the result is " + result);  
});

///////////////////////////////////////////BMI CALCULATOR/////////////////////////////////////////////////

app.get('/bmicalculator', function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/bmicalculator', function (req,res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);

    var bmi = (weight/(height*height));
    console.log(bmi);
    res.send("Your BMI is " + bmi);
});

/////////////////////////////////////////TEST INITIAL /////////////////////////////////////////////////////
app.listen(3000, function () {
    console.log("Bienvenue sur le port 3000");
} )
