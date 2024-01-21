import * as handTrack from "handtrackjs";
import * as calls from'./calls';


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


export function videoStart(video) {
  console.log("test3");
handTrack.startVideo(video).then((status) => {
  if (status) {
    navigator.getUserMedia(
      { video: {} },
      (stream) => {
        video.srcObject = stream;

        setInterval(() => {
          runDetection(video);
        }, 1000);

      },
      (err) => console.log(err)
    );
  }
});
}



export function runDetection(video) {
  console.log(video);
  // console.log("test 4")
  model.detect(video).then((predictions) => {
    if (predictions.length > 0) {
      if (PhoneOnSwitch){
      PhoneOnSwitch = false;
      console.log(predictions);
      console.log(PhoneOnSwitch);
      calls.sendMessageToBackend();
      }
  }
    else{
      if (!PhoneOnSwitch) {
       PhoneOnSwitch = true;
      }
       console.log(PhoneOnSwitch);
     }
  });
}
handTrack.load(modelParams).then((lmodel) => {
  model = lmodel;
});
