import React from 'react'
import css from '../css/Gallery.module.css'
import Image from '../assets/hidden2.jpg'
import Img1 from '../assets/hidden1.jpg'
import Img2 from '../assets/hidden3.jpg'
import Line from './Line'

function Gallery() {
    return (
        <div className={css.space} >
            <div className={css.first}>
                <div>
                <h1 className={css.heading}><span style={{ background: '#8154FF', borderRadius: '60px', padding: '5px 25px', textAlign: 'center' }}>CATCH</span> THE GLIMPSES OF THE <span style={{ color: '#EFD140' }}>EVENT</span></h1>
                <img className={css.mobile} src={Image} alt="" />
                <Line/>
                </div>

                <img className={css.laptop} src={Image} alt="" />
            </div>

            <div className={css.second}>
                <div className={css.card}>
                    <div className={css.innerBorder} style={{ height: '100%' }}>
                        <p className={css.album}>VIEW ALBUMS</p>
                    </div>
                </div>
                <div className={`${css.img}`}>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Gallery