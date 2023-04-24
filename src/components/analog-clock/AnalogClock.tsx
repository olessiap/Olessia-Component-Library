import './analogclock.scss';
import { useEffect, useState } from 'react';

export const AnalogClock = () => {
    const [date, setDate] = useState(new Date());
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        console.log(new Date());
        const today = new Date();
        const hour = today.getHours();
        const minute = today.getMinutes();
        const second = today.getSeconds();

        setHour(hour * 30);
        setMinute(minute * 6);
        setSecond(second * 6);
    }, [])


    return (
        <div>
            <div className="clock-outer">
                <div className="clock-inner">
                    <div className="hand hour" style={{ transform: `rotate(${hour}deg)` }}></div>
                    <div className="hand minute" style={{ transform: `rotate(${minute}deg)` }}></div>
                    <div className="hand second" style={{ transform: `rotate(${second}deg)` }}></div>
                </div>
            </div>
        </div>
    );
}