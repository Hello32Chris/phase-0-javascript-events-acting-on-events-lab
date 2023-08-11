const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    game.style.backgroundColor = '#000000';
    dodger.style.backgroundColor = "#FF69B4";
  } else if (left === 0) {
    dodger.style.backgroundColor = '#000000';
    game.style.backgroundColor = "#FF69B4";
  }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
      }
});

function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const left = parseInt(rightNumbers, 10);

if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    game.style.backgroundColor = '#000000';
    dodger.style.backgroundColor = "#FF69B4";
  } else if (left === 360) {
    dodger.style.backgroundColor = '#000000';
    game.style.backgroundColor = "#FF69B4";
  }
};

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }
});