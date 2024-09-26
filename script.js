document.addEventListener("DOMContentLoaded", function() {
    let flagIsDrawing = false;
    

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

    function handleMouseOver(event){

        if (flagIsDrawing) {
            event.target.style.backgroundColor = "#183419";
        }
    }

    function changeColor(){
        boolIsDrawing = true;
        
        const gridBox = document.querySelectorAll(".gridbox");
        gridBox.forEach((box) => {
            box.addEventListener("mouseover", handleMouseOver)
         
            
        })
    }

    function stopChangeColor(){

        const gridBox = document.querySelectorAll(".gridbox");
        gridBox.forEach((box) => {
            box.removeEventListener("mouseover", handleMouseOver);
        });

        
    }

    function toggleDrawing(){
            document.addEventListener("keydown", (event) => {
                if (event.key === " " || event.key === "Space") {
                    flagIsDrawing = !flagIsDrawing;
                    if (flagIsDrawing) {
                        changeColor();
                    } else {
                        stopChangeColor();
                    }
                }
            });
    }

    function clearDrawing (){

        const gridBox = document.querySelectorAll(".gridbox");
        const buttonClear = document.querySelector(".clear");

        buttonClear.addEventListener("click",() => {
            gridBox.forEach((box) => {
                box.style.backgroundColor = "#A2CA71";

            })

        })

    }


    generateGrid();
    clearDrawing();
    toggleDrawing();
    

})