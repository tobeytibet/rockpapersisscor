let computerMove = ''
//randomly selects computer's choice
let playerMove = prompt('Please choose rock, paper or sisscor: ')



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
function round(playerMove) {
    computerChoice()
    
    alert('You\'re move is ' + playerMove + ' and the computer move is ' + computerMove + '.')
    
    if (playerMove == computerMove) {
        alert ('ITS A DRAW')
    } else if (playerMove == 'rock' && computerMove == 'sisscor') {
        alert ('PLAYER WINS')
    } else if (playerMove == 'sisscor' && computerMove == 'paper') {
        alert ('PLAYER WINS')
    } else if (playerMove == 'paper' && computerMove == 'rock') {
        alert ('PLAYER WINS')
    } else {
        alert ('COMPUTER WINS')
    }
}

round(playerMove)


