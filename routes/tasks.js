const express = require('express');
const router = express.Router();
const {
    getAlltasks,
    createNewTask,
    getTask,
    updateTask,
    deleteTask
} = require('../controllers/tasks');

router.get('/',  getAlltasks);
router.post('/', createNewTask);
router.get('/:id', getTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;