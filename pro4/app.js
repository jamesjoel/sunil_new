var express = require("express");
var app = express();

app.set("view engine", "ejs");
// app.set("views", "view");

var counter=1;

app.use(express.static(__dirname+"/public"));

app.use(function(req, res, next){
    console.log(counter);
    counter++;
    next();
});



app.get("/", function(req, res){

    res.send("<h1>Home</h1>");
    // res.render("home");
});
app.get("/about", function(req, res){
    res.send("<h1>About</h1>");
    // res.render("home");
});

app.get("/contact", function(req, res){
    res.send("<h1>Contact</h1>");
    // res.render("home");
});





app.listen(3000, function(){
    console.log("Server Running");
});