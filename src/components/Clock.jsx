import React, {useEffect, useState} from 'react';

export default function Clock(props) {
    
    // set state
    const [clock, setClock] = useState(0);

    // useEffect, used to increment the clock value
    useEffect(() => {
        // the interval
        const id = setInterval(() => (setClock(clock + 1)), 1000);

        // return the cleanup
        return () => clearInterval(id);
    })

    return (
        <div className="clock" >
            <span>{props.title ?? 'Page Up-time Clock'}:  <strong>{clock}</strong></span>
        </div>
    );
}