document.addEventListener("DOMContentLoaded", function() {

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




generateGrid();

})