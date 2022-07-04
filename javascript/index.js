let isDrawing = null

let drawingArea = document.querySelector("#drawingArea")

let gridSize = 16
let cellSize = gridSize * gridSize

var div = document.createElement("div");
div.className = "square";




let root = document.documentElement;

for (let i=0 ; i < cellSize ; i++){
  var div = document.createElement("div");
  div.className = "square";
  drawingArea.appendChild(div)
}

root.style.setProperty('--cellSize', gridSize);



// Check when mouse is held down
window.addEventListener("mousedown", () => {
  isDrawing = true;
});

// Check when mouse is held down
window.addEventListener("mouseup", () => {
  isDrawing = false;
});

//For loop through each "square"
let squares = document.querySelectorAll(".square")
for (let square of squares){
  //Event lisnter for "Mouse move"
  square.addEventListener("mousemove", (e) => {
    e.target.style.opacity = ".5"
    if (isDrawing){
      e.target.style.backgroundColor = "black";
    }
  });

  //Event lisnter for "Mouse down"
  square.addEventListener("mousedown", (e) => {
    e.target.style.backgroundColor = "black";
  });

  //Event listener for "Mouse leave"
  square.addEventListener("mouseleave", (e) => {
    e.target.style.opacity = "1";
  });
}





  

