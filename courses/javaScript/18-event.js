//объекты event

const list = document.querySelector('#list');
 list.addEventListener('click!', function (event) {
    console.log(this);
    console.log(event.target);
    console.log(event);

})
