import MediaPlayer from './Mediaplayer.js';
import AutoPlay from '.plugins/Autoplay.js';
const video = document.querySelector("video");
const player = new MediaPlayer ({el:video, plugin:[new AutoPlay]});//enviamos el video
const button = document.querySelector("button");
button.onclick =()=>player.actionButton();
  