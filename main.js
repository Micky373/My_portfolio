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
    title: 'End to End sentiment analysis project',
    languages: ['Python', 'TextBlob', 'NLP'],
    imageUrl: './images/sentiment.gif',
    body: "In this project I have done NLP and created a web app to display sentiment and subjectivity of the sentence.",
    desc: "This is an easy responsive website that a user can pass a sentence and get the sentiment and subjectivity of it.",
    id: 1,
    seeLiveUrl: 'https://github.com/Micky373/end_to_end_sentiment_analysis',
    seeSourceUrl: 'https://github.com/Micky373/end_to_end_sentiment_analysis',
  },
  {
    title: 'End to End Foot Ball players image classification',
    languages: ['Python', 'Flask', 'SVM'],
    imageUrl: './images/football.gif',
    body: "In this repo I used a simple machine learning model to classify an image among my best five players. Lionel Messi, Cristiano Ronaldo, Ronaldinho, Patrick Vieira and Thierry Henry. I have created a simple UI to drag and drop images of players and used back end implementation for player name prediction. ",
    desc: "This is a simple web app that you can drop a football player image and the machine learning model will predict the name of the player. I used 5 famous players in the project.",
    id: 2,
    seeLiveUrl: 'https://github.com/Micky373/end_to_end_football_players_image_classification',
    seeSourceUrl: 'https://github.com/Micky373/end_to_end_football_players_image_classification',
  },
  {
    title: 'End to End Home Price prediction',
    languages: ['Python', 'Flask', 'Linear Regression'],
    imageUrl: './images/home_price.png',
    body: "In this project I have tried to do some EDA on the home price dataset and run different machine learning models to check which model gives the best solution with a good parameter. After getting the best model and saving it then I used Flask for deploying the model. ",
    desc: "This is a web app that we will able to pass some features of the house and get the price prediction based on the trained model. This will help us easily find the best suit home for us.",
    id: 3,
    seeLiveUrl: 'https://github.com/Micky373/end_to_end_home_price_prediction_ml_project',
    seeSourceUrl: 'https://github.com/Micky373/end_to_end_home_price_prediction_ml_project',
  },
  {
    title: 'Potato Disease classification using deep learning',
    languages: ['Python', 'Flask', 'TensorFlow'],
    desc: "This is a web app in which a user can drag and drop a potato image and the model will predict whether the potato is healthy or not",
    imageUrl: './images/potato.gif',
    body: "In this project I trained a CNN model and predicted three types of potato leaf. Either the potato may be healthy or has an early blight disease or late blight disase. The model has good accuracy on these 3 classes. But it is accepting only images of size (256,256) if we pass images other than that shape it won't work. ",
    id: 4,
    seeLiveUrl: 'https://micky373.github.io/My_portfolio/',
    seeSourceUrl: 'https://github.com/Micky373/My_portfolio',
  },
  {
    title: 'Multiple AI projects',
    languages: ['Python', 'Jupyter Notebook', 'Machine Learning'],
    desc: "This is a simple web app that we can pass multiple feature measures and the model will be able to predict whether the person has a disease or not.",
    imageUrl: './images/ai_project.png',
    body: "In this repo I have done multiple machine learning and deep learning projects. I have created a simple web app for two simpler disease classification models. Those are the diabetes and heart disease classifications. It is an ongoing project and more web apps for more models will be deployed in the near future.",
    id: 5,
    seeLiveUrl: 'https://micky373-ai-projects-multiple-disease-prediction-0bpixm.streamlit.app/',
    seeSourceUrl: 'https://github.com/Micky373/AI_projects',
  },
];

const portfolio = document.getElementById('Portfolio');
let template = '';
for (let i = 1; i < projects.length; i += 1) {
  template += `
  <div class="grid-item" style="background: linear-gradient(180.45deg, rgba(38, 38, 38, 0) 0.75%, rgba(38, 38, 38, 0.9) 61.94%), url(${projects[i].imageUrl});background-size: 100% 100%;background-repeat: no-repeat;">
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
                    <div>
                        <p>${projects[i].desc}</p>
                    </div>
                    <div class="pop_up_links">
                        <a href='${projects[i].seeLiveUrl}'><button type="button">See Live&nbsp;&nbsp;<i class="fa fa-signal" aria-hidden="true"></i></button></a>
                        <a href='${projects[i].seeSourceUrl}'><button type="button">See Source&nbsp;&nbsp;<i class="fa fa-github"></i></button></a>
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