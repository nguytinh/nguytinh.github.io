import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 cursor-pointer">
      <button
        onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
        className="p-3 rounded-full bg-slate-800 text-purple-400 shadow-lg hover:bg-slate-700 transition-all transform hover:-translate-y-1 border border-slate-700"
        aria-label="Scroll to top"
      >
        <i className="fas fa-angle-double-up fa-lg" />
      </button>
    </div>
  );
}

export default ScrollToTopButton;
