const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

const entities = [
  { id: 1, title: 'Task 1', description: 'This is a dummy task', status: 'Pending', created_by: 1 },
  { id: 2, title: 'Task 2', description: 'This is another dummy task', status: 'Completed', created_by: 2 }
];

// GET all tasks
app.get('/entities', (req, res) => {
  res.json(entities);
});

// GET tasks created by a specific user
app.get('/entities/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);
  const userTasks = entities.filter(task => task.created_by === userId);
  res.json(userTasks);
});

// GET all users (for dropdown selection)
app.get('/users', (req, res) => {
  res.json(users);
});

// POST a new task
app.post('/tasks', (req, res) => {
  const { title, description, status, created_by } = req.body;
  try {
    if (!title || !description || !status || !created_by) {
      return res.status(400).json({ message: 'Please provide all details' });
    }

    const newTask = { id: entities.length + 1, title, description, status, created_by };
    entities.push(newTask);
    
    res.status(201).json({ message: 'Task submitted', task: newTask });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// DELETE a task by ID
app.delete('/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const index = entities.findIndex((entity) => entity.id === id);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Task not found' });
    }

    entities.splice(index, 1);
    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
