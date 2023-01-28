const person = {
    userName: 'Mark',
    age: 30,
    isMarried: false,
    // sayHi: function () {
    //     console.log('Привет!');
    // }
    
};

person.sayHi = function (name) {
    console.log('Hi, ${name}!');
}
 
person.sayHi('Asem');