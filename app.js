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
// PROJECT POPUP
const cards = [
  {
    image: 'img/Snapshoot Portfolio.png',
    name: 'Tonic',
    preview: '',
    code: '',
    tags: ['html', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'img/card 1.svg',
    name: 'Multi-Post Stories',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'img/card 1 (2).svg',
    name: 'Tonic',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    image: 'img/card 4.svg',
    name: 'Multi-Post Stories',
    preview: '',
    code: '',
    tags: ['html', 'Ruby on rails', 'css', 'javascript'],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// projects dynamic
const cardsContainer = document.querySelector('.grid');
cards.forEach((cardContent) => {
  const item = document.createElement('work-container-main');

  item.classList.add('cards-held-here');
  const content = document.createElement('work-container');

  content.innerHTML = `
<section class="work-container work-container-desktop">
  <div class="portfolio-img desktop-img-0">

    <img src="${cardContent.image}" alt="${cardContent.name}" class="full-size">
  </div>
  <div class="work-content">
        <h2 class="tonic0 tonic">${cardContent.name}</h2>
        <ul class="prop">
          <li class="can">CANOPY</li>
          <li class="bac"><img src="img/dot.jpg" alt="dot"> Back End Dev</li>
          <li class="num"><img src="img/dot.jpg" alt="dot"> 2015</li>
        </ul>
        <p class="tonic-def">A daily selection of privately<br> personalized reads; no accounts or<br> sign-ups
          required.</p>
        <ul class="stack stack-desktop">
          <li class="html">html</li>
          <li class="css">css</li>
          <li class="js">javaScript</li>
        </ul>
        <div class="button">
        <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button" class="testButton">See Project</button></a>
        </div>
      </div>
    </section>
  `;

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.classList.add('d-none');
  const modalContent = document.createElement('div');
  modalContent.innerHTML = `
  <div class="work-content-modal">
    <span class="closeBtn">&times;</span>
      <h2 class="tonic0-modal">Tonic</h2>
      <ul class="prop-modal">
      <li class="can">CANOPY</li>
      <li class="bac"><img src="img/dot.jpg" alt="dot"> Back End Dev</li>
      <li class="num"><img src="img/dot.jpg" alt="dot"> 2015</li>
    </ul>

    <div class="portfolio-modal-img">
     <img src="${cardContent.image}" alt="${cardContent.name}">
    </div>

    <div class="tonic-def-modal">
    <p>${cardContent.desc}</p>
    </div>
    <div class="alignment">
      <ul class="stack-modal stack-desktop">
      <li class="html">html</li>
      <li class="css">css</li>
      <li class="js">javaScript</li><br />
      <li class="git">github</li>
      <li class="ruby">ruby</li>
      <li class="boot">Bootstraps</li>
    </ul>

    <img src="img/icon11.jpg" alt="separator" class="line">

    <div class="modal-button">
      <a href="${cardContent.preview}" ><button id="modalBtn-0" type="button">See live <img src="img/icon12.jpg" alt="modal-icon"></button></a>
      <a href="${cardContent.preview}" ><button id="modalBtn-1" type="button">See Source <img src="img/icon13.jpg" alt="modal-icon-git"></button></a>
    </div>
    </div>
    </div>
  </div> 
  `;

  modal.appendChild(modalContent);
  item.appendChild(content);
  item.appendChild(modal);
  cardsContainer.appendChild(item);

  // popup interaction
  const openModal = item.querySelector('.testButton');
  const closeModal = item.querySelector('.closeBtn');

  openModal.addEventListener('click', (event) => {
    modal.classList.add('modal');
    modal.style.display = 'block';
    event.preventDefault();
  });

  closeModal.addEventListener('click', () => {
    modal.classList.remove('modal');
    modal.style.display = 'none';
  });
});
