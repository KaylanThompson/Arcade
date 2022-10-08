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
let player2 = "Player 2";
const computer = "Computer"
let playerOne;
let playerTwo;
let firstPlayer
let currentPlayer


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



// FUNCTION FOR COMPUTER TURN

function computerTurn (){
  let randomCellIndex = Math.floor(Math.random() * (9 - 1) + 1);
    console.log(randomCellIndex);


  }
// FUNCTION TO SELECT WHO GOES FIRST AT RANDOM AND STARTS GAME


function randomPlayer() {
  Math.ceil(1);
  Math.floor(3);
  let whoseTurn = Math.floor(Math.random() * (3 - 1) + 1);
  if (whoseTurn === 1) {
    firstPlayer = player1;
    currentPlayer = "X";
  } else if (playerTwo === "Computer"){
    firstPlayer = computer;
    player2 = computer
    currentPlayer = "O"}
    else{
      firstPlayer = player2;
      currentPlayer = "O"
    }
    document.getElementById("firstPlayer").innerText = firstPlayer;

}

// FUNCTION FOR GAME PLAY

function letsPlay (){
  table.addEventListener("click", function (clickEvent) {
    if (clickEvent.target.innerText === "") {
      clickEvent.target.innerText = currentPlayer }
      winnerWinnerChickenDinner()
      switchTurns()})
    }
  
//  if (firstPlayer === computer){
//   console.log("first hello")
//   let randomCellIndex = Math.floor(Math.random() * (9 - 1) + 1);

//   if(cell[randomCellIndex].innerText === "") {
//     cell[randomCellIndex].innerText = currentPlayer
//     switchTurns()}};

//   if (firstPlayer !== computer){
//   table.addEventListener("click", function (clickEvent) {
//     if (clickEvent.target.innerText === "") {
//       clickEvent.target.innerText = currentPlayer }})}


//       if (player2 === computer) {
//         let randomCellIndex = Math.floor(Math.random() * (9 - 1) + 1);
//         console.log("picked a random number");

//       if(cell[randomCellIndex].innerText === "") {
//       cell[randomCellIndex].innerText = "O"
//       console.log("fourth hello")
//       }}

//       switchTurns()




// FUNCTION TO SWITCH PLAYER TURNS

function switchTurns() {
  if (currentPlayer === "O") {
    currentPlayer = "X";
  } else {
    currentPlayer = "O";
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

// POSSIBLE FUNCTION FOR WINNING ARRAY COMBOS

const winArray = [
  [c1, c2, c3],
  [c4, c5, c6],
  [c7, c8, c9],
  [c1, c4, c7],
  [c2, c5, c8],
  [c3, c6, c9],
  [c1, c5, c9],
  [c3, c5, c7]
]

function winnerWinnerChickenDinner() {
 let winnerX = document.getElementById("winner")
  for (let i = 0; i < winArray.length; i++) {
    if (
      winArray[i][0].innerText === "X" &&
      winArray[i][1].innerText === "X" &&
      winArray[i][2].innerText === "X")
      {winnerX.innerText = "Player 1 Wins!"}

    else if (
     winArray[i][0].innerText === "O" &&
     winArray[i][1].innerText === "O" &&
     winArray[i][2].innerText === "O")
     { winnerX.innerText = "Player 2 Wins!"} 

      // if (
      //   winArray[i][0].innerText !== '' &&
      //   winArray[i][1].innerText !== '' &&
      //   winArray[i][2].innerText !== '')
      //   {winnerX.innerText = "It's a Draw!"}
 }

  }

// FUNCTION THAT CREATED MY ARRAY FOR WINNING ARRAY
// function whoWins() {
//   const board = Array.from(document.getElementsByTagName("td"));
//   let boardArray = [];
//   for (let i = 0; i < board.length; i++) {
//     boardArray.push(board[i]);
//   }
//   winArray.push(boardArray.splice(0, 3));
//   winArray.push(boardArray.splice(0, 3));
//   winArray.push(boardArray.splice(0));
//   winArray.push([c1, c4, c7])
//   winArray.push([c2, c5, c8])
//   winArray.push([c3, c6, c9])
//   winArray.push([c1, c5, c9])
//   winArray.push([c3, c5, c7])
// }
// whoWins()








// function playerPersonOrComputer (){
//   if (playerTwo = "Computer") {
//     player2 = "Computer"
//   } else {
//     player2 = "Player 2"
//   }
// }
