const playerT = document.querySelector("#player");
const computerR = document.querySelector("#computer");
const resultE = document.querySelector("#result");

const btn = document.querySelectorAll(" #choose")

let player;
let computer;
let result;

btn.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    playerT.textContent = `player: ${player}`;

    computerR.textContent = `computer: ${computer}`;

    resultE.textContent = checkR();

    /* Junior dev this is computers turn*/
    computerTurn();

}));
function computerTurn() {
    const randNum = Math.floor(Math.random() * 5) + 1;

    switch (randNum) {
        case 1:
            computer = "Rock";
            break;

        case 2:
            computer = "Scissor";
            break;

        case 3:
            computer = "paper";
            break;
        case 4:
            computer = "Rock";
            break;
        case 5:
            computer = "Paper";
            break;




    }
}
function checkR() {
    if (player == computer) {
        return "Draw"
    }
    else if (computer == "paper") {
        return (player == "rock") ? "You won!" : "Go and try again later"


    }
}
