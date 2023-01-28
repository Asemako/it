function sum() {
    var name = 'Asem'
    console.log(name);
    
}
 
sum();

let number = '30';
console.log('30');


//function
//DRY - do not repeat yourself

console.log('Привет дорогой пользователь');

function sayHi() {
    console.log('Привет, уважаемый пользователь');
}

sayHi();
sayHi();





//function declaration
// function  sayHi() {
//     alert('Привет');
// }

function sayHi(name) {
    console.log('Привет, (name)! Как твои дела');
}
sayHi('Asem');

// function summ(a, b) {
//     return a + b;
// }
 
// function diff (a, b) {
//     return a - b;
// }

// function doSomething(func) {
//     let x = 10;
//     let y = 15;
//    let result = func(x, y);
//    console.log(result);
// }

// doSomething(summ);
// doSomething(diff);

// function iife
//  (function sayHi () {
//     console.log('Привет, дорогой друг');
//  })();

//  let res = (function summ (a, b) {
//     console.log(a + b);
//  })(10, 15);

//  console.log(res);

const autoBrands = ['Audi', 'BMW', 'Mazda', 'Toyoto'];
console.log(autoBrands);

console.log(autoBrands[2]);

// push- добавить элемент в конец массива
// pop- удалить элемент из конца массива
// shift- удалить элемент из начала массива
// unshift- добавить элемент в начало массива
// splice