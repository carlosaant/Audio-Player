let audio_p = document.getElementById("audio-player");

//-----------
let play_control = document.getElementById("play-ctrl");
let stop_control = document.getElementById("stop-ctrl");
let volume_btn = document.getElementById("volume-btn");
let volume_control = document.getElementById("RangVolume");
let audio_time = document.getElementById("audio-timeline");
let audio_most_time = document.getElementById("time-audio");

//-------

play_control.addEventListener("click", play_ctrl);
stop_control.addEventListener("click", stop_ctrl);
volume_control.addEventListener("input", volumerang_c); //or change
volume_btn.addEventListener("click", volume_mute);
audio_p.addEventListener("timeupdate", timeline_c); //timer

//-------
onload = function () {
  audio_most_time.innerHTML = "00:00";
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

function porcento(valor, maximo) {
  var x = parseInt((valor * 100) / maximo);
  return x;
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  minutes = minutes >= 10 ? minutes : "0" + minutes;
  seconds = Math.floor(seconds % 60);
  seconds = seconds >= 10 ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
}

function timeline_c() {
  audio_most_time.innerHTML = formatTime(parseInt(audio_p.currentTime));
  //----
  audio_time.style.width =
    porcento(audio_p.currentTime, audio_p.duration) + "%";
}
