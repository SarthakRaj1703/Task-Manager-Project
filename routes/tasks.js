const express = require('express');
const router = express.Router();
const{
    getAllTasks,
    postNewTask,
    getOneTask,
    updateTask,
    deleteTask
} = require('../controller/tasks.js')


router.route('/').get(getAllTasks).post(postNewTask)
router.route('/:id').get(getOneTask).patch(updateTask).delete(deleteTask)


module.exports = router;