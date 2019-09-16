import { useState, useEffect } from 'react';

const limitSteps = 100;
const delaySteps = 150;

export default function useLongPress(callback = () => { }, ms = 500) {
    const [startLongPress, setStartLongPress] = useState(false);
    const [delay, setDelay] = useState(ms);

    useEffect(() => {
        let timerId;
        if (startLongPress) {
            timerId = setInterval(() => {
                callback();

                if (delay > limitSteps) {
                    setDelay(prevState => prevState - delaySteps);
                }
            }, delay);
        } else {
            clearInterval(timerId);
            setDelay(() => ms);
        }

        return () => {
            clearInterval(timerId);
        };
    }, [startLongPress, delay, callback, ms]);

    return {
        onMouseDown: () => setStartLongPress(true),
        onMouseUp: () => setStartLongPress(false),
        onMouseLeave: () => setStartLongPress(false),
        onTouchStart: () => setStartLongPress(true),
        onTouchEnd: () => setStartLongPress(false),
    };
}