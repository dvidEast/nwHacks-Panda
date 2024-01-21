import * as handTrack from "handtrackjs";


Navigator.getUserMedia =
  Navigator.getUserMedia ||
  Navigator.webkitUserMedia ||
  Navigator.mozUserMedia ||
  Navigator.msUserMedia;
const modelParams = {
  flipHorizontal: true, // flip e.g for video
  imageScaleFactor: 0.7, // reduce input image size for gains in speed.
  maxNumBoxes: 20, // maximum number of boxes to detect
  iouThreshold: 0.5, // ioU threshold for non-max suppression
  scoreThreshold: 0.90, // confidence threshold for predictions.
};

// const audio = document.querySelector("#audio");
// const canvas = document.querySelector("canvas");
// let canvas = document.getElementById("canvas");
// console.log(document);
// const context = canvas.getContext("2d");
// console.log("line 20", context);
let model;

let aboveThresholdDuration = 0;
const thresholdDurationLimit = 5;

export function videoStart(video) {
  console.log("test3");
handTrack.startVideo(video).then((status) => {
  if (status) {
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        video.srcObject = stream;
        setInterval(runDetection, 1000);
      },
      (err) => console.log(err)
    );
  }
});
}



export function runDetection() {
  model.detect(video).then((predictions) => {
    if (predictions.length > 0) {
      aboveThresholdDuration += 1;
      console.log(predictions);
      if (aboveThresholdDuration >= thresholdDurationLimit) {
      // Add text notify here
      aboveThresholdDuration = 0;
    }
  }
    else{
       aboveThresholdDuration = 0;
       console.log(aboveThresholdDuration);
     }
  });
}
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
});
