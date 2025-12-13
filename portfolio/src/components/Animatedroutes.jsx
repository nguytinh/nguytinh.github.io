import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Inventory from "../pages/4yb";
import { AnimatePresence } from 'framer-motion';
import DemonSlayer from '../pages/DemonSlayer';
import  Restaurant  from '../pages/Restaurant';
import Chessai from '../pages/Chessai';
import More from '../pages/More';
import Aim from '../pages/Aim';
import NeuralNetwork from '../pages/Neuralnetwork';
import Aery from '../pages/Aery';
import HorseGPT from '../pages/Horse';
import Tinvest from '../pages/Tinvest';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/4yourinventory" element={<Inventory />} />
        <Route path="/demonslayer" element={<DemonSlayer />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/chess" element={<Chessai />} />
        <Route path="/more" element={<More />} />
        <Route path="/aim" element={<Aim />} />
        <Route path="/benchmark" element={<NeuralNetwork />} />
        <Route path="/aery" element={<Aery />} />
        <Route path="/horsegpt" element={<HorseGPT />} />
        <Route path="/tinvest" element={<Tinvest />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
