import '../styles/Home.css'
import * as handTrack from "handtrackjs";
import React, {useEffect, useRef} from 'react';
import {videoStart} from '../motion'



export default function Home() {

  // const stopCamera = () => {
  //     handTrack.stopVideo(video);
  // };
  // Navigator.getUserMedia =
  // Navigator.getUserMedia ||
  // Navigator.webkitUserMedia ||
  // Navigator.mozUserMedia ||
  // Navigator.msUserMedia;

  // const modelParams = {
  // flipHorizontal: true, // flip e.g for video
  // imageScaleFactor: 0.7, // reduce input image size for gains in speed.
  // maxNumBoxes: 20, // maximum number of boxes to detect
  // iouThreshold: 0.5, // ioU threshold for non-max suppression
  // scoreThreshold: 0.79, // confidence threshold for predictions.
  // };

  // const video = document.querySelector("#video");
  // const audio = document.querySelector("#audio");
  // const canvas = document.querySelector("canvas");
  // const context = canvas.getContext("2d");

  // let model;

  // handTrack.startVideo(video).then((status) => {
  // if (status) {
  //   navigator.getUserMedia(
  //     { video: {} },
  //     (stream) => {
  //       video.srcObject = stream;
  //       setInterval(runDetection, 1000);
  //     },
  //     (err) => console.log(err)
  //   );
  // }
  // });

  // function runDetection() {
  // model.detect(video).then((predictions) => {
  //   if (predictions.length > 0) {
  //     console.log(predictions);
  //     audio.play();
  //   }
  // });
  // }

  // handTrack.load(modelParams).then((lmodel) => {
  // model = lmodel;
  // }); 

  const video = document.querySelector("#video-feed");

  useEffect(() => {
    console.log('test')
    var canvas = document.querySelector("canvas")
    console.log("test2", canvas)
    const video = document.querySelector("#video-feed");
    videoStart(video)
  })

  return (
    <>
      <video id="video-feed"></video>
      <canvas id="canvas">
      </canvas>
      
    </>
  )
}