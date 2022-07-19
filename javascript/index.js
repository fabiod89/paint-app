let isDrawing = null
let blackButton = document.querySelector("#blackButton")
let colorButton = document.querySelector("#colorButton")
let eraserButton = document.querySelector("#eraserButton")
let clearButton = document.querySelector("#clearButton")

let color = "black" //default value

blackButton.addEventListener("change", () => {color = "black"})
colorButton.addEventListener("change", () => {color = "red"})
eraserButton.addEventListener("change", () => {color = "white"})


let drawingArea = document.querySelector("#drawingArea");
let gridSize = 50; //default value

const cellSize = gridSize * gridSize;
//variable for each "square" within grid
var div = document.createElement("div");
div.className = "square";

// this will create the grid in the drawing area
const root = document.documentElement;
console.log("hey")
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



function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



//For loop through each "square"

let squares = document.querySelectorAll(".square");
for (let square of squares){
  clearButton.addEventListener("click", () => {square.style.backgroundColor = "white"})
  //Event lisnter for "Mouse move"
  square.addEventListener("mousemove", (e) => {
    if (isDrawing){
      if (colorButton.checked){
        color = generateRandomColor()
      }
      e.target.style.backgroundColor = color;
    }
  });

  //Event lisnter for "Mouse down"
  square.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = color;
  });

}




  

