import '../styles/Home.css'
import * as handTrack from "handtrackjs";
import React, {useEffect, useRef} from 'react';
import {videoStart} from '../motion'
import {useSearchParams} from 'react-router-dom'


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

  return (
    <>
    <video id="video-feed"> </video>
      <canvas id="canvas">
        Your browser does not support the canvas tag.
      </canvas>
      
    </>
  )
}