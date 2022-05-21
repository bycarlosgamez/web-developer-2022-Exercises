function randomColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return newColor = `rgb(${r},${g},${b})`;
}

function colorize(){
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

const buttons = document.querySelectorAll('button');

for (let button of buttons){
    button.addEventListener('click', colorize);
}
