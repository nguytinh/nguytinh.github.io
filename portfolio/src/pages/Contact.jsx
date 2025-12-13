import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { ParallaxSection, FadeIn } from '../components/Layout/Animations';
import PageWrapper from '../components/Layout/PageWrapper';

function Contact() {
  const [state, handleSubmit] = useForm("xovgyzkw");

  if (state.succeeded) {
    return (
      <PageWrapper className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
        <ParallaxSection>
          <FadeIn className="w-full max-w-lg mx-auto bg-gray-50 dark:bg-neutral-900 p-8 shadow-2xl border border-gray-200 dark:border-neutral-800 text-center transition-colors duration-300">
            <h2 className="text-3xl font-bold text-sky-500 mb-4">Message Sent!</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Thanks for reaching out. I'll get back to you as soon as possible.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.reload()}
              className="mt-8 px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              Send Another
            </motion.button>
          </FadeIn>
        </ParallaxSection>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className="bg-white text-black dark:bg-black dark:text-white min-h-screen">
      <ParallaxSection>
        <FadeIn className="w-full max-w-lg mx-auto bg-gray-50 dark:bg-neutral-900 p-8 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">
          <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">Get in Touch</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-black dark:text-white placeholder-gray-400 transition-all outline-none"
                placeholder="Your Name"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 dark:text-red-400 text-sm mt-1" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-black dark:text-white placeholder-gray-400 transition-all outline-none"
                placeholder="you@example.com"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 dark:text-red-400 text-sm mt-1" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-black dark:text-white placeholder-gray-400 transition-all outline-none resize-none"
                placeholder="How can I help you?"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 dark:text-red-400 text-sm mt-1" />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-lg shadow-lg transition-colors flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={state.submitting}
            >
              {state.submitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                'Send Message'
              )}
            </motion.button>
            
            {state.errors && state.errors.length > 0 && (
               <p className="text-red-500 dark:text-red-400 text-center text-sm mt-2">Something went wrong. Please try again.</p>
            )}
          </form>
        </FadeIn>
      </ParallaxSection>
    </PageWrapper>
  );
}

export default Contact;
