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

var similarListElement = document.querySelector('.setup-similar-list');

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

var coatColor;
var eyesColor;
var wizards = [];

colorOfCoatOfWizard.addEventListener('click', function () {
  var newColorOfCoat = window.constants.COLOR_OF_COATS[getRandomItem(window.constants.COLOR_OF_COATS)];
  colorOfCoatOfWizard.style.fill = newColorOfCoat;
  colorOfCoatOfWizardsValue.value = newColorOfCoat;
  coatColor = newColorOfCoat;
  updateWizards();
});

colorOfEyesOfWizard.addEventListener('click', function () {
  var newColorOfEye = window.constants.COLOR_OF_EYES[getRandomItem(window.constants.COLOR_OF_EYES)];
  colorOfEyesOfWizard.style.fill = newColorOfEye;
  colorOfEyesOfWizardsValue.value = newColorOfEye;
  eyesColor = newColorOfEye;
  updateWizards();
});

colorOfFireballOfWizards.addEventListener('click', function () {
  colorOfFireballOfWizards.style.backgroundColor = window.constants.COLOR_OF_FIREBALLS[getRandomItem(window.constants.COLOR_OF_FIREBALLS)];
  colorOfFireballOfWizardsValue.value = window.constants.COLOR_OF_FIREBALLS[getRandomItem(window.constants.COLOR_OF_FIREBALLS)];
});

settingsOfWizard.addEventListener('submit', function (evt) {
  window.save(settingsOfWizard, hideUserInfoWindow, window.errorHandler);
  evt.preventDefault();
});



function onLoad(data) {
  wizards = data;
  updateWizards();
};

function getRank(wizard) {
  var rank = 0;
  
  if (wizard.colorCoat === coatColor) {
    rank += 2;
  }
  if (wizard.colorEyes === eyesColor) {
    rank += 1;
  }
  return rank;
}

function namesComparator(left, right) {
  if (left > right) {
    return 1;
  } else if (left < right) {
    return -1;
  } else {
    return 0;
  }
}

function updateWizards() {
  var sameCoatAndEyesWizards = wizards.filter(function (it) {
    return it.colorCoat === coatColor && 
      it.colorEyes === eyesColor;
  })

  var sameCoatWizards = wizards.filter(function (it) {
    return it.colorCoat === coatColor;
  });

  var sameEyesWizards = wizards.filter(function (it) {
    return it.colorEyes === eyesColor;
  });

  var filteredWizards = sameCoatAndEyesWizards;
  filteredWizards = filteredWizards.concat(sameCoatWizards);
  filteredWizards = filteredWizards.concat(sameEyesWizards);
  filteredWizards = filteredWizards.concat(wizards);

  window.renderAllWizards(wizards.slice().sort(function (left, right) {
    var rankDiff = getRank(right) - getRank(left);
    if (rankDiff === 0) {
      rankDiff = wizards.indexOf(left) - wizards.indexOf(right);
    }
    return rankDiff;
  }));
}

userInfo.querySelector('.setup-similar').classList.remove('hidden');
window.load(onLoad, window.errorHandler);
