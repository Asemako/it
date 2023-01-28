// to do список задач

const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();
    console.log('Submit!');
}

function formHandler(event) {
    event.preventDefault();

    //Получаем название задачи из инпута
    const taskText = todoInput.value;
  

    //Создаем тег LI через разметку
    const li = `<li>${taskText}</li>`;

    

    //Добавляем разметку на страницу
    // todoList.insertAdjacentHTML('beforeend', li);

    //Создание тег Li с помощью создания элемента 
    const newTask = document.createElement('li');
    newTask.innerText = taskText;
    console.log(newTask);

    //Создаем кнопку удалить 
    const deleteBth = document.createElement('button');
    deleteBth.setAttribute('role', 'button');
    deleteBth.innerText = 'Удалить';
    deleteBth.style['margin-left'] = '15px';
    newTask.append(deleteBth);

    //Добавляем событие по клику
    deleteBth.addEventListener('click', function () {
        this.closest('li').remove();
    });
        //Добавление элемент на страницу 
    todoList.append(newTask);

    //Очищаем поле ввода
    todoInput.value = '';

    //Фокус поле ввода
    todoInput.focus();



}

