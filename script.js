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

function startPlay(playerSelection){
    var computerSelection = computerPlay()
    updateScore(computerSelection,playerSelection)
   
    const playerScore = document.getElementById('playerScore');
    const computerScore = document.getElementById('computerScore');
    switch (compare(computerSelection,playerSelection)){
    case "YOU WIN!":
        player++
        playerScore.textContent = "You: "+player;
        break;
    case "YOU LOSE!":
        computer++
        computerScore.textContent = "Computer: "+computer;
        break;
    }

    if(player==2||computer==2){
        alert("game end")
    }

}

//compares computer and player selection returns WIN LOSE or TIE
function compare(computerSelection, playerSelection){
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