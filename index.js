const handsArr = ["Rock", "Paper", "Scissor"]
let playerSelection = "";
let computerSelection = "";
const message = document.querySelector(".winningmessage")

function getComputerSelection(){
    computerSelection = handsArr[Math.floor(Math.random()*handsArr.length)];
    document.querySelector(".cpuchoice").innerHTML = computerSelection;
}

document.querySelectorAll(".hand").forEach(element=>{
    element.addEventListener("click", (e)=>{
        playerSelection = e.target.innerText;
        getComputerSelection()
        playRound(playerSelection)
    });
})



function playRound(){
    document.querySelector(".yourchoice").innerHTML = playerSelection;
    //Game rule
    if (playerSelection===computerSelection){

        message.innerHTML = "Draw"

    }else if ((playerSelection=="Scissor"&&computerSelection=="Paper")||
            (playerSelection=="Rock"&&computerSelection=="Scissor")||
            (playerSelection=="Paper"&&computerSelection=="Rock")){

        message.innerHTML = `${playerSelection} beat ${computerSelection}, You Win !`;

    }else if ((playerSelection=="Paper"&&computerSelection=="Scissor")||
            (playerSelection=="Rock"&&computerSelection=="Paper")||
            (playerSelection=="Scissor"&&computerSelection=="Rock")){

        message.innerHTML = `${computerSelection} beat ${playerSelection}, You Lose !`;
    }
}

