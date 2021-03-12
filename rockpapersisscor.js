let computerMove = ''
//randomly selects computer's choice
let playerChoice = prompt('Please choose rock, paper or sisscor: ')



//randomly selects computer's choice
function computerChoice() {
    
    let number = Math.floor(Math.random() * 3)
    
    if (number == 0) {
        computerMove += 'rock'
    } else if (number == 1) {
        computerMove += 'paper'
    } else {
        computerMove += 'sisscor'
    }
    
    return computerMove
}

//compares player's input vs computer's choice
function round(playerChoice) {
    computerChoice()
    console.log(computerMove)
    console.log(playerChoice)
    
    if (playerChoice == computerMove) {
        return 'ITS A DRAW'
    } if (playerChoice == 'rock' && computerMove == 'sisscor') {
        return 'PLAYER WINS'
    } if (playerChoice == 'sisscor' && computerMove == 'paper') {
        return 'PLAYER WINS'
    } if (playerChoice == 'paper' && computerMove == 'rock') {
        return 'PLAYER WINS'
    } else {
        return 'COMPUTER WINS'
    }
}


