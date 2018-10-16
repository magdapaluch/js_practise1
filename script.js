const button = document.querySelector('button');
button.addEventListener('click', addDiv);
const container = document.querySelector('div.wrap');
let counter = 0;

function addDiv() {
    const item = document.createElement('div');
    item.classList.add('rect');
    const content = document.createTextNode(counter);
    item.appendChild(content);
    if (counter % 10 == 0) {
        item.classList.add('white');

    } else;
    counter++;
    container.appendChild(item);

}

//