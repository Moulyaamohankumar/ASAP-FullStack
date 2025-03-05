import { useEffect } from 'react';
import Task from "./task";
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/entities`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

function App() {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>ASAP Project</h1>
      <Task title="Test Task" description="This is a dummy task" status="Pending" />
    </div>
  );
}

export default App;
