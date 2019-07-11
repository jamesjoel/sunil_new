var express = require("express"); // Require Express module
var app = express(); // calling express constructor

app.set("view engine", "ejs"); // setting a view/template engine
// app.set("views", "<any folder name>") // setting a views folder name


app.get("/about", function(req, res){
    res.render("about");
});
app.get("/", function(req, res){
    res.render("index");
});
app.get("/contact", function(req, res){
    res.render("contact");
}); 
// hello



//crate a server with 3000 Port
app.listen(3000, function(){
    console.log("Server Running");
});