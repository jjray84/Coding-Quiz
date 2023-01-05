// These are the different variables that I will use 
var button = document.querySelector(".start-button"); 
var timer = document.querySelector("#timer");
var secondsLeft = 75
var score = 0;
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
//This function sets the timer to count down 1 second at a time.
function setTime() {
    // Sets interval in variable
      timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
      if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        secondsLeft = 0; 
        timer.textContent = secondsLeft;
        endQuiz();
      }
  
    }, 1000);
  }

//This function starts the timer on clicking start and displays the first question.
button.addEventListener("click", function() {
    console.log("Timer");
    setTime();
    displayQuestion();
} )

//This function checks for the correctness of the answer and changes the color of the selected button for a visual cue
function checkAnswer(event, userAnswer) {
  console.log(userAnswer);
  if (userAnswer !== questionPool[currentQuestionIndex].correctAnswer) {
    secondsLeft -= 10;
    event.target.setAttribute('style', "background-color: red");
  } else {
    event.target.setAttribute('style', "background-color: green");
  }
//This part will cycle through the question index of questionPool or end the quiz if the last question is answered.
  currentQuestionIndex++;
  if (currentQuestionIndex == questionPool.length) {
    endQuiz();
  } else { //this sets a delay of 1 second to see the button color change
    setTimeout(() => {
      displayQuestion();
    }, 1000);
  }
};

//This function created an <h1> in the HTML for the question to be displayed on the page
function displayQuestion() {
  var currentQuestion = questionPool[currentQuestionIndex];
  var title = document.createElement("h1");
  title.innerText = currentQuestion.question;
  document.getElementById("quiz").innerHTML = ""; //takes the id of quiz from the HTML file and changes it to an empty string for the displayQuestion function to show
  document.querySelector('#quiz').append(title);
  var div = document.createElement("div");//creates a div for the answers to populate in
  div.setAttribute("class", "selector");
  document.querySelector('#quiz').append(div);

 for(let i = 0; i < currentQuestion.options.length; i++){ //this loops through all of the options in questionPool to ensure each option is shown
   const btn = document.createElement('button');

   btn.innerText = currentQuestion.options[i];
   btn.onclick = function(event) {
    checkAnswer(event, currentQuestion.options[i]);//this will check if the answer is correct
   }
   div.append(btn);
 }
};

//This function will allow the user to input their initials for display on the score page.
function submitScore() {
 var userName = document.getElementById("initials").value;
    if (userName == "") { //This will alert the user to input their initials if they leave the field blank
      alert("Please enter your initials");
    } else {
      var newScore = {
        "name":userName,
        "score":secondsLeft,
      }
      //This pulls any scores in local storage, then allows them to be sorted with the new score, and displayed in numerical order based on score.
      var previousScores = JSON.parse(localStorage.getItem('scores')) || []; 

      previousScores.push(newScore);
      previousScores.sort(function (a,b) { return b.score-a.score});

      localStorage.setItem('scores', JSON.stringify(previousScores));
      window.location.href="highscores.html";   
    }
};

//This function ends the quiz, stops the timer, and creates a new <div> for the initials to be placed and sets the max length of the user input to 3.
function endQuiz() {
  clearInterval(timerInterval);
  timer.textContent = secondsLeft;
  document.getElementById("quiz").innerHTML = `
  <div id="userInitials">
    <p class="userInit">Please enter your initials:</p>
    <input type="text" maxlength="3" id="initials">
    <button onclick="submitScore()" id="submit">Submit Score</button>
  </div>
  `
};