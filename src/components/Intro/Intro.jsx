import React from 'react';
import { Benefits } from './components/Benefits/Benefits';
import { Title } from './components/Title/Title';

import './Intro.css';

export const Intro = () => {
  return (
    <div className="intro">
      <Title />
      <Benefits />
    </div>
  );
};
