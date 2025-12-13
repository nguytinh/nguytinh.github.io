import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import chessImage from '../assets/Chess/chess1.jpg';
import restaurantImage from '../assets/Restaurant/banhmi.jpeg';
import oopImage from '../assets/OOP/custom.png';
import inventoryImage from '../assets/4yb/lockedpage.png';
import aimImage from '../assets/aim.jpg';
import nnIMAGE from '../assets/nnbench.jpg';
import aeryImage from '../assets/aery.jpg';
import horseImage from '../assets/horsegpt.jpg';
import tinvestImage from '../assets/tinvestbanner.jpg'; 

function MayLike({ currentProject }) {
  const projects = [
    { title: 'Tinvest', year: '2025', image: tinvestImage, link: '/tinvest' },
    { title: 'Adaptive Multi-Restaurant Web Application', year: '2024', image: restaurantImage, link: '/restaurant' },
    { title: 'Chess AI - Sigma Phi Delta', year: '2023', image: chessImage, link: '/chess' },
    { title: 'Demon Slayer - OOP Simulation', year: '2023', image: oopImage, link: '/demonslayer' },
    { title: '4YourInventory', year: '2024', image: inventoryImage, link: '/4yourinventory' },
    { title: 'Aim Trainer', year: '2024', image: aimImage, link: '/aim' },
    { title: 'Neural Network Benchmark', year: '2024', image: nnIMAGE, link: '/benchmark' },
    { title: 'Aery', year: '2024', image: aeryImage, link: '/aery' },
    { title: 'HorseGPT', year: '2025', image: horseImage, link: '/horsegpt' }
  ];

  // Filter and Randomize
  const filteredProjects = projects
    .filter(project => project.title !== currentProject)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const handleCardClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-20 border-t border-gray-200 dark:border-neutral-800 mt-20 transition-colors duration-300">
      <h3 className="text-2xl font-bold mb-8 text-black dark:text-white">You may also like:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Link 
            key={index} 
            to={project.link} 
            onClick={handleCardClick}
            className="group block"
          >
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-neutral-800 transition-colors group-hover:border-sky-500/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 duration-300">
                   {/* Overlay content if needed */}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-black dark:text-white group-hover:text-sky-500 transition-colors line-clamp-2">{project.title}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{project.year}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MayLike;
