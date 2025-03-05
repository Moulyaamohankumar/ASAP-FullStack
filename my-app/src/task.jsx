import React from "react";
const Task = ({ title, description, status }) => {
    return (
      <div className="task-card">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>Status: {status}</span>
      </div>
    );
  };
  
  export default Task;
  