const p1btn = document.querySelector('#p1-btn');
const p2btn = document.querySelector('#p2-btn');
const reset = document.querySelector('#reset');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

function addPointP1(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winningScore){
            isGameOver = true;
        }
        p1Display.innerText = p1Score;
    }
}


function addPointP2(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winningScore){
            isGameOver = true;
        }
        p2Display.innerText = p2Score;
    }
}

p1btn.addEventListener('click', addPointP1);
p2btn.addEventListener('click', addPointP2);

