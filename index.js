const handsArr = ["Rock", "Paper", "Scissor"];
let playerSelection = "";
let computerSelection = "";
const message = document.querySelector(".winningmessage");
let playerScoreDom = document.querySelector(".uscore");
let computerScoreDom = document.querySelector(".cscore");
let playerScore = 0;
let computerScore = 0;
let computerSelectionText = document.querySelector(".cpuchoice");
let playerSelectionText = document.querySelector(".yourchoice");

function getComputerSelection(){
    computerSelection = handsArr[Math.floor(Math.random()*handsArr.length)];
    computerSelectionText.innerHTML = computerSelection;
}

document.querySelectorAll(".hand").forEach(element=>{
    element.addEventListener("click", (e)=>{
        playerSelection = e.target.innerText;
        getComputerSelection()
        playRound(playerSelection)
    });
})

function playRound(){
    playerSelectionText.innerHTML = playerSelection;
    //Game rule
    if (playerSelection===computerSelection){

        message.innerHTML = "Draw"

    }else if ((playerSelection=="Scissor"&&computerSelection=="Paper")||
            (playerSelection=="Rock"&&computerSelection=="Scissor")||
            (playerSelection=="Paper"&&computerSelection=="Rock")){

        message.innerHTML = `${playerSelection} beat ${computerSelection}, You Win !`;
        playerScore += 1;
        playerScoreDom.innerHTML = playerScore;

    }else if ((playerSelection=="Paper"&&computerSelection=="Scissor")||
            (playerSelection=="Rock"&&computerSelection=="Paper")||
            (playerSelection=="Scissor"&&computerSelection=="Rock")){

        message.innerHTML = `${computerSelection} beat ${playerSelection}, You Lose !`;
        computerScore += 1;
        computerScoreDom.innerHTML = computerScore;
    };
    if (computerScore>=5){
        endGame("computer")
    }else if (playerScore>=5){
        endGame("player")
    }
}



//End Game functions
let endGameBoard = document.querySelector(".end-game");
let endGameMessage = document.querySelector(".end-game-message");
let restartBtn = document.querySelector(".restart");


function endGame(e){
    endGameBoard.style.display="flex";
    endGameMessage.innerHTML = `${e} win the game`
    restartBtn.addEventListener("click",resetAll)
}

function resetAll(){
    endGameBoard.style.display="none";
    endGameMessage.innerHTML = "";
    playerScore = 0;
    computerScore = 0;
    playerScoreDom.innerHTML = playerScore;
    computerScoreDom.innerHTML = computerScore;
    message.innerHTML = "";
    computerSelectionText.innerHTML = "";
    playerSelectionText.innerHTML = "";
}