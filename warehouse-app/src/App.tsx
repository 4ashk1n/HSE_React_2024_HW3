// src/App.tsx
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import { Product } from './types/Product';
import './App.css';

const App: React.FC = () => {
    // Состояние для отслеживания выбранного товара
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    // Фиктивные данные для отображения различных товаров
    const products: Product[] = [
        // Категория: Электроника
        {
            id: '1',
            name: 'Беспроводные наушники',
            description: 'Высококачественные наушники с шумоподавлением и длительным временем работы.',
            category: 'Электроника',
            quantity: 30,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Headphones',
        },
        {
            id: '2',
            name: 'Ноутбук',
            description: 'Мощный ноутбук для работы и развлечений с 15-дюймовым экраном.',
            category: 'Электроника',
            quantity: 15,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Laptop',
        },
        {
            id: '3',
            name: 'Смарт-часы',
            description: 'Смарт-часы с отслеживанием фитнеса и уведомлениями.',
            category: 'Электроника',
            quantity: 50,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Smartwatch',
        },

        // Категория: Канцелярия
        {
            id: '4',
            name: 'Блокнот',
            description: 'Блокнот формата A5 с 100 страницами для записей.',
            category: 'Канцелярия',
            quantity: 100,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Notebook',
        },
        {
            id: '5',
            name: 'Набор ручек',
            description: 'Набор из 5 разноцветных гелевых ручек для письма.',
            category: 'Канцелярия',
            quantity: 200,
            unit: 'набор',
            image: 'https://via.placeholder.com/150?text=Pen+Set',
        },
        {
            id: '6',
            name: 'Папка для документов',
            description: 'Прочная папка для хранения и организации документов.',
            category: 'Канцелярия',
            quantity: 80,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Folder',
        },

        // Категория: Мебель
        {
            id: '7',
            name: 'Офисное кресло',
            description: 'Эргономичное офисное кресло с поддержкой поясницы.',
            category: 'Мебель',
            quantity: 25,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Office+Chair',
        },
        {
            id: '8',
            name: 'Стол для переговоров',
            description: 'Большой стол для переговоров, рассчитанный на 8 человек.',
            category: 'Мебель',
            quantity: 5,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Meeting+Table',
        },
        {
            id: '9',
            name: 'Шкаф для документов',
            description: 'Шкаф для хранения документов с полками и замком.',
            category: 'Мебель',
            quantity: 10,
            unit: 'шт.',
            image: 'https://via.placeholder.com/150?text=Cabinet',
        },
    ];


    return (
        <div className="app">
            <NavigationBar />
            <SideBar />
            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onClick={() => setSelectedProduct(product)}
                    />
                ))}
            </div>
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </div>
    );
};

export default App;
