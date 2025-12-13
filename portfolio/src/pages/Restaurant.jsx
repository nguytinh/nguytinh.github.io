import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from '../components/MayLike';

import Banhmi from '../assets/Restaurant/banhmi.jpeg';
import Teazer from '../assets/Restaurant/teazer.png';
import Git from '../assets/Restaurant/git.webp';

function Restaurant() {
  return (
    <ProjectLayout
      title="Adaptive Multi-Restaurant Web Application"
      description="Created an integrated web application for multiple restaurants with the goal of stimulating business and improving the customers’ experience in three different restaurants. This particular project has effectively raised the general web traffic by 35%; proving my capacity in creating effective, user-friendly solutions."
    >
      <div className="flex justify-center">
        <a
          href="https://github.com/lac-phong/teazerbobasnacks"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg"
        >
          GitHub
        </a>
      </div>

      <SectionCard 
        title="Innovative Front-End Engineering" 
        images={[Banhmi, Teazer]}
        imageFit="cover"
      >
        <p>
          I designed responsive, frontend web applications for three restaurants by molding their particular needs into one dynamic platform. I utilized React's component-based architecture to my advantage, reusing UI components in a modular fashion to drive code maintainability and save an estimated two work weeks in development. This project was a good example of advanced web development techniques being applied in creating a user-friendly and high-performance interface.
        </p>
      </SectionCard>

      <SectionCard 
        title="Effective Collaboration and Version Control" 
        images={[Git]}
      >
        <p>
          Demonstrated the highest teamwork and version control with GitHub for collaborative development workflows. Contributed to their codebase in terms of in depth code reviews; this is to ensure production-level code base delivery. The project further has emphasized the ability to collaborate on software projects seamlessly and to maintain a robust, scalable codebase.
        </p>
      </SectionCard>

      <MayLike currentProject="Adaptive Multi-Restaurant Web Application"/>
    </ProjectLayout>
  );
}

export default Restaurant;
