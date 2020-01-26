'use strict';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var userInfo = document.querySelector('.setup');
userInfo.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var WIZARDS_FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARDS_LAST_NAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARDS_AMOUNT = 4;

var getRandomItem = function (array) {
  return Math.floor(Math.random() * array.length);
};

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

renderAllWizards(WIZARDS_AMOUNT);

userInfo.querySelector('.setup-similar').classList.remove('hidden');
