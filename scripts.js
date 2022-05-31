/*

L'utilisateur choisit entre pierre, feuille ou ciseau
L'ordinateur choisit au hasard pierre, feuille ou ciseaux

On vérifie qui gagne :
    Si user = pierre && ordi = pierre
    Si user = pierre && ordi = feuille
    Si user = pierre && ordi = ciseaux
    Si user = feuille && ordi = pierre
    Si user = feuille && ordi = feuille
    Si user = feuille && ordi = ciseaux
    Si user = ciseaux && ordi = pierre
    Si user = ciseaux && ordi = feuille
    Si user = ciseaux && ordi = ciseaux

On incrémente le score de l'ordi s'il gagne
On incrémente le score de l'user s'il gagne
On ne chnage pas le score si nul

Faire apparaitre un message indiquant victoire, nul ou perdu
Faire apparaitre le score actuel
*/

let playerSelection = "";
let computerSelection = computerPlay();

function computerPlay() {
    let randomAction = Math.floor(Math.random()*3);
    if (randomAction === 0) {
        const choice1 = "pierre";
        return choice1;
    } else if (randomAction === 1) {
        const choice2 = "feuille";
        return choice2;
    } else {
        const choice3 = "ciseaux";
        return choice3;
    }
};


function playRound(playerSelection, computerSelection) {

    let result = 0;


    if (playerSelection == "pierre" && computerSelection == "pierre") {
        result = 0;
        return result;
    } else if (playerSelection == "pierre" && computerSelection == "feuille") {
        result = -1;
        return result;
    } else if (playerSelection == "pierre" && computerSelection == "ciseaux") {
        result = 1;
        return result;
    } else if (playerSelection == "feuille" && computerSelection == "feuille") {
        result = 0;
        return result;
    } else if (playerSelection == "feuille" && computerSelection == "ciseaux") {
        result = -1;
        return result;
    } else if (playerSelection == "feuille" && computerSelection == "pierre") {
        result = 1;
        return result;
    } else if (playerSelection == "ciseaux" && computerSelection == "ciseaux") {
        result = 0;
        return result;
    } else if (playerSelection == "ciseaux" && computerSelection == "pierre") {
        result = -1;
        return result;
    }
    
};




function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playableRounds = 5;

    for (i=0; i<playableRounds; i++) {
        computerPlay();
        playerSelection = prompt("Choisissez entre : Pierre, Feuille, ou Ciseaux").toLowerCase();
        playRound(playerSelection, computerSelection);
        if (playRound() == 1) {
            playerScore += 1;
            console.log("Manche gagnée !");
            console.log("Score actuel : " + playerScore + " points (joueur) contre " + computerScore + " points (ordinateur)");
        } else if (playRound() == -1) {
            computerScore +=1;
            console.log("Manche perdue ...");
            console.log("Score actuel : " + playerScore + " points (joueur) contre " + computerScore + " points (ordinateur)");
        } else {
            console.log("Match nul.")
            console.log("Score actuel : " + playerScore + " points (joueur) contre " + computerScore + " points (ordinateur)");
        }
    }

    if (playerScore > computerScore) {
        console.log("Félicitations, vous avez battu l'ordinateur !");
    } else {
        console.log("Vous avez perdu contre l'ordinateur.");
    }
}

game();