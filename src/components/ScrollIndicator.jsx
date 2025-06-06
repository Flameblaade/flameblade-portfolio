import { useState, useEffect } from 'react';

function ScrollIndicator() {
  // State to track scroll position
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far user has scrolled down the page as a percentage
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      
      // Update the state with the scrolled percentage
      setScrollWidth(scrolled);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
}

export default ScrollIndicator;
