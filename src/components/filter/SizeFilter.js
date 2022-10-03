import React, { useState, useEffect } from 'react'

const SizeFilter = ({ filters, onChange }) => {
    const [sizes, setSizes] = useState([])
    const sizesList = [36, 37, 38, 39];
    const handleChangeSize = (size) => {
        setSizes((prev) => {
            if (sizes.includes(size)) {
                return prev.filter((x) => x !== size)
            } else {
                return [...sizes, size]
            }
        })
    }
    useEffect(() => {
        onChange(sizes);
    }, [sizes]);

    useEffect(() => {
        setSizes([]);
    }, [filters.active]);
    return (
        <div className='product-filter-info'>
            <h6>Kích cỡ</h6>
            {sizesList.map((item) => (
                <label key={item}>
                    <input type="checkbox" onChange={() => handleChangeSize(item)}
                        checked={sizes.includes(item)}
                    />
                    <span>{item}</span>
                </label>
            ))}

        </div>
    )
}

export default SizeFilter