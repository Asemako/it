// Классы, конструктор объектов

// const person1 = {
//     userName: 'Yerkin',
//     age: 24,
//     isMarried: false,
//     sayHi: function () {
//         console.log(`Привет, ${yourname}! Меня зовут ${userName}.`);
//     },
    
// };



// const person2 = {
//     userName: 'Asemka',
//     age: 18,
//     isMarried: false,
//     sayHi: function () {
//         console.log(`Привет, ${yourname}! Меня зовут ${userName}.`);
//     },
    
// };

//опишем класс, это как чертеж для всех будущих объектов персон которые будут создаваться на его основе

class Person {
    constructor(userName, age, isMarried){
        this.userName = userName;
        this.age = age;
        this.isMarried = isMarried;
    }

    sayHi(name) {
        console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
    }
}


const person1 = new Person ('Yerkin', 24, false);
const person2 = new Person ('Asemka', 18, false);
console.log(person1);
console.log(person2);
// person1.sayHi('Aseka')
// person2.sayHi('Aseka')

