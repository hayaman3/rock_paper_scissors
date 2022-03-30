/* 
create random generator of 3 choices for computer
create input collector of 3 choices
compare input vs random
output win lose or tie
*/

//returns random computer (rock, paper or scissors)
function computerPlay(){
    var randomNumber =  Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return "rock";
    }else if(randomNumber == 1){
        return "paper";
    }else{
        return "scissors";
    } 
}

function playerSelection(){
    var input = prompt();
    return input.toLowerCase();
}

function play(computerSelection, playerSelection){
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
/*
function play(computerSelection, playerSelection){
    //compares computer and player selection returns WIN LOSE or TIE
    console.log(computerSelection)
    console.log(playerSelection)  
    // Logical &&
    if(computerSelection == playerSelection){
        return "TIE";
    
    }else if(computerSelection=="rock" && playerSelection=="paper"){
        return "YOU WIN!";
    }else if(computerSelection=="rock" && playerSelection=="scissors"){
        return "YOU LOSE!";
    }else if(computerSelection=="paper" && playerSelection=="scissors"){
        return "YOU WIN!";
    }else if(computerSelection=="paper" && playerSelection=="rock"){
        return "YOU LOSE!";
    }else if(computerSelection=="scissors" && playerSelection=="paper"){
        return "YOU WIN!";
    }else{
        return "YOU LOSE!";
    }
}
*/

function game(){
    var tie = 0;
    var win = 0;
    var lose = 0;
    while (win!=5 && lose!=5) {
        var x = play(computerPlay(),playerSelection())
        if(x=="TIE!"){
            console.log("TIE!");
            tie++;
        }else if(x=="YOU WIN!"){
            console.log("YOU WIN!");
            win++;
        }else{
            console.log("YOU LOSE!");
            lose++;
        }
    }
    console.log("win :"+win);
    //console.log("tie :"+tie);
    console.log("lose :"+lose);
}

document.getElementById("clickMe").onclick = game;