//jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html"); 
});

app.listen(3000, function () {
    console.log("Bienvenue sur le port 3000");
} )
