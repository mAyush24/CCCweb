import React from 'react'
import Logo from '../assets/Logo.png'
import store from '../assets/Store.svg'
import calendar from '../assets/Calendar.svg'
import hand from '../assets/Hand.svg'
import css from '../css/Navbar.module.css'

function Navbar() {
    return (
        <div>
            <nav className={css.navbar}>
                <div className={css.logo}>
                    <img className={css.logoImg} src={Logo} alt="logo" />
                    <div className={`${css.logoName} ${css.laptop}`}>
                        <p>CRAETOR'S CAMPUS</p>
                        <p>CONNECT</p>
                    </div>
                </div>

                <div className={css.info}>
                    <div className={css.icons} >
                        <img src={store} alt="" />
                        <p style={{ cursor: 'pointer' }}>EVENT</p>
                    </div>
                    <div className={css.icons} >
                        <img src={hand} alt="" />
                        <p style={{ cursor: 'pointer' }}>SPEAKERS</p>
                    </div>
                    <div className={css.icons} >
                        <img src={calendar} alt="" />
                        <p style={{ cursor: 'pointer' }}>SCHEDULE</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar