import Player from "./Player.js";
console.log("js loaded")
/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */
const players = [ ];
const fields = document.querySelectorAll('.box');
const resetButton = document.querySelector(".reset-btn");
let currentPlayer = 0; // This is the index of the array of the currentplayer

//Create two players aligned with the Player class
//const playerOne = ...
//const playerTwo = ...
//Add both players to the players array
for (let i = 0; i < 1; i++){
    document.querySelector(".input-btn").addEventListener('click', (e) => {
        if(players.length < 2){
            const newPlayer = new Player(document.getElementById("pname").value, document.getElementById("psymbol").value);
            players.push(newPlayer);
            console.log(players.length);
            changePlayerTurn();
        } else {
            console.log("too many players");
        }
    })
}

/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */
for (let i = 0; i < fields.length; i++){
    console.log("for loop")
    fields[i].addEventListener('click', (e) => {
        if(players.length == 2){
            console.log(i);
            addSymbolToField(i);
            if(checkWinner()){
                resetBoard();
            }
            changePlayerTurn();
            console.log("addevent")
        } else {
            alert("You need to add more players!");
        }
    })
}

/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener("click", resetGame);

/* fix symbol not showing up*/
function addSymbolToField(box) {
    let fieldContent = fields[box].textContent;
    if (fieldContent === players[0].symbol || fieldContent === players[1].symbol) {
        alert('This field can not be used');
    }
    console.log(players);
    if (currentPlayer == 0){
        fieldContent = players[0].symbol;
    } else {
        fieldContent = players[1].symbol;
    }
}

function changePlayerTurn() {
    currentPlayer++;
    if(currentPlayer >1) {
        currentPlayer = 0;
    }
}

function resetBoard() {
    for (let g = 0; g < fields.length; g++){
        fields[g].textContent = "";
    }
}

function checkWinner() {
    if(fields[0].textContent == players[0].symbol && fields[1].textContent == players[0].symbol && fields[2].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!"); 
        addPointsPlayerOne();
        return true;
    }
    else if(fields[3].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[5].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne()
        return true;
    }
    else if(fields[6].textContent == players[0].symbol && fields[7].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[0].textContent == players[0].symbol && fields[3].textContent == players[0].symbol && fields[6].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[1].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[7].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[4].textContent == players[0].symbol && fields[5].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[0].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[2].textContent == players[0].symbol && fields[4].textContent == players[0].symbol && fields[6].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[2].textContent == players[0].symbol && fields[5].textContent == players[0].symbol && fields[8].textContent == players[0].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerOne();
        return true;
    }
    else if(fields[0].textContent == players[1].symbol && fields[1].textContent == players[1].symbol && fields[2].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[3].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[5].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[6].textContent == players[1].symbol && fields[7].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!"); 
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[0].textContent == players[1].symbol && fields[3].textContent == players[1].symbol && fields[6].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[1].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[7].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[4].textContent == players[1].symbol && fields[5].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!"); 
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[0].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[2].textContent == players[1].symbol && fields[4].textContent == players[1].symbol && fields[6].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    else if(fields[2].textContent == players[1].symbol && fields[5].textContent == players[1].symbol && fields[8].textContent == players[1].symbol) {
        alert("Player: " + currentPlayer + " won!");
        addPointsPlayerTwo();
        return true;
    }
    return false;
}

function resetGame() {
    /**
     * Assignment
     * Make sure this works (all fields empty, reset data if needed)
     */
}

console.log('File loaded');