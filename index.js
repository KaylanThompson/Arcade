
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
let currentPlayer;
let firstPlayer;
let playerOne
let playerTwo

// FUNCTION TO SELECT WHO GOES FIRST AT RANDOM
const winArray = []

function winnerWinnerChickenDinner (){
  for (let i = 0; i < winArray.length; i++) {
    if( winArray[i][0].innerText === "X" && winArray[i][1].innerText === "X" && winArray[i][2].innerText === "X"){

    }

  }
}

// FUNCTION FOR COMPUTER TURN

function computerTurn (){
  let randomCellIndex = Math.floor(Math.random() * (9 - 1) + 1);
  console.log(randomCellIndex)
  cell[randomCellIndex].innerText = "O"
}
 



function letsPlay() {
  Math.ceil(1);
  Math.floor(3);
  let whoseTurn = Math.floor(Math.random() * (3 - 1) + 1);
  if (whoseTurn === 1) {
    firstPlayer = player1;
    currentPlayer = "X";
  } else {
    firstPlayer = player2 || playerTwo === "Computer"
    currentPlayer = "O";
  }
  document.getElementById("firstPlayer").innerText = firstPlayer;
  
  table.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.innerText === "") {
      if( playerTwo = "Computer"){
        computerTurn()
      }
      clickEvent.target.innerText = currentPlayer;

    whoWins()
    winnerWinnerChickenDinner()
      switchTurns();
    }
  });
}

// 
function whoWins(){
  const board = Array.from(document.getElementsByTagName("td"))
  let boardArray = []
  for (let i = 0; i<board.length; i++) {
    boardArray.push(board[i])
  }
winArray.push(boardArray.splice(0, 3))
winArray.push(boardArray.splice(0, 3))
winArray.push(boardArray.splice(0))

}



// FUNCTION TO SWITCH PLAYER TURNS

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

// FUNCTION FOR COMPUTER PLAYER?





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





