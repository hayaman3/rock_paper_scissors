// function play(computerSelection, playerSelection){
//     //compares computer and player selection returns WIN LOSE or TIE
//     console.log("Computer: "+computerSelection)
//     console.log("You: "+playerSelection)
//     //nested if statement style
//     if(computerSelection == playerSelection){
//         return "TIE!";
//     }else{
//         if(playerSelection=="rock"){
//             if(computerSelection=="paper"){
//                 return "YOU LOSE!";
//             }else{
//                 return "YOU WIN!"
//             }
//         }else if(playerSelection=="paper"){
//             if(computerSelection=="scissors"){
//                 return "YOU LOSE!";
//             }else{
//                 return "YOU WIN!"
//             }   
//         }else if(playerSelection=="scissors"){
//             if(computerSelection=="rock"){
//                 return "YOU LOSE!";
//             }else{
//                 return "YOU WIN!"
//             }
//         }
//     }
// }


//document.getElementById("clickMe").onclick = game;

//creating new code for ui


// function game(){
//     var player = playerSelected;
//     var computer= 0;
//     //while (player!=5 && computer!=5) {
//         var x = play(computerPlay(),playerSelection())
//        if(x=="YOU WIN!"){
//             console.log("YOU WIN!");
//         }else{
//             computer++;
//         }
//     //}
//     //console.log("win :"+win);
//     // //console.log("tie :"+tie);
//     //console.log("lose :"+lose);
//     const computerScore = document.getElementById('computerScore')
//     computerScore.textContent = "Computer: " +computer;
//     computerScore.append();

//     const playerScore = document.getElementById('playerScore')
//     playerScore.textContent = "You: " +player;
//     playerScore.append();
// }

function show(){
    const show = document.getElementById('hidden');
    show.style.visibility= "visible";
   // show.append()
}

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

function playerSelection(playerSelected){
    var playerSelected = playerSelected;
    var computer = 0;
    var player = 0;
    //while (player!=5 && computer!=5) {
        var x = play(computerPlay(),playerSelected)
       if(x=="YOU WIN!"){
            console.log("YOU WIN!");
        }else{
            computer++;
        }
    
    //console.log("win :"+win);
    // //console.log("tie :"+tie);
    //console.log("lose :"+lose);
    const computerScore = document.getElementById('computerScore')
    computerScore.textContent = "Computer: " +computer;
    computerScore.append();

    const playerScore = document.getElementById('playerScore')
    playerScore.textContent = "You: " +player;
    playerScore.append();
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