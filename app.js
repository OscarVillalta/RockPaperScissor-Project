//Game Variables
let state = 'tie';
let pCounter = 0;
let cCounter = 0;

//Element Variables
let rpsButtonHandler;

let playerSelection = 0;

//Rock = 0, paper = 1, scissor = 2
let gameArr = ['rock', 'paper', 'scissor']

addRpsBtnsListener();
startTimer();

//Popup Btn
const okBtn = document.querySelector('#result-popup .accept');
okBtn.addEventListener('click', () => {
    const popup = document.getElementById('result-popup'); 
    popup.style.display = 'none';  
    startTimer();
    addRpsBtnsListener();
})

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

function game(pSelection) {

    resetTimer();

    const cSelection = Math.floor(Math.random() * 3);
    const result = playRound(pSelection, cSelection);

    switch(result) {
        case 0:
            showPopup("It\'s a tie")
        break;

        case 1:
            showPopup("Player Wins Round");
            pCounter++;
        break;

        case 2:
            showPopup("Computer Wins Round");
            cCounter++;
        break;
    }

    updateScore(pCounter, cCounter);

    if(pCounter == 3) {
        showPopup("Player won the game", 1);
    }

    if(cCounter == 3) {
        showPopup("Computer won the game", 1);
    }

}

function showPopup(message, type = 0) {
    const popup = document.getElementById('result-popup'); 
    const popupText = popup.children[0];

    if(type == 1) {
        const popupOkBtn = document.getElementsByClassName('accept')[0];
        popupOkBtn.remove();
    }   

    popup.style.display = 'flex';
    popupText.innerText = message; 
    

}

function updateScore( playerScore, computerScore) {
    const playerLabel = document.getElementsByClassName('player-score')[0].children[1];
    const computerLabel = document.getElementsByClassName('computer-score')[0].children[1];

    playerLabel.innerText = playerScore;
    computerLabel.innerText = computerScore;
}

function removeRpsBtnsListener() {

    const rpsButtons = document.querySelector('.choices').children;

    for (let index = 0; index < rpsButtons.length; index++) {
        rpsButtons[index].removeEventListener('click', rpsButtons[index].fn, false);
    }
}

function addRpsBtnsListener() {

    const rpsButtons = document.querySelector('.choices').children;

    for (let index = 0; index < rpsButtons.length; index++) {
        rpsButtons[index].addEventListener( 'click', rpsButtons[index].fn = function handleChoice(e){
            e.preventDefault();
            playerSelection = index;
            removeRpsBtnsListener();
            game(playerSelection);
        }, false)
    }
}

