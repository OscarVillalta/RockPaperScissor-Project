let play = true;
let state = 'tie';

//Rock = 0, paper = 1, scissor = 2

let gameArr = ['rock', 'paper', 'scissor']

function playRound(player, computer){

    if( player == computer) {
        return 0; //Tie
    }

    if( player == (computer + 1) || player == (computer - 2)) {
        return 1; //Player Wins
    } else {
        return 2; //Computer Wins
    }
}

function game() {
    
    let pCounter = 0;
    let cCounter = 0;
    let winner = 'No One';

    while(play) {
        const player = prompt("Please enter rock, paper or scissor").toLowerCase();
        const pSelection = gameArr.indexOf(player);
        const cSelection = Math.floor(Math.random() * 3);
        const result = playRound(pSelection, cSelection);

        switch(result) {
            case 0:
                state = 'It\'s a Tie';
            break;

            case 1:
                state = 'Player Wins';
                pCounter++;
            break;

            case 2:
                state = 'Computer Wins';
                cCounter++;
            break;
        }

        window.confirm(`\n Player has played ${player} 
            \n Computer has played ${gameArr[cSelection]}
            \n ${state}
            \n Score
            \n Player: ${pCounter} ||| Computer: ${cCounter}`)

        if(pCounter == 3) {
            play = false;
            winner = 'Player';
        }

        if(cCounter == 3) {
            play = false;
            winner = "Computer";
        }
    }

    window.confirm(`${winner} has won the round!!!`);
}

game();