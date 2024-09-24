

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
    <section id="hero" ref={ref} class="hero section">
      {/* Your Hero component content */}
      <div class="node slide-in"  data-aos="fade-down"> 
        <img src=" img/python.svg" alt="node" class="nodeimg floating" />
       
        </div>
        <div class="css " data-aos="fade-right"> 
            <img src=" img/online-test.png" alt="" class="cssimg floating" />
            
        
        </div>
        <div>
         <div class="text">Learn to  <span class="code">code</span>  your </div>
         <div class="text">dreams and <span class="design">design</span>  </div>
         <div class="text">your future</div>

         </div>
         <div class="subtext "  data-aos="fade-up">Experience the future of coding education with Code Kivy where expertise meets interactive learning, and every student's success is our mission.</div>
          
         <div class="python "  data-aos="fade-left"> 
        <img src=" img/code.png" alt="node" class="pythonimg floating" />
        
        </div>
        <div class="swift " data-aos="fade-right">
            <img src=" img/notes.png" alt="" class="swiftimg floating" />
           
        </div>
        <div class="database " data-aos="fade-left">
            <img src=" img/live-streaming.png" alt="" class="databaseimg floating" />
           
        </div>
        <div class="button" data-aos="fade-up">
          <a href="#resume" > <button class='button1'  >Explore course</button></a> 
          <a > <button class='join' onClick={handleShowModal} >Notifications</button></a>
           
        </div>
        {isModalVisible && <NotificationModal onClose={handleCloseModal} />}
    </section>
  );
});

export default Hero;



