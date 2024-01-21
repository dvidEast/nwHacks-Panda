import '../styles/Home.css'
import * as handTrack from "handtrackjs";
import React, {useEffect, useRef} from 'react';
import {videoStart} from '../motion'

export default function Home() {
  const video = document.querySelector("#video-feed");

  useEffect(() => {
    console.log('test')
    var canvas = document.querySelector("canvas")
    console.log("test2", canvas)
    const video = document.querySelector("#video-feed");
    videoStart(video)
  }, [])

  return (
    <>
    <video id="video-feed"> </video>
      <canvas id="canvas">
        Your browser does not support the canvas tag.
      </canvas>
      
    </>
  )
}