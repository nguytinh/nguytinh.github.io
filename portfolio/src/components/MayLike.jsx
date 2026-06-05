import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import chessImage from '../assets/Chess/chess1.jpg';
import oopImage from '../assets/OOP/custom.png';
import inventoryImage from '../assets/4yb/lockedpage.png';
import nnIMAGE from '../assets/nnbench.jpg';
import aeryImage from '../assets/aery.jpg';
import horseImage from '../assets/horsegpt.jpg';
import tinvestImage from '../assets/tinvestbanner.jpg';
import dewImage from '../assets/dewbanner.jpg';

function MayLike({ currentProject }) {
  const projects = [
    { title: 'Distributed Experiment Workflows', year: '2026', image: dewImage, link: '/dew' },
    { title: 'Tinvest', year: '2025', image: tinvestImage, link: '/tinvest' },
    { title: 'Chess AI - Sigma Phi Delta', year: '2023', image: chessImage, link: '/chess' },
    { title: 'Demon Slayer - OOP Simulation', year: '2023', image: oopImage, link: '/demonslayer' },
    { title: '4YourInventory', year: '2024', image: inventoryImage, link: '/4yourinventory' },
    { title: 'Neural Network Benchmark', year: '2024', image: nnIMAGE, link: '/benchmark' },
    { title: 'Aery', year: '2024', image: aeryImage, link: '/aery' },
    { title: 'HorseGPT', year: '2025', image: horseImage, link: '/horsegpt' },
  ];

  const filteredProjects = projects
    .filter((p) => p.title !== currentProject)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <div className="pt-20 border-t border-slate-800 mt-20">
      <h3 className="text-2xl font-bold mb-8 text-white">You may also like:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Link
            key={index}
            to={project.link}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group block"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-slate-700 transition-colors group-hover:border-purple-500/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors line-clamp-2">
                  {project.title}
                </h4>
                <p className="text-slate-400 text-sm mt-1">{project.year}</p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MayLike;
