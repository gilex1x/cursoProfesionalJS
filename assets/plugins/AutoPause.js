//Clae de forma sintaxys sugar
class AutoPause{
  constructor(){
    this.threshold=0.25;
    this.handleIntersection= this.handleIntersection.bind(this);
    this.handleVisibility= this.handleVisibility.bind(this);
  }
  
  //Metodo de la forma sintaxys sugar
  run(player){
    this.player=player;
    const observer = new IntersectionObserver(this.handleIntersection,{
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
    document.addEventListener("visibilitychange",this.handleVisibility);
  }

  handleIntersection(entries){
    const entrada = entries[0];
    const visible=entrada.intersectionRatio >this.threshold;
    if (visible){
      this.player.play();
      console.log('Lo veo')
    }else{
      this.player.pause();
      console.log('NO lo veo')
    }

  }

  handleVisibility(){
    const isVisible=document.visibilityState == "visible";
    if (isVisible){
      this.player.play();
    }else{
      this.player.pause();
    }
  }  
}

export default AutoPause;