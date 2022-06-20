let playerSelection = "";

const choiceBtn = document.querySelectorAll(".choice-btns > button").forEach(btn => {
        btn.addEventListener('click', function (e) {
        playerSelection = e.target.textContent;
        game();
    });
});


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
    let result = "";

    switch(playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                result = "draw";
                return result;
            } else if (computerSelection == "paper") {
                result = "lost";
                return result;
            } else {
                result = "win";
                return result;
            };
        case "paper":
            if (computerSelection == "rock") {
                result = "win";
                return result;
            } else if (computerSelection == "paper") {
                result = "draw";
                return result;
            } else {
                result = "lost";
                return result;
            };
        case "scissors":
            if (computerSelection == "rock") {
                result = "lost";
                return result;
            } else if (computerSelection == "paper") {
                result = "win";
                return result;
            } else {
                result = "draw";
                return result;
            };
        default:
            console.log("Undefined input data")
    };
};


function game(rounds = 1) {
    let computerSelection = computerPlay();
    
    let playerScore = 0;
    let computerScore = 0;
    

    for (i=0; i<rounds; i++) {        
        
        if (playRound(playerSelection, computerSelection) == "win") {
            playerScore += 1;
            console.log("Round won ! Computer choose : " + computerSelection);
            console.log("Score : " + playerScore + "(player) - " + computerScore + "(computer).");
        } else if (playRound(playerSelection, computerSelection) == "lost") {
            computerScore += 1;
            console.log("Round lost ... Computer choose : " + computerSelection);
            console.log("Score : " + playerScore + "(player) - " + computerScore + "(computer).");
        } else {
            console.log("Draw. Computer choose : " + computerSelection)
            console.log("Score : " + playerScore + "(player) - " + computerScore + "(computer).");
        }
    }
};