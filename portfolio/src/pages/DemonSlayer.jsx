import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from "../components/MayLike";

import Simulation from '../assets/OOP/sim.png';
import UML from '../assets/OOP/uml.png';
import CustomIMG from '../assets/OOP/custom.png';

function DemonSlayer() {
  return (
    <ProjectLayout
      title="Demon Slayer Simulation"
      description="The Demon Slayer Simulation project is a program with many complicated situations to realistically stimulate the situation from the Demon Slayer Anime, including real scenes, which goes fully fleshed in an object-oriented program modeling."
    >
      <SectionCard 
        title="Refactoring with SOLID Principles" 
        images={[Simulation, UML]}
      >
        <p>
          This project involved the refactoring of a very big, badly built program. The refactored program used sound principles of OOP in restructuring the codebase from not that well-structured and maintainable, into one that was well-structured and maintainable. This refactored simulation engine is single responsibility-obedient, open-closed, utilized SOLID OOP principles, worked with modular components, extensible, and easy to maintain. This really improved performance and scalability a lot, making it a robust platform on which one could simulate every interaction that is going on in the Demon Slayer world.
        </p>
      </SectionCard>

      <SectionCard 
        title="Custom Graphics, Entities, and Functionality" 
        images={[CustomIMG]}
      >
        <p>
          The last part of the project involves the development of custom graphics and entities, including other custom functionalities, in an effort to enhance user experience. Custom elements added visual appeal to this simulation, even while providing an immersive and interactive experience where users could immerse themselves with scenarios and characters from the Demon Slayer universe.
        </p>
      </SectionCard>

      <MayLike currentProject="Demon Slayer - Object Oriented Programming Simulation" />
    </ProjectLayout>
  );
}

export default DemonSlayer;
