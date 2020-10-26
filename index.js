var myColor = ["red", "yellow","green", "DarkMagenta", "blue", "Fuchsia", "LightSeaGreen", "pink","orange"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function randomColorNumber() {

for (var j=1; j <= 9; j++)
document.getElementById("c"+j).style.backgroundColor = myColor[Math.floor(Math.random()*myColor.length)];

randomNumbers();
}

function randomNumbers() {
  for (var j=1; j <= 9; j++)
  document.getElementById("s"+j).innerHTML = Math.floor(Math.random()*myColor.length)+1;

}
