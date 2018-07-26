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
function question(text,options,answer){
    this.text=text;
    this.options=options;
    this.answer=answer;

}
question.$(correct)=function(option){
    return option === this.answer;
}
function Triviaquiz(questions){
    this.correctanswers=0;
    this.question=question;
    this.questions=0;
}
Triviaquiz.$(questions)=function(){
    return this.question[this.questions]
}
Triviaquiz.$(ended)=function(){
    return this.question.length === this.questions;
}
Triviaquiz.$(guess)=function(answer) {
    this.questions++;
    if (this.questions().correctanswers(answer)) {
        this.correct++;
    }
}
var questions=[]