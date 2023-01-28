/* 
1.найдем 3баттон 1 каунтер-элемент
2. создаем  переменную с названием "нам" задаем значение = 0
2, при клике на кнопку 
- дикриз  нам уменьшается на один
- ресет нам = 0
- инкриз уеличивается на один

если нам больше 0, жасыл болу керек
меньше 0, кызыл болу керек


МЕТОД №1
var t = 5  
МУТОД №2
1. var t           обьявить перемонную
console.log(t) => undefined
2. t = 5   значение беру


let y = 'sfsdf' так же как с var
const isOk = true только так 

Переменныйлар мына символдардан тура алады 
a-zA-Z0-9$_
a-zA-Z$_ starts
CASE SENSITIVE: ЗДЕСЬ У И Y екы турлы переменный, оларды быр кодта жазуга боладыб получается арыптер улкен кышы болса бола береды 
const y = 5
const Y = 'GFHT'



*/
// доккументтын ышынен мынандай класты алып переменныыйга сактау. кайтарылган ман = Element, сондыктан $___ мен бастадым. const себбебы переменыйдын маны болашакта кодта озгермейды, всегда осы значениеге =.
const ZERO_COLOR = 'rgb(167, 172, 167)'


const $btnDecrease = document.querySelector(".decrease")
const $btnIncrease = document.querySelector(".increase")
const $btnReset = document.querySelector(".reset")
const $counter = document.querySelector("#counter")

// переменныйдын манын следить ету ушын
let num = 0;

// addEventListener = событье тындаушыны косу
//метод addEventListener ('event', functionName)
// мына кнопканы баскан кезде событье тындаушы мынау функцияны шакырады
$btnDecrease.addEventListener('click', decreaseCounter);
$btnIncrease.addEventListener('click', increaseCounter);

// для разнообразия подхода
$btnReset.addEventListener('click',() => {
//    num=100
// num=-100
// num=1000000
   
    console.log('не трогаем')
    num = 0
    // $counter.textContent = num
    
    
    // $counter.style.color = ZERO_COLOR
    // updateCounterColor()
    updateCounter()
})


// функция мына затты ыстейды: 
//1. num-ды бырге кемытып, 
//2. $counter элементынын тексконтентын  num-га озгертеды
function decreaseCounter() {
    console.log('уменшаем...')
    // num = num - 1
    // num -= 1
    num--
   // console.log(num)

    // $counter
    // console.log($counter.classList)
    // console.log($counter.className)
    // console.log($counter.textContent)
    // $counter.textContent = 'string'
    // $counter.textContent = num

    //style
    // console.log($counter.style)
    // if (num < 0) {
    //     $counter.style.color = 'red'
    // } else if (num === 0) {
    //     $counter.style.color = ZERO_COLOR
    // }
    // updateCounterColor()
    updateCounter()
}


function increaseCounter() {
    console.log('увелич');
    num++

    // $counter.textContent = num

    // if (num > 0) {
    //     $counter.style.color = 'green'
    // } else if (num === 0) {
    //     $counter.style.color = ZERO_COLOR

    // }
    // updateCounterColor()
    updateCounter()
}

// function updateCounterColor() {
function updateCounter() {
    $counter.textContent = num


    if (num < 0) {
        $counter.style.color = 'red'
    } else if (num > 0) {
        $counter.style.color = 'green'
    } else {
        $counter.style.color = ZERO_COLOR
    }
}


// addEventListener( 'event'  ,  function() {}  )
// addEventListener( 'event'  ,  () => {}  )
// addEventListener( 'event'  ,  funcName  )

// function funcName() {}
// const funcName = () => {}

/* const name = 'ПРивет'

    console.log(name)

    //////////
    console.log('ПРивет')
    console.log(25)
    console.log(true)
    console.log(['Ghbdtn', 25, false])
    console.log({name: "asem", age: 18, isGirl: true})*/


/*
РАБОТА С ЧИСЛАМИ   

let num1 = 10
let num2 = 50

let sum = num1 + num2
let product = num1 * num2
console.log(sum)
console.log(product) */


/* let num1 = 10
console.log(num1)
num1 = 100
console.log(num1)
num1 = -5
console.log(num1)
 */
 
/*  let num1 = 10
 let num2 = 5
 
 num1 = 7
 num2 = 93
 let total = num1 + num2
 console.log(total) */
 
 
/*  let num1 = 0
 num1 = num1 + 1
 num1 += 1
 num1++
 console.log(num1)
 num1 = num1 - 50
 num1 -=50
 num1--
 console.log(num1)
 */
 
 /* let num1 = 0
 
 for (let i = 0; i < 10; i++) {
   num1 += 5
    console.log(num1)
 }
 console.log(num1)
 */
 
/* 
function multiplyByFive(num) {
  return num * 5
}

let num1 = 1
//num1 *= 5
let result = multiplyByFive(num1)
console.log(result)
 */

// let num1 = 0

/* function increase() {
  num1 = num1 + 10
}

increase()
console.log(num1)

increase()
console.log(num1)

increase()
console.log(num1) */

// function increaseByOne() {
// 	num1 = num1 + 1
// }

// increaseByOne()
// increaseByOne()
// increaseByOne()
// increaseByOne()
// increaseByOne()


// console.log(num1)
