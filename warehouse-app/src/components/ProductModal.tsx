import React from 'react';
import { Product } from '../types/Product';
import '../styles/ProductModal.css';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

// Компонент модального окна с подробной информацией о товаре
const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                {/* Кнопка закрытия модального окна */}
                <button className="close-button" onClick={onClose}>×</button>

                {/* Детали товара */}
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Категория: {product.category}</p>
                <p>
                    Количество: {product.quantity} {product.unit}
                </p>

                {/* Изображение товара, если доступно */}
                {product.image && <img src={product.image} alt={product.name} />}
            </div>
        </div>
    );
};

export default ProductModal;