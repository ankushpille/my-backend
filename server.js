const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());


const todos = [
    {id:1,task:"learn nodejs",completed:false},
    {id:2,task:"learn express",completed:false},
    {id:3,task:"learn mongodb",completed:false}
]

app.get('/todos',(req,res) => {
    res.json(todos);
})

app.post('/todos',(req,res) => {
    const newTodo = {
        id: todos.length +1,
        task:req.body.task,
        completed:false
    }
    todos.push(newTodo);
    res.status(201).json(newTodo);
})

app.listen(3000,() => {
    console.log("server running on port 3000")
})