console.log("Hello World!");

let playerScore = 0;
let computerScore = 0;

//roundKeeper();
/*
function roundKeeper()
{

    let maxRounds = getNumberOfRounds();
    

    for (let i = 1; i <= maxRounds; i++){
        console.log(">>>>>>>>>>>>>>>>>> Round: " + i);
        playRound();
        console.log("Player: " + addPlayerScore(0), " Computer: " + addComputerScore(0));
        

    }

    if (addPlayerScore(0) > addComputerScore(0))
    {

        if (addComputerScore(0) === 0)
        {
            console.log(">>>>>>>>>>>>>>>>>> DEVESTATING VICTORY FOR PLAYER!")
        }
        else
        {
        console.log(">>>>>>>>>>>>>>>>>> VICTORY FOR PLAYER!")
        }
    }

    else if (addPlayerScore(0) < addComputerScore(0))
    {
        if (addPlayerScore(0) === 0)
        {
            console.log(">>>>>>>>>>>>>>>>>> DEVESTATING VICTORY FOR COMPUTER!")
        }
        else
        {
        console.log(">>>>>>>>>>>>>>>>>> VICTORY FOR COMPUTER!")
        }
    }
    else if (addPlayerScore(0) === addComputerScore(0))
    {
        console.log(">>>>>>>>>>>>>>>>>> IT'S A DRAW!")
    }

    console.log("GAME OVER!")

    playerReplay = prompt("Play Again? Enter: Yes or No");
    lowerReplayAnswer = playerReplay.toLowerCase();
    firstLetterAnswer = lowerReplayAnswer.charAt(0);
    console.log("Play Again? : " + firstLetterAnswer);
    
    if ( firstLetterAnswer === "y")
    {
        playerScore = 0;
        computerScore = 0;
        roundKeeper();
    }
}

function getNumberOfRounds(){

    let numberOfRounds = prompt("How Many Rounds?");
    return Number(numberOfRounds);
}
*/

const buttons = document.querySelectorAll('button');
if (buttons){
    console.log(buttons);

    buttons.forEach((button) => {

        button.addEventListener('click', () => {
            playRound(button.id);
        })
    })
}

/*

const buttonrock = document.querySelector('#rock');
if (buttonrock){
buttonrock.addEventListener('click', () => {
    playRound('rock');
});
}
*/

function playRound(playerInput)
{

    console.log(playerInput);

    let playerChoice = playerInput;
    let computerChoice = getRandomChoice();


    

    const playerChoiceElement = document.querySelector('#player-chose');
    const computerChoiceElement = document.querySelector('#computer-chose');
    const resultElement = document.querySelector('#result');
    


    console.log("You Chose: " + playerChoice);
    console.log("Computer Chose: " + computerChoice);

    playerChoiceElement.textContent = ('You Chose: ' + playerChoice);
    computerChoiceElement.textContent = ('Computer Chose: ' + computerChoice);

    if (playerChoice === computerChoice)
    {
        console.log(">>>>>>>>>>>>>>>>>> IT'S A DRAW!");
        resultElement.textContent = ('IT\'S A DRAW!');
    }
    else
    {
        if (playerChoice === 'rock')
        {
            if (computerChoice === 'paper')
            {
                addComputerScore(1);
                console.log("paper > rock >>>>>>>>>>>>>>>>>> COMPUTER WINS!");
                resultElement.textContent = ('COMPUTER WINS!');

            }
            else if (computerChoice === 'scissors')
            {
                addPlayerScore(1);
                console.log("rock > scissors >>>>>>>>>>>>>>>>>> PLAYER WINS!");
                resultElement.textContent = ('PLAYER WINS!');

            }
        }  
        else if (playerChoice === 'paper')
        {
            if (computerChoice === 'rock')
            {
                addPlayerScore(1);
                console.log("paper > rock >>>>>>>>>>>>>>>>>> PLAYER WINS");
                resultElement.textContent = ('PLAYER WINS!');
            }
            else if (computerChoice === 'scissors')
            {
                addComputerScore(1);
                console.log("scissors > paper >>>>>>>>>>>>>>>>>> COMPUTER WINS!");
                resultElement.textContent = ('COMPUTER WINS!');
            }
        }
        else if (playerChoice === 'scissors')
        {
            if (computerChoice === 'rock')
            {
                addComputerScore(1);
                console.log("rock > scissors >>>>>>>>>>>>>>>>>> COMPUTER WINS!");
                resultElement.textContent = ('COMPUTER WINS!');
            }
            else if (computerChoice === 'paper')
            {
                addPlayerScore(1);
                console.log("scissors > paper >>>>>>>>>>>>>>>>>> PLAYER WINS!");
                resultElement.textContent = ('PLAYER WINS!');
            }
        }
        else
        {
            console.log("Invalid Entry...")
            resultElement.textContent = ('Invalid Entry...');
        }

        
        
    }

    if (computerScore + playerScore >= 5)
    {

        if (computerScore < playerScore)
        {
            alert("GAME OVER!\n PLAYER WINS!");
        }
        else if (computerScore > playerScore)
        {
            alert("GAME OVER!\n COMPUTER WINS!");
        }
        alert("GAME OVER!");
    }

    
}

function addComputerScore(amountToAdd){
    
    const scoreElement = document.querySelector('#running-score');

    computerScore = computerScore + amountToAdd;
    /*console.log("Computer Score: " + computerScore);*/
    scoreElement.textContent = ('Score: P: ' + playerScore + ' - C: ' + computerScore);
    return computerScore;
}

function addPlayerScore(amountToAdd){
    
    const scoreElement = document.querySelector('#running-score');
    playerScore = playerScore + amountToAdd;
    /*console.log("Player Score: " + playerScore);*/
    scoreElement.textContent = ('Score: P: ' + playerScore + ' - C: ' + computerScore);
    return playerScore;
}

function getPlayerChoice(){

    let rawPlayerChose = prompt("Enter Your Move - rock , paper , scissors ?");
    let lowerCase = rawPlayerChose.toLowerCase();
    let finalPlayerChose = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return finalPlayerChose;
}


function getRandomChoice(){
    let randNumber = Math.floor(Math.random() * 3);

    switch(randNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
        default:
            return 'BROKEN'
            
    }

}

