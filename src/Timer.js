import { min, timer } from 'd3';
import React, { useState, useEffect } from 'react';
import { globals } from './Global';

const Timer = ({ startMins = 0, startSeconds = 0, whenTimerEnds, startTheGame }) => {
    const [minutes, setMinutes] = useState(startMins);
    const [seconds, setSeconds] = useState(startSeconds);

    useEffect(() => {
        let timerInterval;
        startMins = globals.gameVal_timeLimit === 90? 1 : 0;
        startSeconds = globals.gameVal_timeLimit;
        if (startTheGame) {
            timerInterval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                else {
                    if (minutes === 0) {
                        clearInterval(timerInterval);

                        //handle when timer ends
                        if (whenTimerEnds) {
                            //callback
                            whenTimerEnds();
                        }
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        }


        return () => clearInterval(timerInterval);
    }, [minutes, seconds, whenTimerEnds, startTheGame]);


    function quizTimeDone() {
        //grade quiz
    }


    return (
        <div>
            <h2>Remaining Quiz Time</h2>
            <div style={{ fontSize: '35px' }}>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </div>
        </div>
    );
}

export default Timer;