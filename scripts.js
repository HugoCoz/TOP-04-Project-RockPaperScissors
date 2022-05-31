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

let playableRounds = 1;
const playerSelection = prompt("Choisissez entre : Pierre, Feuille, ou Ciseaux").toLowerCase();
const computerSelection = computerPlay();

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

    const winResult = "Vous avez gagné !";
    const lostResult = "Vous avez perdu ...";
    const equalResult = "Match nul.";
    let result = "";


    if (playerSelection == "pierre" && computerSelection == "pierre") {
        result = equalResult;
    } else if (playerSelection == "pierre" && computerSelection == "feuille") {
        result = lostResult;
    } else if (playerSelection == "pierre" && computerSelection == "ciseaux") {
        result = winResult;
    } else if (playerSelection == "feuille" && computerSelection == "feuille") {
        result = equalResult;
    } else if (playerSelection == "feuille" && computerSelection == "ciseaux") {
        result = lostResult;
    } else if (playerSelection == "feuille" && computerSelection == "pierre") {
        result = winResult;
    } else if (playerSelection == "ciseaux" && computerSelection == "ciseaux") {
        result = equalResult;
    } else if (playerSelection == "ciseaux" && computerSelection == "pierre") {
        result = lostResult;
    } else {
        result = winResult;
    }
    
    return result;
};

console.log(playRound(playerSelection, computerSelection));