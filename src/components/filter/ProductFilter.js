import React from 'react'
import SizeFilter from './SizeFilter'
import CategoryFilter from './CategoryFilter'
import ColorFilter from './ColorFilter'

const ProductFilter = ({ filters, onChange }) => {
    // console.log(filters)
    const handleChangeCategory = (newCategoryIds) => {
        // console.log(newCategoryIds)
        if (!onChange) return;
        const newFilters = {
            ...filters,
            categoryIds: newCategoryIds,
            active: true,
        };
        // console.log(newFilters);
        onChange(newFilters);
    }
    const handleChangeSize = (newSize) => {
        if (!onChange) return;
        const newFilters = {
            ...filters,
            size: newSize,
            active: true
        }
        // console.log(newFilters);
        onChange(newFilters)
    }
    const handleChangeColor = (newColor) => {
        if (!onChange) return;

        const newFilters = {
            ...filters,
            color: newColor,
            active: true
        }
        onChange(newFilters)
    }
    return (
        <>
            <CategoryFilter onChange={handleChangeCategory} filters={filters} />
            <SizeFilter onChange={handleChangeSize} filters={filters} />
            <ColorFilter onChange={handleChangeColor} filters={filters} />
        </>
    )
}

export default ProductFilter