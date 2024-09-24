import React, { useState } from 'react';
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import FormModal from './FormModal';

// Forwarding ref to the Course component
const Course = React.forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');

  // Show Modal on Register Now Click
  const handleRegisterClick = (courseName) => {
    setSelectedCourse(courseName);
    setShowModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section id="resume" className="resume section" ref={ref}>
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Courses</h2>
        <p>
          We promise that with our courses, you won’t just learn syntax—you’ll
          understand the soul and logic of Python programming, equipping you
          with the skills to excel in any coding challenge.
        </p>
      </div>

      {/* Course Card 1 */}
      <div className="outer-container" data-aos="fade-up">
        <div className="col-lg-4 col-md-6 mb-4 card">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid image" src="img/python-training-institute.webp" alt="Python Basic" />
            <div className="p-4 pb-0">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0">
                  <BsFillPeopleFill /> 100+ students
                </small>
                <small className="m-0">
                  <FaRegClock className='clock' /> 20 days
                </small>
              </div>
              <a href="#" className="h5">Python Basic</a>
              <div className="border-top mt-2 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">
                    <div className="stars">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <ImStarHalf />
                    </div>
                    4.5 <small>(90)</small>
                  </h6>
                  <h5 className="m-0">₹499</h5>
                </div>
              </div>
              <div className="card-button">
                <button className="card-button1" id="button2">View Content</button>
                <button className="card-join" id="button" onClick={() => handleRegisterClick('Python Basic')}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Course Card 2 */}
        <div className="col-lg-4 col-md-6 mb-4 card">
          <div className="rounded overflow-hidden mb-2">
            <img className="img-fluid image" src="img/python-training-institute.webp" alt="Python Advance" />
            <div className="p-4 pb-0">
              <div className="d-flex justify-content-between mb-3">
                <small className="m-0">
                  <BsFillPeopleFill /> 100+ students
                </small>
                <small className="m-0">
                  <FaRegClock className='clock' /> 30 days
                </small>
              </div>
              <a href="#" className="h5">Python Advance</a>
              <div className="border-top mt-2 pt-4">
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">
                    <div className="stars">
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <BsFillStarFill />
                      <ImStarHalf />
                    </div>
                    4.5 <small>(90)</small>
                  </h6>
                  <h5 className="m-0">₹999</h5>
                </div>
              </div>
              <div className="card-button">
                <button className="card-button1" id="button1">View Content</button>
                <button className="card-join" id="button" onClick={() => handleRegisterClick('Python Advance')}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <FormModal show={showModal} onClose={handleCloseModal} course={selectedCourse} />
    </section>
  );
});

export default Course;
