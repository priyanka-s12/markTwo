const readlineSync = require('readline-sync');

const chalk = require('chalk');

function blankLine() {
  console.log();
}

console.log(chalk.red("Welcome to Basics of Nutrition quiz...!!!"))
blankLine();

console.log("-----Quiz Rules-----");
console.log("1. It contains total 10 questions.")
console.log("2. Quiz has divided into 3 levels.")
console.log("3. Level 1 and 2 has 3 questions, and 3 has 4 questions.")
console.log("4. Each correct answer gets 1 point.")
console.log("5. If your all answers are correct, you will go to next level and so on")
console.log("6. so enjoy and have fun")

blankLine();
var userName = readlineSync.question(chalk.cyanBright("What is your name ? "));
console.log(chalk.cyanBright("Hi " + userName));

if (readlineSync.keyInYN("Are you excited to play this Quiz ?") === false) {
  console.log(chalk.bold.yellowBright("See you next time !!!"));
  process.exit();
}

console.log(chalk.blueBright("------Let's begin Level 1------"));
blankLine();

var score = 0;
var scoreBoard = [{
  name: "Piyu",
  score: 5,
}, {
  name: "Sandeep",
  score: 4,
}]

function showScoreBorad() {
  console.log("Score Board");
  console.log("------------")
  for (var i = 0; i < scoreBoard.length; i++) {
    console.log(scoreBoard[i].name + " " + scoreBoard[i].score)
  }
}

function compareScore() {
  for (var i = 0; i < scoreBoard.length; i++) {
    const player = scoreBoard[i];
    if (score > player.score) {
      console.log("Congratulations ! You have beatean " + player.name + "'s score");
      console.log("Please send the screenshot of your score to admin to update the scoreboard")
      break;
    }
    console.log("Sorry ! You haven't beaten a high score. Better luck next time !")
    break;
  }
}

function play(question, options, correctAnswer) {

  console.log(chalk.bold.magenta(question));

  const index = readlineSync.keyInSelect(options, "Enter your answer");
  const userAnswer = options[index];

  console.log("Your answer :" + userAnswer);
  console.log("Correct answer :" + correctAnswer);

  if (correctAnswer === userAnswer) {
    console.log(chalk.green("You are right !"));
    score = score + 1;
  }
  else {
    console.log(chalk.red("Sorry ! You are wrong."));
  }
  console.log(chalk.yellowBright("Your current Score : " + score));
  blankLine();
}

//array of questions Object
var questionsList = [{
  question: "1. Which food is rich in vitamin c ?",
  options: ["citrus fruit", "milk", "potato", "banana"],
  correctAnswer: "citrus fruit",
}, {
  question: "2. The richest source of calcium is ?",
  options: ["milk", "pineapple", "carrot"],
  correctAnswer: "milk",
}, {
  question: "3. 2023 is declared as world millet year?",
  options: ["true", "false"],
  correctAnswer: "true",
}, {
  question: "4. Rice has the highest component of which nutrient ?",
  options: ["protein", "fats", "carbs"],
  correctAnswer: "carbs",
}, {
  question: "5. Which is the most consumed vegetable in the world ?",
  options: ["okra", "potato", "carrot", "capcicum"],
  correctAnswer: "potato",
}, {
  question: "6. Iron and vitamin c food together enhances iron absorption",
  options: ["true", "false"],
  correctAnswer: "true",
}, {
  question: "7. dry fruits and flax seeds are rich in ______",
  options: ["omega 3", "vitamin A", "Vitamnin B12", "none of the above"],
  correctAnswer: "omega 3",
}, {
  question: "8. Include ______ rich food in your diet to avoid constipation",
  options: ["protein", "fats", "fibre", "none of the above"],
  correctAnswer: "fibre",
}, {
  question: "9. What corn is ?",
  options: ["fruits", "vegetable", "grain"],
  correctAnswer: "grain",
}, {
  question: "10. Which of the following is NOT millet ?",
  options: ["Jowar", "Ragi", "Maida", "Wheat", "Rice"],
  correctAnswer: "Maida",
}];

//loop
for (var i = 0; i < questionsList.length; i++) {
  if (i === 3) {
    if (score >= 3) {
      console.log(chalk.cyanBright("Congratulations ! you have entered in Level 2"));
    } else {
      console.log(chalk.cyanBright("Sorry you have failed in Level 1."))
      break;
    }
  }

  if (i === 6) {
    if (score >= 6) {
      console.log(chalk.cyanBright("Congratulations ! you have entered in Level 3"))
    } else {
      console.log(chalk.cyanBright("Sorry you have failed in Level 2"))
      break;
    }
  }
  blankLine();
  play(questionsList[i].question, questionsList[i].options, questionsList[i].correctAnswer)
}

blankLine();
showScoreBorad();
blankLine();
console.log(chalk.blueBright("Your Final Score :" + score));
blankLine();
compareScore();
