import '../styles/Home.css';
import * as handTrack from 'handtrackjs';
import React, { useEffect, useState } from 'react';
import { videoStart } from '../motion';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import panda from '/panda_teacher.png'

export default function Home() {
  // ----- Video Setup
  const [searchParams, setSearchParams] = useSearchParams();
  const num = searchParams.get('number');

  useEffect(() => {
    const video = document.querySelector('#video-feed');
    videoStart(video, num);
  }, [num]);

  // ----- timer stuff

  const [time, setTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerPause, setTimerPause] = useState(false)

  useEffect(() => {
    let interval;

    if (timerRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timerRunning, time]);

  const formatTime = () => {
    return `${String(Math.floor(time / 60)).padStart(2, '0')}:${String(time % 60).padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (time>0){
      setTimerRunning(true);
    }
  };

  const stopTimer = () => {
    setTimerRunning(false);
    setTimerPause(true);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTimerPause(false);
    setTime(0);
  };

  return (
    <>
      <nav className="home-nav">
        <p className="nav-logo">pandAI</p>
        <Link onClick={handTrack.stopVideo(video)} to="/">Home</Link>
      </nav>

      <div id="tab">
        <div className="circle-container">
          <div className="circle1 circle"></div>
          <div className="circle2 circle"></div>
          <div className="circle3 circle"></div>
        </div>

        <div id="home-container">
          <div className="video-container">
            <video className="content" id="video-feed"></video>
          </div>

          <div className="timer-container">
            <h1 className="countdown-title">Pick a study period and press start to begin!</h1>
            {!timerRunning && !timerPause && (
              <input
                type="Text"
                placeholder="ex) 1234 -> 12 min 34 sec"
                onChange={(e) => {
                  const input = e.target.value;

                  if (input.length <= 2) {
                    setTime(Number(input));
                  } else if (input.length == 4){
                    setTime(Number(input[0] + input[1]) * 60 + Number(input[2] + input[3]));
                  } else {
                    setTime(Number(input[0]) * 60 + Number(input[1] + input[2]));
                  }
                }}
              />
            )}
            {(timerRunning || timerPause) && <h3 className="countdown">{formatTime()}</h3>}
            <div className="buttons-container">
              {!timerRunning && <button onClick={startTimer}>Start</button>}
              {timerRunning && <button onClick={stopTimer}>Stop</button>}
              <button onClick={resetTimer}>Reset</button>
            </div>
          </div>
        </div>
      </div>

      <img className='home-panda' src={panda} />
    </>
  );
}
