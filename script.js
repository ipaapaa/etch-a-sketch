

function generateGrid(){
    const container = document.querySelector(".container");
    
    

    const boxPerRow = 16;
    const numberOfRows = 16;

    for (let i = 0; i < numberOfRows; i++ ){
        for (let j = 0; j < boxPerRow; j++){
            const gridBox = document.createElement("div");
            gridBox.className = "gridbox";
            container.appendChild(gridBox);
            
        }
       

    }
}

function changeColor(){
    const gridBox = document.querySelectorAll(".gridbox");
    gridBox.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "#183419";
        })
    })
}

function startDrawing(){
    document.addEventListener("keydown", (event) => {
        if (event.key === " " || event.key === "Space"){
            changeColor();
        }
    });


    
}

document.addEventListener("DOMContentLoaded", function() {

    generateGrid();
    startDrawing();


})