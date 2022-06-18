let playerSelection = prompt("Choose between : Rock, Paper, Scissors").toLowerCase();
let computerSelection = computerPlay();

function computerPlay() {
    let randomAction = Math.floor(Math.random()*3);
    let choice = "";
    if (randomAction === 0) {
        choice = "rock";
        return choice;
    } else if (randomAction === 1) {
        choice = "paper";
        return choice;
    } else {
        choice = "scissors";
        return choice;
    };

};

function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        return "draw";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return "lost";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "win";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        return "draw";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "lost";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "win";
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "draw";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "lost";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "win";
    } else {
        console.log("bad input, try again");
    };
    
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playableRounds = 1;

    for (i=0; i<playableRounds; i++) {
        playRound(playerSelection, computerSelection);
        if (playRound() == "win") {
            playerScore += 1;
            console.log("Round won !");
            console.log(computerPlay());
            console.log("Score : " + playerScore + " points (player) vs " + computerScore + " points (computer)");
        } else if (playRound() == "lost") {
            computerScore +=1;
            console.log("Manche perdue ...");
            console.log(computerPlay());
            console.log("Score : " + playerScore + " points (player) vs) " + computerScore + " points (computer)");
        } else {
            console.log("Draw.");
            console.log(computerPlay());
            console.log("Score : " + playerScore + " points (player) vs) " + computerScore + " points (computer)");
        };
    };

    if (playerScore > computerScore) {
        console.log("Congratulations, you beat the computer !");
    } else {
        console.log("Sorry, you lost against Windows XP");
    };
};

game();