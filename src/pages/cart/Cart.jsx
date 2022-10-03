import React from 'react'
import { GrFormSubtract } from 'react-icons/gr'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cart.scss'
import { addToCart, decreaseItem } from '../../redux/features/cart/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.cart.products)
    const totalQuantity = useSelector((state) => state.cart.totalQuantity)

    // console.log(products)

    const handleAdd = (item, quantity) => {
        dispatch(addToCart(item))
    }
    const handleDecrease = (item) => {
        dispatch(decreaseItem(item))
    }
    const totalItem = products.reduce((total, product) => {
        return total + product.quantity
    }, 0)
    // console.log(totalItem)
    const totalPrice = products.reduce((total, product) => {
        return total + product.salePrice * product.quantity
    }, 0)
    // console.log(totalPrice)

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 cart">
                    {products.length === 0 ? (
                        <h3 className="cart-empty">Giỏ hàng trống</h3>
                    ) : (
                        <>
                            <div className="cart-header">
                                <h3>Sản phẩm</h3>
                            </div>
                            <div className='cart-content'>
                                {products.map((item) => (
                                    <div className="row cart-content-info" key={item.id}>
                                        <div className='col-4 cart-content-left'>
                                            <Link to={`/products/${item.id}`}>
                                                <img src={item.image} alt={item.title} />
                                            </Link>
                                        </div>
                                        <div className='col-8 cart-content-right'>
                                            <h5>{item.title}</h5>
                                            <p className='cart-content-right-info'>
                                                Phân loại: Size: {item.size}, {item.color}
                                            </p>
                                            <p className='cart-content-right-price'>
                                                <span>{new Intl.NumberFormat('de-DE').format(item.salePrice)}đ</span>
                                                <span>{new Intl.NumberFormat('de-DE').format(item.originalPrice)}đ</span>
                                            </p>
                                            <div className='cart-content-right-control'>
                                                <div className='cart-content-right-control--updown' onClick={() => handleDecrease(item)}>
                                                    <GrFormSubtract />
                                                </div>
                                                <div className='cart-content-right-control--value'>
                                                    {item.quantity}
                                                </div>

                                                <div className='cart-content-right-control--updown' onClick={() => handleAdd(item, item.quantity)}>
                                                    <AiOutlinePlus />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                            <div className='cart-bottom'>
                                <div className='cart-bottom-left'>
                                    <div>Tổng sản phẩm: {totalItem}</div>
                                    <div>Thành tiền: {new Intl.NumberFormat('de-DE').format(totalPrice)}đ
                                    </div>
                                </div>
                                <div className='cart-bottom-right'>
                                    <Link to='/checkout'>MUA HÀNG</Link>
                                    {/* <Link to='/products'>TIẾP TỤC MUA SẮM</Link> */}
                                </div>
                            </div>
                        </>
                    )}
                </div>

            </div>
        </div>
    )
}

export default Cart