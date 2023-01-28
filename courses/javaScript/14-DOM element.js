 //Выбор DOM элементами
// Выбор одного элемента DOM по селектору
//document.duerySelector('selector');

// document.querySelector('h2').classList.add('red')

const heading2 = document.querySelector('h2');
heading2.classList.add('red');





const paragraps = document.querySelectorAll('p');
for (let p of paragraps) {
    p.classList.add('green-text')
}

paragraps.forEach(function (p){
    p.classList.add('green-text');
})