const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let rainbow = document.querySelectorAll('span');

// alert(rainbow);

for(let i = 0; i < rainbow.length; i++){
    rainbow[i].style.color = colors[i];
}