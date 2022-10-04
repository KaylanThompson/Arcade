// MAKING THE BOARD * FUNCTION TO ADD A ROW * FUNCTION TO ADD A BIGGER BOARD THAT IS 6 x 6


const section = document.getElementsByTagName("section")[0]
const table = document.createElement("table")


section.appendChild(table)


    function boardSize (numberOfCells) {
        const row = document.createElement("tr")
        for(let i = 0; i < numberOfCells; i++){
            const cell = document.createElement("td")
            row.appendChild(cell)
        }
        table.appendChild(row)
    }



