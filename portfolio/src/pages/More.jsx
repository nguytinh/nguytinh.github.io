import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

import '@fortawesome/fontawesome-free/css/all.min.css';

const images = [
  img7, img8, img1, img2, img3, img4,
  img5, img6, img11, img12, img9, img10, img13,
];

// Stagger each image tile
const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: 'easeOut' },
  }),
};

function Lightbox({ index, onClose, onPrev, onNext, total }) {
  return (
    <motion.div
      key="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Close"
      >
        <i className="fas fa-times" />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-slate-400 text-sm tracking-widest">
        {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </div>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Previous"
      >
        <i className="fas fa-chevron-left" />
      </button>

      {/* Image */}
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 max-w-[85vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`Photo ${index + 1}`}
          className="max-w-full max-h-[85vh] w-auto h-auto object-contain shadow-2xl"
          draggable={false}
        />
      </motion.div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Next"
      >
        <i className="fas fa-chevron-right" />
      </button>

      {/* Bottom thumbnail strip */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2 overflow-x-auto max-w-[90vw] px-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); onClose(); setTimeout(() => {}, 0); }}
            className={`flex-shrink-0 w-10 h-10 overflow-hidden transition-all duration-200 ${
              i === index
                ? 'ring-2 ring-purple-400 opacity-100 scale-110'
                : 'opacity-40 hover:opacity-70'
            }`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

function More() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const total = images.length;

  const openAt = (i) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setLightboxIndex((i) => (i + 1) % total), [total]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, prev, next, close]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  return (
    <PageWrapper className="bg-slate-900 text-white min-h-screen">
      {/* Ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-purple-700 opacity-[0.07] blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 -left-20 w-[350px] h-[350px] rounded-full bg-indigo-600 opacity-[0.06] blur-3xl"
          animate={{ scale: [1, 1.12, 1], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-purple-400 text-xs tracking-[0.35em] uppercase font-medium mb-4"
          >
            Gallery
          </motion.p>
          <div className="flex items-end justify-between gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              My Photos
            </motion.h1>
            <motion.a
              href="https://www.instagram.com/tinhph0ng/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors text-sm mb-2"
            >
              <i className="fab fa-instagram text-lg" />
              <span className="hidden sm:inline tracking-wide">@tinhph0ng</span>
            </motion.a>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="mt-6 h-px bg-slate-800 origin-left"
          />
        </div>

        {/* Masonry grid — click to open lightbox */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {images.map((src, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={tileVariants}
              initial="hidden"
              animate="visible"
              className="break-inside-avoid cursor-zoom-in group relative overflow-hidden"
              onClick={() => openAt(i)}
            >
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <i className="fas fa-expand-alt text-white text-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={close}
            onPrev={prev}
            onNext={next}
            total={total}
          />
        )}
      </AnimatePresence>

      <ScrollToTopButton />
    </PageWrapper>
  );
}

export default More;
