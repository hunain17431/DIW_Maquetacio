/* Document JavaScript */
  
  const video = document.getElementById("video2");  /* Ens guardem el video en una constant */

  document.getElementById("btn-play").onclick = () => {  /* Codi que fa que quan es doni click al botó de play es posi en marxa el vídeo*/
    video.play();
  };

  document.getElementById("btn-pause").onclick = () => {  /* Codi que fa que quan es doni click al botó de resumir es pari el vídeo*/
    video.pause();
  };

  document.getElementById("btn-volum").onclick = () => {  /* Codi que fa que quan es doni click al botó de volum s'escolti el volum*/
    video.muted = false;
  };

  document.getElementById("btn-mute").onclick = () => {  /* Codi que fa que quan es doni click al botó de mute silencia el video*/
    video.muted = true; 
  };

/* Funció per la barra del menú */
window.onscroll = function() {scrollFunction()};    

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {   /* Propietats per quan és fa el scroll */
    document.getElementById("barra").style.padding = "15px 10px";  /* Propietat padding */
    document.getElementById("barra").style.height = "90px"; /* Propietat altura */
    document.getElementById("barra").style.fontSize = "25px";   /* Propietat lletra */
    
  } else {  /* Propietat que s'aplica quan no és fa el scroll */
    document.getElementById("barra").style.height = "80px"; /* Propietat altura */
    document.getElementById("barra").style.padding = "0px 20px";  /* Propietat padding */
  }
}