import React from 'react'
import './videobanner.scss'
const VideoBanner = () => {
    return (
        <div>
            <video loop autoPlay muted playsInline className="video">
                <source src='https://cdn.sanity.io/files/qa41whrn/prod/d177236afc280be2ac111506fcb71b68ef5a1d60.mp4' />
            </video>
        </div>
    )
}

export default VideoBanner