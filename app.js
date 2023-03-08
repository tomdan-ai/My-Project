// WORKS SECTION
const workSection = document.querySelector("#work-section");

// DYNAMICALLY POPULATE PORTFOLIO SECTION

const portfolioItems = [
  {
    name: "Tonic",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    featuredImage: "img/Snapshoot Portfolio.png",
    technologies: ["html", "css", "javascript"],
    liveLink: "",
    sourceLink: "",
    category: "CANOPY",
    stack: "Back End Dev",
    year: "2015",
  },
  {
    name: "Multi-Post Stories",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    featuredImage: "img/card 1.svg",
    technologies: ["html", "Ruby on rails", "css", "javascript"],
    liveLink: "",
    sourceLink: "",
    category: "FACEBOOK",
    stack: "Full Stack Dev",
    year: "2015",
  },
  {
    name: "Facebook 360",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    featuredImage: "img/card 1 (2).svg",
    technologies: ["html", "Ruby on rails", "css", "javascript"],
    liveLink: "",
    sourceLink: "",
    category: "FACEBOOK",
    stack: "Full Stack Dev",
    year: "2015",
  },
  {
    name: "Uber Navigation",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    featuredImage: "img/card 4.svg",
    technologies: ["html", "Ruby on rails", "css", "javascript"],
    liveLink: "",
    sourceLink: "",
    category: "Uber",
    stack: "Lead Developer",
    year: "2018",
  },
];

let portfolioSection = "";
portfolioItems.forEach((item, index) => {
  let technologies = "";
  item.technologies.forEach((tech) => {
    technologies += `<li class="lang-item">${tech}</li>`;
  });
  const portfolioItem = `
    <div class="work-card">
      <img src="${item.featuredImage}" alt="Tonic" />
      <div class="work-card1">
        <h2>${item.name}</h2>
        <div class="canopy">
          <span>${item.category}</span>
          <ul>
            <li>${item.stack}</li>
            <li>${item.year}</li>
          </ul>
        </div>
        <p class="daily">${item.description}</p>
        <ul class="work-card">
          ${technologies}
        </ul>
        <button id="portfolio-button-${index}" class="see-project-button button-style-1">See Project</button>
      </div>
    </div>`;
  // portfolioSection += portfolioItem;
});

workSection.innerHTML += portfolioSection;

// POPUP MENU
const seeProjectButtons = document.querySelectorAll(".see-project-button");
const popupMenuContainer = document.querySelector("#popup-menu-container");
seeProjectButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const buttonIndex = Number(e.target.id.split("-")[2]);
    const portfolioItem = portfolioItems[buttonIndex];

    let technologies = "";
    portfolioItem.technologies.forEach((tech) => {
      technologies += `<li class="lang-item">${tech}</li>`;
    });

    popupMenuContainer.innerHTML = `
    <div id="popup-menu">
      <div id="popup-menu-header">
        <h2>${portfolioItem.name}</h2>
        <span class="material-symbols-outlined" id="close-popup-menu">
          &times;
        </span>
      </div>
      <ul id="canopy1">
        <li><strong>${portfolioItem.category}</strong></li>
        <li>${portfolioItem.stack}</li>
        <li>${portfolioItem.year}</li>
      </ul>
      <div id="js-img">
      <img src="${portfolioItem.featuredImage}">
      </div>
      <div id="popup-menu-footer">
        <p id="js-txt">${portfolioItem.description}</p>
        <div id="popup-menu-footer-right">
          <ul class="stackbar">
            ${technologies}
          </ul>
          <hr id="hr">
          <div id="popup-buttons">
            <button class="button-style-1">
              See Live
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
            <button class="button-style-1">
              See Source
              <i class="fa-brands fa-github"></i>
            </button>
          </div>
        </div>
      </div>
    </div>`;

    popupMenuContainer.style.display = "flex";
    document
      .querySelector("#close-popup-menu")
      .addEventListener("click", () => {
        popupMenuContainer.style.display = "none";
      });
  });
});
