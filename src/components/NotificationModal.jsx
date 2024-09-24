// NotificationModal.jsx
import React, { useState } from 'react';
// Importing the CSS for styling
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';

const NotificationModal = ({ onClose }) => {


   
    const notifications = [
        { id: 1, message: 'Your profile was updated successfully!' },
        { id: 2, message: 'Failed to connect to the server. Please try again later.' },
        { id: 3, message: 'New updates are available. Please refresh.' },
        { id: 4, message: 'Your password will expire in 3 days.' },
        { id: 5, message: 'Payment has been completed successfully.' },
        { id: 6, message: 'You have a new message in your inbox.' },
        { id: 7, message: 'System error occurred. Restart your application.' },
        { id: 8, message: 'Disk space running low.' },
        { id: 9, message: 'Your profile is 90% complete.' },
        { id: 10, message: 'You have earned a new badge!' }
        // Add more notifications if needed
      ];

      const icons = [
        <AiOutlineCheckCircle className="icon" />,
        <AiOutlineCloseCircle className="icon" />,
        <AiOutlineInfoCircle className="icon" />,
        <AiOutlineWarning className="icon" />
      ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Notifications</h3>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          {notifications.map((notification, index) => (
            <div key={notification.id} className={`notification-item ${index % 2 === 0 ? 'light' : 'dark'}`}>
              {icons[index % icons.length]}
              <p>{notification.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
