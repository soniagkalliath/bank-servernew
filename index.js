const express = require('express');
const dataService = require('./services/data.service')

const app = express();

app.use(express.json());

//GET - READ
app.get('/',(req,res)=>{
    res.status(200).send("GET METHOD UPDATED")
})

//POST - CREATE
app.post('/',(req,res)=>{
    res.send("POST METHOD")
})

app.post('/register',(req,res)=>{
    console.log(req.body)
   const result = dataService.register(req.body.acno,req.body.username,req.body.password)
    //console.log(res.send(result.message))
    res.status(result.statusCode).json(result)
})

app.post('/login',(req,res)=>{
    console.log(req.body)
   const result = dataService.login(req.body.acno,req.body.password)
   // console.log(res.send(result.message))
    res.status(result.statusCode).json(result)
})

app.post('/deposit',(req,res)=>{
    console.log(req.body)
   const result = dataService.deposit(req.body.acno,req.body.password,req.body.amount)
   // console.log(res.send(result.message))
   res.status(result.statusCode).json(result)
})

app.post('/withdraw',(req,res)=>{
    console.log(req.body)
   const result = dataService.withdraw(req.body.acno,req.body.password,req.body.amount)
   // console.log(res.send(result.message))
   res.status(result.statusCode).json(result)
})


//PUT - UPDATE
app.put('/',(req,res)=>{
    res.send("PUT METHOD")
})

//PATCH - PARTIALLY UPDATE
app.patch('/',(req,res)=>{
    res.send("PATCH METHOD")
})

//DELETE - DELETE
app.delete('/',(req,res)=>{
    res.send("DELETE METHOD")
})

app.listen(3000,()=>{
    console.log("Server started at port 3000")
})

