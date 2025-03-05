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