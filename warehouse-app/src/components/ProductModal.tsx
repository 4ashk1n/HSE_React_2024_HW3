// src/components/ProductModal.tsx
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../types/Product';

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const { name, description, category, quantity, unit, image } = product;

    return (
        <Dialog open={true} onClose={onClose} maxWidth={'xs'}>
            <DialogTitle>
                {name}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {image && (
                    <img
                        src={image}
                        alt={name}
                        style={{ width: '100%', marginBottom: '16px' }}
                    />
                )}
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Категория: {category}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Количество: {quantity} {unit}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;