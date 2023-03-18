import React from 'react';

export const Menu = () => {
  return (
    <div className="footer-menu">
      <div>
        <h4 className="footer-title">МЕНЮ</h4>
        <ul>
          <li>
            <a className="footer-link" href="">
              Расчёт стоимости
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Услуги
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Виджеты
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Интеграции
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Наши клиенты
            </a>
          </li>
        </ul>
      </div>
      <div style={{ marginTop: '37px' }}>
        <ul>
          <li>
            <a className="footer-link" href="">
              Кейсы
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Благодарственные письма
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Сертификаты
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Блог на Youtube
            </a>
          </li>
          <li>
            <a className="footer-link" href="">
              Вопрос / Ответ
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
