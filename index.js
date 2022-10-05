
const section = document.getElementsByTagName("section")[0]
const table = document.createElement("table")
table.setAttribute("id", "board")

const cell = document.getElementsByTagName("td")[0]
const player1 = "x"
const player2 = "o"

section.appendChild(table)

// FUNCTION TO PICK BOARD SIZE

    function boardSize (numberOfCells) {
        const row = document.createElement("tr")
        row.classList.add("row")
        for(let i = 0; i < numberOfCells; i++){
            const cell = document.createElement("td")
            cell.classList.add("cell")
            row.appendChild(cell)
        }
        table.appendChild(row)
    }


boardSize(3)
boardSize(3)
boardSize(3)

const row1 = document.getElementsByTagName("tr")[0]
row1.setAttribute("id", "row1")
const row2 = document.getElementsByTagName("tr")[1]

row2.setAttribute("id", "row2")














