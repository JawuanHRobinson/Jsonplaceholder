"use strict"

window.onload = function (_event) {
    const toDos = document.getElementById("taDonts")
    taDonts.onsubmit = getDonts 
}


function getDonts(event) {
    event.preventDefault()
    const taDonts = event.target
    const doDonts = taDonts.elements.toDos.valueAsNumber
    console.log(doDonts)
    
    fetch(`https://jsonplaceholder.typicode.com/todos/${doDonts}`)
    .then(Response => Response.json())
    .then()
}
    