let express = require("express");
let app = express();

app.get("/json", (res, req) => {
    res.json({ "message" : "Hello json" });
  });
  
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
})
app.use("/public",express.static(__dirname + "/public"));



module.exports = app;
