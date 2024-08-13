let gameStuff = ['rock', 'paper', "scissors"];
let startMsg = 'Rock/Paper/Scissors'
let getComputerChoice = (gameStuff) => gameStuff[Math.floor(Math.random() * 3)];
function getUserChoice(startMsg, gameStuff) {
    let c = prompt(startMsg).toLowerCase();
    while (!(gameStuff.includes(c))) {
        c = prompt("Please choose between \n" + startMsg)
    }
    return c;

}
let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultMsg = "Draw";
    }
    else if (humanChoice === "rock") {
        resultMsg = (computerChoice === "paper") ? "You lose ! Paper beats Rock" : "You win ! Rock beats Scissors";
    }
    else if (humanChoice === "paper") {
        resultMsg = (computerChoice === "rock") ? "You win ! Paper beats Rock" : "You lose ! Scissors beat paper";
    }
    else {
        resultMsg = (computerChoice === "rock") ? "You lose ! Rocks beats scissors" : "You win ! Scissors beat paper";
    }

    console.log(resultMsg);


}


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getUserChoice(startMsg, gameStuff);
        const computerSelection = getComputerChoice(gameStuff)
        playRound(humanSelection, computerSelection)

    }
}
playGame()