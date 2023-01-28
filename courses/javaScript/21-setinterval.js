// // const timerIntervalID = setInterval(function () {
// //     console.log('Fired!');
// // }, 1000);

// // clearInterval(timerIntervalID)

// // //setTimeout
// // setTimeout(function () {
// //     console.log('setTimeout Fired!');
// // }, 2000);

// // clearInterval(timerID);

// //setInterval + setTimeout
// const timerID = setInterval(function () {
//     console.log('setInterval Fired!');
// }, 1000)

// setTimeout(function () {
//     clearInterval(timerID);
// }, 10000);

//Секундомер. Работа с SetInterval
const counterElement = document.querySelector('#counter');
let counter = 0;
let timerID;

// setInterval(function () {
//     // counter = counter + 1;
//     // counter += 1;
//     counter++;

//     console.log(counter);
//     counterElement.innerText = counter;
// }, 1000)

//Start
const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
    console.log('btnStart');
    timerID = setInterval(function(){
        counter++;
        counterElement.innerText = counter;
    }, 1000)
}


 //Stop
// const btnStop = document.querySelector('#stop');
// btnStop.onclick = function () {
//     console.log(btnStop);
//     clearInterval(timerID);
// }

//Pause
const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
    console.log(btnPause);
    clearInterval(timerID);
}

//Reset
const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);
}