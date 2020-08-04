
function MediaPalyer(config){//Le pasamos un objeto
  this.media= config.el;//aca llamammos al video
}
/*Los metodos tambien se pueden crear fuera del prototype 
con objeto.prototype.metodo = funcion(){}
*/

MediaPalyer.prototype.play = function(){//Creamos el metodo de la "clase"
  if(this.media.paused){
    this.media.play();
  }else{
    this.media.pause();
  }
}

export default MediaPalyer;