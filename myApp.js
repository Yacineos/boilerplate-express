require('dotenv').config();
let express = require("express");
let app = express();


app.get("/json", (req, res) => {
    console.log("test");
    if(process.env.MESSAGE_STYLE === "uppercase"){
        console.log("test");
        res.json({ "message" : "HELLO JSON" });
    }else{
        console.log("test");
        res.json({ "message" : "Hello json" });
    }
  });

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.use("/public",express.static(__dirname + "/public"));


module.exports = app;
