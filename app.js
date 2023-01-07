var express = require('express');




var app = express();



app.set('view engine','ejs');


app.get("/",function(req,res){
res.render('Home');

})




app.get("/contact",function(req,res){


})

app.get("/profile/:id",function(req,res){

res.send('the requested id is '+ req.params.id)
})






//listening to the 3000 port
app.listen(3000)