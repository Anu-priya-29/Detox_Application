import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    detoxPlan: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/users', user);
      alert("User added!");
      onUserAdded(); // Notify parent to refresh
      setUser({ name: '', email: '', phone: '', detoxPlan: '' }); // Clear form
    } catch (error) {
      alert("Error: Could not add user");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Detox User</h2>
      <input name="name" placeholder="Name" value={user.name} onChange={handleChange} required /><br />
      <input name="email" placeholder="Email" value={user.email} onChange={handleChange} required /><br />
      <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} required /><br />
      <input name="detoxPlan" placeholder="Detox Plan" value={user.detoxPlan} onChange={handleChange} required /><br />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
