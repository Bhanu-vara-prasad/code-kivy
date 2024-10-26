// UserAuth.jsx
import React, { useState, useEffect } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import axios from 'axios';
import LoginModal from './LoginModal';

const UserAuth = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(null); // Store user data

  const handleLoginOpen = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  // Function to handle successful login
  const handleLoginSuccess = async (email) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/user/details?email=${email}`);
      setUser(response.data.user); // Set user details after successful login
      setShowLoginModal(false); // Close login modal
    } catch (error) {
      console.error('Error fetching user details', error);
      alert('Failed to retrieve user details');
    }
  };

  const handleLogout = () => {
    setUser(null); // Clear user data on logout
  };

  return (
    <div>
      {user ? (
        // Dropdown with user details if logged in
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="user-dropdown">
            {user.name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Name: {user.name}</Dropdown.Item>
            <Dropdown.Item href="#">Email: {user.email}</Dropdown.Item>
            <Dropdown.Item href="#">Phone: {user.phone}</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        // Login button if not logged in
        <Button onClick={handleLoginOpen}>Login</Button>
      )}
      {/* Render the LoginModal */}
      <LoginModal show={showLoginModal} handleClose={handleLoginClose} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default UserAuth;
