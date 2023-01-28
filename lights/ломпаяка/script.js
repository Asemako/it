let btn = document.querySelector('.btn'),
body = document.querySelector('body');
btn.onclick = function() {
    body.classList.toggle('on');
}