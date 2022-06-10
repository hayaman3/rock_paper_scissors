var toggled = false;
function toggle(){
    if(!toggled){
        toggled = true;
        document.getElementById("main").style.visibility = "visible";
        document.getElementById('playButton').style.visibility = "hidden";
        return;
    }
    if(toggled){
        toggled = false;
        document.getElementById("main").style.visibility = "hidden";
        document.getElementById('playButton').style.visibility = "visible";
        return;
    }
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
    compterChoiceAppend(result);
    return result;
}

var computer = 0;
var player = 0;
var tie = 0;

function playerSelection(playerSelected){
    var playerSelected = playerSelected;
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
}

function compare(computerSelection, playerSelection){
    //compares computer and player selection returns WIN LOSE or TIE
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

    if(player==3){
        winner("playerWin")
    }else if(computer==3){
        winner("computerWin")
    }else{}
}
function winner(winner){
    if(winner=="playerWin"){
        reusableCode();
        alert("YOU WIN!")
    }else{
        reusableCode();
        console.log("YOU LOSE!")
    }
}
function reusableCode(){
    toggle();
    playButton.innerText = "PLAY AGAIN?";
    document.getElementById('computerChoice').style.visibility= "hidden";
    player=0;
    computer=0;
}

function compterChoiceAppend(result){
    var result = result
    var show = document.getElementById('computerChoice');
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
 
   
}