import React from 'react';
import telegramIcon from '../../../../assets/telegram.svg';
import viberIcon from '../../../../assets/viber.svg';
import whatsapp from '../../../../assets/whatsapp.svg';

export const Contacts = () => {
  return (
    <div className="footer-contacts">
      <h4 className="footer-title-contacts">КОНТАКТЫ</h4>
      <p>+7 555 555 55 55</p>
      <div className="footer-social">
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
      <p>Москва, Путевой проезд 3с1, к 902</p>
    </div>
  );
};
