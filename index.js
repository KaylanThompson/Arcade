const section = document.getElementsByTagName("section")[0];
const table = document.createElement("table");
table.setAttribute("id", "board");
const cell = document.getElementsByTagName("td")[0];
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
let currentPlayer;
let firstPlayer;

// FUNCTION TO SELECT WHO GOES FIRST AT RANDOM

function letsPlay() {
  Math.ceil(1);
  Math.floor(3);
  let whoseTurn = Math.floor(Math.random() * (3 - 1) + 1);
  if (whoseTurn === 1) {
    firstPlayer = player1;
    currentPlayer = "X";
  } else {
    firstPlayer = player2;
    currentPlayer = "O";
  }
  document.getElementById("firstPlayer").innerText = firstPlayer;
  // BELOW IS THE TURN PART OF THE SAME FUNCTION
}
table.addEventListener("click", function (clickEvent) {
  if (clickEvent.target.innerText === "") {
    clickEvent.target.innerText = currentPlayer;
    switchTurns();
  }
});


function switchTurns() {

  if (currentPlayer === "O") {
    currentPlayer = "X";
  } else  {
    currentPlayer = "O";
  }

}
// FUNCTION TO DISPLAY PLAYER(S) NAME(S)

function playerName() {
  const player1Input = document.getElementById("player1");
  const player1Name = document.getElementById("playerButton");
  player1Name.addEventListener("click", function (event) {
    event.preventDefault();
    let player1 = player1Input.value;
    document.getElementById("player1Name").innerText = player1;
    if (document.getElementById("player1Name").innerText === "") {
      player1 = "Computer";
      document.getElementById("player1Name").innerText = player1;
    }
  });

  const player2Input = document.getElementById("player2");
  const player2Name = document.getElementById("playerButton");
  player2Name.addEventListener("click", function (event) {
    event.preventDefault();
    let player2 = player2Input.value;
    document.getElementById("player2Name").innerText = player2;
    if (document.getElementById("player2Name").innerText === "") {
      player2 = "Computer";
      document.getElementById("player2Name").innerText = player2;
    }
  });
}
playerName();

// VARIABLES FOR ROW AND CELL IDS

const row1 = document.getElementsByTagName("tr")[0];
row1.setAttribute("id", "row1");
const row2 = document.getElementsByTagName("tr")[1];
row1.setAttribute("id", "row1");
const row3 = document.getElementsByTagName("tr")[2];
row2.setAttribute("id", "row3");
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

let winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
