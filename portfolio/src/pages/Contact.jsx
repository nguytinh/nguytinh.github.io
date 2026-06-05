import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/Layout/PageWrapper';
import '@fortawesome/fontawesome-free/css/all.min.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
};

const contactLinks = [
  {
    icon: 'fas fa-envelope',
    label: 'tinhphong04@gmail.com',
    href: 'mailto:tinhphong04@gmail.com',
  },
  {
    icon: 'fab fa-github',
    label: 'github.com/nguytinh',
    href: 'https://github.com/nguytinh',
  },
  {
    icon: 'fab fa-linkedin',
    label: 'linkedin.com/in/tinh-phong-nguyen',
    href: 'https://www.linkedin.com/in/tinh-phong-nguyen/',
  },
];

function FloatingInput({ id, name, type = 'text', label, placeholder, focused, onFocus, onBlur, errors, as: Tag = 'input', rows }) {
  const isFocused = focused === id;

  return (
    <motion.div variants={itemVariants} className="relative group">
      <label
        htmlFor={id}
        className="block text-xs tracking-[0.25em] uppercase mb-3 transition-colors duration-300"
        style={{ color: isFocused ? 'rgb(192, 132, 252)' : 'rgb(100, 116, 139)' }}
      >
        {label}
      </label>

      <div className="relative">
        <Tag
          id={id}
          name={name}
          type={type}
          required
          rows={rows}
          onFocus={() => onFocus(id)}
          onBlur={onBlur}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none text-base transition-colors duration-300 resize-none pb-3"
          style={{
            borderBottom: `1px solid ${isFocused ? 'rgb(168, 85, 247)' : 'rgb(51, 65, 85)'}`,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-px bg-purple-500"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      <ValidationError
        prefix={label}
        field={name}
        errors={errors}
        className="text-red-400 text-xs mt-2"
      />
    </motion.div>
  );
}

function Contact() {
  const [state, handleSubmit] = useForm('xovgyzkw');
  const [focused, setFocused] = useState(null);

  if (state.succeeded) {
    return (
      <PageWrapper className="bg-slate-900 text-white min-h-screen">
        <div className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 180, delay: 0.2 }}
              className="w-20 h-20 rounded-full border border-purple-500 bg-purple-500/10 flex items-center justify-center mx-auto"
            >
              <i className="fas fa-check text-purple-400 text-xl" />
            </motion.div>
            <div className="space-y-3">
              <h2 className="text-4xl font-light text-white">Message sent.</h2>
              <p className="text-slate-400">I'll get back to you as soon as possible.</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-purple-400 hover:text-purple-300 text-sm tracking-widest uppercase transition-colors underline underline-offset-4"
            >
              Send another
            </button>
          </motion.div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="bg-slate-900 text-white min-h-screen">
      {/* Ambient background glows */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-[0.07] blur-3xl"
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
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: info panel ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <div className="space-y-5">
              <motion.p
                variants={itemVariants}
                className="text-purple-400 text-xs tracking-[0.35em] uppercase font-medium"
              >
                Contact
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl font-light text-white leading-snug"
              >
                Let's<br />
                <span className="text-purple-400 italic">connect.</span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-slate-400 text-base leading-relaxed max-w-sm">
                Whether it's a project, a question, or just a hello — I'm always happy to hear from you.
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="space-y-5">
              {contactLinks.map(({ icon, label, href }) => (
                <motion.a
                  key={href}
                  variants={itemVariants}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="flex items-center gap-4 text-slate-400 hover:text-purple-400 transition-colors duration-300 group"
                >
                  <div className="w-9 h-9 rounded-full border border-slate-700 group-hover:border-purple-500 group-hover:bg-purple-500/10 flex items-center justify-center transition-all duration-300 flex-shrink-0">
                    <i className={`${icon} text-xs`} />
                  </div>
                  <span className="text-sm">{label}</span>
                </motion.a>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="w-12 h-px bg-purple-500/40" />
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <FloatingInput
                id="name"
                name="name"
                label="Name"
                placeholder="Your name"
                focused={focused}
                onFocus={setFocused}
                onBlur={() => setFocused(null)}
                errors={state.errors}
              />
              <FloatingInput
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="your@email.com"
                focused={focused}
                onFocus={setFocused}
                onBlur={() => setFocused(null)}
                errors={state.errors}
              />
              <FloatingInput
                id="message"
                name="message"
                as="textarea"
                rows={5}
                label="Message"
                placeholder="Tell me what's on your mind..."
                focused={focused}
                onFocus={setFocused}
                onBlur={() => setFocused(null)}
                errors={state.errors}
              />

              <motion.div variants={itemVariants}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={state.submitting}
                  className="group relative w-full py-4 rounded-full font-medium text-sm tracking-[0.2em] uppercase text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'linear-gradient(135deg, rgb(147, 51, 234) 0%, rgb(99, 102, 241) 100%)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgb(168, 85, 247) 0%, rgb(129, 140, 248) 100%)',
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {state.submitting ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                </motion.button>
              </motion.div>

              {state.errors && state.errors.length > 0 && (
                <p className="text-red-400 text-center text-sm">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </PageWrapper>
  );
}

export default Contact;
