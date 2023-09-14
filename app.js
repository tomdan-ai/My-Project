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
    errorMessage.style = 'color:red;display:block;margin-top:10px;';
  }
});
// PROJECT POPUP
const cards = [
  {
    image: 'img/GDC-page.jpg',
    name: 'Conference App',
    preview: 'https://tomdan-ai.github.io/Capstone-redo/index.html',
    preview2: 'https://github.com/tomdan-ai/Capstone-redo',
    code: ['Redux', 'CSS', 'Javascript'],
    tags: ['html', 'css', 'javascript'],
    cover: 'An online website for a conference for developers round the world.',
    desc: 'online website for a conference for developers round the world. You will learn how to use the different niche in tech to empower, enlighthen and grow to a succesful career in the Tech field. ',
  },
  {
    image: 'img/Covid.jpg',
    name: 'COVID-19 Metrics',
    preview: 'https://covid-19-metrics.onrender.com/',
    preview2: 'https://github.com/tomdan-ai/COVID-19-Database',
    code: ['HTML', 'CSS', 'Javascript'],
    tags: ['React', 'Redux', 'css'],
    cover: 'COVID-19 DATA is a React app that retrieves real-time COVID-19 records for all countries from an API',
    desc: 'COVID-19 DATA is a React app that retrieves real-time COVID-19 records for all countries from an API. It provides essential statistics, such as confirmed cases and deaths, and offers search functionality for easy access to specific countries. The app features a user-friendly interface, loading indicators, and error handling. It is responsive and compatible with desktop and mobile devices. Stay informed with COVID-19 DATA.',
  },
  {
    image: 'img/Doc.jpg',
    name: 'Doctors Appointments',
    preview: 'https://doctor-appointement.onrender.com/',
    preview2: 'https://github.com/tomdan-ai/DocBook-Front-End',
    code: ['HTML', 'CSS', 'Javascript'],
    tags: ['React/Redux', 'Ruby on rails', 'Tailwind CSS'],
    cover: 'An innovative full stack web application designed to simplify the process of managing medical appointments and connecting patients with healthcare providers',
    desc: 'An innovative full stack web application designed to simplify the process of managing medical appointments and connecting patients with healthcare providers. With an intuitive user interface, DocBook streamlines the healthcare appointment booking process and empowers both doctors and patients to make informed decisions',
  },
  {
    image: 'img/Spendwise.jpg',
    name: 'SpendWise',
    preview: 'https://spendwise-spj5.onrender.com/',
    preview2: 'https://github.com/tomdan-ai/Budget-app',
    code: ['HTML', 'CSS', 'Javascript'],
    tags: ['Ruby', 'Ruby on rails', 'Bootstrap'],
    cover: 'Discover the power of effective financial management with SpendWise',
    desc: "Discover the power of effective financial management with SpendWise, a cutting-edge budgeting app designed to empower you on your journey towards financial wellness. With SpendWise, you're equipped with a comprehensive toolkit to take charge of your finances, make informed spending decisions, and achieve your financial goals",
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
          <li class="can">Front End Dev</li>
          <li class="bac"><img src="img/dot.jpg" alt="dot"> Back End Dev</li>
          <li class="num"><img src="img/dot.jpg" alt="dot"> 2023</li>
        </ul>
        <p class="tonic-def">${cardContent.cover}</p>
        <ul class="stack stack-desktop">
          <li class="html">${cardContent.tags[0]}</li>
          <li class="css">${cardContent.tags[1]}</li>
          <li class="js">${cardContent.tags[2]}</li>
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
      <h2 class="tonic0-modal">${cardContent.name}</h2>
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

    <img src="img/icon11.jpg" alt="separator" class="line">

    <div class="modal-button">
      <a href="${cardContent.preview}" target="_blank"><button id="modalBtn-0" type="button">See live <img src="img/icon12.jpg" alt="modal-icon"></button></a>
      <a href="${cardContent.preview2}" target="_blank"><button id="modalBtn-1" type="button">See Source <img src="img/icon13.jpg" alt="modal-icon-git"></button></a>
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
  const closeModal = modal.querySelector('.closeBtn');

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

// Language Dropdown
const lArrow = document.getElementById('languages');
const tech = document.querySelector('.know-sec');
const tech1 = document.querySelector('.know-sec1');
const tech2 = document.querySelector('.know-sec2');
const knowLine = document.querySelector('.know-line');
const frameWork = document.getElementById('frame');
const skills = document.getElementById('SK');
const arrow = document.querySelector('.arrow');
const arrow1 = document.querySelector('.arrow1');

lArrow.addEventListener('click', () => {
  if(window.innerWidth > 738) {
    tech.style.display = 'block'
  }else {
    tech.style.display = 'flex';
  }
});

knowLine.addEventListener('click', () => {
  tech.style.display = 'none';
});
frameWork.addEventListener('click', () => {
  if(window.innerWidth > 738) {
    tech1.style.display = 'block'
  }else {
    tech1.style.display = 'flex';
  }
});
skills.addEventListener('click', () => {
  if(window.innerWidth > 738) {
  tech2.style.display = 'block';
  }else {
    tech2.style.display = 'flex';
  }
});

arrow.addEventListener('click', () => {
  tech1.style.display = 'none';
});

arrow1.addEventListener('click', () => {
  if(window.innerWidth > 738) {
    tech2.style.display = 'block';
    }else {
      tech2.style.display = 'flex';
    }
});
