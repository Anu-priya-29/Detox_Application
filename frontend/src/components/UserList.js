import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ refreshFlag }) => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/users');
      setUsers(res.data);
    } catch (err) {
      alert("Error fetching users");
    }
  };

  const deleteUser = async (id) => {
    if (window.confirm("Delete this user?")) {
      await axios.delete(`http://localhost:8080/api/users/${id}`);
      fetchUsers();
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refreshFlag]);

  return (
    <div>
      <h2>Detox Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.detoxPlan}
            <button onClick={() => deleteUser(user.id)} style={{ marginLeft: '10px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
