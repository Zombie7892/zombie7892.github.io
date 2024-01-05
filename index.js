const translateBtn = document.querySelector("#addButton");
const inputField = document.querySelector("#inputWord");
let allNumbersIn = document.querySelectorAll(".orderNumberInitial");
let allNumbersTr = document.querySelectorAll(".orderNumberTranslit");
let initialWords = document.querySelector("#initialWords");
let translitWords = document.querySelector("#translitWords");
let ruDeleteBtns = document.querySelectorAll('.removeLine');
let trDeleteBtns = document.querySelectorAll('.removeLineT');
let allInWords = document.querySelectorAll('.initialWord');
let allTrWords = document.querySelectorAll('.translitWord');


function inputLog() {
  console.log(inputField.value);
}

translateBtn.addEventListener("click", inputLog);
translateBtn.addEventListener("click", createNewWord);

function checkEnter(e) {
  if (e.code === "Enter") {
    inputLog();
    createNewWord();
  }
}

inputField.addEventListener("keypress", checkEnter);

function createNewWord() {
  if (inputField.value.length == 0) {
    console.log("No Data!");
  } else {
    let newWordInLine = document.createElement("div");
    newWordInLine.className = "initialWord";
    newWordInLine.classList.add(
      `${Number(allNumbersIn[allNumbersIn.length - 1].innerText) + 1}`
    );
    let newNumber = document.createElement("div");
    newNumber.className = "orderNumberInitial";
    newNumber.innerText =
      Number(allNumbersIn[allNumbersIn.length - 1].innerText) + 1;
    let newWord = document.createElement("div");
    newWord.className = "ruWord";
    newWord.id = `word${
      Number(allNumbersIn[allNumbersIn.length - 1].innerText) + 1
    }`;
    let newDeleteBtn = document.createElement("input");
    newDeleteBtn.className = "removeLine";
    newDeleteBtn.id = `removeLine${
      Number(allNumbersIn[allNumbersIn.length - 1].innerText) + 1
    }`;
    newDeleteBtn.type = "image";
    newDeleteBtn.src = "./icons/removeIcon.svg";

    newDeleteBtn.addEventListener("click", function () {
      let deleteEl = document.getElementsByClassName(
        `${parseInt(newDeleteBtnTr.id.match(/\d+/))}`
      );
      for (let j = deleteEl.length - 1; j >= 0; --j) {
        deleteEl[j].remove();
      }
      allNumbersTr = document.querySelectorAll(".orderNumberTranslit");
      allNumbersIn = document.querySelectorAll(".orderNumberInitial");
      

      for (let i = 0; i < allNumbersIn.length; i++) {
        allNumbersIn[i].innerText = `${i + 1}`;
        allNumbersTr[i].innerText = `${i + 1}`;
        
      }

      ruDeleteBtns = document.querySelectorAll(".removeLine");
      trDeleteBtns = document.querySelectorAll(".removeLineT");

      for(let i = 0; i < allNumbersIn.length; i++) {
        ruDeleteBtns[i].id = `removeLine${i + 1}`;
        trDeleteBtns[i].id = `removeLineT${i + 1}`;
      }

      allInWords = document.querySelectorAll('.initialWord');
      allTrWords = document.querySelectorAll('.translitWord');

      for(let i = 0; i < allNumbersIn.length; i++) {
        allInWords[i].className = `initialWord ${i+1}`;
        allTrWords[i].className = `translitWord ${i+1}`;
      }

    });
    newWord.innerText = inputField.value;
    newWord.setAttribute("data-title", `${inputField.value}`);
    if (newWord.innerText.length > 7) {
      newWord.style.cssText =
        "text-wrap:nowrap;overflow:hidden;text-overflow:ellipsis;width:65px";
      newWord.classList.add("longWord");
    }
    newWordInLine.appendChild(newNumber);
    newWordInLine.appendChild(newWord);
    newWordInLine.appendChild(newDeleteBtn);
    initialWords.appendChild(newWordInLine);
    allNumbersIn = document.querySelectorAll(".orderNumberInitial");
    let newWordTrLine = document.createElement("div");
    newWordTrLine.className = "translitWord";
    newWordTrLine.classList.add(
      `${Number(allNumbersTr[allNumbersTr.length - 1].innerText) + 1}`
    );
    let newNumberTr = document.createElement("div");
    newNumberTr.className = "orderNumberTranslit";
    newNumberTr.innerText =
      Number(allNumbersTr[allNumbersTr.length - 1].innerText) + 1;
    let newWordTr = document.createElement("div");
    newWordTr.className = "trWord";
    newWordTr.id = `word${
      Number(allNumbersTr[allNumbersTr.length - 1].innerText) + 1
    }T`;
    let newDeleteBtnTr = document.createElement("input");
    newDeleteBtnTr.className = "removeLineT";
    newDeleteBtnTr.id = `removeLineT${
      Number(allNumbersTr[allNumbersTr.length - 1].innerText) + 1
    }`;
    newDeleteBtnTr.type = "image";
    newDeleteBtnTr.src = "./icons/removeIcon.svg";

    newDeleteBtnTr.addEventListener("click", function () {
      let deleteEl = document.getElementsByClassName(
        `${parseInt(newDeleteBtnTr.id.match(/\d+/))}`
      );
      for (let j = deleteEl.length - 1; j >= 0; --j) {
        deleteEl[j].remove();
      }
      allNumbersTr = document.querySelectorAll(".orderNumberTranslit");
      allNumbersIn = document.querySelectorAll(".orderNumberInitial");
      

      for (let i = 0; i < allNumbersTr.length; i++) {
        allNumbersIn[i].innerText = `${i + 1}`;
        allNumbersTr[i].innerText = `${i + 1}`;
        
      }

      ruDeleteBtns = document.querySelectorAll(".removeLine");
      trDeleteBtns = document.querySelectorAll(".removeLineT");

      for(let i = 0; i < allNumbersTr.length; i++) {
        ruDeleteBtns[i].id = `removeLine${i + 1}`;
        trDeleteBtns[i].id = `removeLineT${i + 1}`;
      }

      allInWords = document.querySelectorAll('.initialWord');
      allTrWords = document.querySelectorAll('.translitWord');
      
      for(let i = 0; i < allNumbersTr.length; i++) {
        allInWords[i].className = `initialWord ${i+1}`;
        allTrWords[i].className = `translitWord ${i+1}`;
      }
    });

    newWordTr.innerText = translit(inputField.value);
    newWordTr.setAttribute("data-title", `${translit(inputField.value)}`);
    if (newWordTr.innerText.length > 7) {
      newWordTr.style.cssText =
        "text-wrap:nowrap;overflow:hidden;text-overflow:ellipsis;width:65px";
      newWordTr.classList.add("longWord");
    }
    newWordTrLine.appendChild(newNumberTr);
    newWordTrLine.appendChild(newWordTr);
    newWordTrLine.appendChild(newDeleteBtnTr);
    translitWords.appendChild(newWordTrLine);
    allNumbersTr = document.querySelectorAll(".orderNumberTranslit");
  }
}

function translit(str) {
  let translitWord = "";
  const rules = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",

    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };
  for (let i = 0; i < str.length; ++i) {
    if (rules[str[i]] == undefined) {
      translitWord += str[i];
    } else {
      translitWord += rules[str[i]];
    }
  }

  return translitWord;
}

let resetBtn = document.querySelector(".clearAll");
resetBtn.addEventListener("click", function () {
  let initialWords = document.querySelectorAll(".initialWord");
  let translitWords = document.querySelectorAll(".translitWord");
  for (let i = initialWords.length - 1; i > 0; --i) {
    initialWords[i].remove();
    translitWords[i].remove();
    inputField.value = "";
  }
  allNumbersTr = document.querySelectorAll(".orderNumberTranslit");
  allNumbersIn = document.querySelectorAll(".orderNumberInitial");
  for (let i = 0; i < allNumbersIn.length; i++) {
    allNumbersIn[i].innerText = `${i + 1}`;
    allNumbersTr[i].innerText = `${i + 1}`;
  }
});
