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

//LOCAL STORAGE 
const email = document.getElementById('ls_email');
const username = document.getElementById('ls_name');
const message = document.getElementById('ls_text');

if (localStorage.getItem('contact-data') !== null) {
  const data = JSON.parse(localStorage.getItem('contact-data'));
  email.value = data.email;
  username.value = data.username;
  message.value = data.message;
}

const contactData = {
  email,
  username,
  message,
};

email.addEventListener('change', (e) => {
  contactData.email = e.target.value;
  contactData.username = username.value;
  contactData.message = message.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.username = e.target.value;
  contactData.message = message.value;
  contactData.email = email.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.message = e.target.value;
  contactData.email = email.value;
  contactData.username = username.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});
