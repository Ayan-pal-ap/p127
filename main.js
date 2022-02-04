song1="";
song2="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    poseNet=ml5.poseNet(video,all_is_well);
    poseNet.on("pose",gotans);
}
function all_is_well(){
    console.log("all is well");
}
function gotans(result){
    if(result.lenght>0){
     console.log(result);
    }
}
function play(){
 song1.play();
}
function play2(){
    song2.play();
   }
function preload(){
    song1=loadSound("My_fav.mp3");
    song2=loadSound("music2.mp3");

}
