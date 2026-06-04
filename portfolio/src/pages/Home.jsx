import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TetrisCard, ParallaxSection } from '../components/Layout/Animations';
import PageWrapper from '../components/Layout/PageWrapper';
import resume from '../assets/Tinh_s_Resume.pdf';

// Images
import inventoryImage from '../assets/inventory.jpg';
import neuralnetworkImage from '../assets/nnbench.jpg';
import chessImage from '../assets/chess.jpg';
import oopImage from '../assets/oop.jpg';
import aeryImage from '../assets/aery.jpg';
import horseImage from '../assets/horsegpt.jpg';

import tinvestImage from '../assets/tinvestbanner.jpg';
import dewImage from '../assets/dewbanner.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  const projects = [
    // Row 1-2: DEW (8 cols, 2 rows) + HorseGPT (4 cols, 2 rows) = 12
    {
      title: "DEW",
      description: "Distributed Experiment Workflow",
      year: "2026",
      image: dewImage,
      link: "/dew",
      size: "large",
    },
    {
      title: "HorseGPT",
      description: "AI Horse Racing Predictor",
      year: "2025",
      image: horseImage,
      link: "/horsegpt",
      size: "tall",
    },
    // Row 3: Tinvest (8 cols) + Aery (4 cols) = 12
    {
      title: "Tinvest",
      description: "Real-Time Stock Portfolio Tracker",
      year: "2025",
      image: tinvestImage,
      link: "/tinvest",
      size: "normal",
    },
    {
      title: "Aery",
      description: "Social Habit Tracking App",
      year: "2024",
      image: aeryImage,
      link: "/aery",
      size: "normal",
    },
    // Row 4: Neural (4) + Inventory (4) + Chess (4) = 12
    {
      title: "Neural Network Benchmark",
      description: "AI Architecture Research",
      year: "2024",
      image: neuralnetworkImage,
      link: "/benchmark",
      size: "normal",
    },
    {
      title: "4YourInventory",
      description: "Inventory Management System",
      year: "2024",
      image: inventoryImage,
      link: "/4yourinventory",
      size: "normal",
    },
    {
      title: "Chess AI",
      description: "Python Chess Engine",
      year: "2023",
      image: chessImage,
      link: "/chess",
      size: "normal",
    },
    {
      title: "Demon Slayer Sim",
      description: "Java OOP Simulation",
      year: "2023",
      image: oopImage,
      link: "/demonslayer",
      size: "normal",
    },
  ];

  return (
    <PageWrapper className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Hero Section */}
          <ParallaxSection className="min-h-screen">
            <div className="text-center space-y-6 pt-24 md:pt-40">
              <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-black dark:text-white"
          >
            Tinh-Phong Nguyen
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 font-light"
          >
            Software Developer based in California
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-6 pt-4"
          >
            <a 
              href={resume} 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg"
            >
              Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex justify-center gap-6 pt-4 text-2xl text-gray-600 dark:text-gray-400"
          >
            <a href="https://github.com/nguytinh" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tinh-phong-nguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:tinhphong04@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
              <i className="fas fa-envelope"></i>
            </a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col items-center gap-2 pt-16 pb-4"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-gray-400 dark:text-gray-500">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-purple-500"
            >
              <i className="fas fa-chevron-down text-xl"></i>
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Projects Section - Tetris/Masonry Grid */}
      <section className="pb-32 px-4 md:px-8 max-w-[1800px] mx-auto mt-32 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-4 auto-rows-dense">
          {projects.map((project, index) => {
            // Sizing Logic
            let colSpan = "lg:col-span-4"; // Default normal
            let rowSpan = "row-span-1"; // Default height

            if (project.size === "large") {
              colSpan = "md:col-span-4 lg:col-span-8";
              rowSpan = "row-span-2";
            } else if (project.size === "tall") {
              colSpan = "md:col-span-2 lg:col-span-4";
              rowSpan = "row-span-2";
            } else if (project.size === "wide") {
              colSpan = "md:col-span-4 lg:col-span-8";
              rowSpan = "row-span-1";
            } else if (project.size === "normal") {
              colSpan = "md:col-span-2 lg:col-span-4";
              rowSpan = "row-span-1";
            } else if (project.size === "full") {
              colSpan = "md:col-span-4 lg:col-span-12";
              rowSpan = "row-span-1";
            }

            return (
              <TetrisCard 
                key={index} 
                index={index} 
                className={`${colSpan} ${rowSpan} w-full h-full min-h-[300px] md:min-h-[auto]`}
              >
                <Link to={project.link} className="block group relative w-full h-full">
                  <div className="relative w-full h-full overflow-hidden bg-gray-100 dark:bg-neutral-900 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    
                    {/* Image Container - Fill the cell completely */}
                    <div className="w-full h-full">
                      <motion.img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      
                      {/* Dark Gradient Overlay - Always visible for text readability, clears on hover slightly */}
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                      
                      {/* Content - Bottom Aligned */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                        <motion.div 
                          initial={{ y: 10, opacity: 0.9 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-1">
                            {project.year}
                          </p>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight shadow-black drop-shadow-md">
                            {project.title}
                          </h3>
                          <div className="h-1 w-12 bg-purple-500 mb-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                          <p className="text-gray-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                            {project.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </TetrisCard>
            );
          })}
        </div>
      </section>

      {/* Footer / Scroll Top */}
      <div className="py-10 text-center">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <i className="fas fa-angle-double-up fa-xl"></i>
        </button>
      </div>
    </PageWrapper>
  );
}

export default Home;
