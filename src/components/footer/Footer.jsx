import React from 'react'
import './footer.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className="row footer">
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <h5 className="footer-list-item">
                            PHƯƠNG THỨC THANH TOÁN
                        </h5>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <img className='footer-img' src='https://tfruit.com.vn/wp-content/uploads/2020/03/logo-momo.png' alt="" />
                            </li>
                            <li className="footer-item">
                                <img className='footer-img' src='https://banner2.cleanpng.com/20180802/qo/kisspng-logo-visa-electron-credit-card-debit-card-visa-logo-5b62aa9d820235.5321822515331928615325.jpg' alt=""
                                />
                            </li>
                            <li className="footer-item">
                                <img className='footer-img' src='https://pngimg.com/uploads/mastercard/mastercard_PNG23.png' alt="" />
                            </li>
                            <li className="footer-item">
                                <img className='footer-img' src='https://play-lh.googleusercontent.com/DvCn_h3AdLNNDcv3ftqTqP83gw6h65GMEPg3x6u788wB3F3ENNFcHgrHcWJNOPy4epg' alt="" />
                            </li>
                            <li className="footer-item">
                                <img className='footer-img' src='https://sharetmedia.com/wp-content/uploads/2021/08/unnamed-2.png' alt="" />
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 mb-4">
                        <h5>CHÍNH SÁCH</h5>
                        <ul className='footer-list-policy'>
                            <li className="footer-item">
                                Chính sách bảo mật
                            </li>
                            <li className="footer-item">
                                Chính sách vận chuyển
                            </li>
                            <li className="footer-item">
                                Chính sách đổi trả, bảo hành
                            </li>

                        </ul>
                    </div>
                    <div className="col  col-md-4">
                        <h5>CONTACT INFO</h5>
                        <ul className='footer-list-policy'>
                            <li className="footer-item">
                                <FaMapMarkerAlt /> 203 Fake St. Mountain View, California, USA


                            </li>
                            <li className="footer-item">
                                <BsFillTelephoneFill />  +2 392 3929 210
                            </li>
                            <li className="footer-item">
                                <GrMail /> email@domain.com


                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer