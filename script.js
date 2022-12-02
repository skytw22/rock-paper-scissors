function getComputerChoice() {
    let n = Math.floor(Math.random() * 3); // n can be 0,1,2
    if (n==0) {
        return "ROCK";
    } else if (n==1) {
        return "PAPER"; 
    } else {
        return "SCISSORS";
    }
 }

 function playRound(playerSelection, computerSelection) {
    //let player = playerSelection.toUpperCase();
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "ROCK") {
        if (computerSelection == "PAPER") {
            return "You lose! Paper beats rock!";
        } else {
            return "You win! Rock beats scissors!";
        }
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Scissors beats paper!";
        }
    } else {
        if (computerSelection == "ROCK") {
            return "You lose! Rock beats scissors!";
        } else {
            return "You win! Scissors beats paper!";
        }
    }
  }

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
        let player = prompt("Rock, paper, scissors?");
        let playerSelection = player.toUpperCase();
            if (playerSelection != null && (playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS")) {
                let result = playRound(playerSelection,getComputerChoice());
                if (result.slice(4,5) == "w") {
                    playerScore++;
                    console.log(result);
                } else if (result.slice(4,5) == "l") {
                    computerScore++;
                    console.log(result);
                } else {
                    playerScore + 0;
                    computerScore + 0;
                    console.log(result);
                }
            } else {
                console.log("Invalid input! Wasted a round!");
            }
     
    if (playerScore > computerScore) {
        return "You are the winner!";
    } else if (playerScore < computerScore) {
        return "Computer is the winner!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());