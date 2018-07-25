
$(document).ready(function() {
    var prettygood1=document.getElementById("prettygood");
    
    


    //function that creates the start button screen
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
    //function that is triggered by the start button, and generates the HTML 
    $("body").on("click", ".start-button", function(event){
        event.preventDefault(); 
        generateHTML();
        timerWrapper();
        
    
    });
    $("body").on("click", ".answer", function(event){
        
    
    selectedAnswer = $(this).text();
    if(selectedAnswer === correctAnswers[questionCounter]) {
        clearInterval(theClock);
        generateWin();
        
        
    }
    else {
        clearInterval(theClock);
        generateLoss();
    }
    }); 
    
    $("body").on("click", ".reset-button", function(event){
    
    resetGame();
    }); 
    
    });  
    
    function generateLossDueToTimeOut() {
    unansweredTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.gif'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);  
    }
    
    function generateWin() {
    correctTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000);  
    }
    
    function generateLoss() {
    incorrectTally++;
    gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/wrong.gif'>";
    $(".mainArea").html(gameHTML);
    setTimeout(wait, 4000); 
    }
    
    