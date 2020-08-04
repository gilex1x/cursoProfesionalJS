
function MediaPlayer(config){//Le pasamos un objeto
  this.media= config.el;//aca llamammos al video
  this.plugins=config.plugins || [];
  this._initplugins();//Inicializo los plugins
}

MediaPlayer.prototype._initplugins=function(){
  this.plugins.forEach(element => {
      element.run(this);
  });
}

MediaPlayer.prototype.mute=function(){
  this.media.muted=true;
 }

 MediaPlayer.prototype.unmute=function(){
  this.media.muted=false;
 }
 
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

MediaPlayer.prototype.soundButton= function(){
  if (this.media.muted){
    this.unmute();
  }else{
    this.mute();
  }
}


export default MediaPlayer;