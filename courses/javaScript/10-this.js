

const person = {
    userName: 'Yerkin',
    age: 24,
    isMarried: false,
    sayHi: function (name) {
        console.log(this);
        console.log(`Привет, ${name}! Меня зовут ${this.userName}.`);
    }
    
};

person.sayHi('Асем');


