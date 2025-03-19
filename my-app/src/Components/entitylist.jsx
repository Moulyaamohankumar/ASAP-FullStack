import React, { useState, useEffect } from "react";

const EntityList = () => {
  const [users, setUsers] = useState([]);
  const [entities, setEntities] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    fetch("/api/users") // Adjust your API endpoint
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserChange = async (event) => {
    const userId = event.target.value;
    setSelectedUser(userId);

    if (userId) {
      const res = await fetch(`/api/entities/${userId}`);
      const data = await res.json();
      setEntities(data);
    } else {
      setEntities([]);
    }
  };

  return (
    <div>
      <h2>Filter Entities by User</h2>
      <select value={selectedUser} onChange={handleUserChange}>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.name}
          </option>
        ))}
      </select>

      <h3>Entities Created by Selected User:</h3>
      <ul>
        {entities.map((entity) => (
          <li key={entity._id}>{entity.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EntityList;
