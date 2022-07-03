let isDrawing = null
let squares = document.querySelectorAll(".square")

for (let square of squares){
  square.addEventListener("mousemove", (e) => {
    if (isDrawing){
      e.target.style.backgroundColor = "black"
    }
      e.target.style.opacity = ".5"
  });

  square.addEventListener("mouseleave", (e) => {
    e.target.style.opacity = "1"
  });
}


// Check when mouse is held down
window.addEventListener("mousedown", () => {
  isDrawing = true;
});

// Mouse up
window.addEventListener("mouseup", () => {
  isDrawing = false;
});



  

