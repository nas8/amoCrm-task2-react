import React from 'react';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Menu } from './components/Menu/Menu';
import { Rights } from './components/Rights/Rights';

import './Footer.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-menu-wrapper">
          <About />
          <Menu />
        </div>
        <Contacts />
      </div>
      <Rights />
    </div>
  );
};
