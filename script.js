//variables
let playerSelection = "";
let computerSelection = computerPlay();
let roundChoice = 0;
let result = "";
let playerScore = 0;
let computerScore = 0;

//targetting button to choose number of rounds to play
const roundBtn = document.querySelectorAll(".rounds-select > button").forEach(round => {
    round.addEventListener('click', function (e) {
        roundChoice = parseInt(e.target.textContent);
        roundsLeft.textContent = roundChoice;
        mainGame.style.display = "block";
        startGame.style.display = "none";
        textResult.textContent = "Let the battle begin!"
        playerScore = 0;
        computerScore = 0;
        playerResult.textContent = "0";
        computerResult.textContent = "0";
    })
});

//targetting the div to start the play
const startGame = document.querySelector('body > div.start-game');

//targetting the main div to play
const mainGame = document.querySelector('body > div.main-game');

//targetting the span element showing number of rounds left
const roundsLeft = document.querySelector('body > div.main-game > div.text-result > span');        

//targetting choices buttons (rock, paper, scissors)
const choiceBtn = document.querySelectorAll(".choice-btns > button").forEach(btn => {
    btn.addEventListener('click', function (e) {
        playerSelection = e.target.textContent;
        playRound(playerSelection);
    });
});

//targetting the span elemnt showing the player score
const playerResult = document.querySelector('body > div.main-game > div.score > div:nth-child(1) > span');

//targetting the span element showing the computer score
const computerResult = document.querySelector('body > div.main-game > div.score > div:nth-child(2) > span');

//targetting the p element showing the success/fail message
const textResult = document.querySelector('body > p.text-result');

//function to randomize the choice of the computer
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

//logical function when playing a round (event onclick on choice buttons)
function playRound(playerSelection) {

    computerSelection = computerPlay();

    switch(playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                result = "draw";
            } else if (computerSelection == "paper") {
                result = "lost";
            } else {
                result = "win";
            };
        case "paper":
            if (computerSelection == "rock") {
                result = "win";
            } else if (computerSelection == "paper") {
                result = "draw";
            } else {
                result = "lost";
            };
        case "scissors":
            if (computerSelection == "rock") {
                result = "lost";
            } else if (computerSelection == "paper") {
                result = "win";
            } else {
                result = "draw";
            };
        default:
            break;
    };
    roundChoice -= 1;
    game(result, roundChoice);
};

//logical function to play the game
function game(result, roundChoice) {
    
    if(roundChoice == 0 && playerScore>computerScore) {
        textResult.innerHTML = `${playerScore} points for you, and ${computerScore} points for me.. <br>You've been lucky for this game.. <br>Wanna try again ?`;
        roundsLeft.textContent = 0;
        mainGame.style.display = "none";
        startGame.style.display = "block";
    } else if(roundChoice == 0 && playerScore<computerScore) {
        textResult.innerHTML = `${playerScore} points for you, and ${computerScore} points for me.. <br>I told you i was the best at this game!<br>Do you want to get rekt again ?`;
        roundsLeft.textContent = 0;
        mainGame.style.display = "none";
        startGame.style.display = "block";
    } else if(roundChoice == 0 && playerScore==computerScore) {
        textResult.innerHTML = `We've got ${playerScore} both! <br>I'm pretty sure you cheat at the end..<br> Do you want to take the challenge again ?`;
        roundsLeft.textContent = 0;
        mainGame.style.display = "none";
        startGame.style.display = "block";
    } else {    
        while(roundChoice > 0) {
            if (result == "win") {
                playerScore += 1;
                playerResult.textContent = playerScore;
                computerResult.textContent = computerScore;
                textResult.textContent = `Round Won ! Computer choose : ${computerSelection}`;
                roundsLeft.textContent = roundChoice;
                break;
            } else if (result == "lost") {
                computerScore += 1;
                playerResult.textContent = playerScore;
                computerResult.textContent = computerScore;
                textResult.textContent = `Round Lost... Computer choose : ${computerSelection}`;
                roundsLeft.textContent = roundChoice;
                break;
            } else {
                playerResult.textContent = playerScore;
                computerResult.textContent = computerScore;
                textResult.textContent = `Draw. Computer choose : ${computerSelection}`;
                roundsLeft.textContent = roundChoice;
                break;
            };
        }
    };    

};