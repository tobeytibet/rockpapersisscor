let computerMove = ''
let playerMove = ''
let playerScore = 0
let computerScore = 0


//randomly selects computer's choice
function playerChoice() {
    playerMove = prompt('Please choose rock, paper or sisscor: ')
    if ((playerMove.toLowerCase() == 'rock') 
        || (playerMove.toLowerCase() =='paper') 
        || (playerMove.toLowerCase() == 'sisscor')) {
      return playerMove
    } else{
      alert('Not a valid choice.')
      playerChoice()
    }
  }
  
//randomly selects computer's choice
function computerChoice() {
    computerMove = ''
    let number = Math.floor(Math.random() * 3)
    
    if (number == 0) {
        computerMove += 'rock'
    } else if (number == 1) {
        computerMove += 'paper'
    } else {
        computerMove += 'sisscor'
    }
    w
    return computerMove
}

//compares player's input vs computer's choice
function round() {
    alert('Player score is : ' + playerScore + '\nComputer score is: ' + computerScore)
    computerChoice()
    playerChoice()
    
    alert('Your move is ' + playerMove.toLowerCase() + ' and the computer move is ' + computerMove + '.')
    
    
    if (playerMove == computerMove) {
        alert ('ITS A DRAW')
        return
        
    } if ((playerMove == 'rock' && computerMove == 'sisscor') 
        || (playerMove == 'sisscor' && computerMove == 'paper') 
        || (playerMove == 'paper' && computerMove == 'rock')) {
        alert ('PLAYER WINS')
        return playerScore += 1
    } else {
        alert ('COMPUTER WINS')
        return computerScore += 1
    }
    
}

//make a function to keep terack of the score
function game() {
    
    round()
    round()
    round()
    round()
    round()
    

}

game()

