import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from '../components/MayLike';

import homeTinvest from '../assets/Tinvest/hometinvest.png';
import chartingTinvest from '../assets/Tinvest/charting.png';
import aiModelTinvest from '../assets/Tinvest/aimodel.png';

function Tinvest() {
  return (
    <ProjectLayout
      title="Tinvest"
      description="Tinvest is a full-stack, real-time stock tracking application that enables users to monitor their investment portfolios with live market data. The application features an innovative physics-based visualization system, personalized watchlists, and seamless authentication through Google OAuth 2.0."
    >
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/nguytinh/tinvest"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg"
        >
          GitHub
        </a>
      </div>

      <SectionCard title="Overview & Live Demo Features" images={[homeTinvest]}>
        <ul className="list-disc list-inside space-y-2 text-gray-900 dark:text-slate-300">
          <li><strong>Real-time stock price tracking</strong> with automatic data refresh</li>
          <li><strong>Interactive 3D ball visualization</strong> using physics simulation</li>
          <li><strong>Personalized watchlists</strong> with favorites and custom stock additions</li>
          <li><strong>Google OAuth 2.0 authentication</strong> for secure, passwordless login</li>
          <li><strong>Responsive dark/light theme</strong> with modern UI/UX</li>
          <li><strong>Multiple view modes</strong>: Grid, List, and Physics-based Ball view</li>
          <li><strong>AI-powered stock analysis</strong> integration with custom ChatGPT model</li>
        </ul>
      </SectionCard>

      <SectionCard title="Technical Highlights: Frontend Architecture" images={[chartingTinvest]}>
        <ul className="list-disc list-inside space-y-2 text-gray-900 dark:text-slate-300">
          <li><strong>React 18</strong> with TypeScript for type-safe component development</li>
          <li><strong>Vite</strong> as the build tool for lightning-fast HMR and optimized production builds</li>
          <li><strong>React Router v6</strong> for client-side routing and navigation</li>
          <li><strong>Custom Context API</strong> implementation for theme management</li>
          <li><strong>Matter.js physics engine</strong> for interactive 3D ball visualization with gravity simulation</li>
          <li><strong>Canvas API</strong> for custom rendering with radial gradients and drop shadows</li>
          <li><strong>Recharts</strong> for data visualization and stock charts</li>
        </ul>
      </SectionCard>

      <SectionCard title="Technical Highlights: Backend Architecture">
        <ul className="list-disc list-inside space-y-2 text-gray-900 dark:text-slate-300">
          <li><strong>Node.js + Express</strong> RESTful API with TypeScript</li>
          <li><strong>MySQL</strong> database with connection pooling for optimized performance</li>
          <li><strong>JWT (JSON Web Tokens)</strong> for stateless authentication</li>
          <li><strong>bcryptjs</strong> for secure password hashing with salt rounds</li>
          <li><strong>Google OAuth 2.0</strong> server-side token verification</li>
          <li><strong>express-validator</strong> middleware for input sanitization and validation</li>
          <li><strong>CORS</strong> configuration for secure cross-origin requests</li>
        </ul>
      </SectionCard>

      <SectionCard title="Key Technical Achievements">
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-sky-400">1. Physics-Based Data Visualization</h4>
            <p>Implemented a unique stock visualization system using Matter.js physics engine where each stock is represented as a 3D sphere. Ball size correlates with percentage change magnitude, featuring real-time physics simulation with gravity, friction, and collision detection.</p>
          </div>
          <div>
            <h4 className="font-bold text-sky-400">2. Dual Authentication System</h4>
            <p>Built a flexible authentication system supporting traditional email/password with bcrypt hashing and Google OAuth 2.0 integration. Includes unified user model with nullable fields and account linking for existing users.</p>
          </div>
          <div>
            <h4 className="font-bold text-sky-400">3. Real-Time Data Pipeline</h4>
            <p>Optimized data fetching with parallel API requests using Promise.all, client-side caching with user-specific keys, graceful error handling, and rate limit detection.</p>
          </div>
           <div>
            <h4 className="font-bold text-sky-400">4. Database Architecture</h4>
            <p>Designed a scalable database schema with per-user watchlist isolation, favorite stocks functionality, efficient indexing strategy, and connection pooling for performance.</p>
          </div>
           <div>
            <h4 className="font-bold text-sky-400">5. Type-Safe Full-Stack Development</h4>
            <p>Maintained type safety across the entire stack using shared TypeScript interfaces, strict mode enabled, type-safe database queries with generics, and proper error typing.</p>
          </div>
        </div>
      </SectionCard>

      <SectionCard title="AI-Powered Stock Analysis" images={[aiModelTinvest]}>
        <p>
          Integrated a custom ChatGPT model to provide real-time, AI-driven analysis of stock performance and market trends. This feature allows users to get instant insights and summaries, enhancing their investment decision-making process.
        </p>
      </SectionCard>

       <SectionCard title="Performance Optimizations">
        <ul className="list-disc list-inside space-y-2 text-gray-900 dark:text-slate-300">
            <li><strong>Parallel data fetching</strong> reduces load time from 15+ seconds to &lt; 2 seconds</li>
            <li><strong>Connection pooling</strong> with 10 concurrent connections</li>
            <li><strong>Client-side caching</strong> eliminates redundant API calls</li>
            <li><strong>Lazy loading</strong> and code splitting potential</li>
            <li><strong>Optimized re-renders</strong> with proper React patterns</li>
            <li><strong>Canvas rendering</strong> for smooth 60 FPS physics simulation</li>
        </ul>
      </SectionCard>

      <MayLike currentProject="Tinvest" />
    </ProjectLayout>
  );
}

export default Tinvest;

