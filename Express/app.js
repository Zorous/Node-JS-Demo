var express = require('express');






/* that way we get access to all the functionality express has, since it's returning a function.
so what we do here is firing the function in that variable and will have access on that variable
 to express different methods
 */

var app = express();
/* after we setted up that variable we have given access to some methods that could help us respond to the 
requests, or the so called HTTP Methods : 
- GET       >> app.get('route',fn)
- POST      >> app.post('route',fn)
- DELETE    >> app.delete('route',fn)
- PUT       >> app.put('route',fn)
*/




//after installing a templating engine like EJS, u have to set it as ur default engine using the set() method
app.set('view engine','ejs')
/* 
By default when we request some views or templates, it's gonna look for the Views folder in ur project
that's the default behavior
*/



//setting the index page
app.get("/",function(req,res){
// express has extended the request object and the response object and added more functionality to them

//instead of the end() method we have the send() method here, and it's made to send strings
// res.send('this is the home page')

/* if we want to send an HTML file we need to use the sendFile() method instead*/
// res.sendFile(__dirname + '/home.html')

//after using the EJS engine we will replace the sendFile() method with the render method

res.render('Home');
/* Render method accepts also a 2nd optional parameter, and it's an object that
where the users could pass parameters via their requests, see the example below
*/
})




app.get("/contact",function(req,res){
// res.send('this is the contact page')
// res.sendFile(__dirname + '/contact.html')
})



//on the real application, we will be dealing so often with requests with parameters and express already has a way for us to deal with it
//we pass the parameter on the link with sitting a variable and retrieving its value below
app.get("/profile/:id",function(req,res){

//the request object has a sub-object called params where our parameters will be passed

// this >>
// res.send('the requested id is '+ req.params.id)

// becomes like this>>
res.render('profile',{id : req.params.id});

})






//listening to the 3000 port
app.listen(3000)