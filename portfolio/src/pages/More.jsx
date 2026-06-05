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
import img14 from '../assets/More/img14.jpg';
import img15 from '../assets/More/img15.JPG';
import img16 from '../assets/More/img16.jpg';
import img17 from '../assets/More/img17.JPG';
import img18 from '../assets/More/img18.JPG';
import img19 from '../assets/More/img19.JPG';
import img20 from '../assets/More/img20.JPG';
import img21 from '../assets/More/img21.JPG';
import img22 from '../assets/More/img22.JPG';
import img23 from '../assets/More/img23.JPG';
import img24 from '../assets/More/img24.JPG';
import img25 from '../assets/More/img25.JPG';
import img26 from '../assets/More/img26.JPG';
import img27 from '../assets/More/img27.JPG';
import img28 from '../assets/More/img28.JPG';
import img29 from '../assets/More/img29.JPG';
import img30 from '../assets/More/img30.JPG';
import img31 from '../assets/More/img31.JPG';
import img32 from '../assets/More/img32.JPG';
import img33 from '../assets/More/img33.JPG';
import img34 from '../assets/More/img34.JPG';
import img35 from '../assets/More/img35.JPG';
import img36 from '../assets/More/img36.JPG';
import img37 from '../assets/More/img37.JPG';

import '@fortawesome/fontawesome-free/css/all.min.css';

const images = [
  img7, img8, img1, img2, img3, img4,
  img5, img6, img11, img12, img9, img10, img13,
  img14, img15, img16, img17, img18, img19,
  img20, img21, img22, img23, img24, img25,
  img26, img27, img28, img29, img30, img31,
  img32, img33, img34, img35, img36, img37,
];

// Stagger each image tile
const tileVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.04, ease: 'easeOut' },
  }),
};

// Individual tile — blurry until the browser finishes decoding the image
function PhotoTile({ src, index, colSpan, onClick }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.div
      custom={index}
      variants={tileVariants}
      initial="hidden"
      animate="visible"
      className={`cursor-zoom-in group relative overflow-hidden h-64 ${colSpan}`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={`Photo ${index + 1}`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.04] ${
          loaded ? 'blur-0 brightness-100' : 'blur-md brightness-75 scale-105'
        }`}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <i className="fas fa-expand-alt text-white text-sm" />
        </div>
      </div>
    </motion.div>
  );
}

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

        {/* Photo grid — uniform cell heights keep all columns aligned */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, i) => {
            // If the last row has only 1 image, span all 3 columns so there's no dead space
            const remainder = images.length % 3;
            const isLoneLastItem = remainder === 1 && i === images.length - 1;
            const colSpan = isLoneLastItem ? 'lg:col-span-3' : '';
            return (
              <PhotoTile
                key={i}
                src={src}
                index={i}
                colSpan={colSpan}
                onClick={() => openAt(i)}
              />
            );
          })}
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
