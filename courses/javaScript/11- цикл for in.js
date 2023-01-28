const person = {
    userName: 'Yerkin',
    age: 24,
    isMarried: false,
    sayHi: function (yourName) {
         console.log(`Привет, ${yourName}! Меня зовут ${this.userName}.`);
    },
    
};

for (let key in person) {
    console.log(key, ':', person[key]);
}  