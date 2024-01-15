const wordsCollection = [
  "Elbrus",
  "Apple",
  "Computer",
  "Mouse",
  "Oil tanker",
  "Seaman",
  "Dog",
  "Vehicle",
  "Watermelon",
  "Book",
  "Hard bootcamp",
  "Clipper",
  "Grocery",
  "Painting",
  "Jack Russel",
  "House",
  "Gravity",
  "Theater",
  "Dollar",
  "Bookshelf",
];
const gameFiled = document.querySelector("#gameField");
const correctWordsCounter = document.querySelector("#correctWordsCounter");
const timeFinished = document.querySelector("#timeFinished");
const restartBtn = document.querySelector('.restart')

const timeLimit = 60;
let timePassed = 0;
let timeLeft = timeLimit;
const timer = document.querySelector("#timer");
let timerInterval = null;

function formatTimeLeft(time) {
  const minutes = Math.floor(time / 60);

  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timer.style.display = "none";
      timeFinished.style.display = "inline";
      gameFiled.style.display = "none";
      restartBtn.style.display = "inline";
    } else {
      timePassed += 1;
      timeLeft = timeLimit - timePassed;

      timer.innerText = formatTimeLeft(timeLeft);
    }
  }, 1000);
}
startTimer();

let currentLetterIndex = 0;

const str = wordsCollection[0];
function displayWord(str) {
  const splittedWord = str.split("");
  for (let i = 0; i < splittedWord.length; i++) {
    const wordLetter = document.createElement("span");
    wordLetter.innerText = splittedWord[i];
    wordLetter.dataset.index = `${i}`;
    wordLetter.className = "letter";
    gameFiled.appendChild(wordLetter);
  }
}
displayWord(str);

window.addEventListener("keydown", (event) => {
  const fullWord = document.querySelectorAll(".letter");
  if (
    fullWord[currentLetterIndex].dataset.index === `${currentLetterIndex}` &&
    event.key === fullWord[currentLetterIndex].innerText
  ) {
    fullWord[currentLetterIndex].style.color = "green";
    currentLetterIndex += 1;
  } else if (
    fullWord[currentLetterIndex].dataset.index === `${currentLetterIndex}` &&
    fullWord[currentLetterIndex].innerText === " "
  ) {
    currentLetterIndex += 1;
  } else if (event.key !== "Shift") {
    if (timePassed < 55) {
      timePassed += 5;
    } else {
      timePassed = 59;
    }
  }

  if (currentLetterIndex === fullWord.length) {
    currentLetterIndex = 0;
    for (let i = 0; i < fullWord.length; i++) {
      fullWord[i].remove();
    }
    correctWordsCounter.innerText = Number(correctWordsCounter.innerText) + 1;
    displayWord(wordsCollection[Math.floor(Math.random() * 20)]);
  }
});

restartBtn.addEventListener('click',() => {
    window.location.reload();
})
