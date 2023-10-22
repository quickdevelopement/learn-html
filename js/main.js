var myHtmlVideo = document.getElementById("htmlVideo");

function playPause(){
    if(myHtmlVideo.paused){
        myHtmlVideo.play();
    }else{
        myHtmlVideo.pause();
    }
}
function big(){
    myHtmlVideo.width = 560;
}

function small(){
    myHtmlVideo.width = 320
}
function normal(){
    myHtmlVideo.width = 420;
}