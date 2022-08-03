require('dotenv').config();
let express = require("express");
let app = express();
/*
app.use(function middelware(req,res,next){
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string);
    next();
})
*/
app.get("/now",(req,res,next)=> {
  req.time = new Date().toString();  
  next();  
},
(req,res)=>{
    res.send({time: req.time})
}
)
/*
app.get("/json", (req, res) => {
    res.sendFile(__dirname+"/views/index.html");
    if(process.env.MESSAGE_STYLE === "uppercase"){
        
        res.json({ "message" : "HELLO JSON" });
    }else{

        res.json({ "message" : "Hello json" });
    }
  });

app.get("/",(req,res)=>{
  
})
*/
app.use("/public",express.static(__dirname + "/public"));


module.exports = app;
