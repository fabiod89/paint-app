let isDrawing = null


let blackButton = document.querySelector("#blackButton")
let colorButton = document.querySelector("#colorButton")
let eraserButton = document.querySelector("#eraserButton")

let color = null


let drawingArea = document.querySelector("#drawingArea");
let gridSize = 16; //default value

const cellSize = gridSize * gridSize;
//variable for each "square" within grid
var div = document.createElement("div");
div.className = "square";

// this will create the grid in the drawing area
const root = document.documentElement;
for (let i=0 ; i < cellSize ; i++){
  let div = document.createElement("div");
  div.className = "square";
  drawingArea.appendChild(div);
}

// this is used to adjust CSS grid based on
// gridSize variable
root.style.setProperty('--cellSize', gridSize);



// Check when mouse is held down
window.addEventListener("mousedown", () => {
  isDrawing = true;
});

// Check when mouse is held down
window.addEventListener("mouseup", () => {
  isDrawing = false;
});



if (blackButton){
  color = "black"
}else if (colorButton){
  color = "red" 
}else if (eraserButton){
  color = "white" 
}



//For loop through each "square"
let squares = document.querySelectorAll(".square");
for (let square of squares){
  //Event lisnter for "Mouse move"
  square.addEventListener("mousemove", (e) => {
    if (isDrawing){
      e.target.style.backgroundColor = "black";
    }
  });

  //Event lisnter for "Mouse down"
  square.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = color;
  });

}




  

