// These are the different variables that I will use
var time = 75;
var timer;
var questionPool; [q1, q2, q3, q4, q5];
var scores;
var finish = false;
var button1 = createButton("btn1");
var button2 = createButton("btn2");
var button3 = createButton("btn3");
var button4 = createButton("btn4");


// This is the list of questions for the variable questionPool.
var q1 = {
    text: "Arrays in Javascript can be used to store ______.",
    choices: ["1 - Numbers and strings", "2 - Other Arrays", "3 - Booleans", "4 - All of the above",],
    correctAnswer: "option3",
};

var q2 = {
    text: "String values must be enclosed within ______ when being assigned to variables.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Commas", "4 - Parentheses"],
    correctAnswer: "option0",
};

var q3 = {
    text: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1 - Javascript", "2 - console.log", "3 - Terminal/bash", "4 - For loops"],
    correctAnswer: "option1",
};

var q4 = {
    text: "Commonly used data types do NOT include:",
    choices: ["1 - Booleans", "2 - Alerts", "3 - Strings", "4 - Numbers"],
    correctAnswer: "option1",
};

var q5 = {
    text: "The condition of an if/else statement is enclosed within ______.",
    choices: ["1 - Quotes", "2 - Curly Brackets", "3 - Parentheses", "4 - Square Brackets"],
    correctAnswer: "option2",
};