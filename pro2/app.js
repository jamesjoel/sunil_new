var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", "pages");


app.get("/", function(req, res){
    var a = "rohit";
    var data = { name : a, age : 25, city : "indore"};
    res.render("home", data);  
});
app.get("/about", function(req, res){
    var x = "indore";
    var y = "bhopal";
    var obj = { a : x, b : y };
    res.render("about", obj);
});
app.listen(3000, function(){
    console.log("Server Running");
});