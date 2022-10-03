import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './login.scss'
import { FcGoogle } from 'react-icons/fc'
import { authentication } from '../../firebase-config'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const navigate = useNavigate()
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((result) => {
                navigate('/')
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col form'>
                    <h3>Đăng nhập</h3>
                    <form className='form-input'>
                        <input type='text' placeholder='Tên đăng nhập' />
                        <input type='password' placeholder='Mật khẩu' />
                        <button type='submit'>Đăng nhập</button>
                        <h4>Bạn chưa có tài khoản?
                            <Link to='/register'>Đăng kí</Link>
                        </h4>
                        <h5 onClick={signInWithGoogle} className='login-social'>
                            <FcGoogle />
                            Google
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login