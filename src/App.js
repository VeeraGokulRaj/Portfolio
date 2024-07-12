import React,{useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
import Home from './component/Home';
import About from './component/About';
import "./index.css"
import Navbar from './component/Navbar';
import Education from './component/Education';
import Dark from './component/Dark';
import Project from './component/Project';
import Contact from './component/Contact';

function App() {

  const location = useLocation();
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = ''; // Chrome requires returnValue to be set.
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  return (
    
    <div className="
      h-full bg-gradient-linear dark:text-white text-black 
      dark:bg-[#111111] bg-[#FFFFFF]
      
    ">
     <AnimatePresence mode='wait'>
          
          <Routes location={location} key={location.pathname}>
            <Route path="/Portfolio" element={<Home />} />
            <Route path="/Portfolio/about" element={<About />} />
            <Route path="/Portfolio/education" element={<Education />} />
            <Route path="/Portfolio/project" element={<Project />} />
            <Route path="/Portfolio/contact" element={<Contact />} />
          </Routes>
      </AnimatePresence>
          <Navbar/>
          <Dark/>
      
    </div>
  );
}

export default App;
