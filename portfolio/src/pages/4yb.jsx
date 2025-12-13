import React from 'react';
import ProjectLayout, { SectionCard } from '../components/Layout/ProjectLayout';
import MayLike from "../components/MayLike";

import workbenchImg from '../assets/4yb/workbench.png';
import hostmonsterImg from '../assets/4yb/hostmonster.png';
import logoImg from '../assets/4yb/4invLOGO.png';
import lockedPageImg from '../assets/4yb/lockedpage.png';
import fullTableImg from '../assets/4yb/fulltable.png';
import searchImg from '../assets/4yb/search.png';
import dynamicSearchImg from '../assets/4yb/dynamicSearch.png';
import partsTableImg from '../assets/4yb/partsTable.png';
import ebayApiImg from '../assets/4yb/ebayapi.jpg';
import addProductImg from '../assets/4yb/addproduct.png';

function Fouryb() {
  return (
    <ProjectLayout
      title="4YourInventory"
      description="4YourInventory is the official inventory management, which I have created during my work at 4YourBusiness Inc as the Software Engineering Intern. This application changed the company’s way of managing inventories and database activities moving from the MS Access 2003 environment to the MySQL one. There are web and desktop application ideas that are easily integrated; ideas based on efficiency and user interface."
    >
      <div className="flex justify-center">
        <a
          href="https://github.com/lac-phong/4YourInventory"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 bg-slate-800 text-white rounded-full font-semibold hover:bg-slate-700 transition-colors shadow-lg"
        >
          GitHub
        </a>
      </div>

      <SectionCard 
        title="Refactoring the Database" 
        images={[workbenchImg]}
      >
        <p>
          The project was initiated with a quite mechanical and time-consuming process of converting a poorly structured Microsoft Access 2003 database to a highly structured MySQL database using MySQL work bench. It was in this first part of the project where I proved my competency in updating and enhancing the primitive and slow database methods paving way for a much better implementation of integrated inventory system.
        </p>
      </SectionCard>

      <SectionCard 
        title="Database Optimization and Hosting" 
        images={[hostmonsterImg]}
      >
        <p>
          After the optimization of SQL queries and database improvements, it was finally a clean, well-structured and arranged database. For the hosting solution, we used Host Monster for cloud hosting which guarantees the users proper access and impressive performance. This phase brought me at par in handling SQL, database designing in cloud hosting solutions.
        </p>
      </SectionCard>

      <SectionCard 
        title="Technologies Used" 
        images={[logoImg]}
      >
        <p>
          The application developed makes use of a rather large tech stack comprising of React.js, Node. js, Express. js, and Electron. js, combined with HTML and CSS for front-end development. The web application version of our project is built with Express as the back-end, whereas the desktop version is made using Electron.js to perform the prerequisites of local system functions for CRUD operations and implementation through IPC.
        </p>
      </SectionCard>

      <SectionCard 
        title="Secure Authentication" 
        images={[lockedPageImg]}
      >
        <p>
          The login interface is implemented using Firebase for authentication thus ensuring that user credentials are safe and secure. This ensures data protection and access control within the application, showcasing my ability to implement secure authentication mechanisms.
        </p>
      </SectionCard>

      <SectionCard 
        title="Database Overview" 
        images={[fullTableImg]}
      >
        <p>
          Upon logging in, users are greeted with a comprehensive view of the hosted cloud database. This interface allows for detailed inspection and management of inventory data, reflecting the application’s capability to handle large datasets efficiently.
        </p>
      </SectionCard>

      <SectionCard 
        title="Dynamic Search Functionality" 
        images={[searchImg, dynamicSearchImg]}
      >
        <p>
          The search page features a dynamic search bar, enabling users to efficiently query and sort inventory. This functionality enhances the user experience by providing powerful and flexible search capabilities, integral to effective inventory management.
        </p>
      </SectionCard>

      <SectionCard 
        title="Item Details & eBay API Integration" 
        images={[partsTableImg, ebayApiImg]}
      >
        <p>
          The integrated eBay APIs facilitate convenient and efficient listing and management of inventory. Despite the limited documentation, our team successfully implemented eBay API integrations to enhance inventory functionality, demonstrating resilience and problem-solving skills. This shared card highlights both item details and API integration as key features of the project.
        </p>
      </SectionCard>

      <SectionCard 
        title="Product Management" 
        images={[addProductImg]}
      >
        <p>
          Users have the ability to add new products and mark items as sold with a single click. This feature streamlines inventory management, showcasing the application’s user-friendly design and efficiency in handling inventory updates.
        </p>
      </SectionCard>

      <MayLike currentProject="4YourInventory" />
    </ProjectLayout>
  );
}

export default Fouryb;
