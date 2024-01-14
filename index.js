const inputNumber = document.getElementById("inputNumber");
const equalOperation = document.querySelector("#equal");
const operationBtns = document.querySelectorAll("[data-operation]");
const counters = document.querySelectorAll(".counter");
const results = document.querySelectorAll(".result");
const operations = document.querySelectorAll(".operation");
const history = document.querySelector(".history");

let firstOperand;
let secondOperand;
let operation;
let equalityResult;
let index = 1;

for (let i = 0; i < operationBtns.length; i++) {
  operationBtns[i].addEventListener("click", () => {
    if (!isNaN(Number(inputNumber.value))) {
      console.log(Number(inputNumber.value));
      if (index == 11) {
        historyOverfilled();
        resetOperationButtons();
        index = 10;
        firstOperand = Number(inputNumber.value);
        operation = operationBtns[i].innerText;
        operations[index - 1].innerHTML = createHistoryNode();
        inputNumber.value = "";
        operationBtns[i].style.backgroundColor = "red";
      } else {
        resetOperationButtons();
        firstOperand = Number(inputNumber.value);
        operation = operationBtns[i].innerText;
        operations[index - 1].innerHTML = createHistoryNode();
        inputNumber.value = "";
        operationBtns[i].style.backgroundColor = "red";
      }
    }
  });
}

equalOperation.addEventListener("click", () => {
  if (!isNaN(Number(inputNumber.value))) {
    secondOperand = Number(inputNumber.value);
    if (operation == "+") {
      equalityResult = firstOperand + secondOperand;
    } else if (operation == "-") {
      equalityResult = firstOperand - secondOperand;
    } else if (operation == "X") {
      equalityResult = firstOperand * secondOperand;
    } else if (operation == "/") {
      equalityResult = firstOperand / secondOperand;
    }
    const results = document.querySelectorAll(".result");
    results[
      index - 1
    ].innerText = `${firstOperand} ${operation} ${secondOperand} = ${equalityResult}`;
    inputNumber.value = "";
    index += 1;
    resetOperationButtons();
  }
});

function createHistoryNode() {
  return `<span class="counter">${index})</span>
  <span class="result">${firstOperand} ${operation}</span>`;
}

function historyOverfilled() {
  const results = document.querySelectorAll(".result");
  for (let i = 0; i < operations.length - 1; i++) {
    results[i].innerText = results[i + 1].innerText;
  }
}

function resetOperationButtons() {
  for (let i = 0; i < operationBtns.length; i++) {
    operationBtns[i].style.backgroundColor = "gold";
  }
}
