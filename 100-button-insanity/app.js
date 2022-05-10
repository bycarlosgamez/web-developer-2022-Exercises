let div = document.querySelector('#container');

for (let i = 0; i < 100; i++){ 
  let button = document.createElement('button');
  let buttonText = button.innerText = 'Blah';
   div.appendChild(button);
}