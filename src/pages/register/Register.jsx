import React from 'react'
import { Link } from 'react-router-dom'
import '../login/login.scss'
import { useForm } from "react-hook-form"

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className='container pt-3'>
            <div className='row'>
                <div className='col form'>
                    <h3>Đăng kí</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='form-input'>
                        <div className='form-input-container'>
                            <input {...register('email', {
                                required: true,
                                pattern: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
                            })}
                                type='email'
                                placeholder='Email'
                            />
                            {errors.email && <span className='form-input-err'>Email không hợp lệ</span>}

                        </div>

                        <div className='form-input-container'>

                            <input {...register('username', {
                                required: true
                            })}
                                type='text'
                                placeholder='Tên đăng nhập'
                            />
                        </div>
                        <div className='form-input-container'>
                            <input {...register('password', {
                                required: true,
                                minLength: 6
                            })}
                                type='password'
                                placeholder='Mật khẩu'
                            />
                            {errors.password && <span className='form-input-err'>Mật khẩu tối đa 6 kí tự</span>}
                        </div>

                        <button type='submit'>Đăng kí</button>
                        <h4>Bạn đã có tài khoản?
                            <Link to='/login'>Đăng nhập</Link>
                        </h4>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register