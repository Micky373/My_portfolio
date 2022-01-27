const hamburger = document.getElementById('hamburger');
const menuItems = document.querySelector('.menu_items');
const mobileMenu = document.querySelector('.mobile_menu');
const closeButton = document.querySelector('.close_button');
const gotoItems = document.querySelectorAll('.goto');
function toggling() {
  menuItems.classList.toggle('appear');
  mobileMenu.classList.toggle('open');
}
hamburger.addEventListener('click', toggling);
closeButton.addEventListener('click', toggling);
for (let i = 0; i < gotoItems.length; i += 1) {
  gotoItems[i].onclick = toggling;
}

/* Populating the portfolio */
const projects = [
  {
      title: 'My Recent Works',
      languages: ['html', 'Bootstrap', 'Ruby'],
      imageUrl: './images/Img_Placeholder.png',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      id: 1,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',

  },
  {
      title: 'Professional Art Printing Data',
      languages: ['html', 'Bootstrap', 'Ruby'],
      imageUrl: './images/portfolio_image.svg',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      id: 2,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
  {
      title: 'Professional Art Printing Data',
      languages: ['html', 'Bootstrap', 'Ruby'],
      imageUrl: './images/portfolio_image.svg',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      id: 3,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
  {
      title: 'Professional Art Printing Data',
      languages: ['html', 'Bootstrap', 'Ruby'],
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      imageUrl: './images/portfolio_image.svg',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      id: 4,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
  {
      title: 'Professional Art Printing Data',
      languages: ['html', 'Bootstrap', 'Ruby'],
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      imageUrl: './images/portfolio_image.svg',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      id: 5,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
  {
      title: 'Professional Art Printing Data',
      languages: ['html', 'Bootstrap', 'Ruby'],
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      imageUrl: './images/portfolio_image.svg',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      id: 6,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
  {
      title: 'Professional Art Printing Data',
      languages: ['html', 'Bootstrap', 'Ruby'],
      desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
      imageUrl: './images/portfolio_image.svg',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      id: 7,
      seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
      seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
];

const portfolio = document.getElementById('Portfolio');
let template = ``
for (let i = 1; i < projects.length; i++) {
  template += `
  <div class="grid-item">
      <div class="grid-item-headline">
          <h3>${projects[i].title}</h3>
          <p>${projects[i].desc}</p>
      </div>
      <ul class="tags">
              <li>${projects[i].languages[0]}</li>
              <li>${projects[i].languages[1]}</li>
              <li>${projects[i].languages[2]}</li>
      </ul>
      <button class="popup_display_button" id="${projects[i].id}" type="button">See Project</button>
  </div>`;
}

portfolio.innerHTML = template