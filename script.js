/* 
create random generator of 3 choices for computer
create input collector of 3 choices
compare input vs random
output win lose or tie
*/

function computerPlay(){
    //returns computer random (rock, paper or scissors)
    var randomNumber =  Math.floor(Math.random() * 3);
    if(randomNumber == 0){
        return "rock";
    }else if(randomNumber == 1){
        return "paper";
    }else{
        return "scissors";
    } 
}

function player(){
    return "paper";
}


function play(computerSelection, playerSelection){
    //compares computer and player selection returns WIN LOSE or TIE
    console.log(computerSelection)
    console.log(playerSelection)
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

console.log(play(computerPlay(),player()));


