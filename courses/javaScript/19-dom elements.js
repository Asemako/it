// ================================  Работа c элементами  ===============================

/*
// Создать элемент
document.createElement('tag-name')

// Изменить HTML содержимое внутри элемента
element.innerHTML = ''

// Изменить Текстовое  содержимое внутри элемента
node.innerText = ''

// Клонирование элемента
node.cloneNode() // true c внутренним содержимым (текст и теги), false - без внутреннего содержимого

// вставить элемент внутрь другого элемента
element.append(nodesOrDOMStrings)

// Удалить элемент
element.remove()
*/

//Выбор контейнера
const container = document.querySelector('#elementsContainer');

//сщздание заголовка
const newHeader = document.createElement('h1');
newHeader.innerText = 'Новый заголовок';
container.append(newHeader);

//Копирование шапки
const mainHeader = document.querySelector('header');
const headerCopy = mainHeader.cloneNode()
container.append(headerCopy);

//Вставка разметки через строки
// const htmlExample = '<h>Еще один заголовок</h2>';
// container.insertAdjacentHTML('beforeend', htmlExample);


//Вставки разметки через шаблонные строки
const title = 'Текст заголовок';
const htmlExample = `<h2>${title}</h2>`;
container.insertAdjacentHTML('beforeend', htmlExample);
