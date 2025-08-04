import React, { useState } from 'react';
import { Button, Dropdown, Modal, Toast, ToastContainer } from 'react-bootstrap';
import { FaUser, FaSignOutAlt, FaBars } from 'react-icons/fa';
import LoginModal from './LoginModal';

const UserAuth = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userDetails")) || null);

  const handleLoginOpen = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  // Handle successful login and show toast
  const handleLoginSuccess = (userDetails) => {
    setUser(userDetails);
    setShowToast(true);
    setShowLoginModal(false);
  };

  // Confirm logout
  const confirmLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userDetails");
    setUser(null);
    setShowLogoutModal(false);
  };

  return (
    <div className="auth-toggle-container">
      {user ? (
        <>
          {/* User Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="user-dropdown" className="user-icon-dropdown">
              <FaUser />
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item disabled>{user.name}</Dropdown.Item>
              <Dropdown.Item disabled>{user.email}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => setShowLogoutModal(true)} className="text-danger">
                <FaSignOutAlt className="me-2" /> Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          {/* Logout Confirmation Modal */}
          <Modal show={showLogoutModal} onHide={() => setShowLogoutModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Logout</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to log out?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={confirmLogout}>
                Logout
              </Button>
            </Modal.Footer>
          </Modal>
          
          {/* Success Toast Notification */}
          <ToastContainer className="p-3" position="top-end">
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
              <Toast.Body>Login Successful!</Toast.Body>
            </Toast>
          </ToastContainer>
        </>
      ) : (
        <Button onClick={handleLoginOpen} className="login-button">Login</Button>
      )}


      {/* Login Modal */}
      <LoginModal show={showLoginModal} handleClose={handleLoginClose} onLoginSuccess={handleLoginSuccess} />
    </div>
  );
};

export default UserAuth;
