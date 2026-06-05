import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TetrisCard, ParallaxSection } from '../components/Layout/Animations';
import PageWrapper from '../components/Layout/PageWrapper';
import ScrollToTopButton from '../components/ScrollToTopButton';
import resume from '../assets/Tinh_s_Resume.pdf';

import inventoryImage from '../assets/inventory.jpg';
import neuralnetworkImage from '../assets/nnbench.jpg';
import chessImage from '../assets/chess.jpg';
import oopImage from '../assets/oop.jpg';
import aeryImage from '../assets/aery.jpg';
import horseImage from '../assets/horsegpt.jpg';
import tinvestImage from '../assets/tinvestbanner.jpg';
import dewImage from '../assets/dewbanner.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';

const projects = [
  { title: "DEW", description: "Distributed Experiment Workflow", year: "2026", image: dewImage, link: "/dew", size: "large" },
  { title: "HorseGPT", description: "AI Horse Racing Predictor", year: "2025", image: horseImage, link: "/horsegpt", size: "tall" },
  { title: "Tinvest", description: "Real-Time Stock Portfolio Tracker", year: "2025", image: tinvestImage, link: "/tinvest", size: "normal" },
  { title: "Aery", description: "Social Habit Tracking App", year: "2024", image: aeryImage, link: "/aery", size: "normal" },
  { title: "Neural Network Benchmark", description: "AI Architecture Research", year: "2024", image: neuralnetworkImage, link: "/benchmark", size: "normal" },
  { title: "4YourInventory", description: "Inventory Management System", year: "2024", image: inventoryImage, link: "/4yourinventory", size: "normal" },
  { title: "Chess AI", description: "Python Chess Engine", year: "2023", image: chessImage, link: "/chess", size: "normal" },
  { title: "Demon Slayer Sim", description: "Java OOP Simulation", year: "2023", image: oopImage, link: "/demonslayer", size: "normal" },
];

function Home() {
  return (
    <PageWrapper className="bg-slate-900 text-white">
      {/* Ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-purple-700 opacity-[0.06] blur-3xl"
          animate={{ scale: [1, 1.12, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600 opacity-[0.05] blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      {/* Hero */}
      <ParallaxSection className="min-h-screen !bg-transparent">
        <div className="relative z-10 text-center space-y-6 pt-24 md:pt-40">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 text-xs tracking-[0.35em] uppercase font-medium"
          >
            Portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight text-white"
          >
            Tinh-Phong Nguyen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-400 font-light"
          >
            Software Developer based in California
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center pt-2"
          >
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors shadow-lg text-sm tracking-wide"
            >
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6 pt-2 text-xl text-slate-500"
          >
            <a href="https://github.com/nguytinh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/tinh-phong-nguyen/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <i className="fab fa-linkedin" />
            </a>
            <a href="mailto:tinhphong04@gmail.com" className="hover:text-white transition-colors">
              <i className="fas fa-envelope" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col items-center gap-2 pt-12 pb-4"
          >
            <span className="text-xs font-medium tracking-[0.25em] uppercase text-slate-600">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="text-purple-500"
            >
              <i className="fas fa-chevron-down text-sm" />
            </motion.div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Projects grid */}
      <section id="projects" className="relative z-10 px-4 md:px-8 max-w-[1800px] mx-auto mt-8 pb-16 overflow-hidden">
        <div className="flex items-center gap-6 mb-8 px-2">
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase font-medium">Selected Work</p>
          <div className="flex-1 h-px bg-slate-800" />
        </div>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-3"
          style={{ gridAutoRows: '340px' }}
        >
          {projects.map((project, index) => {
            let colSpan = "lg:col-span-4";
            let rowSpan = "row-span-1";

            if (project.size === "large") { colSpan = "lg:col-span-8"; rowSpan = "row-span-2"; }
            else if (project.size === "tall") { colSpan = "lg:col-span-4"; rowSpan = "row-span-2"; }
            else if (project.size === "wide") { colSpan = "lg:col-span-8"; }
            else if (project.size === "normal") { colSpan = "lg:col-span-4"; }
            else if (project.size === "full") { colSpan = "lg:col-span-12"; }

            return (
              <TetrisCard
                key={index}
                index={index}
                className={`${colSpan} ${rowSpan} w-full h-full min-h-[280px]`}
              >
                <Link to={project.link} className="block group relative w-full h-full">
                  <div className="relative w-full h-full overflow-hidden bg-slate-800 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    <div className="w-full h-full">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-colors duration-500" />
                      <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                        <p className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-1">{project.year}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                        <div className="h-px w-0 bg-purple-500 mt-2 group-hover:w-10 transition-all duration-300" />
                        <p className="text-slate-300 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-1 group-hover:translate-y-0">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </TetrisCard>
            );
          })}
        </div>
      </section>

      <ScrollToTopButton />
    </PageWrapper>
  );
}

export default Home;
