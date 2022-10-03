import React from 'react'
import './layout.scss'
import Routers from '../../routes/Routers'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = () => {
    return (
        <>
            <Header />
            <div className='content'>
                <Routers />
            </div>
            <Footer />
        </>
    )
}

export default Layout