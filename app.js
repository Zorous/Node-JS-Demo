var express = require('express');


/* if you're confused go to check the Express folder first, it has a detailed
explanation */

var app = express();



app.set('view engine','ejs');


app.get("/",function(req,res){
res.render('Home');

})




app.get("/contact",function(req,res){


})

app.get("/profile/:name",function(req,res){

// res.send('the requested id is '+ req.params.id)

res.render("Profile", {person : req.params.name})
})






//listening to the 3000 port
app.listen(3000)