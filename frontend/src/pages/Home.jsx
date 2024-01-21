import '../styles/Home.css'
import * as handTrack from "handtrackjs";
import React, {useEffect, useState} from 'react';
import {videoStart} from '../motion'
import {useSearchParams} from 'react-router-dom'
import { Link } from "react-router-dom"

export default function Home() {
  const video = document.querySelector("#video-feed");
  const [searchParams, setSearchParams] = useSearchParams();
  const num = searchParams.get("number");
 

  useEffect(() => {
    console.log('test')
    var canvas = document.querySelector("canvas")
    console.log("test2", canvas)
    const video = document.querySelector("#video-feed");
    videoStart(video, num)
  }, [])


  // ----- timer stuff

  const [time, setTime] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

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
    return `${String(inputMinutes).padStart(2, '0')}:${String(inputSeconds).padStart(2, '0')}`;
  };

  const startTimer = () => {
    if (inputTime > 0) {
      setTime(inputTime);
      setTimerRunning(true);
    }
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerRunning(false);
    setTime(0);
    setInputTime(0);
  };

  return (
    <>
      <nav className="navbar">
        <p className="nav-logo">pandAI</p>
        <Link to="/">Home</Link>
      </nav>

      <div id='tab'>
        <div className="circle-container">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div id='home-container'>
          <div className='video-container'>
            <video className="content" id="video-feed"></video>
          </div>

          <div className='timer-container'>
            <h1 className='countdown-title'>Input Your Study Duration and Start Studying</h1>
            {!timerRunning && (
              <input
                type="text" // Change the type to "text"
                placeholder="Enter time in minutes:seconds"
                value={formatTime()}
                onChange={(e) => {
                  const input = e.target.value;

                  if (input.length <= 2) {
                    setInputMinutes = 0;
                    setInputSeconds = input;
                    formatTime()
                  } else {
                    setInputMinutes = string(input)[3] + string(input)[2]
                    setInputSeconds = string(input)[1] + string(input)[0]
                    formatTime()
                  }
                }}
              />
            )}
            {timerRunning && <h3 className='countdown'>{formatTime()}</h3>}
            <div className='buttons-container'>
              {!timerRunning && <button onClick={startTimer}>Start</button>}
              {timerRunning && <button onClick={stopTimer}>Stop</button>}
              <button onClick={resetTimer}>Reset</button>
            </div>
          </div>
        </div>

      </div>
    </>

  // return (
  //   <>
  //   <video id="video-feed"> </video>
  //     <canvas id="canvas">
  //       Your browser does not support the canvas tag.
  //     </canvas>
      
  //   </>
  )
}