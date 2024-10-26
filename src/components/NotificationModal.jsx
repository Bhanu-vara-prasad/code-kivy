// NotificationModal.jsx
import React, { useState, useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import axios from 'axios'; // Import axios to make API requests

const NotificationModal = ({ onClose }) => {
  const [notifications, setNotifications] = useState([]); // State to hold notifications
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  // Function to fetch notifications from the API
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/notification/');
      setNotifications(response.data.data); // Assuming the API returns an array of notifications
    } catch (error) {
      setError('Failed to fetch notifications.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch notifications when the component mounts
  useEffect(() => {
    fetchNotifications();
  }, []);

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
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>

        <div className="modal-body">
          {loading ? (
            <p>Loading notifications...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            notifications.map((notification, index) => (
              <div
                key={notification._id}
                className={`notification-item ${index % 2 === 0 ? 'light' : 'dark'}`}
              >
                {icons[index % icons.length]}
                <p>{notification.message}</p>
                {notification.link && (
                  <a href={notification.link} target="_blank" rel="noopener noreferrer">
                    {notification.link}
                  </a>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;
