// HAMBUGGER MENU

function myElement(selector) {
  return document.querySelector(selector);
}

const menu = myElement('#hamma');
const navbar = myElement('.mobile-nav');
const closeNav = myElement('.close-btn');
const choose = myElement('.mobile-nav');

function addMenu(selected) {
  return selected.addEventListener('click', () => navbar.classList.add('nav-toggle'));
}

function removeMenu(selected) {
  return selected.addEventListener('click', () => navbar.classList.remove('nav-toggle'));
}

addMenu(menu);
removeMenu(closeNav);
removeMenu(choose);

// FORM VALIDATION
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  const email = e.target[1].value;
  if (email.toLowerCase() === email) {
    const name = e.target[0].value;
    const message = e.target[2].value;
    fetch('https://formspree.io/f/xoqzdloe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
  } else {
    e.preventDefault();
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = 'Your email should be in lowercase only!!!';
    errorMessage.style = 'color:#fff;display:block;margin-top:10px;';
  }
});