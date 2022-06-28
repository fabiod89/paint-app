let squares = document.querySelectorAll(".square")

for (let square of squares){
    console.log (square)
    square.addEventListener("click", (s) => {
    s.target.style.backgroundColor = "blue"
    });
}