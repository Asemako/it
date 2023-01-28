const person = {
    userName: 'Yerkin',
    age: 24,
    isMarried: false,
    };
    
person.proff = 'Designer';

//ошибка! Переопределение ссылки на новый объект
person = {
    userName: 'Asem'
};
