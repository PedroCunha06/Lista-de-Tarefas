import React, { useState, useEffect } from "react";
import moment from "moment";


function StartTime() {

    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            const currentTime = moment().format("HH:mm:ss");
            setTime(currentTime);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="clock">
            <h3>{time}</h3>
        </div>
    )
};



export default StartTime