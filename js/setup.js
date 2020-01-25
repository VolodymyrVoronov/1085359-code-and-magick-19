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

var wizards = [
  {
    firstName: WIZARDS_FIRST_NAME[0],
    lastName: WIZARDS_LAST_NAME[0],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[1],
    lastName: WIZARDS_LAST_NAME[1],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[2],
    lastName: WIZARDS_LAST_NAME[2],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[3],
    lastName: WIZARDS_LAST_NAME[3],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[4],
    lastName: WIZARDS_LAST_NAME[4],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[5],
    lastName: WIZARDS_LAST_NAME[5],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[6],
    lastName: WIZARDS_LAST_NAME[6],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
  {
    firstName: WIZARDS_FIRST_NAME[7],
    lastName: WIZARDS_LAST_NAME[7],
    coatColor: getRandomColor(),
    eyesColor: getRandomColor()
  },
];

function renderWizard(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.firstName + wizard.lastName;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userInfo.querySelector('.setup-similar').classList.remove('hidden');
