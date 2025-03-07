const express = require('express');
const app = express();
const port = 3000;
const entities = [
  { id: 1, title: 'Task 1', description: 'This is a dummy task', status: 'Pending' },
  { id: 2, title: 'Task 2', description: 'This is another dummy task', status: 'Completed' }
];  
app.get('/entities', (req, res) => {
  res.json(entities);
});
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);    
})

app.post('/tasks', (req, res) => {
    const { title, description, status } = req.body;
    try {
      if (!title || !description || !status) {
        res.status(400).json({ message: 'Please provide all details' });
      }
      entities.push({ id: entities.length + 1, title, description, status });
      res.status(200).json({ message: 'Task submitted' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
}
)