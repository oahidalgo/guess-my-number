'use strict';
/*
console.log(document.querySelector('.message').textContent)
diplayMessage( 'Correct Number! 😎'

document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10

document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayMessage = function(message){
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)
    //when there is no input
    if(!guess){
        displayMessage('No Number')
        //When player wins
    }else if(guess === secretNumber){
        displayMessage('Correct Number! 😎')
        document.querySelector('.number').textContent = secretNumber
        document.querySelector('body').style.backgroundColor = '#60b347'

        document.querySelector('.number').style.width = '30rem'

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
        //When else is wrong
    }else if(guess !== secretNumber){
        if(score > 1){
            displayMessage( guess > secretNumber ? 'Too high!' : 'Too low!')
            score--
            document.querySelector('.score').textContent = score
        }else {
            document.querySelector('.score').textContent = 'you lost the game!'
            score--
            document.querySelector('.score').textContent = 0
        }
    }
})


document.querySelector('.again').addEventListener(('click'), ()=>{
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?'
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = ''
    diplayMessage('Start guessing...')
})