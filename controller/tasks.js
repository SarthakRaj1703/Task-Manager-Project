const Task = require('../models/Task')

const getAllTasks = (req,res)=>{
    res.send('all items');
}

const postNewTask = async (req ,res)=> {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getOneTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send('Task Updated');
}

const deleteTask = (req,res)=>{
    res.send('Task Deleted');
}


module.exports = {
    getAllTasks,
    postNewTask,
    getOneTask,
    updateTask,
    deleteTask
}