const greetingField = document.getElementById('greeting');
const playerScore = document.getElementById('score');
const playerPoints = document.getElementById('points');
const stopBtn = document.querySelector('.stop')
const returnBtn = document.querySelector('.return')
const card = document.querySelector('.square')
console.log(card);

greetingField.innerText = `Добро пожаловать на испытание, ${localStorage.getItem('currentPlayer')} !`
stopBtn.addEventListener('click',() =>{
    alert(`Вы набрали ${playerPoints.innerText} очков!`)
    playerPoints.innerText = 0;
})

returnBtn.addEventListener('click',() => {
    window.open('./index.html','_self')
})

function changeColor() {
    if (card.dataset.active == 'true'){
        card.dataset.active = 'false';
        card.style.backgroundColor = 'grey'
    } else {
        card.dataset.active = 'true';
        card.style.backgroundColor = '#04aa6d'
    }
}

function playerClick() {
    if (card.dataset.active == 'true') {
        playerPoints.innerText = Number(playerPoints.innerText) + 5;
        changeColor()
    }
}
card.addEventListener('click',playerClick)


setInterval(changeColor,Math.floor(Math.random() * 7000));



