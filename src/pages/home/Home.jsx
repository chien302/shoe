import './home.scss'
import React from 'react'
import VideoBanner from '../../components/video/VideoBanner'
import BestSale from '../../components/bestsale/BestSale'
import TopRate from '../../components/toprate/TopRate'
const Home = () => {
    return (
        <div className='home'>
            <VideoBanner />
            <div>
                <BestSale />
                <TopRate />
            </div>
        </div>
    )
}

export default Home