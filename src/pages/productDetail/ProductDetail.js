import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './productdetail.scss'
import axiosClient from '../../api/axiosClient'
import { GrFormSubtract } from 'react-icons/gr'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCartWithQuantity } from '../../redux/features/cart/cartSlice'
const ProductDetail = () => {
    const [item, setItem] = useState('')
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    // const cartItems = useSelector((state) => state.cart.products)
    // console.log(cartItems)

    // console.log(id)
    useEffect(() => {
        const fetchAnItem = async () => {
            const res = await axiosClient.get(`/products/${id}`)
            setItem(res.data)
        }
        fetchAnItem()
    })

    const handleAddItem = () => {
        setQuantity(quantity => quantity + 1)
    }
    const handleRemoveItem = () => {
        if (quantity < 2) {
            alert('Please enter')
        } else {
            setQuantity(quantity => quantity - 1)
        }
    }
    const handleAddToCart = (item, quantity) => {
        dispatch(addToCartWithQuantity({ item, quantity }))
    }


    return (
        <div className='container pt-5 mb-5'>
            <div className='row item'>
                <div className='col-12 col-md-6 item-top'>
                    <img src={item.image} alt={item.title} />
                </div>
                <div className='col-12 col-md-6 item-bot'>
                    <h3 className='item-title'>{item.title}</h3>
                    <p className='item-desc'>{item.description}</p>
                    <p className='item-detail-price'>
                        <span>{new Intl.NumberFormat('de-DE').format(item.salePrice)}đ</span>
                        <span>{new Intl.NumberFormat('de-DE').format(item.originalPrice)}đ</span>
                    </p>
                    <div className='item-control'>
                        <div className='item-control-updown' onClick={handleRemoveItem}>
                            <GrFormSubtract />
                        </div>
                        <div className='item-control-value'>
                            {quantity}
                        </div>

                        <div className='item-control-updown' onClick={handleAddItem}>
                            <AiOutlinePlus />
                        </div>
                    </div>
                    <div className='item-btn'>
                        <button onClick={() => handleAddToCart(item, quantity)} className='item-btn-add'>Thêm vào giỏ hàng</button>
                        <button className='item-btn-buy'>Mua ngay</button>
                    </div>
                </div>

            </div>
            <div className='row'>
                <div className='col-12 item-res'>
                    <h4>Mô tả sản phẩm</h4>
                    <p className=''>{item.description}</p>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail