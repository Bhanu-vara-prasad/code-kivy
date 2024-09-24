import React from 'react';

// Forwarding ref to the About component
const About = React.forwardRef((props, ref) => {
  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container section-title m-0" data-aos="fade-up">
        <h2>About Us</h2>
      </div>

      <div className="about-container" data-aos="fade-up">
        <div className="about-image">
          <img src="img/code-kivy.jpg" alt="Code Kivy" className="img31" />
        </div>

        <div className="about-text">
          <h1 className="header-sub">
            <span style={{ color: 'black' }}>Code</span> Kivy
          </h1>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; At Code Kivy, we are redefining the landscape of online education with our dynamic and immersive Python programming courses. We proudly offer live, interactive classes in both Telugu and English, having successfully trained over 200 students from around the globe.
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our platform stands out by merging expert instruction with an engaging learning experience. We believe that mastery of Python programming goes beyond theoretical knowledge. Therefore, our courses are designed to include hands-on assessments and real-world projects, ensuring that every student not only understands the concept but can also apply it with confidence.
          </p>

          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; By joining Code Kivy, you embark on a transformative educational journey where language barriers are transcended, and coding excellence is within reach. Our innovative approach to teaching ensures that students are well-equipped to tackle challenges and excel in their programming endeavors.
          </p>
        </div>
      </div>
    </section>
  );
});

export default About;
