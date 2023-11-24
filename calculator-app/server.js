const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    const a = parseInt(req.body.num1);
    const b = parseInt(req.body.num2);
    var result = a+b;
    res.send("The result is " + result);
})

app.listen(3030, function(){
    console.log("Server Started at port 3030");
})