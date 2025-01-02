// src/components/SlideInComponent.js
import React from 'react';
import { motion } from 'framer-motion';

const SlideInComponent = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      exit={{ x: '100vw' }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1>My Projects</h1>
      <ul>
        <li>Project 1: Description...</li>
        <li>Project 2: Description...</li>
        <li>Project 3: Description...</li>
      </ul>
    </motion.div>
  );
};

export default SlideInComponent;