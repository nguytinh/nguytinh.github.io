import React from 'react';
import { motion } from 'framer-motion';
import { ParallaxSection, FadeIn } from './Animations';
import ScrollToTopButton from '../ScrollToTopButton';
import PageWrapper from './PageWrapper';

const ProjectLayout = ({ title, description, children }) => {
  return (
    <PageWrapper className="bg-slate-900 text-white min-h-screen">
      <ParallaxSection className="pt-32 pb-20 bg-slate-900">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto"
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
      <div className="bg-slate-800 p-8 md:p-12 border-l-4 border-purple-500 shadow-xl">
        <h2 className="text-3xl font-bold mb-6 text-purple-400">{title}</h2>
        <div className="text-lg text-slate-300 leading-relaxed mb-8 space-y-4">
          {children}
        </div>

        {images.length > 0 && (
          <div className={`grid grid-cols-1 ${images.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
            {images.map((img, idx) => (
              <div key={idx} className="overflow-hidden bg-slate-900 shadow-inner flex justify-center items-center p-4">
                <img
                  src={img}
                  alt={`${title} ${idx + 1}`}
                  className="max-w-full max-h-[500px] w-auto h-auto object-contain transition-transform duration-500 hover:scale-105"
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
