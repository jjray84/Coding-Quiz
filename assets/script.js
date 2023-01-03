// These are the different variables that I will use 
var start = document.querySelector(".start-button");  //for the timer to move
var button = document.querySelector(".start-button"); //not sure why, but both of these are needed for the timer to start.
var timer = document.querySelector("#timer");
var secondsLeft = 75
var score = 0;
var isRight = false;
var currentQuestionIndex = 0;
var timerInterval;

// This is the list of questions.
var questionPool = [
    {
       question: "Arrays in Javascript can be used to store ______.",
       options: ['Numbers and Strings', 'Other Arrays', 'Booleans', 'All of the above'],
       correctAnswer: 'All of the above',
    },

    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        options: ['Commas', 'Curly Braces', 'Quotes', 'Parentheses'],
        correctAnswer: 'Quotes',
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ['JavaScript', 'Terminal/Bash','for loops', 'console.log()'],
        correctAnswer: 'console.log()',
    },

    {
        question: "Commonly used data types do NOT include:",
        options: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        correctAnswer: 'Booleans',
    },

    {
        question: "The condition of an if/else statement is enclosed within ______.",
        options: ['Quotes', 'Curly Braces', 'Parentheses', 'Square Brackets' ],
        correctAnswer: 'Curly Braces',
    },
]  

console.log(questionPool);

function setTime() {
    // Sets interval in variable
      timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        secondsLeft = 0 
        timer.textContent = secondsLeft
        endQuiz();
      }
  
    }, 1000);
  }

button.addEventListener("click", function() {
    console.log("Timer");
    setTime();
    // document.getElementById("quiz").innerHTML = "";
    displayQuestion();
} )

function checkAnswer(userAnswer) {
  console.log(userAnswer);
  if (userAnswer !== questionPool[currentQuestionIndex].correctAnswer) {
    secondsLeft -= 10;
  } 
  currentQuestionIndex++;
  if (currentQuestionIndex == questionPool.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function displayQuestion() {
  var currentQuestion = questionPool[currentQuestionIndex]
 var title = document.createElement("h1");
 title.innerText = currentQuestion.question
 document.getElementById("quiz").innerHTML = "";
 document.querySelector('#quiz').append(title)
 
 for(let i = 0; i < currentQuestion.options.length; i++){
   const btn = document.createElement('button')

   btn.innerText = currentQuestion.options[i];
   btn.onclick = function() {
    checkAnswer(currentQuestion.options[i]);
   }
   document.querySelector('#quiz').append(btn)
 }
};

function submitScore() {
 var userName = document.getElementById("initials").value;
    if (userName == "") {
      alert("Please enter your initials");
    } else {
      // [{name:xx, score:xx}] Array Objects
      var newScore = {
        "name":userName,
        "score":secondsLeft
      }
      
      var previousScores = JSON.parse(localStorage.getItem('scores')) || []; 

      previousScores.push(newScore);
      previousScores.sort(function (a,b) { return b.score-a.score});

      localStorage.setItem('scores', JSON.stringify(previousScores));
      window.location.href="highscores.html"   
    }
} 

function endQuiz() {
  clearInterval(timerInterval);
  timer.textContent = secondsLeft
  document.getElementById("quiz").innerHTML = `
  <div>
    <p>Please enter your initials</p>
    <input type="text" maxlength="3" id="initials">
    <button onclick="submitScore()">Submit Score</button>
  </div>
  `
}