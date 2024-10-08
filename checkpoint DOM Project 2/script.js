document.addEventListener("DOMContentLoaded", function () {
  changeColorBtn.addEventListener("click", function () {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
  console.log("DOM content has loaded!");
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let changeColorBtn = document.getElementById("change-color-btn");
let colorBox = document.getElementById("color-box");
