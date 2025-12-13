import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from '../components/MayLike';

import Chess1 from '../assets/Chess/chess1.jpg';
import Chess2 from '../assets/Chess/chess2.jpg';

function Chessai() {
  return (
    <ProjectLayout
      title="Advanced AI Chess Robot"
      description="Designed a sophisticated Artificial Intelligence chess robot with Sigma Phi Delta Professional Engineering Fraternity. This project required using complex algorithms and teaching AI systems to play games at a strategic level."
    >
      <div className="flex justify-center">
        <a
          href="https://github.com/keonroohparvar/AI_ChessEngine"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg"
        >
          GitHub
        </a>
      </div>

      <SectionCard 
        title="Innovative AI Implementation" 
        images={[Chess1, Chess2]}
        imageFit="cover"
      >
        <p>
          The AI chess robot was created using highly sophisticated methods such as Alpha Beta Pruning algorithms in Python that help to navigate through the search tree faster in relation to the time needed to make a decision during the game play. The AI was trained on TensorFlow for a large dataset of Lichess games, breaking ties in CNN and improving the AI’s accuracy. The AI currently is leveled with a rating of around 1500.
        </p>
      </SectionCard>

      <MayLike currentProject="Chess AI - Sigma Phi Delta" />
    </ProjectLayout>
  );
}

export default Chessai;
