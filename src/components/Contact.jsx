import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// Forwarding ref to the Contact component
const Contact = React.forwardRef((props, ref) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending data to a backend
    setTimeout(() => {
      setLoading(false);
      setSuccess('Your message has been sent. Thank you!');
      setError('');

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="contact section" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>We'd love to hear from you! Whether you have a question, feedback, or need support, our team is here to help.</p>
      </div>

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"><FaMapMarkerAlt className="flex-shrink-0" />  </i>
              <div>
                <h3>Address</h3>
                <p>Guntur, Andhra Pradesh</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-telephone flex-shrink-0"><FaPhoneAlt className="flex-shrink-0" /></i>
              <div>
                <h3>Call Us</h3>
                <p>+91 9390584021</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-envelope flex-shrink-0"> <FaEnvelope /></i>
              <div>
                <h3>Email Us</h3>
                <p>ceocodekivy@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {loading && <div className="loading">Loading</div>}
                  {error && <div className="error-message">{error}</div>}
                  {success && <div className="sent-message">{success}</div>}

                  <button type="submit" disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
