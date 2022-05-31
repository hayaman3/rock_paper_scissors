function show(){
    const show = document.getElementById('hidden');
    show.style.visibility= "visible";
}

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
    compterChoice(result);
    return result;
}

var computer = 0;
var player = 0;
var tie = 0;

function playerSelection(playerSelected){
    var playerSelected = playerSelected;

    //while (player!=5 && computer!=5) {
        var result = compare(computerPlay(),playerSelected)
        if(result=="YOU WIN!"){
            player++
            appendResult()
        }else if(result=="YOU LOSE!"){
            computer++;
            appendResult()
        }else{
            tie++;
            appendResult()
        }
    //}
}

function compare(computerSelection, playerSelection){
    //compares computer and player selection returns WIN LOSE or TIE
    console.log("Computer: "+computerSelection)
    console.log("You: "+playerSelection)
    //nested if statement style
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

function appendResult(){
    const computerScore = document.getElementById('computerScore')
    computerScore.textContent = "Computer: " +computer;
    computerScore.append();

    const playerScore = document.getElementById('playerScore')
    playerScore.textContent = "You: " +player;
    playerScore.append();
}

function compterChoice(result){
    var result = result
    const show = document.getElementById('computerChoice');
    show.style.visibility= "visible";
    if(result=="rock"){
        show.style.backgroundImage = "url('images/rock.png')";
    }else if(result=="paper"){
    show.style.backgroundImage = "url('images/paper.png')";
    }else{
        show.style.backgroundImage = "url('images/scissors.png')";
    }
}

function tie(){
    const show = document.getElementById('hidden');
    show.style.visibility= "visible";
}