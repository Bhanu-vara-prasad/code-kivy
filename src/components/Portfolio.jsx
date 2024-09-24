import React from 'react';

import { RiDoubleQuotesL } from "react-icons/ri";

const Portfolio = React.forwardRef((props, ref) => {
  return (
    <section id="team" ref={ref} class="portfolio section"> {/* Ensure id is "team" */}
      <div className="responsive-container-block outer-container" data-aos="fade-up">
        <div className="responsive-container-block inner-container">
          <p className="text-blk section-head-text">Meet Our CEO and Python Instructor</p>
          <p class="text-blk section-subhead-text">
           
          </p>
          <div className="responsive-container-block">
            <div className="testimonials">
              <div className="testimonial-item">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-2 text-center">
                    <img
                      src="img/pavan.1PNG.PNG"
                      className="img-fluid testimonial-img"
                      alt="Pavan Kumar"
                    />
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-content" style={{ borderLeft: "0px" }}>
                      <p>
                      <RiDoubleQuotesL className="bi bi-quote quote-icon-left" />
                        {/* <FaQuoteLeft className="bi bi-quote quote-icon-left"/> */}
                        <span>
                          Hello Warriors! I'm Pavan Kumar, CEO of Code Kivy and your Python Mentor. With 4 years of hands-on experience in Python programming, I firmly believe that coding is more than just learning syntax—it's about developing logic and effectively communicating with machines. In our course, I’ll guide you from the ground up, ensuring you gain a comprehensive understanding of Python by the end.
                          I’m excited to help you shape your coding future. Join us and let’s get started on this journey together. See you in the training sessions!
                        </span>
                        <RiDoubleQuotesL className="quote-icon-right" />

                        {/* <FaQuoteLeft className="quote-icon-right"/> */}
                      </p>
                      <h3>Pavan</h3>
                      <h4>CEO, Code Kivy</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;
