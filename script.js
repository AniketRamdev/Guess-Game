'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function for repeatative message code
const displayMessage = function (message) {
  document.querySelector().textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // No Input

  if (!guess) {
    displayMessage('No Input !');

    // When Player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number !!');
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // Optimized solution for below code
    else if (guess !== secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent =
          guess > secretNumber ? 'Too High' : 'Too Low';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'You Lost The Game :(';
        document.querySelector('.score').textContent = 0;
      }
    }
    //<--------------- DRY PRINCEPLE------------>
    // When you lose
    // } else if (guess > secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too High';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost The Game :(';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // } else if (guess < secretNumber) {
    //   if (score > 1) {
    //     document.querySelector('.message').textContent = 'Too Low';
    //     score = score - 1;
    //     document.querySelector('.score').textContent = score;
    //   } else {
    //     document.querySelector('.message').textContent = 'You Lost The Game :(';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
//

const bgcolor = (document.querySelector('body').style.backgroundColor =
  '#60b347');
document.querySelector('.number').style.width = '30rem';
//
//
