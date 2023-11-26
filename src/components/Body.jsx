import css from '../css/Body.module.css'
import React from 'react'
import Card from './Card'
import Image1 from '../assets/hidden2.jpg'
import Triangle from '../assets/Polygon.png'

function Body() {
    return (
        <div>
            <div className={css.container}>
                <div className={css.body}>
                    <div className={css.title}>
                        <h1>BRINGING TOGETHER</h1>
                        {/* <h1>TOGETHER</h1> */}
                    </div>
                    <div className={css.subtitle}>
                        <p><span style={{ color: '#36AEB2' }}>CREATORS</span>, <span style={{ color: '#EFD140' }}>ENTERPRENEAURS</span>,<br /> AND <span style={{ color: '#FF9996' }}>MENTORS</span> AT YOUR <br />OWN CAMPUS</p>
                    </div>
                </div>
                <Card name='??????????' image={Image1} slogan='TO KAISE HAIN AAP LOG' price='200' />
            </div>

            <div className={css.divider}><div className={css.border}>FLAGSHIP FEATS</div></div>
            <div className={css.pin}>
                <div className={css.border2}>
                    <h1>FLAGSHIP </h1>
                    <h1> FEATS</h1>
                </div>
            </div>

            <div className={css.container}>
                <div className={css.items}>
                    <div className={css.about}>
                        <div className={css.heading}>
                            <span>₹</span>
                            <h2>ENTREPRENEAURS</h2>
                        </div>
                        <div className={css.subheading}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, blanditiis?</p>
                        </div>
                        <div className={css.circle}></div>
                    </div>
                    <div className={css.about}>
                        <div className={css.heading}>
                            <span>₹</span>
                            <h2>ENTREPRENEAURS</h2>
                        </div>
                        <div className={css.subheading}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, blanditiis?</p>
                        </div>
                        <div className={css.rectangle}></div>
                    </div>
                    <div className={css.about}>
                        <div className={css.heading}>
                            <span>₹</span>
                            <h2>ENTREPRENEAURS</h2>
                        </div>
                        <div className={css.subheading}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, blanditiis?</p>
                        </div>
                        <img className={css.triangle} src={Triangle} alt="" />
                    </div>
                    <div className={css.about}>
                        <div className={css.heading}>
                            <span>₹</span>
                            <h2>ENTREPRENEAURS</h2>
                        </div>
                        <div className={css.subheading}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, blanditiis?</p>
                        </div>
                        <div className={css.circle}></div>
                    </div>
                    <div className={css.about}>
                        <div className={css.heading}>
                            <span>₹</span>
                            <h2>ENTREPRENEAURS</h2>
                        </div>
                        <div className={css.subheading}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, blanditiis?</p>
                        </div>
                        <img className={css.triangle} src={Triangle} alt="" />
                    </div>
                    <div className={css.about}>
                        <div className={css.heading}>
                            <span>₹</span>
                            <h2>ENTREPRENEAURS</h2>
                        </div>
                        <div className={css.subheading}>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, blanditiis?</p>
                        </div>
                        <div className={css.rectangle}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body