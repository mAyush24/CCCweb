import React from 'react'
import Triangle from '../assets/Triangle1.png'
import Circle from '../assets/Circle.png'
import Rectangle from '../assets/Rectangle1.png'
import css from '../css/Line.module.css'

function Line() {
    return (
        <div>
            <div className={css.line}>
                <span></span>
                <img style={{ width: '6rem' }} src={Rectangle} alt="" />
                <img style={{ width: '3rem' }} src={Circle} alt="" />
                <img style={{ width: '3rem' }} src={Triangle} alt="" />
            </div>
        </div>
    )
}

export default Line