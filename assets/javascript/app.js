var seconds=60;
var counter=setInterval(timer, 1000);
function timer()
{seconds=seconds-1;
  if (seconds <= 0)
  {
     clearInterval(counter);
     return;
  }

 document.getElementById("timer").innerHTML=seconds + " secs"; 
}