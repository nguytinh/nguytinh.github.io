import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from '../components/MayLike';

import Aim1 from '../assets/Aim/aim1.png';
import Aim2 from '../assets/Aim/aim2.png';
import Aim3 from '../assets/Aim/aim3.png';

function Aim() {
  return (
    <ProjectLayout
      title="Aim Training Game - Web App"
      description="Programmed using Python, Flask, and Docker, this aim training game offers an engaging platform for users to improve their targeting skills. The project leverages Flask to create a RESTful API, facilitating smooth communication between the front-end and back-end. With Docker, I ensured a consistent development environment, simplifying deployment and scalability."
    >
      <div className="flex justify-center gap-4">
        <a
          href="https://github.com/nguytinh/aim-trainer"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg"
        >
          GitHub
        </a>
        <a
          href="https://aim-trainer-nk0b.onrender.com/"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-sky-600 text-white rounded-full font-semibold hover:bg-sky-500 transition-colors shadow-lg"
        >
          Play Here!
        </a>
      </div>

      <SectionCard 
        title="Game Functionality and Benefits" 
        images={[Aim2, Aim1]}
      >
        <p>
          The aim training game serves as an effective tool for users to improve their aiming precision and hand-eye coordination. By tracking user performance and providing instant feedback, players can see their progress and identify areas for improvement. The game not only offers a fun way to practice but also emphasizes the importance of focus and quick reflexes in aim training.
        </p>
      </SectionCard>

      <SectionCard 
        title="Technical Skills and Learning Outcomes" 
        images={[Aim3]}
      >
        <p>
          Throughout the development, I honed my skills in:
        </p>
        <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>Backend Development:</strong> Utilizing Flask to build a robust server-side architecture.</li>
            <li><strong>Frontend Development:</strong> Utilizing JavaScript and HTML/CSS to create a clean and organized UI for the user.</li>
            <li><strong>RESTful API Design:</strong> Creating endpoints for user interactions and game state management.</li>
            <li><strong>Containerization:</strong> Using Docker to encapsulate the application and its dependencies for easier deployment.</li>
        </ul>
        <p className="mt-4">
          This project taught me valuable lessons in API development, game mechanics, and containerization. I gained hands-on experience in managing stateful applications and learned how to effectively integrate different components to create a seamless user experience.
        </p>
      </SectionCard>

      <MayLike currentProject="Aim Trainer" />
    </ProjectLayout>
  );
}

export default Aim;
