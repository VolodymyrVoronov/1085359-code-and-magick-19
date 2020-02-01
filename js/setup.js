'use strict';
var WIZARDS_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_AMOUNT = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var TAB_KEY = 'Tab';

var userInfo = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var userInfoOpen = document.querySelector('.setup-open');
var userInfoClose = userInfo.querySelector('.setup-close');
var userNameInput = userInfo.querySelector('.setup-user-name[type="text"]');

var settingsOfWizard = document.querySelector('.setup-wizard');
var colorOfCoatOfWizard = settingsOfWizard.querySelector('.wizard-coat');
var colorOfEyesOfWizard = settingsOfWizard.querySelector('.wizard-eyes');
var colorOfFireballOfWizards = document.querySelector('.setup-fireball-wrap');
var colorOfFireballOfWizardsInput = colorOfFireballOfWizards.getElementsByTagName('input');

function onUserInfoPress(e) {
  if (e.key === ESC_KEY) {
    closeUserInfo();
  }
}

function openUserInfo() {
  userInfo.classList.remove('hidden');
  document.addEventListener('keydown', onUserInfoPress);
}

function closeUserInfo() {
  userInfo.classList.add('hidden');
  document.removeEventListener('keydown', onUserInfoPress);
}

function changeColorOfFill(obj) {
  obj.style.fill = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomItem(array) {
  return Math.floor(Math.random() * array.length);
}

function pullRandomWizards() {
  var wizard = {
    name: WIZARDS_FIRST_NAME[getRandomItem(WIZARDS_FIRST_NAME)] + ' ' + WIZARDS_LAST_NAME[getRandomItem(WIZARDS_LAST_NAME)],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  };
  return wizard;
}

function renderWizard() {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = pullRandomWizards().name;
  wizardElement.querySelector('.wizard-coat').style.fill = pullRandomWizards().coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = pullRandomWizards().eyesColor;

  return wizardElement;
}

function renderAllWizards(wizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards; i++) {
    fragment.appendChild(renderWizard());
  }
  similarListElement.appendChild(fragment);
}

userNameInput.addEventListener('input', function () {
  document.removeEventListener('keydown', onUserInfoPress);
});

userInfo.addEventListener('click', function () {
  document.addEventListener('keydown', onUserInfoPress);
});

userInfo.addEventListener('keydown', function (e) {
  if (e.key === TAB_KEY) {
    document.addEventListener('keydown', onUserInfoPress);
  }
});

userInfoOpen.addEventListener('click', function () {
  openUserInfo();
});

userInfoOpen.addEventListener('keydown', function (e) {
  if (e.key === ENTER_KEY) {
    openUserInfo();
  }
});

userInfoClose.addEventListener('click', function () {
  closeUserInfo();
});

userInfoClose.addEventListener('keydown', function (e) {
  if (e.key === ENTER_KEY) {
    closeUserInfo();
  }
});

colorOfCoatOfWizard.addEventListener('click', function () {
  changeColorOfFill(colorOfCoatOfWizard);
});

colorOfEyesOfWizard.addEventListener('click', function () {
  changeColorOfFill(colorOfEyesOfWizard);
});

colorOfFireballOfWizards.addEventListener('click', function () {
  var randomColor = getRandomColor();
  colorOfFireballOfWizards.style.backgroundColor = randomColor;
  colorOfFireballOfWizardsInput.value = randomColor;
});

renderAllWizards(WIZARDS_AMOUNT);

userInfo.querySelector('.setup-similar').classList.remove('hidden');
