const handsArr = ["Rock", "Paper", "Scissor"]
let playerchoice = "";
let computerchoice = "";



document.querySelectorAll(".hand").forEach(element=>{
    element.addEventListener("click", startGame);
})

function startGame(e){
    playerchoice = e.target.innerText;
    const message = document.querySelector(".winningmessage")
    document.querySelector(".yourchoice").innerHTML = playerchoice;
    getComputerChoice(playerchoice)
    if (playerchoice===computerchoice){
        message.innerHTML = "Draw"
    }else if (playerchoice=="Rock"&&computerchoice=="Paper"){
        message.innerHTML = "Paper beat Rock, You Lose !";
    }else if (playerchoice=="Rock"&&computerchoice=="Scissor"){
        message.innerHTML = "Rock beat Scissor, You Win !";
    }else if (playerchoice=="Paper"&&computerchoice=="Rock"){
        message.innerHTML = "Paper beat Rock, You Win !";
    }else if (playerchoice=="Paper"&&computerchoice=="Scissor"){
        message.innerHTML = "Scissor beat Paper, You Lose !";
    }else if (playerchoice=="Scissor"&&computerchoice=="Rock"){
        message.innerHTML = "Rock beat Scissor, You Lose !";
    }else if (playerchoice=="Scissor"&&computerchoice=="Paper"){
        message.innerHTML = "Scissor beat Paper, You Win !";
    }
}

function getComputerChoice(playerchoice){
    computerchoice = handsArr[Math.floor(Math.random()*handsArr.length)];
    document.querySelector(".cpuchoice").innerHTML = computerchoice;
}