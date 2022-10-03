import React, { useState, useEffect } from 'react'
import axiosClient from '../../api/axiosClient'
import { Link } from 'react-router-dom'
import ProductCard from '../productCard/ProductCard'
import './bestsale.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BestSale = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    }
    useEffect(() => {
        setLoading(true)
        const fetchProducts = async () => {
            const res = await axiosClient.get(`/products`)
            setProducts(res.data)
            setLoading(false)
        }

        fetchProducts()
    }, [])
    const saleProducts = products.filter((item) => {
        return item.promotionPercent >= 25
    })
    // console.log(saleProducts)

    return (
        <div className="container">
            <div className="row">
                <div className=' bestsale'>
                    <div className='col-12 bestsale-header'>
                        <p>Giá giảm sốc</p>
                        <Link to='/products'>...xem tất cả</Link>
                    </div>
                    <div className='bestsale-item'>
                        {loading ? (
                            <h4>Loading...</h4>
                        ) : (
                            <Slider {...settings}>
                                {saleProducts.map((item) => (
                                    <ProductCard key={item.id} item={item} />
                                ))}

                            </Slider>

                        )}
                    </div>

                </div>

            </div>

        </div>
    )
}

export default BestSale