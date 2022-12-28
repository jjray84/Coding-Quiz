// These are the different variables that I will use
var time = 75;  //amount of time for the quiz
var start = document.querySelector(".start-button");  //for the timer to move
var scores = 0; //to show score list???
var button = document.querySelector(".start-button");
var timer = document.querySelector("#timer");
var secondsLeft = 75
// var button1 = createButton("btn1"); //These are for selection of answers
// var button2 = createButton("btn2"); //These are for selection of answers
// var button3 = createButton("btn3"); //These are for selection of answers
// var button4 = createButton("btn4"); //These are for selection of answers


// This is the list of questions for the variable questionPool array.

var questionPool = [
    {
       text: "Arrays in Javascript can be used to store ______.",
       choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
       correctAnswer: "option3",
    },

    {
        text: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
        correctAnswer: "option0",
    },

    {
        text: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1 - Javascript", "2 - console.log", "3 - Terminal/bash", "4 - For loops"],
        correctAnswer: "option1",
    },

    {
        text: "Commonly used data types do NOT include:",
        choices: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
        correctAnswer: "option1",
    },

    {
        text: "The condition of an if/else statement is enclosed within ______.",
        choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Parentheses", "4 - Square Brackets"],
        correctAnswer: "option2",
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
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

start-button.addEventListener("click", function() {
    console.log("Timer");
    setTime();
} )

function questionOne() {
    questionPool[0];
    console.log(questionPool[0].text);
}

questionOne();

function questionTwo() {
  questionPool[1];
  console.log(questionPool[1].text);
}

questionTwo();

function questionThree() {
  questionPool[2];
  console.log(questionPool[2].text);
}

questionThree();

function questionFour() {
  questionPool[3];
  console.log(questionPool[3].text);
}

questionFour();

function questionFive() {
  questionPool[4];
  console.log(questionPool[4].text);
}

questionFive();