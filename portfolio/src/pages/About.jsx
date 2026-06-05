import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import resume from '../assets/Tinh_s_Resume.pdf';
import profileImage from '../assets/profile.JPG';
import '@fortawesome/fontawesome-free/css/all.min.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const socials = [
  { icon: 'fab fa-github', href: 'https://github.com/nguytinh', label: 'GitHub' },
  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/tinh-phong-nguyen/', label: 'LinkedIn' },
  { icon: 'fas fa-envelope', href: 'mailto:tinhphong04@gmail.com', label: 'Email' },
];

function AboutMe() {
  return (
    <PageWrapper className="bg-slate-900 text-white min-h-screen">
      {/* Ambient glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-[0.08] blur-3xl"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600 opacity-[0.06] blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, -15, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

          {/* ── Left: text block ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10 lg:pr-8"
          >
            <div className="space-y-3">
              <motion.p variants={itemVariants} className="text-purple-400 text-xs tracking-[0.35em] uppercase font-medium">
                About
              </motion.p>
              <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-white">
                Tinh-Phong
              </motion.h1>
              <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none text-purple-400 italic">
                Nguyen.
              </motion.h1>
            </div>

            <motion.p variants={itemVariants} className="text-purple-300/80 text-base tracking-widest uppercase font-light">
              Computer Scientist · Software Engineer
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-4 text-slate-300 text-lg leading-relaxed max-w-lg">
              <p>
                Cal Poly SLO CS graduate and Software Engineer at USC-ISI. I really enjoy playing basketball, exercising, occasional video games, and just meeting new people.
              </p>
              <p>
                I want to move through life with open hands, remembering the people who helped me become who I am. I carry a lot of gratitude for the love, support, and chances I’ve been given, and I know not everyone gets the same. As I grow in my life and career, I hope to turn that gratitude into action. Opening doors where I can, sharing what I have, and helping others find paths that once felt out of reach.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-200 transition-colors shadow-lg text-sm tracking-wide"
              >
                Resume
              </a>
              <Link
                to="/contact"
                className="px-7 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:border-purple-500 hover:text-white transition-colors text-sm tracking-wide"
              >
                Get in touch
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-5 pt-2">
              {socials.map(({ icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-slate-700 hover:border-purple-500 hover:bg-purple-500/10 flex items-center justify-center text-slate-400 hover:text-purple-400 transition-all duration-300"
                >
                  <i className={`${icon} text-sm`} />
                </a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link
                to="/more"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-slate-500 hover:text-purple-400 transition-colors text-sm group"
              >
                <span className="tracking-widest uppercase text-xs">See my photos</span>
                <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind photo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-purple-600 opacity-20 blur-3xl" />
            </div>

            <div className="relative -mt-28 lg:-mt-40">
              {/* Decorative offset border */}
              <div className="absolute -top-3 -right-3 w-full h-full border border-purple-500/30" />
              <img
                src={profileImage}
                alt="Tinh-Phong Nguyen"
                className="relative w-72 md:w-96 lg:w-[420px] aspect-[3/4] object-cover shadow-2xl"
              />
              {/* Subtle gradient at bottom of photo */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>

    </PageWrapper>
  );
}

export default AboutMe;
