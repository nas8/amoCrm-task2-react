import React from 'react';
import WelbexLogo from '../../../../assets/logo_welbex.svg';

export const Logo = () => {
  return (
    <div className="logo">
      <img src={WelbexLogo} alt="logo" />
      <p className="text">
        крупный интегратор CRM<br></br>в Росcии и ещё 8 странах
      </p>
    </div>
  );
};
