import { useEffect, useState } from 'react';
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide button based on scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="scroll-top active scroll-top d-flex align-items-center justify-content-center" onClick={scrollToTop}>
         
          <FaArrowUp className='arrow-scroll' />
        </div>
      )}
    </>
  );
}

export default ScrollToTop;
