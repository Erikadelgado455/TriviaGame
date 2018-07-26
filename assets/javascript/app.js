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

Triviaquiz.$(correctanswers)=function(option){
    return option === this.answer;
}
function Triviaquiz(questions){
    this.correctanswers=0;
    this.questions=questions;
    this.questionindex=0;
}
Triviaquiz.$(questionindex)=function(){
    return this.questions[this.questionindex]
}
Triviaquiz.$(ended)=function(){
    return this.questions.length === this.questionindex;
}
Triviaquiz.$(guess)=function(answer) {
    this.questionindex++;
    if (this.questionindex().correctanswers(answer)) {
        this.correctanswers++;
    }
}
function populate(){
    if (Triviaquiz.ended()){
        correctanswers();
    }
    else{
        showquestion
        var element=document.getElementById("question");
        element.innerHTML = Triviaquiz.questionindex().text;
    }

}

var questions=[
    new Question ("What was the address Dory was looking for on Finding Nemo?",["P. Sherman 42 Wallaby Way Sidney", "124 Conch St.", "12 Grimmauld Place", "420 Paper St."],"P. Sherman 42 Wallaby Way Sidney"),
    new Question ("Who played the character of Edward Scissorhands?",["Brad Pitt","Johnny Depp","Charlie Sheen","Tom Cruise"],"Johnny Depp"),
    new Question("The 2014 film Maleficent is based on which story?",["Cinderella", "Snow White", "Sleeping Beauty", "Rapunzel"],"Sleeping Beauty"),
    new Question("Who was Naruto's first sensei?",["Kakashi Sensei","Sarutobi Sensei","Iruka Sensei","Minato Sensei"],"Iruka Sensei"),
    new Question("Who played Frodo Baggins in Lord Of The Rings?",["Daniel Radcliffe", "Macaulay Culkin", "Sean Astin", "Elijah Wood"],"Elijah Wood"),
    new Question("What year did 'Thriller' come out?",["1982","1980","1985","1987"],"1982"),
    new Question("What actor plays the role of Wolverine in X-men?",["Dwayne Johnson", "Hugh Jackman", "Jason Mamoa", "Ben Affleck"],"Hugh Jackman"),
    new Question("What actor plays the role of Wolverine in X-men?", "On the TV sitcom 'Its Always sunny in Philadelphia' who says the iconic line 'May i offer you a nice egg in this trying time?' ?",["Charlie","Dee","Mac","Frank"],"Frank"),
]
var Triviaquiz=questions;
populate();