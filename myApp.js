let bodyParser = require('body-parser');
require('dotenv').config();
let express = require("express");
let app = express();

app.use(express.json());



/*
app.use(function middelware(req,res,next){
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
})

app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({
      name: `${firstName} ${lastName}`
    });
  });
app.get("/json", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
    if(process.env.MESSAGE_STYLE === "uppercase"){
        
        res.json({ "message" : "HELLO JSON" });
    }else{

        res.json({ "message" : "Hello json" });
    }
  });
*/

//------------------ Routing de la page du form ------------------
app.get("/",(req,res)=>{
  res.sendFile(__dirname +"/views/index.html");
})
// ----------------- Rendre le CSS accessible ---------------------
app.use("/public",express.static(__dirname + "/public"));
//------------------ lecture des données retournées par POST -----
app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

module.exports = app;
