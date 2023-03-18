import React from 'react';
import { Navigation } from './components/Navigation/Navigation';
import { Logo } from './components/Logo/Logo';
import { SocialIcons } from './components/SocialIcons/SocialIcons';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="left-wrapper">
        <Logo />
        <Navigation />
      </div>
      <div className="right-wrapper">
        <p className="phone-number">+7 555 555 55 55</p>
        <SocialIcons />
      </div>
    </div>
  );
};

export default Header;
