const title = document.querySelector('#title');

const p = document.createElement('p');

const header = title.parentElement;

header.insertBefore(p, title);