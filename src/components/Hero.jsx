

import React from 'react'
import { useState } from 'react';
import NotificationModal from './NotificationModal';


   

const Hero = React.forwardRef((props, ref) => {
  const [isModalVisible, setModalVisible] = useState(false); // State to control modal visibility

// Function to show the modal
const handleShowModal = () => {
  setModalVisible(true);
};

// Function to hide the modal
const handleCloseModal = () => {
  setModalVisible(false);
};
  return (
    <section id="hero" ref={ref} className="hero section">
      {/* Your Hero component content */}
      <div className="node slide-in"  data-aos="fade-down"> 
        <img src=" img/python.svg" alt="node" className="nodeimg floating" />
       
        </div>
        <div className="css " data-aos="fade-right"> 
            <img src=" img/online-test.png" alt="" className="cssimg floating" />
            
        
        </div>
        <div>
         <div className="text">Learn to  <span className="code">code</span>  your </div>
         <div className="text">dreams and <span className="design">design</span>  </div>
         <div className="text">your future</div>

         </div>
         <div className="subtext "  data-aos="fade-up">Experience the future of coding education with Code Kivy where expertise meets interactive learning, and every student's success is our mission.</div>
          
         <div className="python "  data-aos="fade-left"> 
        <img src=" img/code.png" alt="node" className="pythonimg floating" />
        
        </div>
        <div className="swift " data-aos="fade-right">
            <img src=" img/notes.png" alt="" className="swiftimg floating" />
           
        </div>
        <div className="database " data-aos="fade-left">
            <img src=" img/live-streaming.png" alt="" className="databaseimg floating" />
           
        </div>
        <div className="button" data-aos="fade-up">
          <a href="#resume" > <button className='button1'  >Explore course</button></a> 
          <a > <button className='join' onClick={handleShowModal} >Notifications</button></a>
           
        </div>
        {isModalVisible && <NotificationModal onClose={handleCloseModal} />}
    </section>
  );
});

export default Hero;



