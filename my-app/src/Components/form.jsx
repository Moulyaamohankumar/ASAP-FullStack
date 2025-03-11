import React, { useState, useEffect } from "react";
import axios from "axios";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTasks] = useState([]);


  const fetchTasks = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data); 
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

 
  useEffect(() => {
    fetchTasks();
  }, []);

  const handleSubmit = async () => {
    if (!title || !description || !status) {
      alert("Please provide all details");
      return;
    }

    try {
      await axios.post("http://localhost:3000/tasks", { title, description, status });
      alert("Submitted successfully!");
      setTitle("");
      setDescription("");
      setStatus("");
      fetchTasks(); 
    } catch (error) {
      console.error("Error submitting task:", error);
      alert("Internal Server Error");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      alert("Task deleted successfully!");
      fetchTasks(); 
    } catch (error) {
      console.error("Error deleting task:", error);
      alert("Failed to delete task.");
    }
  };

  return (
    <div>
      <h1>Task Form</h1>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>

      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description} - {task.status}
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
// In the above code snippet, we have created a form component that allows users to submit tasks to the server. The component fetches the list of tasks from the server on mount and updates the list after submission or deletion of tasks. We are using the axios library to make HTTP requests to the server.