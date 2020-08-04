
function MediaPlayer(config){//Le pasamos un objeto
  this.media= config.el;//aca llamammos al video
  this.plugin=config.plugin||[];
}
/*Los metodos tambien se pueden crear fuera del prototype 
con objeto.prototype.metodo = funcion(){}
*/

MediaPlayer.prototype.play = function(){//Creamos el metodo de la "clase"
  this.media.play();
}
MediaPlayer.prototype.pause=function(){
  this.media.pause();
}

MediaPlayer.prototype.actionButton=function(){
  if(this.media.paused){
    this.play();
  }else{
    this.pause();
  }
}




export default MediaPlayer;