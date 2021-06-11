var l=document.querySelectorAll("button").length;
var  i=0;
while(i<l){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
i++;

}







function handleClick(){
  if(this.textContent=="w"){
    var audio= new Audio("tom-1.mp3");
    audio.play();
    animate(this.textContent);
  }
  else if(this.textContent=="a"){
    var audio= new Audio("tom-2.mp3");
    audio.play();
    animate(this.textContent);
  }
  else if(this.textContent=="s"){
    var audio= new Audio("tom-3.mp3");
    audio.play();
    animate(this.textContent);
  }
  else if(this.textContent=="d"){
    var audio= new Audio("tom-4.mp3");
    audio.play();
    animate(this.textContent);
  }
  else if(this.textContent=="j"){
    var audio= new Audio("kick-bass.mp3");
    audio.play();
    animate(this.textContent);
  }
  else if(this.textContent=="k"){
    var audio= new Audio("snare.mp3");
    audio.play();
    animate(this.textContent);
  }
  else if(this.textContent=="l"){
    var audio= new Audio("crash.mp3");
    audio.play();
      animate(this.textContent);
  }



}

document.addEventListener("keydown",function(event){
  if(event.key=="w" || event.key=="W"){
    var audio= new Audio("tom-1.mp3");
    audio.play();
      animate(event.key);
  }
  else if(event.key=="a" || event.key=="A"){
    var audio= new Audio("tom-2.mp3");
    audio.play();
      animate(event.key);
  }
  else if(event.key=="s" || event.key=="S"){
    var audio= new Audio("tom-3.mp3");
    audio.play();
      animate(event.key);
  }
  else if(event.key=="d" || event.key=="D"){
    var audio= new Audio("tom-4.mp3");
    audio.play();
      animate(event.key);
  }
  else if(event.key=="j" || event.key=="J"){
    var audio= new Audio("kick-bass.mp3");
    audio.play();
      animate(event.key);
  }
  else if(event.key=="k" || event.key=="K"){
    var audio= new Audio("snare.mp3");
    audio.play();
      animate(event.key);
  }
  else if(event.key=="l" || event.key=="L") {
    var audio= new Audio("crash.mp3");
    audio.play();
    animate(event.key);
  }

}

);
function animate(ckey){
  var q=document.querySelector("."+ckey);
  q.classList.add("pressed");
  setTimeout(function(){
    q.classList.remove("pressed");
  },
100);
}
