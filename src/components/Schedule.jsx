import css from '../css/Schedule.module.css'
import React, { useEffect } from "react";
import { useState } from "react";

function Schedule(props) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    const deadline = "October,30,2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor(time / (1000 * 60 * 60)) % 24);
        setMins(Math.floor(time / 1000 / 60) % 60);
        setSecs(Math.floor(time / 1000) % 60);
    };
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={css.container}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className={css.outerBorder}>
                    <div className={css.card}>
                        <div className={css.innerBorder}>
                            <p >Coming Soon</p>
                        </div>
                        {/* <div className={css.innerBorder}>
                            <p className={css.days}>{days < 10 ? "0" + days : days}</p> <span> : </span>
                            <p className={`${css.hours} ${css.blue}`}>{hours < 10 ? "0" + hours : hours}</p> <span> : </span>
                            <p className={css.mins}>{mins < 10 ? "0" + mins : mins}</p> <span> : </span>
                            <p className={`${css.secs} ${css.blue}`}>{secs < 10 ? "0" + secs : secs}</p>
                        </div> */}
                        <p className={css.view}>VIEW SCHEDULE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schedule