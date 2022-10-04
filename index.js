
const body = document.getElementsByTagName("body")[0]
console.log(body)
const section = document.getElementsByTagName("section")[0]
const table = document.createElement("table")
const player1 = "x"
const player2 = "o"

section.appendChild(table)

// FUNCTION TO PICK BOARD SIZE

    function boardSize (numberOfCells) {
        const row = document.createElement("tr")
        for(let i = 0; i < numberOfCells; i++){
            const cell = document.createElement("td")
            row.appendChild(cell)
        }
        table.appendChild(row)
    }

boardSize(3)
boardSize(3)
boardSize(3)


// const player1Name = createElement("input")
// player1Name.classList.add("playerName")
// body.player1Name(player1Name)







