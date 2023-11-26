const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

    var wt = Number(req.body.wt);
    var ht = Number(req.body.ht);

    var bmi = wt/(ht*ht);

    res.send("Your BMI is "+bmi);
    
});

app.listen(3030, function(){
    console.log("Server is running at port 3030.")
})