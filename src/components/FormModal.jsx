import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const FormModal = ({ show, onClose, course }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    yearOfGraduation: "",
    email: "",
    paymentFile: null,
    coursename: course,
  });
  const [user, setUser] = useState(null);

  // Fetch user details from localStorage
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails")) || null;
    setUser(userDetails);
    setFormData((prevData) => ({
      ...prevData,
      email: userDetails?.email || "", // Auto-fill email from login data
      coursename: course,
    }));
  }, [course]);

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload for payment transaction
  const handleFileChange = (e) => {
    setFormData({ ...formData, paymentFile: e.target.files[0] });
  };

  // Prevent submission without login
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("You must be logged in to register!");
      return;
    }

    // Prepare form data to include the file
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/course/register", data);
      if (response.data.success) {
        alert("Registration successful!");
        onClose();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error in registration", error);
      alert("There was an error processing your registration.");
    }
  };

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Course Registration</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <Form.Group controlId="formName" className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </Form.Group>

          <Form.Group controlId="formPhone" className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
            />
          </Form.Group>

          <Form.Group controlId="formWhatsApp" className="mb-3">
            <Form.Label>WhatsApp Number</Form.Label>
            <Form.Control
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleInputChange}
              required
              placeholder="Enter your WhatsApp number"
            />
          </Form.Group>

          <Form.Group controlId="formYearOfGraduation" className="mb-3">
            <Form.Label>Year of Graduation</Form.Label>
            <Form.Control
              type="text"
              name="yearOfGraduation"
              value={formData.yearOfGraduation}
              onChange={handleInputChange}
              required
              placeholder="Enter your graduation year"
            />
          </Form.Group>

          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              readOnly
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formCourseName" className="mb-3">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              name="coursename"
              value={formData.coursename}
              readOnly
              disabled
            />
          </Form.Group>

          <Form.Group controlId="formPaymentFile" className="mb-3">
            <Form.Label>Payment Transaction File</Form.Label>
            <Form.Control
              type="file"
              name="paymentFile"
              onChange={handleFileChange}
              required
            />
          </Form.Group>

          {/* UPI QR Code Image */}
          <div className="mb-3">
            <p>Make payment via UPI:</p>
            <img
              src="/path/to/upi-qr-code.png"  // Replace with the correct path to the UPI QR code image
              alt="UPI QR Code"
              style={{ width: "150px", height: "150px" }}
            />
          </div>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
