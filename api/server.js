const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const db = require('./dbConfig');
const { restart } = require('nodemon');
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/todos',  async(req, res) =>{
    try{
   const todos = await db('todos')
   res.json(todos)
    }
    catch(err){
    console.log(err)
    }
});

server.post('/todos', async(req, res) =>{
    const {message}= req.body
    if(!message){
        return res.status(400).json({message: 'You must include a message in your request'})
    }
   try{
      await db('todos').insert({message})
       res.status(201).json({message: 'Todo successfulyy stored'})
   } catch{
       console.log(err)
   }
})

server.put('/todos/:id', async (req, res) =>{
const {id} = req.params
const {message} = req.body   
    if(!message){
        return res.status(400).json({message: 'You must include a message in your request'})
    }
    try{
    const currentTodo = await db('todos').where({id}).update({message})
        res.status(200).json({message: 'update succesfull'})
    }
    catch{
       console.log(err)
   }
    
})

server.put('/todos/:id/status', async (req, res) =>{
    const {id} = req.params
    const {status} = req.body
        try{
        const currentTodo = await db('todos').where({id}).update({status})
            res.status(200).json({status: currentTodo.status})
        }
        catch{
           console.log(err)
       }
        
    })

server.get('/todos/:id', async (req, res) =>{
const {id} = req.params
    try{
 const todo = await  db('todos').where({id})
 todo.length === 0 ? res.status(400).json({message: 'todo not found'}) : res.status(200).json(todo)
    }
    catch{
       console.log(err)
   }
    
})


server.delete('/todos/:id', async(req, res) =>{
const {id} = req.params
    try{
       await db('todos').where({id}).del()
    res.status(200).json({message: 'Delete succesfull'})
    }
    catch{
       console.log(err)
   }
    
})





module.exports = server;
