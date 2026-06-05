import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const ParallaxSection = ({ children, className = "", bgImage }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  
  return (
    <div ref={ref} className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 ${className}`}>
      {bgImage && (
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          <div 
            className="w-full h-[120%] bg-cover bg-center absolute -top-[10%]"
            style={{ backgroundImage: `url(${bgImage})` }} 
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      )}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        {children}
      </div>
    </div>
  );
};

export const FadeIn = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = "", staggerDelay = 0.1 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-100px" });
  
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: staggerDelay
            }
          }
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };
  
  export const StaggerItem = ({ children, className = "" }) => {
    return (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 50, scale: 0.9 },
          show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  export const ScrollReveal = ({ children, className = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    // 3D Rotation and movement effect
    const rotateX = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [15, 0, -15]);
    const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    // Ensure input and output ranges match length
    const inputRange = [0, 0.2, 0.8, 1];

    return (
      <motion.div
        ref={ref}
        style={{ 
          scale, 
          opacity, 
          rotateX, 
          y,
          perspective: 1000 
        }}
        className={`perspective-1000 ${className}`}
      >
        {children}
      </motion.div>
    );
  };

  export const TetrisCard = ({ children, index, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });
    const controls = useAnimation();

    const directions = [{ x: -280 }, { x: 280 }];
    let direction = index % 2 === 0 ? directions[0] : directions[1];
    if (index === 2) direction = directions[0];
    if (index === 3) direction = directions[0];
    if (index === 4) direction = directions[1];
    if (index === 5) direction = directions[0];
    if (index === 6) direction = directions[1];

    useEffect(() => {
      if (isInView) {
        controls.start({ x: 0, opacity: 1 });
      }
    }, [isInView, controls]);

    return (
      <motion.div
        ref={ref}
        initial={{ x: direction.x, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };
