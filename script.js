'use strict';
let number = Math.trunc(Math.random() * 3 + 1);

let score = 20;
const highScore = [];
//The Check btn
document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector(`.guess`).value);
    //When there is no input
    if (!guess) {
        displayMessage(`⛔️ No number`);
        // When player win
    } else if (guess === number) {
        displayMessage(`🎉 Correct Number`);
        displaySecretNumber(number);
        score++;
        displayScore(score);
        highScore.push(document.querySelector('.score').textContent);
        displayHighScore(findMaxArray(highScore));
        changeStyling('#60b347', '30rem');
    } else {
        displayMessage(guess > number ? `📈 To high` : `📉 To low`);
        score--;
        displayScore(score);

        if (score < 1) {
            displayMessage('You lost');
            displayScore(0);
        }
    }
});
// The Play agian btn
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    number = Math.trunc(Math.random() * 3 + 1);
    displayScore(score);
    displayMessage(`Start guessing... `);
    document.querySelector(`.guess`).value = '';
    displaySecretNumber('?');
    changeStyling('#222', '15rem');
});

//----------- FUNTIONS ARE BELOW-------------
//find the highest score
const findMaxArray = arr => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};
//Changing the game message
const displayMessage = mess => {
    document.querySelector(`.message`).textContent = mess;
};
//Changing the score
const displayScore = score => {
    document.querySelector(`.score`).textContent = score;
};
const displaySecretNumber = number => {
    document.querySelector(`.number`).textContent = number;
};
const displayHighScore = highScore => {
    document.querySelector(`.highscore`).textContent = highScore;
};
const changeStyling = (color, width) => {
    document.querySelector('body').style.backgroundColor = color;
    document.querySelector('.number').style.width = width;
};