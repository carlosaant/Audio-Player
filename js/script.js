let audio_p = document.getElementById("audio-player");

//-----------
let play_control = document.getElementById("play-ctrl");
let stop_control = document.getElementById("stop-ctrl");

//-------

play_control.addEventListener("click", play_ctrl);
stop_control.addEventListener("click", stop_ctrl);

function play_ctrl() {
  if (audio_p.paused) {
    audio_p.play();
    play_control.setAttribute("src", "./assets/icons/button-pause.png");
  } else {
    audio_p.pause();
    play_control.setAttribute("src", "./assets/icons/button-continuar.png");
  }
}

function stop_ctrl() {
  if (audio_p.currentTime > 0) {
    audio_p.pause();
    audio_p.currentTime = 0;
    play_control.setAttribute("src", "./assets/icons/button-play.png");
  }
}
