import React from 'react';
import '../styles/SideBar.css';

// Компонент бокового меню для фильтрации товаров
const SideBar: React.FC = () => (
    <aside className="sidebar">
        {/* Поле поиска */}
        <input type="text" placeholder="Поиск..." />

        {/* Фильтр по количеству товара */}
        <label>
            <input type="checkbox" />
            Показать товары в наличии
        </label>

        {/* Выпадающее меню для выбора категории */}
        <select>
            <option value="">Выберите категорию</option>
            <option value="Электроника">Электроника</option>
            <option value="Мебель">Мебель</option>
            <option value="Канцелярия">Канцелярия</option>
        </select>
    </aside>
);

export default SideBar;