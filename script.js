//returns random computer (rock, paper or scissors)
function computerPlay(){
    var result = ""
    var randomNumber =  Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        result = "rock";
    }else if(randomNumber == 1){
        result = "paper";
    }else{
        result = "scissors";
    } 
    return result;
}

var computer = 0;
var player = 0;
var tie = 0;

function playRound(playerSelection){
    fadeIn(playerSelection);
    var computerSelection = computerPlay()
    updateScore(computerSelection,playerSelection)
   
    const playerScore = document.getElementById('playerScore');
    const computerScore = document.getElementById('computerScore');
    switch (compareHand(computerSelection,playerSelection)){
    case "YOU WIN!":
        player++
        playerScore.textContent = "You: "+player;
        break;
    case "YOU LOSE!":
        computer++
        computerScore.textContent = "Computer: "+computer;
        break;
    }
    if(player==5){
        showModal("YOU WIN!")
    }
    if(computer==5){
        showModal("YOU LOSE!")
    }
}

function compareHand(computerSelection, playerSelection){
    if(computerSelection == playerSelection){
        return "TIE!";
    }else{
        if(playerSelection=="rock"){
            if(computerSelection=="paper"){
                return "YOU LOSE!";
            }else{
                return "YOU WIN!"
            }
        }else if(playerSelection=="paper"){
            if(computerSelection=="scissors"){
                return "YOU LOSE!";
            }else{
                return "YOU WIN!"
            }   
        }else if(playerSelection=="scissors"){
            if(computerSelection=="rock"){
                return "YOU LOSE!";
            }else{
                return "YOU WIN!"
            }
        }
    }
}

function updateScore(computerSelection,playerSelection) {
    const playerSign = document.getElementById('playerSign')
    const computerSign = document.getElementById('computerSign')
    switch (playerSelection) {
        case 'rock':
            playerSign.textContent = '✊'
            break
        case 'paper':
            playerSign.textContent = '✋'
            break
        case 'scissors':
            playerSign.textContent = '✌'
            break
    }
  
    switch (computerSelection) {
        case 'rock':
            computerSign.textContent = '✊'
            break
        case 'paper':
            computerSign.textContent = '✋'
            break
        case 'scissors':
            computerSign.textContent = '✌'
            break
    }
}

function showModal(winner){
    const modal = document.getElementById('modal');
    modal.style.display = "block";
    const backdrop = document.getElementById('backdrop');
    backdrop.style.display = "block";
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = winner;
}

function playAgain(){
    const modal = document.getElementById('modal');
    modal.style.display = "none";
    const backdrop = document.getElementById('backdrop');
    backdrop.style.display = "none";

    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    computerScore.textContent = "Computer: 0";
    playerScore.textContent = "You: 0";
    player = 0;
    computer = 0;
    tie = 0;
}

function fadeIn(playerSelection) {
    switch (playerSelection) {
        case 'rock':
            paper.classList.toggle('fade');
            scissors.classList.toggle('fade');
            break
        case 'paper':
            rock.classList.toggle('fade');
            scissors.classList.toggle('fade');
            break
        case 'scissors':
            paper.classList.toggle('fade');
            rock.classList.toggle('fade');
            break
    }
}

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")

rock.addEventListener('transitionend',function(){
    rock.classList.remove('fade');
    paper.classList.remove('fade');
    scissors.classList.remove('fade');
})

paper.addEventListener('transitionend',function(){
    rock.classList.remove('fade');
    paper.classList.remove('fade');
    scissors.classList.remove('fade');
})

scissors.addEventListener('transitionend',function(){
    rock.classList.remove('fade');
    paper.classList.remove('fade');
    scissors.classList.remove('fade');
})