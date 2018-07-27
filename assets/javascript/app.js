window.onload=function(){
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
        {
            question:"The 2014 film Maleficent is based on which story?",
            answer:{
                A:'Cinderella',
                B:'Snow White',
                C:'Sleeping Beauty',
                D:'Rapunzel',
            },
            correct:'C',
        },
        {
            question:"Who was Naruto's first sensei?",
            answer:{
                A:'Kakashi Sensei',
                B:'Sarutobi Sensei',
                C:'Iruka Sensei',
                D:'Minato Sensei',
            },
            correct:'C'
        },
        {
            question:"Who played Frodo Baggins in Lord Of The Rings?",
            answer:{
                A:'Daniel Radcliffe',
                B:'Macaulay Culkin',
                C:'Sean Astin',
                D:'Elijah Wood',
            },
            correct:'D',
        },
        {
            question:"What year did 'Thriller' come out?",
            answer:{
                A:'1982',
                B:'1980',
                C:'1985',
                D:'1987',
            },
            correct:'A',
        },
        {
            question:"What actor plays the role of Wolverine in X-men?",
            answer:{
                A:'Dwayne Johnson',
                B:'Hugh Jackman',
                C:'Jason Mamoa',
                D:'Ben Affleck',
            },
            correct:'B',
        },
        {
            question:"On the TV sitcom 'Its Always sunny in Philadelphia' who says the iconic line 'May i offer you a nice egg in this trying time?",
            answer:{
                A:'Charlie',
                B:'Dee',
                C:'Mac',
                D:'Frank',
            },
            correct:'D',
        }
        
    ];

    function generateTriviaquiz(){
        output=[];
        questions.forEach((currentquestion,questionnumber)=>{
            choices=[];
            for(letter in currentquestion.choices){
                choices.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">${letter} :${currentQuestion.choices[letter]}
                     </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${choices.join("")} </div>`
            );
        });
        function showresults(questions,triviaquizcontainer,resultcontainer) {
            
        }
        showquestions(questions,triviaquizcontainer);
        
        submitbutton.addEventListener('click',showresults);
    
    
    function showresults() {
        var answercontainer=triviaquizcontainer.querySelectorAll(".answers");
        questions.forEach((currentquestion,q))
        var numcorrect=0;
        for(var i=0;i<questions.length;i++){
            useranswer=(answercontainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            if(useranswer===questions[i].correct){
                numcorrect++;
                answercontainer[i].style.color='lightgreen';
            }
            else{
                answercontainer[i].style.color='red';
            }
        }
        resultcontainer.innerHTML=numcorrect+'out of'+questions.length;
    
    var triviaquizcontainer=document.getElementById('Trivia-quiz');
    var resultcontainer=document.getElementById('show-results');
    var submitbutton=document.getElementById('submit-button');
   
}