diffrence = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
 video = createCapture(VIDEO);
 video.size(550, 500);

 canvas = createCanvas(500, 500);
 canvas.position(560, 90);

 PoseNet = ml5.poseNet(video, modelLoaded);
 PoseNet.on('pose', gotPoses);
}

function draw() {
 background('#0000ff');
}

function modelLoaded() {
 console.log("PoseNet Is Initialized!");
}

function gotPoses (results)
{
 if(results.lenght > 0)
 {
  console.log(results);
 }
}