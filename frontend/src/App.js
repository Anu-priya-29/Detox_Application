import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Optional global styling

import UserForm from './components/UserForm';
import UserList from './components/UserList';

Modal.setAppElement('#root'); // Required for accessibility

function App() {
  const [refresh, setRefresh] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const toastInterval = setInterval(() => {
      toast.info("🧘 Time to take a detox break!", {
        position: "top-right",
        autoClose: 3000,
      });
    }, 10000); // Toast every 10 sec

    const modalInterval = setInterval(() => {
      setModalIsOpen(true);
    }, 20000); // Modal every 20 sec

    return () => {
      clearInterval(toastInterval);
      clearInterval(modalInterval);
    };
  }, []);

  const handleUserAdded = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="App">
      <h1>🧘 Detox Tracker Dashboard</h1>

      {/* Toast and Modal */}
      <ToastContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Detox Reminder"
        className="detox-modal"
        overlayClassName="detox-overlay"
      >
        <h2>⚠️ Detox Reminder</h2>
        <p>Please take a short break for your health.</p>
        <button onClick={() => setModalIsOpen(false)}>OK</button>
      </Modal>

      {/* User Management Section */}
      <div className="form-section">
        <h2>📋 User Management</h2>
        <UserForm onUserAdded={handleUserAdded} />
        <UserList refreshFlag={refresh} />
      </div>
    </div>
  );
}

export default App;
