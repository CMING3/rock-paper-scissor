document.querySelectorAll(".hand").forEach(element=>{
    element.addEventListener("click", startGame);
})

const test = document.querySelector(".cpu");

function startGame(){
    test.innerHTML = "testing"
}


function getComputerChoice(){
    
}