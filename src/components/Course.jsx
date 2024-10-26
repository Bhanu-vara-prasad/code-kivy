import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { BsFillStarFill } from "react-icons/bs";
import { ImStarHalf } from "react-icons/im";
import FormModal from "./FormModal";

const Course = React.forwardRef((props, ref) => {
  const [courses, setCourses] = useState([]); // Ensure courses is an array
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  // Fetch courses when the component mounts
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/course/");

        // Check if the response contains the correct data structure
        if (response.data && Array.isArray(response.data.data)) {
          setCourses(response.data.data); // Set the array of courses correctly
        } else {
          console.error("Unexpected data structure:", response.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

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
                      <BsFillPeopleFill /> 100+
                      students
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
                              {/* Ensure the rating is a valid number and generate the star icons */}
                              {Array(Math.floor(course.rating))
                                .fill()
                                .map((_, i) => (
                                  <BsFillStarFill key={i} />
                                ))}
                              {/* Add half star if the rating is not a whole number */}
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
                      onClick={() => window.open(course.pdfUrl, "_blank")} // Opens the PDF link in a new tab
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

      {/* Modal Component */}
      <FormModal
        show={showModal}
        onClose={handleCloseModal}
        course={selectedCourse}
      />
    </section>
  );
});

export default Course;
