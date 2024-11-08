import React from 'react';
import '../styles/NavigationBar.css';

// Компонент навигационной панели
const NavigationBar: React.FC = () => (
    <nav className="navigation-bar">
            {/* Кнопки навигации */}
            <button>Открыть/Закрыть меню</button>
            <button>Товары</button>
            <button>Склады</button>
            <button>О системе</button>
            <button>Личный кабинет</button>
    </nav>
);

export default NavigationBar;