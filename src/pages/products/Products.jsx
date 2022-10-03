import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types';
import axiosClient from '../../api/axiosClient'
import ProductCard from '../../components/productCard/ProductCard'
import './products.scss'
import { HiArrowLeft } from 'react-icons/hi'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductFilter from '../../components/filter/ProductFilter'


const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [trans, setTrans] = useState(false)
    const [searchText, setSearchText] = useState('')
    const inputRef = useRef(null)
    const [filters, setFilters] = useState({
        categoryIds: [],
        size: [],
        color: [],
        title_like: '',
        active: false
    })
    const [totalPage, setTotalPage] = useState(5)
    const [page, setPage] = useState(1)


    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            const res = await axiosClient.get(`/products`, {
                params: {
                    _page: page,
                    _limit: 10,
                    category: filters.categoryIds,
                    size: filters.size,
                    color: filters.color,
                    title_like: filters.title_like
                }
            })
            // console.log(res)
            setProducts(res.data)
            setLoading(false)
        }
        fetchProducts()
    }, [page, filters])

    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            const res = await axiosClient.get(`/products`, {
                params: {
                    category: filters.categoryIds,
                    size: filters.size,
                    color: filters.color
                }
            })
            const i = 1;
            setProducts(res.data)
            const totalItem = res.data.length
            totalItem ? setTotalPage(Math.ceil(totalItem / 10)) : setTotalPage(1)
            // console.log(totalPage)

            setLoading(false)
        }
        fetchProducts()
    }, [page, filters])

    useEffect(() => {
        setPage(1);
    }, [filters]);


    const handleChange = (event, value) => {
        console.log(value) //trang hien tai
        setPage(value)
        window.scrollTo(0, 0)
    }

    const handleTransform = () => {
        setTrans(!trans)
    }
    const handleCloseFilter = () => {
        setTrans(!trans)
    }
    const handleSortAscending = () => {
        // const listItem = products.sort((a, b) => a.originalPrice - b.originalPrice)
        console.log(13)

    }
    const handleSortDescending = () => {
        console.log(13)
    }
    const handleFilterChange = (newFilters) => {
        // console.log(newFilters)
        setFilters(prev => {
            // console.log(prev)
            return { ...prev, ...newFilters }
        })
    }
    const handleDeleteFilter = () => {
        setFilters({
            categoryIds: [],
            size: [],
            color: [],
            active: false
        })
    }

    const handleSubmit = (newPage) => {
        // console.log(newPage)
        setFilters({
            ...filters,
            page: 1,
            title_like: newPage.searchText
        })
        console.log(filters)
    }
    const handleSearchFilter = (e) => {
        const value = e.target.value
        setSearchText(value)

        if (!handleSubmit) return
        if (inputRef.current) {
            clearTimeout(inputRef.current)
        }
        inputRef.current = setTimeout(() => {
            const formValue = {
                searchText: value
            }
            // console.log(formValue)
            handleSubmit(formValue)
        }, 1000)

        // const formValue = {
        //     searchText: value
        // }
        // console.log(formValue)
        // handleSubmit(formValue)
    }



    return (
        <div className='container mt-4'>
            <Stack spacing={2}>
                <div className='row'>
                    <div className='col-12'>
                        <div className='allitem'>
                            <div className=''>
                                <h4 className='allitem-heading'>For you</h4>
                                <p className='allitem-content'>
                                    Tất cả những sản phẩm Mới nhất nằm trong BST
                                    được mở bán Hàng Tuần sẽ được cập nhật liên
                                    tục tại đây. Chắc chắn bạn sẽ tìm thấy những
                                    sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất
                                    với phong cách của mình.
                                </p>

                            </div>
                            <input
                                // ref={inputRef}
                                className="input-search"
                                type="text"
                                value={searchText}
                                placeholder='search'
                                onChange={handleSearchFilter}
                            />
                        </div>
                        <div className="price">
                            <p onClick={handleSortAscending}>Giá tăng dần</p>
                            <p onClick={handleSortDescending}>Giá giảm dần</p>
                        </div>
                    </div>
                </div>
                <div className="row product-filter">
                    <div className='product-filter-col-3'>
                        <div className="product-filter-container">
                            <ProductFilter filters={filters} onChange={handleFilterChange} />
                        </div>
                        <div className='product-filter-delete'>
                            <button onClick={handleDeleteFilter}>Xoá bộ lọc</button>
                        </div>
                    </div>
                    <div className="list-item product-filter-col-9">
                        {products.map((item) => (
                            <div className="col-6 col-md-4 col-xl-3 mb-4" key={item.id}>
                                <ProductCard item={item} />
                            </div>


                        ))}

                        <div className='pagination-content'>
                            <Pagination
                                count={totalPage}
                                page={page}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="filter">
                        <div onClick={handleTransform} className="filter-btn btn-app">BỘ LỌC</div>
                    </div>
                </div>

                <div className={`product-filter-field ${trans ? 'transformElement' : 'transformElementHide'}`}>
                    <div className="product-filter-icon">
                        <HiArrowLeft onClick={handleCloseFilter} />
                    </div>
                    <div className="product-filter-container">
                        <ProductFilter filters={filters} onChange={handleFilterChange} />
                    </div>
                    <div className='product-filter-delete'>
                        <button onClick={handleDeleteFilter}>Xoá bộ lọc</button>
                    </div>
                </div>

            </Stack>

        </div>
    )
}


export default Products

Products.propTypes = {
    onSubmit: PropTypes.func,
};
Products.defaultProps = {
    handleSubmit: null,
};