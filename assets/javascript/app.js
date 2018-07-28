
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
};
function answers(){

	var question1=document.trivia-quiz.question1.value;
	var question2=document.trivia-quiz.question2.value;
    var question3=document.trivia-quiz.question3.value;
    var question4=document.trivia-quiz.question4.value;
    var question5=document.trivia-quiz.question5.value;
    var question6=document.trivia-quiz.question6.value;
    var question7=document.trivia-quiz.question7.value;
    var question8=document.trivia-quiz.question8.value;
	var correct= 0;


	
}