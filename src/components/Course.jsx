import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import FormModal from "./FormModal";
import LoginModal from "./LoginModal"; // Import the Login Modal

const Course = React.forwardRef((props, ref) => {
  const [courses, setCourses] = useState([]); // Ensure courses is an array
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Controls the registration modal
  const [showLoginModal, setShowLoginModal] = useState(false); // Controls the login modal
  const [selectedCourse, setSelectedCourse] = useState("");
  const [user, setUser] = useState(null); // Store user information

  // Fetch user details from localStorage to check login status
  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    setUser(userDetails); // Set user state if logged in
  }, []);

  // Fetch courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/course/");
        if (response.data && Array.isArray(response.data.data)) {
          setCourses(response.data.data);
        } else {
          console.error("Unexpected data structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  // Show Registration Modal or Login Modal based on login status
  const handleRegisterClick = (courseName) => {
    if (user) {
      setSelectedCourse(courseName); // Set the selected course
      setShowRegisterModal(true); // Show the registration modal
    } else {
      setShowLoginModal(true); // Show the login modal if not logged in
    }
  };

  // Close Registration Modal
  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  // Close Login Modal
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  // Handle login success
  const handleLoginSuccess = (userDetails) => {
    setUser(userDetails); // Set user details after login
    setShowLoginModal(false); // Close the login modal
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

      {/* Render courses dynamically */}
      <div className="outer-container courses" data-aos="fade-up">
        {Array.isArray(courses) && courses.length > 0 ? (
          courses.map((course) => (
            <div className="col-lg-4 col-md-6 mb-4 card" key={course.courseId}>
              <div className="rounded overflow-hidden mb-2">
                <img
                  className="img-fluid image"
                  src={course.imageString}
                  alt={course.name}
                />
                <div className="p-4 pb-0">
                  <div className="d-flex justify-content-between mb-3">
                    <small className="m-0">
                      <BsFillPeopleFill /> 100+ students
                    </small>
                    <small className="m-0">
                      <FaRegClock className="clock" /> {course.duration}
                    </small>
                  </div>
                  <a href="#" className="h5">
                    {course.name}
                  </a>
                  <p>{course.description}</p>
                  <div className="border-top mt-2 pt-4">
                    <div className="d-flex justify-content-between">
                      <h6 className="m-0">
                        <div className="stars">
                          {course.rating ? (
                            <>
                              {Array(Math.floor(course.rating))
                                .fill()
                                .map((_, i) => (
                                  <BsFillStarFill key={i} />
                                ))}
                              {course.rating % 1 !== 0 && <ImStarHalf />}
                            </>
                          ) : (
                            <p>No rating available</p>
                          )}
                        </div>
                        {course.rating || 0}{" "}
                      </h6>
                      <h5 className="m-0">₹{course.cost}</h5>
                    </div>
                  </div>
                  <div className="card-button">
                    <button
                      className="card-button1"
                      id="button2"
                      onClick={() => window.open(course.pdfUrl, "_blank")}
                    >
                      View Content
                    </button>

                    <button
                      className="card-join"
                      id="button"
                      onClick={() => handleRegisterClick(course.name)}
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading courses...</p>
        )}
      </div>

      {/* Registration Modal */}
      <FormModal
        show={showRegisterModal}
        onClose={handleCloseRegisterModal}
        course={selectedCourse}
      />

      {/* Login Modal */}
      <LoginModal
        show={showLoginModal}
        handleClose={handleCloseLoginModal}
        onLoginSuccess={handleLoginSuccess}
        message="Please login to register for the course."
      />
    </section>
  );
});

export default Course;
