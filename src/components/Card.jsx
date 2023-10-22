import css from '../css/Card.module.css'
import React from 'react'

function Card(props) {
    return (
        <div>
            <div className={css.outerBorder}>
                <div className={css.card}>
                    <div className={css.innerBorder}>
                        <p style={{ fontWeight: '900', fontSize: '22px' }}>Get Your Ticket Now !!</p>
                        <h2 className={css.slogan}>{props.slogan}</h2>
                        <p style={{ fontWeight: '600' }}>PREMIUM TICKET</p>
                        <p className={css.price}>₹ {props.price}</p>
                        <div className={css.image}>
                            <img src={props.image} alt="Ajey Nagar" />
                            <span className={css.name}>{props.name}</span>
                            <div className={css.discount}>
                                <span>20% OFF</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card