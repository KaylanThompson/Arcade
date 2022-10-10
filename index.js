const section = document.getElementsByTagName("section")[0];
const table = document.createElement("table");
table.setAttribute("id", "board");

const cell = document.getElementsByTagName("td");
section.appendChild(table);

// FUNCTION TO PICK BOARD SIZE

function boardSize(numberOfCells) {
  const row = document.createElement("tr");
  row.classList.add("row");
  for (let i = 0; i < numberOfCells; i++) {
    const cell = document.createElement("td");
    cell.classList.add("cell");
    row.appendChild(cell);
  }
  table.appendChild(row);
}

boardSize(3);
boardSize(3);
boardSize(3);

const player1 = "Player 1";
const player2 = "Player 2";
const computer = "Computer";
let playerOne;
let playerTwo;
let firstPlayer;
let currentPlayer;

// FUNCTION TO DISPLAY PLAYER(S) NAME(S)

function playerName() {
  const player1Input = document.getElementById("player1");
  const player1Name = document.getElementById("playerButton");
  player1Name.addEventListener("click", function (event) {
    event.preventDefault();
    playerOne = player1Input.value;
    document.getElementById("player1Name").innerText = playerOne;
  });

  const player2Input = document.getElementById("player2");
  const player2Name = document.getElementById("playerButton");

  player2Name.addEventListener("click", function (event) {
    event.preventDefault();
    playerTwo = player2Input.value;
    document.getElementById("player2Name").innerText = playerTwo;

    if (document.getElementById("player2Name").innerText === "") {
      playerTwo = "Computer";
      document.getElementById("player2Name").innerText = playerTwo;
    }
  });
}

playerName();

// FUNCTION TO SELECT WHO GOES FIRST AT RANDOM

function randomPlayer() {
  Math.ceil(1);
  Math.floor(3);
  let whoseTurn = Math.floor(Math.random() * (3 - 1) + 1);
  console.log(whoseTurn);
  if (whoseTurn === 1) {
    firstPlayer = player1;
    currentPlayer = "X";
  } else if (whoseTurn === 2 && playerTwo === "Computer") {
    singlePlayer();
    firstPlayer = player2;
    currentPlayer = "O";
  } else {
    twoPlayer();
    firstPlayer = player2;
    currentPlayer = "O";
  }

  document.getElementById("firstPlayer").innerText = firstPlayer;
}

// FUNCTION FOR GAME PLAY

function twoPlayer() {
  table.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.innerText === "") {
      clickEvent.target.innerText = currentPlayer;
    }

    newWin();
    switchTurns();
  });
}

function singlePlayer() {
  computerMove();

  table.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.innerText === "") {
      clickEvent.target.innerText = "X";
    }

    newWin();

    // })
  });
}

// FUNCTION TO SWITCH PLAYER TURNS

function switchTurns() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

// VARIABLES FOR ROW AND CELL IDS

const row1 = document.getElementsByTagName("tr")[0];
row1.setAttribute("id", "row1");
const row2 = document.getElementsByTagName("tr")[1];
row2.setAttribute("id", "row2");
const row3 = document.getElementsByTagName("tr")[2];
row3.setAttribute("id", "row3");
const c1 = document.getElementsByTagName("td")[0];
c1.setAttribute("id", "c1");
const c2 = document.getElementsByTagName("td")[1];
c2.setAttribute("id", "c2");
const c3 = document.getElementsByTagName("td")[2];
c3.setAttribute("id", "c3");
const c4 = document.getElementsByTagName("td")[3];
c4.setAttribute("id", "c4");
const c5 = document.getElementsByTagName("td")[4];
c5.setAttribute("id", "c5");
const c6 = document.getElementsByTagName("td")[5];
c6.setAttribute("id", "c6");
const c7 = document.getElementsByTagName("td")[6];
c7.setAttribute("id", "c7");
const c8 = document.getElementsByTagName("td")[7];
c8.setAttribute("id", "c8");
const c9 = document.getElementsByTagName("td")[8];
c9.setAttribute("id", "c9");

let squares = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

function isCellEmpty(value) {
  return value.innerText === "";
}

function computerMove() {
  const emptyCells = squares.filter(isCellEmpty);
  let randomCellIndex =
    emptyCells[Math.floor(Math.random() * emptyCells.length)];
  console.log(randomCellIndex);
  randomCellIndex.innerText = "O";
}

const winArray = [
  [c1, c2, c3],
  [c4, c5, c6],
  [c7, c8, c9],
  [c1, c4, c7],
  [c2, c5, c8],
  [c3, c6, c9],
  [c1, c5, c9],
  [c3, c5, c7],
];
let winnerX = document.getElementById("winner");
function newWin() {
  if (
    (c1.innerText === "X" && c2.innerText === "X" && c3.innerText === "X") ||
    (c4.innerText === "X" && c5.innerText === "X" && c6.innerText === "X") ||
    (c7.innerText === "X" && c8.innerText === "X" && c9.innerText === "X") ||
    (c1.innerText === "X" && c4.innerText === "X" && c7.innerText === "X") ||
    (c2.innerText === "X" && c5.innerText === "X" && c8.innerText === "X") ||
    (c3.innerText === "X" && c6.innerText === "X" && c9.innerText === "X") ||
    (c1.innerText === "X" && c5.innerText === "X" && c9.innerText === "X") ||
    (c3.innerText === "X" && c5.innerText === "X" && c7.innerText === "X")
  ) {
    winnerX.innerText = document.getElementById("winner").innerText =
      playerOne + "WINS!";
  } else if (
    (c1.innerText === "O" && c2.innerText === "O" && c3.innerText === "O") ||
    (c4.innerText === "O" && c5.innerText === "O" && c6.innerText === "O") ||
    (c7.innerText === "O" && c8.innerText === "O" && c9.innerText === "O") ||
    (c1.innerText === "O" && c4.innerText === "O" && c7.innerText === "O") ||
    (c2.innerText === "O" && c5.innerText === "O" && c8.innerText === "O") ||
    (c3.innerText === "O" && c6.innerText === "O" && c9.innerText === "O") ||
    (c1.innerText === "O" && c5.innerText === "O" && c9.innerText === "O") ||
    (c3.innerText === "O" && c5.innerText === "O" && c7.innerText === "O")
  ) {
    winnerX.innerText = document.getElementById("winner").innerText =
      playerTwo + "WINS!";
  } else if (
    c1.innerText !== "" &&
    c2.innerText !== "" &&
    c3.innerText !== "" &&
    c4.innerText !== "" &&
    c5.innerText !== "" &&
    c6.innerText !== "" &&
    c7.innerText !== "" &&
    c8.innerText !== "" &&
    c9.innerText !== ""
  ) {
    winnerX.innerText = "It's a Draw!";
  }
}

function clearCells(element) {
  element.innerText = "";
}

function newGame() {
  squares.forEach(clearCells);

  document.getElementById("firstPlayer").innerText = "";
  winnerX.innerText = "";
}

