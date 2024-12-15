import React from 'react';
import { Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';
import { Product } from '../types/Product';

interface ProductCardProps {
    product: Product;
    onClick: () => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const { name, description, category, quantity, unit, image } = product;

    return (
        <Tooltip
            title={
                description.length > 50
                    ? `${description.slice(0, 47)}...`
                    : description
            }
            arrow
        >
            <Card onClick={onClick} style={{ cursor: 'pointer' }}>
                {image ? (
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={name}
                    />
                ) : (
                    <Typography variant="h6" style={{ padding: '20px', textAlign: 'center' }}>
                        Изображение отсутствует
                    </Typography>
                )}
                <CardContent>
                    <Typography variant="h6" noWrap>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" noWrap>
                        {category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {quantity} {unit}
                    </Typography>
                </CardContent>
            </Card>
        </Tooltip>
    );
};

export default ProductCard;
