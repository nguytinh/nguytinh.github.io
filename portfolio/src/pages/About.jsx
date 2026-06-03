import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ParallaxSection, FadeIn } from '../components/Layout/Animations';
import PageWrapper from '../components/Layout/PageWrapper';
import resume from '../assets/Tinh_s_Resume.pdf';
import profileImage from '../assets/profile.JPG';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Assuming FontAwesome is available globally or via package
import '@fortawesome/fontawesome-free/css/all.min.css';

function AboutMe() {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate('/more');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageWrapper className="bg-slate-900 text-slate-50 min-h-screen">
      {/* Background Effect - could be a separate component */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
         <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
         <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <ParallaxSection className="pt-32 pb-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50"></div>
            <img 
              src={profileImage} 
              alt="Profile" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-slate-800 shadow-2xl"
            />
          </motion.div>

          <div className="space-y-4">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">Tinh-Phong Nguyen</h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-purple-400 font-light">Computer Scientist</p>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <a 
              href={resume} 
              target="_blank" 
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
            >
              Resume
            </a>
          </FadeIn>

          <FadeIn delay={0.8} className="space-y-6 max-w-2xl text-lg md:text-xl leading-relaxed text-gray-900 dark:text-gray-300">
            <p>
              I’m a Cal Poly SLO Computer Science graduate and Software Engineer at USC-ISI, and my focuses are on full-stack development, machine learning and software development. Being inspired by curiosity and innovation, I am interested in versatile SWE positions.
            </p>
            <p>
              Hello guys. I like playing basketball, I love occassional gambling (investing in the stock market), and I like working out. Lets go warriors! Lets go Pat Spencer! Feel free to contact me to talk about both professional and unprofessional topics.
            </p>
          </FadeIn>

          <FadeIn delay={1.0} className="pt-10">
            <button 
              onClick={handleIconClick}
              className="text-slate-400 hover:text-purple-400 transition-colors duration-300 group flex flex-col items-center gap-2"
            >
              <i className="fas fa-info-circle text-4xl group-hover:scale-110 transition-transform"></i>
              <span className="text-sm">More Info</span>
            </button>
          </FadeIn>

        </div>
      </ParallaxSection>
      
      <ScrollToTopButton />
    </PageWrapper>
  );
}

export default AboutMe;
