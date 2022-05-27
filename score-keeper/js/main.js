const p1 = {
    score: 0,
    button: document.querySelector('#p1-btn'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2-btn'),
    display: document.querySelector('#p2Display')
}

const reset = document.querySelector('#reset');
const playToSelect = document.querySelector('#playTo');

let winningScore = 1;
let isGameOver = false;

function addPoint(player, oponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            oponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            oponent.button.disabled = true;
        }
        player.display.innerText = player.score;
    }
}

function resetScore(){
    isGameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.innerText = p1.score;
    p2.display.innerText = p2.score;
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.display.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;
}

function addPointP1(){
    addPoint(p1, p2)
}

function addPointP2(){
    addPoint(p2, p1)
}

function changePlayToSelect(){
    winningScore = parseInt(this.value);
    resetScore();
}

playToSelect.addEventListener('change', changePlayToSelect)

p1.button.addEventListener('click', addPointP1);
p2.button.addEventListener('click', addPointP2);
reset.addEventListener('click', resetScore);
