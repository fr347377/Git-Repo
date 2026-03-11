const list = document.querySelector('.list');
const input = document.querySelector('.input');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    const item = document.createElement('li');
    item.textContent = input.value;
    list.appendChild(item);
    input.value = '';
})

list.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.target.remove();
    }
});