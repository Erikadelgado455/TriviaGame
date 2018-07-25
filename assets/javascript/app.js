
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
    function generateHTML() {
        gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>" + answerArray[questionCounter][0] + "</p><p class='answer'>"+answerArray[questionCounter][1]+"</p><p class='answer'>"+answerArray[questionCounter][2]+"</p><p class='answer'>"+answerArray[questionCounter][3]+"</p>";
        $(".mainArea").html(gameHTML);
        }
          
        function wait() {
        if (questionCounter < 7) {
        questionCounter++;
        generateHTML();
        counter = 30;
        timerWrapper();
        }
        else {
            finalScreen();
        }
      }
        function timerWrapper() {
      theClock = setInterval(thirtySeconds, 1000);
      function thirtySeconds() {
          if (counter === 0) {
              clearInterval(theClock);
              generateLossDueToTimeOut();
          }
          if (counter > 0) {
              counter--;
          }
          $(".timer").html(counter);
      }
      }
      
      function finalScreen() {
      gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
      $(".mainArea").html(gameHTML);
      }
      
      function resetGame() {
      questionCounter = 0;
      correctTally = 0;
      incorrectTally = 0;
      unansweredTally = 0;
      counter = 30;
      generateHTML();
      timerWrapper();
      }
      
      var startScreen;
      var gameHTML;
      var counter = 30;
      var questionArray = ["What was the address Dory was looking for on Finding Nemo?", "Who played the character of Edward Scissorhands?", "The 2014 film Maleficent is based on which story?", "Who was Naruto's first sensei?", "Who played Frodo Baggins in Lord Of The Rings?", "What year did 'Thriller' come out?", "What actor plays the role of Wolverine in X-men?", "On the TV sitcom 'Its Always sunny in Philadelphia' who says the iconic line 'May i offer you a nice egg in this trying time?' ?"];
      var answerArray = [["P. Sherman 42 Wallaby Way Sidney", "124 Conch St.", "12 Grimmauld Place", "420 Paper St."], ["Brad Pitt","Johnny Depp","Charlie Sheen","Tom Cruise"], ["Cinderella", "Snow White", "Sleeping Beauty", "Rapunzel"], ["Kakashi Sensei","Sarutobi Sensei","Iruka Sensei","Minato Sensei"], ["Daniel Radcliffe", "Macaulay Culkin", "Sean Astin", "Elijah Wood"], ["1982","1980","1985","1987"], ["Dwayne Johnson", "Hugh Jackman", "Jason Mamoa", "Ben Affleck"], ["Charlie","Dee","Mac","Frank"]];
      var imageArray = ["<img class='center-block img-right' src='assets/images/dory.gif'>", "<img class='center-block img-right' src='assets/images/edward-watermelonhands.gif'>", "<img class='center-block img-right' src='assets/images/maleficent.gif'>", "<img class='center-block img-right' src='assets/images/iruka.gif'>", "<img class='center-block img-right' src='assets/images/frodo.gif'>", "<img class='center-block img-right' src='assets/images/thriller.gif'>", "<img class='center-block img-right' src='assets/images/wolverine.gif'>", "<img class='center-block img-right' src='assets/images/frank.gif'>"];
      var correctAnswers = ["P. Sherman 42 Wallaby Way Sidney", "Johnny Depp", "Sleeping Beauty", "Iruka Sensei", "Elijah Wood", "1982", "Hugh Jackman", "Frank"];
      var questionCounter = 0;
      var selecterAnswer;
      var theClock;
      var correctTally = 0;
      var incorrectTally = 0;
      var unansweredTally = 0;
      
      
    