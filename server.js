const express = require('express');
const app = express();
require('./connexion')

const reply = require('./modeldb')
const book=require("./reservModel")
const menu=require("./MenuDB")
const main=require("./MenuDB2")
const desserts=require("./MenuDB3")


var cors = require('cors')
app.use(cors())
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

//MENU starters
app.post('/menu', async(req, res) =>{
  console.log("hello menu");
    const {name,description,price} = req.body
    try{
        const newPost = await menu.create({name,description,price});
        res.json(newPost)
    }catch(error){
        res.status(500).send(error)
    }
})
//MENU main


//GET MENU
app.get('/menu', async(req , res) =>{
    try {
      console.log("hello i am here menu");
  
        const posts = await menu.find()
        res.json(posts)
    } catch (error) {
        res.status(500).send(error)
    }
  })
///Get MAIN



  //get deseerts

app.put('/menu/:id', async(req , res) =>{
    try {
      
        const {id}=req.params;
        const post = await menu.findByIdAndUpdate(id,req.body);
        if(!post){
            return res.status(404).json({message:`cannot find the post with ID ${id} `})
        }
           const updatedPost= await menu.findById(id)
           res.status(200).json(updatedPost)
    } catch (error) {
        res.status(500).send(error)
    }
  })

  //?   DELETE

  app.delete('/menu/:id', async(req , res) =>{
    try {
        const {id}=req.params;
        const post = await menu.findByIdAndDelete(id,req.body);
        if(!post){
            return res.status(404).json({message:`cannot find the post with ID ${id} `})
        }
           const updatedPost= await menu.findById(id)
           res.status(200).json(updatedPost)
    } catch (error) {
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

app.listen(3009, ()=>{
    console.log('The app is listening to the port: http://localhost:3000');
}) 
