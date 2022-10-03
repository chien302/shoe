import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import './header.scss'
import { useAuth } from '../../hook/useAuth'
import { authentication } from '../../firebase-config'
import { signOut } from 'firebase/auth'
const Header = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [searchText, setSearchText] = useState('')
    const formRef = useRef()
    const { isLoggedIn, userName } = useAuth()
    // console.log(isLoggedIn)
    // console.log(userName)


    // console.log(formRef.current.value)
    const handleOpen = () => {
        setIsOpened(!isOpened)
        // console.log(isOpened)
    }

    const products = useSelector((state) => state.cart.products)

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        setSearchText(e.target.value)

        if (formRef.current) {
            clearTimeout(formRef.current)
        }
        formRef.current = setTimeout(() => {
            const formValue = {
                searchText: e.target.value
            }
            // console.log(formValue)
        }, 1000)

    }
    const handleSignOut = () => {
        signOut(authentication)
            .then(() => {
                window.confirm('Do you want to sign out ?')
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        // <section>
        <div className="container">
            <div className="row header">
                {isOpened && (
                    <div className=' header-content'>
                        <div className='modal' onClick={() => setIsOpened(!isOpened)}>

                        </div>
                        <ul className='header-content-list'>
                            <li className='header-content-item'>MStore</li >
                            <li className='header-content-item'>
                                <Link onClick={() => setIsOpened(!isOpened)} to='/'>Trang chủ</Link>
                            </li>
                            <li className='header-content-item'>
                                <Link onClick={() => setIsOpened(!isOpened)} to='/products'>Sản phẩm</Link>
                            </li>
                            <li className='header-content-item'>
                                <Link onClick={() => setIsOpened(!isOpened)} to='/contact'>Liên hệ</Link>
                            </li>
                            {isLoggedIn ? (
                                <li className='header-content-item header-icon-list-pointer' onClick={handleSignOut}>
                                    Đăng xuất
                                </li>
                            ) : (
                                <li className='header-content-item'>
                                    <Link onClick={() => setIsOpened(!isOpened)} to='/login'>Đăng nhập</Link>
                                </li>

                            )}
                        </ul>

                    </div>

                )}
                <div className="col header-content" onClick={handleOpen}>
                    <AiOutlineMenu />
                </div>
                <div className='col header-content'>
                    <h3 className="header-content-title">MStore</h3>
                </div>
                <div className='col-6 header-contentres'>
                    <ul className=''>
                        <li className=''>
                            <Link to='/'>Trang chủ</Link>
                        </li>
                        <li className=''>
                            <Link to='/products'>Sản phẩm</Link>
                        </li>
                        <li className=''>
                            <Link to='/contact'>Liên hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className='col header-content header-content--relative'>
                    <div className='header-icon-list header-icon-cart'>
                        <Link to='/cart'>
                            <AiOutlineShoppingCart />
                            {products.length > 0 && (
                                <div className='header-icon-num'>{products.length}</div>
                            )}
                        </Link>
                    </div>
                    {isLoggedIn ? (
                        <div className='header-icon-list header-icon-list--pointer '>
                            <img className='header-icon-list-img' src={userName.photoURL} alt='' />
                            <h4>{userName.displayName}</h4>
                            <div className='header-icon-list-infor'>
                                <p>Tài khoản</p>
                                <button onClick={handleSignOut}>Đăng xuất</button>
                            </div>
                        </div>
                    ) : (
                        <div className='header-icon-list'>
                            <Link to='/login'>
                                <BsPersonFill />
                            </Link>
                        </div>

                    )}
                </div>

            </div>
        </div>
        // </section>
    )
}

export default Header