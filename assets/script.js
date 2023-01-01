// These are the different variables that I will use 
var start = document.querySelector(".start-button");  //for the timer to move
var button = document.querySelector(".start-button"); //not sure why, but both of these are needed for the timer to start.
var timer = document.querySelector("#timer");
var secondsLeft = 75
var score = 0;
var isRight = false;

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

        correctAnswer: 'Curly Braces',
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

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }

start-button.addEventListener("click", function() {
    console.log("Timer");
    addElement(0)
    setTime();
} )





//These are the individual questions. 
function question1() {
    questionPool[0];
    console.log(questionPool[0].question);
}

question1();

function question2() {
  questionPool[1];
  console.log(questionPool[1].question);
}

question2();

function question3() {
  questionPool[2];
  console.log(questionPool[2].question);
}

question3();

function question4() {
  questionPool[3];
  console.log(questionPool[3].question);
}

question4();

function question5() {
  questionPool[4];
  console.log(questionPool[4].question);
}

question5();




function addElement(index) {
  var currentQuestion = questionPool[index]
 var title = document.createElement("h1");
 title.innerText = currentQuestion.question

 document.querySelector('#quiz').append(title)
 
 for(let i = 0; i < currentQuestion.options.length; i++){
   const btn = document.createElement('button')

   btn.innerText = currentQuestion.options[i];
   document.querySelector('#quiz').append(btn)
 }
};
