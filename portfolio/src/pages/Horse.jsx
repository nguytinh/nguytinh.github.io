import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from "../components/MayLike";

// Import images
import img1 from '../assets/HorseGPT/img1.jpg';
import img2 from '../assets/HorseGPT/img2.png';
import img3 from '../assets/HorseGPT/img3.jpeg';
import img4 from '../assets/HorseGPT/img4.png';
import img5 from '../assets/HorseGPT/img5.png';
import img6 from '../assets/HorseGPT/img6.jpg';
import img7 from '../assets/HorseGPT/img7.jpg';

function HorseGPT() {
  return (
    <ProjectLayout
      title="HorseGPT"
      description="HorseGPT is an AI Horse Race predictor and generative AI that takes in statistics from different horses based on previous races, and predicts the outcome and winner of a certain race."
    >
      <SectionCard 
        title="Motivation" 
        images={[img1]}
      >
        <p>
          This project uses AI to bring more accurate, data-driven analysis to horse racing, moving beyond basic stats and gut instinct. By training a model on horse racing data, we aim to improve predictions, uncover deeper performance patterns, and make advanced analytics more accessible. It also highlights how open-source AI like Llama 2 and Gemma 3 can be tailored for niche domains using university computing resources.
        </p>
      </SectionCard>

      <SectionCard 
        title="Tools and Tech Used" 
        images={[img2, img3]}
      >
        <p>
          We needed a Local LLM Chatbot Interface (Gemma 3, Llama 2, Phi 3 mini), Python 3.10+, Node.js+npm, llama-cpp-python, React, Axios, Express. We also ran all of the LLMs on the Cal Poly GPU Unix Servers for maximum efficiency rather than our own personal computers due to hardware limitations.
        </p>
      </SectionCard>

      <SectionCard 
        title="Evaluation Metrics" 
        images={[img4, img5]}
      >
        <p>
          Gemma3: Achieved ~60% accuracy after 12 hours of training (current best performer) when assuming that it is given every data point it was trained on. It Dropped down to about 20% after some data points get replaced w/ N/A’s. Llama 3.0: Only 12.8% accuracy after 8 hours of training. Llama 3.3: Similarly low accuracy (comparable to 3.0). For the Llama models, we used smaller models with less parameters so this makes sense.
        </p>
      </SectionCard>

      <SectionCard 
        title="Analysis of Results"
      >
        <p>
          It also makes sense why Gemma3 was the best performer, it was the biggest model that we trained on at 4 billion parameters, versus millions for the others. The amount of data that we gave it to train on was kind of unrealistic, which is why we were able to obtain 60% accuracy when given every data point.
        </p>
        <p>
          <strong>Failures:</strong> In a more realistic scenario where not every data point could be found, it makes sense why the accuracy drops down to 20% as the model doesn’t have as much data to work with.
        </p>
        <p>
          <strong>Surprises:</strong> On the first training run on the gemma3 model, we got 100% accuracy when testing no matter what dataset we tested on which was weird. Turns out, we forgot to shuffle the training and testing input so the prompt would be formatted such that the winner would always be the first horse listed so the model learned to just always return the first horse (which was coincidentally also the winner).
        </p>
      </SectionCard>

      <SectionCard 
        title="Challenges Faced" 
        images={[img6]}
      >
        <p>
          Model files too large for GitHub – used Google Drive instead. Manual component setup required for each team member. Issues integrating AI training models. Time used to train models was substantial, had to run overnight. Google collab limits to 4 hours of GPU usage for free so we had to torture our own PCs. Took up considerable memory and CPU processing power on computers. Cal Poly servers only allow for a certain amount of time, auto kicks off after around 8 hours, could not train successfully in that amount of time. Windows subsystem for linux having a microsoft driver issue where it didn’t use all VRAM leading to out of memory errors. Uploading the large trained LLMs to the Cal Poly Unix servers was also an issue as there are limits to the size of files that you can rsync to the servers. We had to break up the models with split and cat them back together on the servers.
        </p>
      </SectionCard>

      <SectionCard 
        title="Future Works" 
        images={[img7]}
      >
        <p>
          Model catered more to specifically Horse Racing gambling rather than just the statistics on horses, includes best odds and what sportsbooks offer. Cleaner frontend. Make it more visually appealing. Utilize stronger models instead of the small 4 billion parameter Gemma model. More datasets so that it can be better with missing data points. Obtain F1 scores for all models.
        </p>
      </SectionCard>

      <MayLike currentProject="HorseGPT" />
    </ProjectLayout>
  );
}

export default HorseGPT;
