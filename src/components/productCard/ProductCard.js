import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoIosEye } from 'react-icons/io'
import './productcard.scss'

const ProductCard = (props) => {
    const { item } = props

    return (
        <div className="item-container">
            <Link to={`/products/${item.id}`} className="item">

                {item.promotionPercent >= 25 && (
                    <div className="item-sale">{item.promotionPercent}%</div>
                )}
                <div className="item-header">
                    <img className="item-img" src={item.image} alt='' />
                    <div className="item-buy">
                        <p>
                            Thêm vào giỏ hàng
                            <AiOutlineShoppingCart />
                        </p>
                        {/* <Link to={`/products/${item.id}`}>
                            <IoIosEye />
                        </Link> */}
                    </div>
                </div>
                <div className='item-info'>
                    <p className='item-title'>{item.title}</p>
                    <div className='item-price'>
                        <span>{new Intl.NumberFormat('de-DE').format(item.originalPrice)}đ</span>

                        <span>Đã bán {item.rating.count}</span>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default ProductCard