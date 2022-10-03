import React from 'react'
import './checkout.scss'
import { BsCreditCard2BackFill, BsWalletFill } from 'react-icons/bs'
import { FaTruck } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const CheckOut = () => {
    const products = useSelector((state) => state.cart.products)

    const totalprice = products.reduce((total, product) => {
        return total + product.salePrice * product.quantity
    }, 0)
    return (
        <div className='container pt-3'>
            <div className='row checkout'>
                <div className='col-12 checkout-bill'>
                    <div className='checkout-bill-input'>
                        <h3>Địa chỉ nhận hàng</h3>
                        <form>
                            <div className='checkout-bill-input-field'>
                                <label>Họ tên</label>
                                <input type='text' />
                            </div>
                            <div className='checkout-bill-input-field'>
                                <label>Số điện thoại</label>
                                <input type='text' />
                            </div>
                            <div className='checkout-bill-input-field'>
                                <label>Địa chỉ</label>
                                <input type='text' />
                            </div>
                        </form>
                    </div>

                    <div className='checkout-bill-pay'>
                        <h3>Hình thức thanh toán</h3>
                        <div className='checkout-bill-pay-field'>
                            <input name='payMethod' type='radio' id='1' />
                            <span>
                                <BsCreditCard2BackFill />
                                Thanh toán thẻ (ATM, Visa, MasterCard)</span>
                        </div>
                        <div className='checkout-bill-pay-field'>
                            <input name='payMethod' type='radio' id='2' />
                            <span>
                                <BsWalletFill />
                                Thanh toán bằng ví ShopeePay</span>
                        </div>
                        <div className='checkout-bill-pay-field'>
                            <input name='payMethod' type='radio' id='3' />
                            <span>
                                <FaTruck />
                                Thanh toán khi nhận hàng(COD)</span>
                        </div>
                    </div>
                </div>
                {products.length > 0 ? (
                    <>
                        <div className='col-12 checkout-item'>
                            <p className='checkout-item-title'>Thông tin đơn hàng</p>

                            {products.map(product => (
                                <div key={product.id} className='row checkout-item-product'>
                                    <div className='col-6 col-lg-2'>
                                        <img src={product.image} alt={product.title} />
                                    </div>
                                    <div className='col-6 col-lg-10 checkout-item-product-info'>
                                        <p>{product.title}</p>
                                        <p>{new Intl.NumberFormat('de-DE').format(product.salePrice)}đ x {product.quantity}</p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className='col-12 checkout-pay'>
                            <p>Tổng thanh toán: {new Intl.NumberFormat('de-DE').format(totalprice)}đ</p>
                            <button onClick={() => alert('Đặt hàng thành công')}>ĐẶT HÀNG</button>
                        </div>

                    </>

                ) : (
                    <h3 className="cart-empty">Gio hang trong</h3>
                )}
            </div>
        </div>
    )
}

export default CheckOut