var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var index = require('./routes/indexRoutes');
var todos = require('./routes/todosRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/todos', todos);

app.listen(port, function() {
console.log("listening on port: ", port);
})

app.get('/todos',  async(req, res) =>{
    try{
   const todos = await  knex('todos')
   res.json(todos)
    }
    catch(err){
    console.log(err)
    }
});

app.post('/todos', async(req, res) =>{
    const {message}= req.body
    if(!message){
        return res.status(400).json({message: 'You must include a message in your request'})
    }
   try{
      await knex('todos').insert({message})
       res.status(201).json({message: 'Todo successfulyy stored'})
   } catch{
       console.log(err)
   }
})

app.put('/todos/:id', async (req, res) =>{
const {id} = req.params
const {message} = req.body   
    if(!message){
        return res.status(400).json({message: 'You must include a message in your request'})
    }
    try{
    const currentTodo = await knex('todos').where({id}).update({message})
        res.status(200).json({message: 'update succesfull'})
    }
    catch{
       console.log(err)
   }
    
})

app.put('/todos/:id/status', async (req, res) =>{
    const {id} = req.params
    const {status} = req.body
        try{
        const currentTodo = await knex('todos').where({id}).update({status})
            res.status(200).json({status: currentTodo.status})
        }
        catch{
           console.log(err)
       }
        
    })

app.get('/todos/:id', async (req, res) =>{
const {id} = req.params
    try{
 const todo = await  knex('todos').where({id})
 todo.length === 0 ? res.status(400).json({message: 'todo not found'}) : res.status(200).json(todo)
    }
    catch{
       console.log(err)
   }
    
})


app.delete('/todos/:id', async(req, res) =>{
const {id} = req.params
    try{
       await knex('todos').where({id}).del()
    res.status(200).json({message: 'Delete succesfull'})
    }
    catch{
       console.log(err)
   }
    
})


app.put('/todos/:id/status' , async (req, res) =>{
    const id = req.params.id
    const status = req.body.status
    if(!status){
        return res.status(400).json({message: 'You must include a status in your request'})
    }
        try{     
       await knex('todos').where({id: id}).update({status: status})
            res.status(200).json({message:"the Status was succesfully updated"})
        }
        catch{
           console.log(err)
           return res.status(400).json({message: 'you have an stupid error'})
       }
        
    })


module.exports = app;
