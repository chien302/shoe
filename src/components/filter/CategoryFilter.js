import React, { useState, useEffect } from 'react'
import axiosClient from '../../api/axiosClient'

const CategoryFilter = ({ filters, onChange }) => {
    const [category, setCategory] = useState([])
    const [categoryIds, setCategoryIds] = useState([])

    // console.log(filters)
    useEffect(() => {
        const fetchCategory = async () => {
            const res = await axiosClient.get(`/categories`)
            setCategory(res.data)
            // console.log(res.data)
        }
        fetchCategory()
    }, [])

    const handleChangeCategory = (id) => {
        // console.log(id)
        setCategoryIds((prev) => {
            // console.log(categoryIds.includes(id))
            if (categoryIds.includes(id)) {
                return prev.filter((x) => x !== id)
            }
            else {
                return [...prev, id]
            }
        })

    }
    // console.log(categoryIds)
    useEffect(() => {
        onChange(categoryIds);
    }, [categoryIds]);

    useEffect(() => {
        setCategoryIds([]);
    }, [filters.active]);
    return (
        <div className="product-filter-info">
            <h6>Danh mục</h6>
            {category.map((item) => (
                <label key={item.id}>
                    <input type="checkbox"
                        onChange={() => handleChangeCategory(item.id)}
                        checked={categoryIds.includes(item.id)}
                    />
                    <span>{item.name}</span>
                </label>
            ))}
        </div>
    )
}

export default CategoryFilter