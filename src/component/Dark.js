import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

function Dark() {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    // Check if dark mode is already set in localStorage or by user preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true); // Set dark mode state to true
      document.documentElement.classList.add('dark'); // Add 'dark' class to root element
    } else {
      setDark(false); // Set dark mode state to false
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from root element
    }
  }, []);

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode); // Toggle dark mode state
    if (newDarkMode) {
      localStorage.theme = 'dark'; // Store dark mode preference in localStorage
      document.documentElement.classList.add('dark'); // Add 'dark' class to root element
    } else {
      localStorage.removeItem('theme'); // Remove dark mode preference from localStorage
      document.documentElement.classList.remove('dark'); // Remove 'dark' class from root element
    }
  };

  return (
    <div className="fixed sm:top-4 sm:right-4 top-2 right-2">
      <button className='sm:p-3 p-2 rounded-full dark:bg-[#2B2A2A] bg-[#EEEEEE] text-[#666666] dark:text-white' onClick={darkModeHandler}>
        {dark ? <IoSunny size={32} /> : <IoMoon size={32} />}
      </button>
    </div>
  );
}

export default Dark;
