song1="";
song2="";
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide()
}
function preload(){
    song1=loadSound("Sami-Sami.mp3");
    song2=loadSound("Srivalli.mp3");
}

function draw(){
    image(video,0,0,600,530);
}
function play_song(){
    song1.play();
}