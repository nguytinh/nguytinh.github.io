import React from 'react';
import { ParallaxSection, StaggerContainer, StaggerItem } from '../components/Layout/Animations';
import PageWrapper from '../components/Layout/PageWrapper';
import ScrollToTopButton from '../components/ScrollToTopButton';

import img1 from '../assets/More/img1.JPG';
import img2 from '../assets/More/img2.JPEG';
import img3 from '../assets/More/img3.JPEG';
import img4 from '../assets/More/img4.JPEG';
import img5 from '../assets/More/img5.JPEG';
import img6 from '../assets/More/img6.JPEG';  
import img7 from '../assets/More/img7.JPEG';
import img8 from '../assets/More/img8.JPEG';  
import img9 from '../assets/More/img9.JPEG';
import img10 from '../assets/More/img10.JPEG';  
import img11 from '../assets/More/img11.JPG';
import img12 from '../assets/More/img12.JPG';
import img13 from '../assets/More/img13.JPG';

function More() {
  const images = [
    { src: img7, alt: "Photo 7" },
    { src: img8, alt: "Photo 8" },
    { src: img1, alt: "Photo 1" },
    { src: img2, alt: "Photo 2" },
    { src: img3, alt: "Photo 3" },
    { src: img4, alt: "Photo 4" },
    { src: img5, alt: "Photo 5" },
    { src: img6, alt: "Photo 6" },
    { src: img11, alt: "Photo 11" },
    { src: img12, alt: "Photo 12" },
    { src: img9, alt: "Photo 9" },
    { src: img10, alt: "Photo 10" },
    { src: img13, alt: "Photo 13" },
  ];

  return (
    <PageWrapper className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <ParallaxSection className="pt-20 pb-32">
        <h1 className="text-5xl font-bold text-center text-black dark:text-white mb-20">My Photos</h1>
        
        <StaggerContainer className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mx-auto max-w-7xl px-4">
          {images.map((image, index) => (
            <StaggerItem key={index} className="break-inside-avoid">
              <a 
                href="https://www.instagram.com/tinhph0ng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative group overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </ParallaxSection>
      
      <ScrollToTopButton /> 
    </PageWrapper>
  );
}

export default More;
