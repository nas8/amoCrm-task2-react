import React from 'react';

import './Benefits.css';

export const Benefits = () => {
  return (
    <div className="benefits">
      <h3 className="benefits-title">
        Вместе с <span className="benefits-gradient-text">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:
      </h3>
      <div className="benefits-grid benefits-grid-disp-none">
        <div className="benefits-item">
          <h4 className="benefit-title">ВИДЖЕТЫ</h4>
          <p className="benefit-text">30 готовых решений</p>
        </div>
        <div className="benefits-item">
          <h4 className="benefit-title">DASHBOARD</h4>
          <p className="benefit-text">с показателями вашего бизнеса</p>
        </div>
        <div className="benefits-item">
          <h4 className="benefit-title">SKYPE АУДИТ</h4>
          <p className="benefit-text">отдела продаж и CRM системы</p>
        </div>
        <div className="benefits-item">
          <h4 className="benefit-title">35 ДНЕЙ</h4>
          <p className="benefit-text">использования CRM</p>
        </div>
      </div>
      <div className="benefits-grid-mobile">
        <div className="benefit-mobile">
          <span className="benefit-line"></span>
          <p>SKYPE АУДИТ</p>
        </div>
        <div className="benefit-mobile">
          <span className="benefit-line"></span>
          <p>30 ВИДЖЕТОВ</p>
        </div>
        <div className="benefit-mobile">
          <span className="benefit-line"></span>
          <p>DASHBOARD</p>
        </div>
        <div className="benefit-mobile">
          <span className="benefit-line"></span>
          <p>МЕСЯЦ AMOCRM</p>
        </div>
      </div>
      <button className="benefits-button benefits-button-disp-none">Получить консультацию</button>
    </div>
  );
};
