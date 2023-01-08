var express = require('express');

//if you want more infos about it go to Query Stings/Post requests
var bodyParser = require('body-parser');

/* if you're confused go to check the Express folder first, it has a detailed
explanation */

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended : false});

//Setting our style sheet directory
app.use('/assets',express.static('assets'))

app.set('view engine','ejs');


app.get("/",function(req,res){
res.render('Home');

})

app.get("/contact",function(req,res){
    console.log(req.query);

res.render('Contact',{qs : req.query})


})

//Handling post
app.post("/contact",urlencodedParser,function(req,res){

    //urlencodedParser already parsed this data for us
    console.log(req.body);
//when we receive a post request from the form in the contact view, we render the success page
//and pass the data we got as a parameter for confirmation for example
res.render('Contact-success',{data : req.body})


})




/* app.get("/contact",function(req,res){


}) */

app.get("/profile/:name",function(req,res){

var data = {age : 19,job:"Software Engineer",hobbies : ["programming","gaming","researching","traveling"]}

//looking in the View directory automatically for a view called Profile and it renders it
res.render("Profile", {person : req.params.name, data : data})
})






//listening to the 8000 port
app.listen(8000)