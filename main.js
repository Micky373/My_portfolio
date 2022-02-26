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
    title: 'Minimalist to-do list project',
    languages: ['HTML and CSS', 'Javascript', 'Webpack'],
    imageUrl: './images/To-do.png',
    body: "In this minimalist to do list project I have used the best practice of java script, HTML and CSS. This project is fully responsive both for desktop and also for mobile version. Java script has been used to populate the HTML elements and CSS has been used to give the website a better look. As a measurement unit I have used rem and em to make it more adaptive to different vendors",
    desc: "This is an easy responsive to-do list web application. You can write your tasks, edit, check completed or delete tasks. It is completely responsive and easy to use website application",
    id: 1,
    seeLiveUrl: 'https://micky373.github.io/To_DO_List/dist/',
    seeSourceUrl: 'https://github.com/Micky373/To_DO_List',
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
let template = '';
for (let i = 1; i < projects.length; i += 1) {
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

portfolio.innerHTML = template;

// Populating the pop up modal window

let popUpTemplate = '';
for (let i = 0; i < projects.length; i += 1) {
  popUpTemplate += `
        <div class="pop_up" id="${projects[i].id}">
            <div class="pop_up_content">
                <h3>${projects[i].title}</h3>
                <div class="close_button">
                    <img class="close_modal" src="./images/close_btn.svg" alt="Closing pop up menu button" />
                </div>
            </div>
            <ul class="pop_up_tags">
                <li>${projects[i].languages[0]}</li>
                <li>${projects[i].languages[1]}</li>
                <li>${projects[i].languages[2]}</li>
            </ul>
            <div class="pop_up_image_and_content">
                <div class="image_content">
                    <img id="pop_up_image" src="${projects[i].imageUrl}" alt="Image place holder for multi post stories" />
                </div>
                <div class="descriptive_content">
                    <div>
                        <p>${projects[i].body}</p>
                    </div>
                    <div class="pop_up_links">
                        <a href='${projects[i].seeLiveUrl}'><button type="button">See Live&nbsp;&nbsp;<i class="fa fa-signal" aria-hidden="true"></i></button></a>
                        <a href='${projects[i].seeSourceUrl}'><button type="button">See Source&nbsp;&nbsp;<i id="github-icon-pop_up" class="fab fa-github"></i></button></a>
                    </div>
                </div>
            </div>
        </div>`;
}
const popUpContainer = document.getElementById('pop_up_container');
popUpContainer.innerHTML = popUpTemplate;

// Popup window functionality

const popUpButtons = document.querySelectorAll('.popup_display_button');
const closeModals = document.querySelectorAll('.close_modal');
const mainPage = document.querySelector('.main_page');
const popUps = document.querySelectorAll('.pop_up');
for (let i = 0; i < popUpButtons.length; i += 1) {
  popUpButtons[i].addEventListener('click', () => {
    mainPage.classList.toggle('blur');
    popUps[i].classList.toggle('active');
  });
}

for (let i = 0; i < closeModals.length; i += 1) {
  closeModals[i].onclick = () => {
    mainPage.classList.toggle('blur');
    popUps[i].classList.toggle('active');
  };
}

// Form validation

const form = document.querySelector('.contact_form');
const email = document.getElementById('email');

function isEmail(email) {
  return email.match(/^[_a-z\d*+.#$%^&!-]+@[a-z\d-]+(\.[a-z\d-]+)*(\.[a-z]{2,4})$/);
}

function checkInputs() {
  const emailValue = email.value.trim();
  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form_controler error';
    small.innerText = message;
  }

  if (!isEmail(emailValue)) {
    setErrorFor(email, 'Please enter the valid email address');
  } else {
    form.submit();
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

// Local Storage

function storeData(nameData, emailData, messageData) {
  const formData = {
    nameData,
    emailData,
    messageData,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}
form.addEventListener('keyup', (e) => {
  e.preventDefault();
  const name = document.getElementById('full_name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('comment').value;
  storeData(name, email, message);
});

const getData = JSON.parse(localStorage.getItem('formData'));

window.onload = () => {
  if (getData != null) {
    document.getElementById('full_name').value = getData.nameData;
    document.getElementById('email').value = getData.emailData;
    document.getElementById('comment').value = getData.messageData;
  }
};