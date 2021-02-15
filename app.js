var square = document.querySelectorAll(".square");
var board = document.querySelector('.board');
var winner = document.querySelector('.winner');
var currentPlayer = document.querySelector('.currentPlayer');
var xScoreCount = document.querySelector('.xCount');
var oScoreCount = document.querySelector('.oCount');

var isOplayer = false;
var plays = 0;
var win = false;
var xScore = 0;
var oScore = 0;

currentPlayer.innerHTML = "X's Turn"

// Logic of tic tac toe
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var judge = function(e) {
    for (var i = 0; i < winningConditions.length; i++) {
        var xCounter = 0;
        var oCounter = 0;
        var condition = winningConditions[i];
        for (let j = 0; j < condition.length; j++) {
            if (square[condition[j]].innerHTML === 'X') {
                xCounter++;
            } else if (square[condition[j]].innerHTML === 'O') {
                oCounter++;
            } else {
                continue;
            }

            if (xCounter === 3) {
                for (let i = 0; i < condition.length; i++) {
                    square[condition[i]].style.backgroundColor = "blue";
                }
                win = true;
                winner.innerHTML= 'X WINS!';
                currentPlayer.innerHTML = '';
                xScore++;
                xScoreCount.innerHTML = xScore;
                break;
            }

            if (oCounter === 3) {
                for (let i = 0; i < condition.length; i++) {
                    square[condition[i]].style.backgroundColor = "green";
                }
                win = true;
                winner.innerHTML = 'O WINS!';
                currentPlayer.innerHTML = '';
                oScore++;
                oScoreCount.innerHTML = oScore;
                break;
            }
        }
    }
}

// Adds X's and O's 
for (var i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function (e) {
        if (plays < 9 && e.target.innerHTML === '') {
            if (!isOplayer) {
                if (!win) {
                    e.target.innerHTML = 'X';
                    isOplayer = true;
                    currentPlayer.innerHTML = "O's Turn";
                    plays++;
                    judge()
                }
            } else {
                if (!win) {
                    e. target.innerHTML = 'O';
                    isOplayer = false;
                    currentPlayer.innerHTML = "X's Turn"
                    plays++;
                    judge()
                }
            }
        }
    });
};


// Reset button functionality
var resetFn = function () {
    for (var i = 0; i < square.length; i++) {
        square[i].innerHTML = '';
        square[i].style.backgroundColor = 'white'
    }

    isOplayer = false;
    plays = 0;
    win = false;
    winner.innerHTML= '';
    currentPlayer.innerHTML = "X's Turn"
}

