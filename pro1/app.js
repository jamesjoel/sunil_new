var express = require("express");
var app = express();

app.get("/", function(req, res){
    // res.send("this is home page");

    res.sendFile(__dirname+"/home.html");



});
app.get("/about", function(req, res){
    res.send("<h2>this is About page</h2>");
});



app.listen(3000, function(){
    console.log("server running");
}); // for create a server