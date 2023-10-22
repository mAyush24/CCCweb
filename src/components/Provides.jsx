import css from '../css/Provides.module.css'
import React from 'react'

function Provides() {
    return (
        <div>
            <div className={css.cardItems}>
                    <div className={css.card} style={{ padding: '10px', backgroundColor: '#141B24', width: '300px' }}>
                        <div className={css.innerBorder}>
                            <div style={{ padding: '10px 20px' }}>
                                <div className={css.num}>07</div>
                                <h2 style={{ color: '#FF9996' }} className={css.topic}>CELEB SPEAKERS</h2>
                            </div>
                        </div>
                    </div>
                    <div className={css.card} style={{ padding: '10px', backgroundColor: '#141B24', width: '300px' }}>
                        <div className={css.innerBorder}>
                            <div style={{ padding: '10px 20px' }}>
                                <div className={css.num}>05</div>
                                <h2 style={{ color: '#EFD140' }} className={css.topic}>CELEB SPEAKERS</h2>
                            </div>
                        </div>
                    </div>
                    <div className={css.card} style={{ padding: '10px', backgroundColor: '#141B24', width: '300px' }}>
                        <div className={css.innerBorder}>
                            <div style={{ padding: '10px 20px' }}>
                                <div className={css.num}>10</div>
                                <h2 style={{ color: '#8154FF' }} className={css.topic}>CELEB SPEAKERS</h2>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Provides