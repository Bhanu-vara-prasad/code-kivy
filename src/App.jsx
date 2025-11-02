import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Course from './components/Course';
import Testimonials from './components/Testimonials'; // Reviews Section
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio'; // Team Section
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop'; 
import { useRef, useState, useEffect } from 'react';
import { IoHomeOutline, IoPersonOutline, IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineTeam } from "react-icons/ai";
import { BsHddStack, BsEnvelope } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

import { HiOutlineX } from "react-icons/hi";// Added HiOutlineX for close icon
import UserAuth from './components/UserAuth'; 


function App() {
  const hero = useRef();
  const about = useRef();
  const course = useRef();
  const review = useRef();  // Testimonials (Reviews) Section
  const contact = useRef();
  const team = useRef();  // Portfolio (Team) Section

  const [headerShown, setHeaderShown] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); 

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLoginOpen = () => setShowLoginModal(true);
  const handleLoginClose = () => setShowLoginModal(false);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
    if (headerShown) toggleHeader();
  };

  const toggleHeader = () => {
    setHeaderShown(!headerShown);
  };

  useEffect(() => {
    const sections = [
      { ref: hero, name: 'hero' },
      { ref: about, name: 'about' },
      { ref: course, name: 'course' },
      { ref: review, name: 'review' },  // Testimonials Section
      { ref: contact, name: 'contact' },
      { ref: team, name: 'team' },  // Team (Portfolio) Section
    ];

    const observerOptions = {
      root: null,
      threshold: 0.5, 
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSectionName = sections.find(section => section.ref.current === entry.target).name;
          setActiveSection(activeSectionName);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <Preloader />

      <header id="header" className={`header d-flex flex-column justify-content-center ${headerShown ? 'header-show' : ''}`}>
        <i className={`header-toggle d-xl-none `} onClick={toggleHeader}>
          {headerShown ? <HiOutlineX /> : <HiOutlineBars3 />}  {/* Toggle between open and close icon */}
          
        </i>
        <UserAuth/>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <a
                href="#hero"
                className={activeSection === 'hero' ? 'active' : ''}
                onClick={() => scrollToComponent(hero)}
              >
                <IoHomeOutline className='navicon'/>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => scrollToComponent(about)}
              >
                <IoPersonOutline className="navicon"/>
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={activeSection === 'course' ? 'active' : ''}
                onClick={() => scrollToComponent(course)}
              >
                <IoDocumentTextOutline className='navicon' />
                <span>Courses</span>
              </a>
            </li>
            <li>
              <a
                href="#team"
                className={activeSection === 'team' ? 'active' : ''}
                onClick={() => scrollToComponent(team)}  // Scrolls to Portfolio
              >
                <AiOutlineTeam className='navicon'/>
                <span>Team</span>
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className={activeSection === 'review' ? 'active' : ''}
                onClick={() => scrollToComponent(review)}  // Scrolls to Testimonials
              >
                <BsHddStack className="navicon"/>
                <span>Reviews</span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => scrollToComponent(contact)}
              >
                <BsEnvelope className='navicon' />
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      
     
      <main className="main">
        {/* Main content */}
        <Hero ref={hero}></Hero>
        <About ref={about}></About>
        <Course ref={course}></Course>
        <Portfolio ref={team}></Portfolio>  {/* Team Section */}
        <Testimonials ref={review}></Testimonials>  {/* Reviews Section */}
        <Contact ref={contact}></Contact>
        <Footer></Footer>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
