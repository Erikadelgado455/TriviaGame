
var seconds=120;
var counter=setInterval(timer, 1000);
function timer()
{seconds=seconds-1;
if (seconds <= 0)
{
    answers();
    location.reload();
    clearInterval(counter);
    return;

    
}

document.getElementById("timer").innerHTML=seconds + " secs"; 
};
function answers(){

	var question1=document.getElementById("trivia-quiz").question1.value;
	var question2=document.getElementById("trivia-quiz").question2.value;
    var question3=document.getElementById("trivia-quiz").question3.value;
    var question4=document.getElementById("trivia-quiz").question4.value;
    var question5=document.getElementById("trivia-quiz").question5.value;
    var question6=document.getElementById("trivia-quiz").question6.value;
    var question7=document.getElementById("trivia-quiz").question7.value;
    var question8=document.getElementById("trivia-quiz").question8.value;
	var correct=0;


	if (question1=="P. Sherman 42 Wallaby Way Sidney") {
		correct++;
    }
	if (question2=="Johnny Depp") {
		correct++;
    }
    if (question3=="Sleeping Beauty") {
		correct++;
    }
    if (question4=="Iruka Sensei") {
		correct++;
    }
    if (question5=="1982") {
		correct++;
    }
    if (question6=="Hugh Jackman") {
		correct++;
    }
    if (question7=="Elijah Wood") {
		correct++;
    }
    if (question8=="Frank") {
		correct++;
    }
    alert(correct + " correct!")
    if(confirm("would you like to retry?")){   
        location.reload();
    } else{

    }
}