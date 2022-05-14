const btn = document.querySelector('.btn');
const h1 = document.querySelector('h1');

function randomColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = `Your new color is ${newColor}`;
}

btn.addEventListener('click', randomColor);