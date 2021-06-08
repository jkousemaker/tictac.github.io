import Player from "./Player.js";

/**
 * To start:
 * Check index.html, make sure the board with fields are created with correct classnames
 * The board should be 3x3 fields
 * Add correct classes
 */
const players = [ ];
const fields = document.querySelectorAll('.board > .field');
const resetButton = document.querySelector(".reset-btn");
let currentPlayer = 0; // This is the index of the array of the currentplayer

//Create two players aligned with the Player class
//const playerOne = ...
//const playerTwo = ...
//Add both players to the players array

for (let i = 0; i < 2; i++) {
    const newPlayer = new Player(playerName, symbol);
    players.push(newPlayer);
}

/**
 * Assignment
 * Make a loop thru all the fields and add a click event. 
 * Connect the addSymbolToField function in the eventHandler
 */
for (let i = 0; i < fields.length; i++){
    console.log("for loop")
    field[i].addEventListener('click', (e) => {
        addSymbolToField(i);
        console.log("addevemt")
    })
}

/**
 * Assignment 
 * Give body to the reset function (the function exists below)
 */
resetButton.addEventListener("click", resetGame);

function addSymbolToField(field) {
    const fieldContent = field.textContent;
    if (fieldContent === 'X' || fieldContent === 'O') {
        alert('This field can not be used');
    }

    /**
     * Assignment
     * Add the current player symbol to the field textContent
     * What more needs to be done here? Make a short todolist
     */

}

function checkWinner() {
    /**
     * Assignment
     * Add an algorithm to check if someone has three in a row
     * Try to use Internet - if not found the teacher will give you one
     * Also make sure you check for a draw (gelijkspel)
     * Again what more needs to be done, make a short todolist
     */
}

function resetGame() {
    /**
     * Assignment
     * Make sure this works (all fields empty, reset data if needed)
     */
}

console.log('File loaded');