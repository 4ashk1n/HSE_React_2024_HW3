// src/components/SideBar.tsx
import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
} from '@mui/material';

interface SideBarProps {
    filters: {
        search: string;
        category: string;
        inStock: boolean;
    };
    setFilters: (filters: {
        search: string;
        category: string;
        inStock: boolean;
    }) => void;
}

const SideBar: React.FC<SideBarProps> = ({ filters, setFilters }) => {
    const [localFilters, setLocalFilters] = useState(filters);

    const handleApplyFilters = () => {
        setFilters(localFilters);
    };

    const handleResetFilters = () => {
        const defaultFilters = { search: '', category: '', inStock: false };
        setLocalFilters(defaultFilters);
        setFilters(defaultFilters);
    };

    return (
        <aside style={{ padding: '16px', width: '250px', background: '#f4f4f4' }}>
            <Stack spacing={2}>
                {/* Поле поиска */}
                <TextField
                    label="Поиск"
                    variant="outlined"
                    value={localFilters.search}
                    onChange={(e) =>
                        setLocalFilters({ ...localFilters, search: e.target.value })
                    }
                    fullWidth
                />

                {/* Фильтр по количеству товара */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={localFilters.inStock}
                            onChange={(e) =>
                                setLocalFilters({
                                    ...localFilters,
                                    inStock: e.target.checked,
                                })
                            }
                        />
                    }
                    label="Только в наличии"
                />

                {/* Выпадающее меню для выбора категории */}
                <FormControl fullWidth>
                    <InputLabel>Категория</InputLabel>
                    <Select
                        value={localFilters.category}
                        onChange={(e) =>
                            setLocalFilters({
                                ...localFilters,
                                category: e.target.value,
                            })
                        }
                    >
                        <MenuItem value="">Все категории</MenuItem>
                        <MenuItem value="Электроника">Электроника</MenuItem>
                        <MenuItem value="Мебель">Мебель</MenuItem>
                        <MenuItem value="Канцелярия">Канцелярия</MenuItem>
                    </Select>
                </FormControl>

                {/* Кнопки */}
                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApplyFilters}
                    >
                        Применить
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleResetFilters}
                    >
                        Сбросить
                    </Button>
                </Stack>
            </Stack>
        </aside>
    );
};

export default SideBar;
