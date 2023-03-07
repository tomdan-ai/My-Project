function myElement(selector) {
  return document.querySelector(selector);
}

const menu = myElement('#hamma');
const nav = myElement('.mobile-nav');
const closeNav = myElement('.close-btn');
const choose = myElement('.mobile-nav');

function addMenu(selected) {
  return selected.addEventListener('click', () => nav.classList.add('nav-toggle'));
}

function removeMenu(selected) {
  return selected.addEventListener('click', () => nav.classList.remove('nav-toggle'));
}

addMenu(menu);
removeMenu(closeNav);
removeMenu(choose);