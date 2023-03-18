import React from 'react';
// import '../style.css';

export const Navigation = () => {
  return (
    <nav>
      <div className="nav-list">
        <a className="link" href="">
          Услуги
        </a>
        <a className="link" href="">
          Виджеты
        </a>
        <a className="link" href="">
          Интеграции
        </a>
        <a className="link" href="">
          Кейсы
        </a>
        <a className="link link-certificates" href="">
          Сертификаты
        </a>
      </div>
    </nav>
  );
};
