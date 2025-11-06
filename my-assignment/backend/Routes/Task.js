
const express = require('express');
const router = express.Router();
const Task = require('../Config/Models/tasksmodel');

// GET /api/tasks (Fetch all tasks)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error: error.message });
  }
});

// POST /api/tasks (Create a new task)
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    
    if (!title) {
        return res.status(400).json({ message: 'Title is required' });
    }

    const newTask = new Task({ title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: 'Error creating task', error: error.message });
  }
});
// 4. DELETE /api/tasks/:id (Delete a task)
exports.deleteTask = async (req, res) => {
  try {
    // 1. Get the task ID from the URL parameters
    const { id } = req.params; 
    
    // 2. Use Mongoose to find the task by its MongoDB unique ID and delete it
    const deletedTask = await Task.findByIdAndDelete(id);

    // 3. Handle the case where the ID does not match any existing task
    if (!deletedTask) {
      // 404 Not Found is the appropriate status for a missing resource
      return res.status(404).json({ message: 'Task not found' });
    }

    // 4. Send a success response (200 OK)
  
    res.status(200).json({ message: 'Task deleted successfully', deletedTask });
  } catch (error) {
    // 5. Handle potential database or server errors
    res.status(500).json({ message: 'Error deleting task', error: error.message });
  }
};
 

module.exports = router;