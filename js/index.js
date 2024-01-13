/* eslint-disable require-jsdoc */
const easyModeBtn = document.getElementById("easy");
const middleModeBtn = document.getElementById("middle");
const hardModeBtn = document.getElementById("hard");
const gameField = document.querySelector(".gameField");


function startEasyGame() {
  gameField.innerHTML = "";
  clickedCorrectCardsIndexes = [];
  randomEasyCards();
  for (let i = 0; i < 6; i++) {
    const newCard = document.createElement("div");
    newCard.style.backgroundColor = "white";
    newCard.className = "card";
    newCard.dataset.index = i + 1;
    gameField.appendChild(newCard);
  }
  const allCards = document.querySelectorAll(".card");
  for (let j = 0; j < filledCardsIndexes.length; j++) {
    allCards[filledCardsIndexes[j]].style.backgroundColor = "yellow";
  }

  setTimeout(() => {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.backgroundColor = "white";
    }
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].addEventListener("click", () => {
        const cardIndex = Number(allCards[i].dataset.index - 1);
        if (filledCardsIndexes.includes(cardIndex)) {
          allCards[i].style.backgroundColor = "yellow";
          clickedCorrectCardsIndexes.push(
              Number(allCards[i].dataset.index - 1)
          );
          checkForWin();
        } else {
          allCards[i].style.backgroundColor = "red";
          setTimeout("alert('Wrong card! You lost!')", 500);
          setTimeout("startEasyGame()", 3000);
        }
      });
    }
  }, 4000);
}

function startMiddleGame() {
  gameField.innerHTML = "";
  clickedCorrectCardsIndexes = [];
  randomMiddleCards();
  for (let i = 0; i < 9; i++) {
    const newCard = document.createElement("div");
    newCard.style.backgroundColor = "white";
    newCard.className = "card";
    newCard.dataset.index = i + 1;
    gameField.appendChild(newCard);
  }
  const allCards = document.querySelectorAll(".card");
  for (let j = 0; j < filledCardsIndexes.length; j++) {
    allCards[filledCardsIndexes[j]].style.backgroundColor = "yellow";
  }

  setTimeout(() => {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.backgroundColor = "white";
    }
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].addEventListener("click", () => {
        const cardIndex = Number(allCards[i].dataset.index - 1);
        if (filledCardsIndexes.includes(cardIndex)) {
          allCards[i].style.backgroundColor = "yellow";
          clickedCorrectCardsIndexes.push(
              Number(allCards[i].dataset.index - 1)
          );
          checkForWin();
        } else {
          allCards[i].style.backgroundColor = "red";
          setTimeout("alert('Wrong card! You lost!')", 500);
          setTimeout("startMiddleGame()", 3000);
        }
      });
    }
  }, 3000);
}

function startHardGame() {
  gameField.innerHTML = "";
  clickedCorrectCardsIndexes = [];
  randomHardCards();
  for (let i = 0; i < 12; i++) {
    const newCard = document.createElement("div");
    newCard.style.backgroundColor = "white";
    newCard.className = "card";
    newCard.dataset.index = i + 1;
    gameField.appendChild(newCard);
  }
  const allCards = document.querySelectorAll(".card");
  for (let j = 0; j < filledCardsIndexes.length; j++) {
    allCards[filledCardsIndexes[j]].style.backgroundColor = "yellow";
  }

  setTimeout(() => {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].style.backgroundColor = "white";
    }
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].addEventListener("click", () => {
        const cardIndex = Number(allCards[i].dataset.index - 1);
        if (filledCardsIndexes.includes(cardIndex)) {
          allCards[i].style.backgroundColor = "yellow";
          clickedCorrectCardsIndexes.push(
              Number(allCards[i].dataset.index - 1)
          );
          checkForWin();
        } else {
          allCards[i].style.backgroundColor = "red";
          setTimeout("alert('Wrong card! You lost!')", 500);
          setTimeout("startHardGame()", 3000);
        }
      });
    }
  }, 2000);
}

let filledCardsIndexes = [];
let clickedCorrectCardsIndexes = [];

function randomEasyCards() {
  filledCardsIndexes = [];
  const numberOfFilledCards = Math.ceil(Math.random() * 6);
  for (let i = 0; i < numberOfFilledCards; i++) {
    filledCardsIndexes.push(Math.floor(Math.random() * 5));
  }
}

function randomMiddleCards() {
  filledCardsIndexes = [];
  const numberOfFilledCards = Math.ceil(Math.random() * 9);
  for (let i = 0; i < numberOfFilledCards; i++) {
    filledCardsIndexes.push(Math.floor(Math.random() * 8));
  }
}

function randomHardCards() {
  filledCardsIndexes = [];
  const numberOfFilledCards = Math.ceil(Math.random() * 12);
  for (let i = 0; i < numberOfFilledCards; i++) {
    filledCardsIndexes.push(Math.floor(Math.random() * 11));
  }
}

easyModeBtn.addEventListener("click", startEasyGame);
middleModeBtn.addEventListener("click", startMiddleGame);
hardModeBtn.addEventListener("click", startHardGame);

function checkForWin() {
  const correctCards = [...new Set(filledCardsIndexes)];
  if (
    clickedCorrectCardsIndexes.sort().toString() ===
    correctCards.sort().toString()
  ) {
    setTimeout("alert('Вы выйграли!')", 500);
  }
}
