'use strict';

var userInfo = document.querySelector('.setup');

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
  if (e.key === window.constants.ESC_KEY) {
    closeUserInfo();
    userInfo.style.top = 80 + 'px';
    userInfo.style.left = 50 + '%';
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

function hideUserInfoWindow() {
  userInfo.classList.add('hidden');
}

function getRandomItem(array) {
  return Math.floor(Math.random() * array.length);
}

userNameInput.addEventListener('input', function () {
  document.removeEventListener('keydown', onUserInfoPress);
});

userInfo.addEventListener('click', function () {
  document.addEventListener('keydown', onUserInfoPress);
});

userInfo.addEventListener('keydown', function (e) {
  if (e.key === window.constants.TAB_KEY) {
    document.addEventListener('keydown', onUserInfoPress);
  }
});

userInfoOpen.addEventListener('click', function () {
  openUserInfo();
});

userInfoOpen.addEventListener('keydown', function (e) {
  if (e.key === window.constants.ENTER_KEY) {
    openUserInfo();
  }
});

userInfoClose.addEventListener('click', function () {
  closeUserInfo();
  userInfo.style.top = 80 + 'px';
  userInfo.style.left = 50 + '%';
});

userInfoClose.addEventListener('keydown', function (e) {
  if (e.key === window.constants.ENTER_KEY) {
    closeUserInfo();
    userInfo.style.top = 80 + 'px';
    userInfo.style.left = 50 + '%';
  }
});

colorOfCoatOfWizard.addEventListener('click', function () {
  colorOfCoatOfWizard.style.fill = window.constants.COLOR_OF_COATS[getRandomItem(window.constants.COLOR_OF_COATS)];
  colorOfCoatOfWizardsValue.value = window.constants.COLOR_OF_COATS[getRandomItem(window.constants.COLOR_OF_COATS)];
});

colorOfEyesOfWizard.addEventListener('click', function () {
  colorOfEyesOfWizard.style.fill = window.constants.COLOR_OF_EYES[getRandomItem(window.constants.COLOR_OF_EYES)];
  colorOfEyesOfWizardsValue.value = window.constants.COLOR_OF_EYES[getRandomItem(window.constants.COLOR_OF_EYES)];
});

colorOfFireballOfWizards.addEventListener('click', function () {
  colorOfFireballOfWizards.style.backgroundColor = window.constants.COLOR_OF_FIREBALLS[getRandomItem(window.constants.COLOR_OF_FIREBALLS)];
  colorOfFireballOfWizardsValue.value = window.constants.COLOR_OF_FIREBALLS[getRandomItem(window.constants.COLOR_OF_FIREBALLS)];
});

settingsOfWizard.addEventListener('submit', function (evt) {
  window.save(settingsOfWizard, hideUserInfoWindow, window.errorHandler);
  evt.preventDefault();
});

userInfo.querySelector('.setup-similar').classList.remove('hidden');
window.load(window.renderAllWizards, window.errorHandler);