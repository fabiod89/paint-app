let isDrawing = null
let squares = document.querySelectorAll(".square")
let drawingArea = document.querySelector(".drawingArea")

// Check when mouse is held down
window.addEventListener("mousedown", () => {
  isDrawing = true;
});

// Check when mouse is held down
window.addEventListener("mouseup", () => {
  isDrawing = false;
});

//For loop through each "square"
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





  

