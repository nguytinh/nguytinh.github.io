import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 cursor-pointer">
      <button
        onClick={scrollToTop}
        className="p-3 rounded-full bg-white dark:bg-neutral-800 text-sky-500 shadow-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-all transform hover:-translate-y-1 border border-gray-200 dark:border-neutral-700"
        aria-label="Scroll to top"
      >
        <i className="fas fa-angle-double-up fa-lg"></i>
      </button>
    </div>
  );
}

export default ScrollToTopButton;
