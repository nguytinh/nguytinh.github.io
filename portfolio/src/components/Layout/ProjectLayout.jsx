import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection, FadeIn } from './Animations';
import ScrollToTopButton from '../ScrollToTopButton';
import PageWrapper from './PageWrapper';

const ProjectLayout = ({ title, description, children }) => {
  return (
    <PageWrapper className="bg-white text-black dark:bg-black dark:text-white min-h-screen transition-colors duration-300">
      <ParallaxSection className="pt-32 pb-20 bg-white dark:bg-black">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-black dark:text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>
      </ParallaxSection>

      <div className="max-w-6xl mx-auto px-6 pb-20 space-y-24">
        {children}
      </div>

      <ScrollToTopButton />
    </PageWrapper>
  );
};

export const SectionCard = ({ title, children, images = [] }) => {
  return (
    <FadeIn className="space-y-8">
      <div className="bg-gray-50 dark:bg-neutral-900 p-8 md:p-12 border-l-4 border-sky-500 shadow-xl transition-colors duration-300">
        <h2 className="text-3xl font-bold mb-6 text-sky-500">{title}</h2>
        <div className="text-lg text-gray-900 dark:text-gray-300 leading-relaxed mb-8 space-y-4">
          {children}
        </div>
        
        {images.length > 0 && (
          <div className={`grid grid-cols-1 ${images.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
            {images.map((img, idx) => (
              <div key={idx} className="overflow-hidden bg-white dark:bg-black shadow-inner flex justify-center items-center p-4 transition-colors duration-300">
                <img 
                  src={img} 
                  alt={`${title} ${idx + 1}`} 
                  className={`max-w-full max-h-[500px] w-auto h-auto object-contain transition-transform duration-500 hover:scale-105`}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </FadeIn>
  );
};

export default ProjectLayout;
