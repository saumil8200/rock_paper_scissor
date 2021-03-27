let userScore = 0;
let computerScore = 0;
const userScore_div = document.getElementById("user-score");
const computerScore_div = document.getElementById("computer-score"); 
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const actionMessage_p = document.getElementById("action-message"); 

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return " Rock ";
    if (letter === "p") return " Paper ";
    return " Scissor ";
}

function win(user, computer) {
    userScore++;
    console.log("WIN");
    userScore_div.innerHTML = userScore;
    computerScore_div.innerHTML = computerScore;
    const smallUserword = "user".fontsize(3).sup().fontcolor("#bc6ff1");
    const smallCompword = "computer".fontsize(3).sup().fontcolor("#bc6ff1");
    result_p.innerHTML = `${convertToWord(user)} ${smallUserword} beats ${convertToWord(computer)} ${smallCompword} , YOU WIN! 🔥`;
}

function lose(user, computer) {
    computerScore++;
    console.log("LOSE");
    computerScore_div.innerHTML = computerScore;
    userScore_div.innerHTML = userScore;
    const smallUserword = "user".fontsize(3).sup().fontcolor("#bc6ff1");
    const smallCompword = "computer".fontsize(3).sup().fontcolor("#bc6ff1");
    result_p.innerHTML = `${convertToWord(user)} ${smallUserword} loses against ${convertToWord(computer)} ${smallCompword} , YOU LOST! 😭`;
    
}

function draw(user, computer) {
    const smallUserword = "user".fontsize(3).sup().fontcolor("#bc6ff1");
    const smallCompword = "computer".fontsize(3).sup().fontcolor("#bc6ff1");
    result_p.innerHTML = `${convertToWord(user)} ${smallUserword} Equals ${convertToWord(computer)} ${smallCompword} , IT'S DRAW! 🙄`;
}

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
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();