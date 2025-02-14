
function caughtSpeeding(birthday, speed) {
  if(birthday){
    speed -=5;
    }
    
    if(speed >80){
    console.log(2);
    }else if(speed >60 ){
      console.log(1);
    }else{
      console.log(0);
    }
  
}

caughtSpeeding(true, 86);
