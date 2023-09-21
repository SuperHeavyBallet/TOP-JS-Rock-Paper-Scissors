console.log("Hello World!");

let playerScore = 0;
let computerScore = 0;

roundKeeper();

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

function playRound()
{
    let playerChoice = getPlayerChoice();
    let computerChoice = getRandomChoice();


    console.log("You Chose: " + playerChoice);
    console.log("Computer Chose: " + computerChoice);

    if (playerChoice === computerChoice)
    {
        console.log(">>>>>>>>>>>>>>>>>> IT'S A DRAW!");
    }
    else
    {
        if (playerChoice === 'Rock')
        {
            if (computerChoice === 'Paper')
            {
                addComputerScore(1);
                console.log("Paper > Rock >>>>>>>>>>>>>>>>>> COMPUTER WINS!")
            }
            else if (computerChoice === 'Scissors')
            {
                addPlayerScore(1);
                console.log("Rock > Scissors >>>>>>>>>>>>>>>>>> PLAYER WINS!")
            }
        }  
        else if (playerChoice === 'Paper')
        {
            if (computerChoice === 'Rock')
            {
                addPlayerScore(1);
                console.log("Paper > Rock >>>>>>>>>>>>>>>>>> PLAYER WINS")
            }
            else if (computerChoice === 'Scissors')
            {
                addComputerScore(1);
                console.log("Scissors > Paper >>>>>>>>>>>>>>>>>> COMPUTER WINS!")
            }
        }
        else if (playerChoice === 'Scissors')
        {
            if (computerChoice === 'Rock')
            {
                addComputerScore(1);
                console.log("Rock > Scissors >>>>>>>>>>>>>>>>>> COMPUTER WINS!")
            }
            else if (computerChoice === 'Paper')
            {
                addPlayerScore(1);
                console.log("Scissors > Paper >>>>>>>>>>>>>>>>>> PLAYER WINS!")
            }
        }
        else
        {
            console.log("Invalid Entry...")
        }

        
        
    }

    
}

function addComputerScore(amountToAdd){
    
    computerScore = computerScore + amountToAdd;
    /*console.log("Computer Score: " + computerScore);*/
    return computerScore;
}

function addPlayerScore(amountToAdd){
    
    playerScore = playerScore + amountToAdd;
    /*console.log("Player Score: " + playerScore);*/
    return playerScore;
}

function getPlayerChoice(){

    let rawPlayerChose = prompt("Enter Your Move - Rock , Paper , Scissors ?");
    let lowerCase = rawPlayerChose.toLowerCase();
    let finalPlayerChose = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return finalPlayerChose;
}


function getRandomChoice(){
    let randNumber = Math.floor(Math.random() * 3);

    switch(randNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
        default:
            return 'BROKEN'
            
    }

}

