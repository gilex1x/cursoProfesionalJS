import MediaPlayer from './Mediaplayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';
const video = document.querySelector("video");

const player = new MediaPlayer ({
  el:video, 
  plugins:[new AutoPlay(), new AutoPause()]
});//enviamos el video

const buttonPlay = document.querySelector("#playButton");
const buttonMute = document.querySelector("#soundButton");
buttonPlay.onclick =()=>player.actionButton();
buttonMute.onclick=()=>player.soundButton();

if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error=> {
    console.log(error.message)}
    )
}