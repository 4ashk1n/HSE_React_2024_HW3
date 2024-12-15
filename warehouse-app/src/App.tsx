// src/App.tsx
import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import ProductCard from './components/ProductCard';
import { Grid2, Container, Pagination, Drawer } from '@mui/material';
import ProductModal from './components/ProductModal';
import { Product } from './types/Product';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#abdcfa',
        }
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        fontSize: 14,
    },
});

const App: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        inStock: false,
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const itemsPerPage = 6;

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


    const filteredProducts = products.filter((product) => {
        const matchesSearch = new RegExp(filters.search, 'i').test(product.name);
        const matchesCategory = filters.category ? product.category === filters.category : true;
        const matchesStock = filters.inStock ? product.quantity > 0 : true;
        return matchesSearch && matchesCategory && matchesStock;
    });

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        setCurrentPage(page);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <NavigationBar toggleSidebar={() => setIsDrawerOpen(!isDrawerOpen)} />
                <Drawer
                    anchor="left"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                >
                    <SideBar filters={filters} setFilters={setFilters} />
                </Drawer>

                <Container maxWidth="md" >
                    <Grid2 container spacing={2} pt={20}>
                        {paginatedProducts.map((product) => (
                            <Grid2 size={4} >
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onClick={() => setSelectedProduct(product)}
                                />
                            </Grid2>

                        ))}
                    </Grid2>
                    <Pagination
                        count={Math.ceil(filteredProducts.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handlePageChange}
                        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                    />
                </Container>
                {selectedProduct && (
                    <ProductModal
                        product={selectedProduct}
                        onClose={() => setSelectedProduct(null)}
                    />
                )}
            </div>
        </ThemeProvider>
    );
};

export default App;
