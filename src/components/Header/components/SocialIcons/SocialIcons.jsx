import React from 'react';
import telegramIcon from '../../../../assets/telegram.svg';
import viberIcon from '../../../../assets/viber.svg';
import whatsapp from '../../../../assets/whatsapp.svg';

export const SocialIcons = () => {
  return (
    <div className="social-icons-wrapper">
      <a href="">
        <img src={telegramIcon} alt="telegram-link"></img>
      </a>
      <a href="">
        <img src={viberIcon} alt="viber-link"></img>
      </a>
      <a href="">
        <img src={whatsapp} alt="whatsapp-link"></img>
      </a>
    </div>
  );
};
