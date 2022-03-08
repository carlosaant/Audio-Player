let audio_p = document.getElementById("audio-player");

//-----------
let play_control = document.getElementById("play-ctrl");
let stop_control = document.getElementById("stop-ctrl");
let volume_btn = document.getElementById("volume-btn");
let volume_control = document.getElementById("RangVolume");

//-------

play_control.addEventListener("click", play_ctrl);
stop_control.addEventListener("click", stop_ctrl);
volume_control.addEventListener("input", volumerang_c); //or change
volume_btn.addEventListener("click", volume_mute);

//-------
onload = function () {
  audio_p.volume = volume_control.value / 100;
};

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

function volume_mute() {
  if (audio_p.muted) {
    volumerang_c();
  } else {
    volume_btn.setAttribute("src", "./assets/icons/button-vol-none.png");
    audio_p.muted = true;
  }
}

function volumerang_c() {
  //if se for igual a 0 mutar e mudar o icone
  if (volume_control.value == 0) {
    volume_btn.setAttribute("src", "./assets/icons/button-vol-none.png");
  } else if (volume_control.value >= 0 && volume_control.value <= 50) {
    volume_btn.setAttribute("src", "./assets/icons/button-vol-baixo.png");
  } else if (volume_control.value < 100) {
    volume_btn.setAttribute("src", "./assets/icons/button-vol-medio.png");
  } else volume_btn.setAttribute("src", "./assets/icons/button-vol-alto.png");
  audio_p.muted = false;
  audio_p.volume = volume_control.value / 100;
}
