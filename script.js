"use strict";

// selecting elements
let inflationRate = document.querySelector("#inflation_rate");
let amount = document.querySelector("#amount");
let years = document.querySelector("#years");
let calculateBtn = document.querySelector(".calculate");
let resetBtn = document.querySelector(".reset");
let container = document.querySelector(".container");
let result = document.querySelector(".result");
let wrong = document.querySelector(".wrong");

let reset = false;

// functions
function removeText() {
  result.textContent = "";
  reset = false;
}

function removeWrong() {
  wrong.textContent = "";
  reset = false;
}

function removeInput() {
  amount.value = "";
  years.value = "";
  inflationRate.value = "";
}

// calculate button click
calculateBtn.addEventListener("click", function () {
  if (reset === true) {
    removeText();
    removeWrong();
  }

  let sum = Number(amount.value);
  if (amount.value > 0 && years.value > 0) {
    for (let i = 0; i < Number(years.value); i++) {
      sum += (sum * inflationRate.value) / 100;
    }

    result.textContent = `Todays ${amount.value} € worths same as ${sum.toFixed(
      2
    )} in ${years.value} years`;
  } else {
    wrong.textContent = "Wrong input!";
  }
  reset = true;
});

//reset button click
resetBtn.addEventListener("click", function () {
  removeInput();
  removeText();
  removeWrong();
});
