import MediaPlayer from './Mediaplayer.js';
import AutoPlay from './plugins/AutoPlay.js';
const video = document.querySelector("video");
const player = new MediaPlayer ({
  el:video, 
  plugins:[new AutoPlay()]
});//enviamos el video

const buttonPlay = document.querySelector("#playButton");
const buttonMute = document.querySelector("#soundButton");
buttonPlay.onclick =()=>player.actionButton();
buttonMute.onclick=()=>player.soundButton();
  