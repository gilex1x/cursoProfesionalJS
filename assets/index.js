import MediaPalyer from "./MediaPalyer.js"
const video = document.querySelector("video")
const button = document.querySelector("button")
const player = new MediaPalyer({el:video});//enviamos el video
button.onclick =()=>player.play();
  