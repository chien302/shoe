import React, { useState, useEffect } from 'react'

const ColorFilter = ({ filters, onChange }) => {
    const colorsList = ['trắng', 'đen', 'đỏ', 'hồng', 'vàng', 'xanh'];
    const [colors, setColors] = useState([])

    const handleChangeColor = (color) => {
        setColors((prev) => {
            if (colors.includes(color)) {
                return prev.filter((x) => x !== color)
            } else {
                return [...colors, color]
            }
        })
    }
    useEffect(() => {
        onChange(colors);
    }, [colors]);

    useEffect(() => {
        setColors([]);
    }, [filters.active]);
    return (
        <div className='product-filter-info'>
            <h6>Màu sắc</h6>
            {colorsList.map((item) => (
                <label key={item}>
                    <input type="checkbox" onChange={() => handleChangeColor(item)}
                        checked={colors.includes(item)}
                    />
                    <span>{item}</span>
                </label>
            ))}
        </div>
    )
}

export default ColorFilter