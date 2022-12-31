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
       text: "Arrays in Javascript can be used to store ______.",
       choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
       correctAnswer: "option3",
    },

    {
        text: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
        correctAnswer: "option2",
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
        sendMessage();
      }
  
    }, 1000);
  }

start-button.addEventListener("click", function() {
    console.log("Timer");
    setTime();
} )

//These are the individual questions.
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

function addElement(index) {
  var newPara = document.createElement("p");
  newPara.className = "newQuestion";
  var newUl = document.createElement("ul");
  newPara.textContent = questionOne[index].q;
  for (let i = 0; i < questionPool.length; i++);
  var newLi = textContent = questionPool.choices[i];
  newUl.appendChild(newLi);
  questionPool.append(newPara, newUl);
  document.querySelectorAll("li").forEach((li)=> {
    aEL(li, index)
  })
}

//aEL means adding an event listener.
function aEL(element, index) {
  element.addEventListener("click", () => {
    var correctAnswer = element.textContent;
    
    //checks for correct answer
    checkWin(correctAnswer, index);

    //checks if all questions have been gone through
    if (index + 1 === questionPool.length) {
      //to show score and leave initials or name
      scorePage();

      //stops the timer after last question
      clearInterval(timer);
      countdown = 0;
      setTimeText();
    } else { //continues through next question
      questionPool.innerHTML = " ";
      addElement(index + 1);
    }
  })
}

