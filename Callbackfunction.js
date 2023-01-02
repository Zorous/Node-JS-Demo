
const Callback = function (message){
    //we execute the assigned function using the message parameter
    message();
    }

const test = function(){
    console.log("bye bye")
}

// we assign a function as a parameter
Callback(test);