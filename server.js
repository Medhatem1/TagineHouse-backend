const express = require('express');
const app = express();
require('./connexion')

const reply = require('./modeldb')
const book=require("./reservModel")

app.use(express.urlencoded({extended:true}))
app.use(express.json());

//crud applications 
app.post('/contact', async(req, res) =>{
  console.log("hello i am here");
    const {Name, email, age , message} = req.body
    try{
        const newPost = await reply.create({Name, email, age , message});
        res.json(newPost)
    }catch(error){
        res.status(500).send(error)
    }
})

//RESERVATION POST
app.post('/reservation', async(req, res) =>{
  console.log("hello reservation");
    const {Name,date,time,person,msg,num ,email} = req.body
    try{
        const newPost = await book.create( {Name,date,time,person,msg,num ,email});
        res.json(newPost)
    }catch(error){
        res.status(500).send(error)
    }
})



//getting all the data from db 
app.get('/', async(req , res) =>{
  try {
    console.log("hello i am here");

      const posts = await reply.find()
      res.json(posts)
  } catch (error) {
      res.status(500).send(error)
  }
})

app.listen(3000, ()=>{
    console.log('The app is listening to the port: http://localhost:3000');
}) 
