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
var questions=[
    {
        question:"What was the address Dory was looking for on Finding Nemo?",
        answer:{
            A:'P. Sherman 42 Wallaby Way Sidney',
            B:'124 Conch St.',
            C:'12 Grimmauld Place',
            D:'420 Paper St.',
        },
        correct: 'A',
    },
    {
        question:"Who played the character of Edward Scissorhands?",
        answer:{
            A:'Brad Pitt',
            B:'Johnny Depp',
            C:'Charlie Sheen',
            D:'Tom Cruise',
        },
        correct:'B',

    },
]
