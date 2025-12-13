import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from "../components/MayLike";

import img1 from '../assets/Aery/img1.png';
import img2 from '../assets/Aery/img2.png';
import img3 from '../assets/Aery/img3.png';
import img4 from '../assets/Aery/img4.png';
import img5 from '../assets/Aery/img5.png';
import img6 from '../assets/Aery/img6.png';

function Aery() {
  return (
    <ProjectLayout
      title="Aery"
      description="A social media app that helps create a collaborative space for users to keep streaks of tasks/habits with their friends. The app will help motivate users to do all sorts of things such as shower, go to the gym, study, etc. It combines the popular idea of keeping a 'Streak' in other popular social media apps such as Snapchat and BeReal."
    >
      <div className="flex justify-center">
        <a
          href="https://github.com/nguytinh/Aery"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg"
        >
          GitHub Repository
        </a>
      </div>

      <SectionCard 
        title="Landing Page" 
        images={[img1]}
      >
        <p>
          We built a robust authentication system from scratch for the web application, leveraging Zod for input validation, NextAuth.js for session management, and custom middleware to enhance security. This implementation ensured seamless user login and secure access control throughout the application. Additionally, Chakra UI was used for the frontend to create nice and simple designs as well as improve production time.
        </p>
      </SectionCard>

      <SectionCard 
        title="Main feed and Friends page" 
        images={[img2, img3]}
      >
        <p>
          We implemented the frontend and backend of our social media app using Next.js and Prisma, building a full-stack application tailored to help users maintain streaks of tasks and habits with their friends. Next.js powered the dynamic and responsive user interface, enabling features like task tracking and friend collaboration, while Prisma provided an efficient ORM for managing user data and streak records, ensuring smooth data integration and robust backend functionality.
        </p>
      </SectionCard>

      <SectionCard 
        title="Leaderboard and Profile page" 
        images={[img4, img5]}
      >
        <p>
          For the leaderboard and profile pages, we used Next.js to create dynamic and responsive user interfaces that showcase user rankings and personal streak statistics. Prisma was utilized to manage and query the database, ensuring accurate and efficient retrieval of leaderboard data and user profiles. This approach allowed us to seamlessly integrate features like real-time updates to rankings and personalized profile details, enhancing user engagement and interaction within the app.
        </p>
      </SectionCard>

      <SectionCard 
        title="Docker" 
        images={[img6]}
      >
        <p>
          Every component of the project is fully dockerized, allowing the app to be easily deployed on any environment with Docker and Docker Compose installed. This setup ensures the portability and lightweight operation of the application, making it simple to run and scale across various systems. By containerizing the frontend, backend, and database, we streamlined the development and deployment process, ensuring consistency and efficiency in every environment.
        </p>
      </SectionCard>

      <MayLike currentProject="Aery" />
    </ProjectLayout>
  );
}

export default Aery;
