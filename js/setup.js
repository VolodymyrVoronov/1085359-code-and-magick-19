'use strict';
var WIZARDS_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_AMOUNT = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
var TAB_KEY = 'Tab';
var COLOR_OF_COATS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COLOR_OF_EYES = ['black', 'red', 'blue', 'yellow', 'green'];
var COLOR_OF_FIREBALLS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var userInfo = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var userInfoOpen = document.querySelector('.setup-open');
var userInfoClose = userInfo.querySelector('.setup-close');
var userNameInput = userInfo.querySelector('.setup-user-name[type="text"]');

var settingsOfWizard = document.querySelector('.setup-wizard-form');
var colorOfCoatOfWizard = settingsOfWizard.querySelector('.wizard-coat');
var colorOfEyesOfWizard = settingsOfWizard.querySelector('.wizard-eyes');
var colorOfFireballOfWizards = settingsOfWizard.querySelector('.setup-fireball-wrap');
var colorOfCoatOfWizardsValue = settingsOfWizard.querySelector('input[name="coat-color"]');
var colorOfEyesOfWizardsValue = settingsOfWizard.querySelector('input[name="eyes-color"]');
var colorOfFireballOfWizardsValue = colorOfFireballOfWizards.querySelector('input');

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
  colorOfCoatOfWizard.style.fill = COLOR_OF_COATS[getRandomItem(COLOR_OF_COATS)];
  colorOfCoatOfWizardsValue.value = COLOR_OF_COATS[getRandomItem(COLOR_OF_COATS)];
});

colorOfEyesOfWizard.addEventListener('click', function () {
  colorOfEyesOfWizard.style.fill = COLOR_OF_EYES[getRandomItem(COLOR_OF_EYES)];
  colorOfEyesOfWizardsValue.value = COLOR_OF_EYES[getRandomItem(COLOR_OF_EYES)];
});

colorOfFireballOfWizards.addEventListener('click', function () {
  colorOfFireballOfWizards.style.backgroundColor = COLOR_OF_FIREBALLS[getRandomItem(COLOR_OF_FIREBALLS)];
  colorOfFireballOfWizardsValue.value = COLOR_OF_FIREBALLS[getRandomItem(COLOR_OF_FIREBALLS)];
});

renderAllWizards(WIZARDS_AMOUNT);

userInfo.querySelector('.setup-similar').classList.remove('hidden');
