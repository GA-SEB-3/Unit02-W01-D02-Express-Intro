const express = require("express")

const app = express()

console.log("General Assembly")


// .get() takes 2 arguments
// 1. route where request is sent
// 2. function that will run when I get the request
app.get('/home',(request,response)=>{
    console.log("MY FIRST ROUTE HOME")

    response.send('<h1 style="background-color:green"> Welcome to Homepage </h1>')

})

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})