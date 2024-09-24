import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // Correct way to import

// Import the default Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { BsFillStarFill } from "react-icons/bs";

// Forwarding ref to the Testimonials component
const Testimonials = React.forwardRef((props, ref) => {
  return (
    <section  className="testimonials section" ref={ref}>
      <div className="container section-title" data-aos="fade-up">
        <h2>Reviews</h2>
        <p>We value your feedback! See what our trainees are saying about us.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]} // Include the modules
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView="auto"
          pagination={{ clickable: true, type: 'bullets' }}
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Excellent classes, I am so much satisfied for taking this course.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Dileep</h3>
                    <h4>Batch-2</h4>
                    <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>The best online classes I have ever listened to. I've learnt a lot from it.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Bindu Sathwika</h3>
                    <h4>Batch-01</h4>
                    <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Bro taught Python classes in a simple and well-understanding manner. Code Kivy is one of the best Python teaching classes for beginners. Thank you, bro.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Rahul</h3>
                    <h4>Batch-01</h4>
                    <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      <span>Simply superb! Your teaching skills are amazing. Thank you so much, brother.</span>
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <h3>Anusha</h3>
                    <h4>Batch-02</h4>
                    <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
});

export default Testimonials;
