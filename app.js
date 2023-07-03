let userScore = 0;
let computerScore = 0;
//const userChoice = document.getElementsByClassName(".choice");
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_but = document.getElementById("r");
const paper_but = document.getElementById("p");
const scissors_but = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "rock"
    if (letter === "s") return "scissors"
    else return "paper"

};

function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord ="user".fontsize(3).sup();
    const compUserWord ="comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${compUserWord}. you win 😄 !`;
    document.getElementById(userChoice).classList.add("yellow-glow")
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("yellow-glow")}, 2000)
};

function lose(userChoice, computerChoice){
    computerScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord ="user".fontsize(3).sup();
    const compUserWord ="comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${compUserWord}. you lost ☹️ !`;
    document.getElementById(userChoice).classList.add("red-glow")
    setTimeout(function(){ document.getElementById(userChoice).classList.remove("red-glow")}, 1500)
};

function draw(userChoice, computerChoice){
    const smallUserWord ="user".fontsize(3).sup();
    const compUserWord ="comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${compUserWord}. its a draw 😐 !`;
    document.getElementById(userChoice).classList.add("blue-glow")
    setTimeout(() => document.getElementById(userChoice).classList.remove("blue-glow"), 1500)

};


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }

}



function main() {
    rock_but.addEventListener('click', function(){
        game("r");
    
    })
    paper_but.addEventListener('click', function(){
        game("p");
    
    })
    scissors_but.addEventListener('click', function(){
        game("s");
    
    })

}

main();







