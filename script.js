let currentPlayer = "X";
let game = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let bot = "O";
let winner = "";

console.log(currentPlayer);

function startGame(figure) {

    document.getElementById("chooseplayer").style.display = "none";
    document.getElementById("gamefield").style.visibility = "visible";

    if (figure == "O") {
        currentPlayer = "O";
        player = "O";
        bot = "X";
    }

    document.getElementById("turn").innerHTML = `It\'s ${player}'s turn`;
}

function clickCell(id) {

    if (document.getElementById(id).innerHTML == "") {

        if (currentPlayer == "O") {

            document.getElementById(id).innerHTML = "<img width='100%' src = 'images/o.svg'>";
        } else {
            document.getElementById(id).innerHTML = "<img width='100%' src = 'images/x.svg'>";
        }

        document.getElementById("turn").innerHTML = `It\'s ${bot}'s turn`;

        cellNum = parseInt(id.slice(-1)) - 1;
        game[cellNum] = currentPlayer;

        endGame();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log(currentPlayer);

        setTimeout(botChoice, 1500);

    }
}

function botChoice() {

    let randomCell = "cell" + String(Math.floor(Math.random() * 9) + 1);

    let cell = document.getElementById(randomCell);
    if (cell.innerHTML == "") {

        if (bot == "X") {
            document.getElementById(cell.id).innerHTML = "<img width='100%' src = 'images/x.svg'>";
        } else {
            document.getElementById(cell.id).innerHTML = "<img width='100%' src = 'images/o.svg'>";
        }
        document.getElementById("turn").innerHTML = `It\'s ${player}'s turn`;

        cellNum = parseInt(randomCell.slice(-1)) - 1;
        game[cellNum] = bot;

        endGame();

        currentPlayer = currentPlayer === "X" ? "O" : "X";
        console.log(currentPlayer);

    } else {
        botChoice();
    }
}

function endGame() {

    if (game[0] == currentPlayer && game[1] == currentPlayer && game[2] == currentPlayer ||
        game[3] == currentPlayer && game[4] == currentPlayer && game[5] == currentPlayer ||
        game[6] == currentPlayer && game[7] == currentPlayer && game[8] == currentPlayer ||
        game[0] == currentPlayer && game[3] == currentPlayer && game[6] == currentPlayer ||
        game[1] == currentPlayer && game[4] == currentPlayer && game[7] == currentPlayer ||
        game[2] == currentPlayer && game[5] == currentPlayer && game[8] == currentPlayer ||
        game[0] == currentPlayer && game[4] == currentPlayer && game[8] == currentPlayer ||
        game[2] == currentPlayer && game[4] == currentPlayer && game[6] == currentPlayer) {

        winner = currentPlayer;
        showResult();

    } else if (!(game.includes("")) && winner == "") {
        showResult();
    }
}

function showResult() {

    document.getElementById("container").style.display = "none";
    document.getElementById("result").style.visibility = "visible";

    result = document.getElementById("gameover");

    if (winner == "") {
        result.innerHTML = "It's a draw!";
    } else {
        result.innerHTML = `${currentPlayer} has won!`;
    }
}