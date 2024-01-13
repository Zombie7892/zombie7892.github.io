const newName = document.getElementById("inputName");
const gameStartBtn = document.getElementById("startGame");
const storage = JSON.parse(localStorage.getItem('users')) || {}

 function getName(e) {
    e.preventDefault()
    const userData = {
        name:newName.value
    }
    console.log(userData);
  if (newName.value && storage.hasOwnProperty(newName.value)) {
    window.open("./gamePage.html", "_self");
    
  } else if(newName.value) {
    storage[newName.value] = userData;
    window.open("./gamePage.html", "_self");
  } else {
    alert("Введите имя игрока!");
  }
  localStorage.setItem('users', JSON.stringify(storage));
  localStorage.setItem('currentPlayer', newName.value);
}

gameStartBtn.addEventListener("click", getName);





