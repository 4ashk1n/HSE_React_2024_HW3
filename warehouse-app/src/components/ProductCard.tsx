import React from 'react';
import { Product } from '../types/Product';
import '../styles/ProductCard.css';

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}

// Компонент карточки товара

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const { name, description, category, quantity, unit, image } = product;

    return (
        <div className="product-card" onClick={onClick}>
            {/* Изображение товара или сообщение об отсутствии изображения */}
            {image ? (
                <img src={image} alt={name} className="product-image" />
            ) : (
                <div className="no-image">Изображение отсутствует</div>
            )}
            <h3 className="product-name">{name}</h3>
            <p className="product-description">{description}</p>
            <div className="product-footer">
                <p className="product-category">Категория: {category}</p>
                <p className="product-quantity">
                    Количество: {quantity} {unit}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;