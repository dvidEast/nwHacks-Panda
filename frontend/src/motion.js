import * as handTrack from "handtrackjs";
import * as calls from'./calls';
import * as Home from "./pages/Home";



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
let PhoneOnSwitch = true;
let PomodoraOn = true;
// let userNumber = 7787886024;


// export function sendNumberToMotion(num) {
//   console.log("num: " + num)
//   userNumber = num;
// }

export function videoStart(video, num) {
  console.log("test3");
handTrack.startVideo(video).then((status) => {
  if (status) {
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        video.srcObject = stream;

        setInterval(() => {
          runDetection(video, num);
        }, 1000);

      },
      (err) => console.log(err)
    );
  }
});
}



export function runDetection(video, userNumber) {
  console.log(video);
  // console.log("test 4")
  model.detect(video).then((predictions) => {
    if (PomodoraOn) {
    if (predictions.length > 0) {
      if (PhoneOnSwitch){
      PhoneOnSwitch = false;
      console.log(predictions);
      console.log(PhoneOnSwitch);
      calls.sendMessageToBackend(userNumber);
      }
  }
    else{
      if (!PhoneOnSwitch) {
       PhoneOnSwitch = true;
      }
       console.log(PhoneOnSwitch);
     }
  }
  else {
    
  }
}
);
}
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
});
