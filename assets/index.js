const video = document.querySelector("video")
const button = document.querySelector("button")

function MediaPalyer(config){//Le pasamos un objeto
  this.media= config.el;//aca llamammos al video
}
/*Los metodos tambien se pueden crear fuera del prototype 
con objeto.prototype.metodo = funcion(){}
*/
debugger;
MediaPalyer.prototype.play = function(){//Creamos el metodo de la "clase"
  if(this.media.paused){
    this.media.play();
  }else{
    this.media.pause();
  }
}

const player = new MediaPalyer({el:video});//enviamos el video

button.onclick =()=>player.play();
  