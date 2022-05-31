/*

L'utilisateur choisit entre pierre, feuille ou ciseau
L'ordinateur choisit au hasard pierre, feuille ou ciseaux

Boucle pour vérifier qui gagne :
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

Faire apparaitre un message indiquant victoire, nul ou perdu
Faire apparaitre le score actuel
*/

let computerSelection = "";
let playerSelection = prompt("Choisissez entre : Pierre, Feuille, ou ciseaux");

function computerPLay() {
    let randomAction = Math.floor(Math.random()*3);
    if (randomAction === 0) {
        computerSelection = "Pierre";
        return computerSelection;
    } else if (randomAction === 1) {
        computerSelection = "Feuille";
        return computerSelection;
    } else {
        computerSelection = "Ciseaux";
        return computerSelection;
    }
};

function playRound(playerSelection = playerSelection, computerSelection = computerSelection) {
    switch {
        case 
    }
}