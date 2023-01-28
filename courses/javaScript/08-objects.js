let username = 'Mark';
let age = 30;
let isMarried = false;
let profession = 'Designer';

const person = {
    username: 'Mark',
    age: 30,
    isMarried: false,
    profession: 'Designer'
}
 console.log(person);
 console.log(person.username);
 console.log(person['age']);

 let propertyName = 'profession';
 console.log(person[propertyName]);

 delete person.age;
 console.log(person);