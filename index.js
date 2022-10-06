const section = document.getElementsByTagName("section")[0];
const table = document.createElement("table");
table.setAttribute("id", "board");
const cell = document.getElementsByTagName("td")[0];

section.appendChild(table);

const X = "Player 1"
const O = "Player 2"

// FUNCTION TO SELECT WHO GOES FIRST AT RANDOM

function whoGoesFirst (){
    let firstPlayer
Math.ceil(1);
Math.floor(3);
let whoseTurn = Math.floor(Math.random() * (3-1) + 1);
if (whoseTurn === 1) {
    firstPlayer = X
} else {
    firstPlayer = O
}
document.getElementById("firstPlayer").innerText = firstPlayer
}



// FUNCTION TO DISPLAY PLAYER(S) NAME(S)

function playerName() {
  const player1Input = document.getElementById("player1");
  const player1Name = document.getElementById("playerButton");
  player1Name.addEventListener("click", function (event) {
    event.preventDefault();
    let player1 = player1Input.value;
    document.getElementById("player1Name").innerText = player1;
    if (document.getElementById("player1Name").innerText === ''){
        player1 = "Computer"
        document.getElementById("player1Name").innerText = player1}
  });

  const player2Input = document.getElementById("player2");
  const player2Name = document.getElementById("playerButton");
  player2Name.addEventListener("click", function(event){
    event.preventDefault();
    let player2 = player2Input.value;
    document.getElementById("player2Name").innerText = player2;
    if (document.getElementById("player2Name").innerText === ''){
        player2 = "Computer"
        document.getElementById("player2Name").innerText = player2}
  })
}
playerName();

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

// FUNCTIONS FOR HOW TO PLACE X OR O ON BOARD

function placeX() {
  table.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.innerText === "") {
      clickEvent.target.innerText = "X";
    }
  });
}

placeX();

function placeO() {
  table.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.innerText === "") {
      clickEvent.target.innerText = "O";
    }
  });
}
placeO();
