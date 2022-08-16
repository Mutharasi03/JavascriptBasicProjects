const hex = [0, 1, 2, 3, 4, 5, 6, 7, "A", "B", "C", "D", "E", "F", "G", "H"];
const btn = document.querySelector(".clickButton");
const colorCode = document.querySelector(".colorCode");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  colorCode.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  document.querySelector(".listItem").style.color = "white";
});
