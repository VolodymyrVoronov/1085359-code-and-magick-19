'use strict';

(function () {

  function getRandomItem(array) {
    return Math.floor(Math.random() * array.length);
  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  window.pullRandomWizards = function () {
    var wizard = {
      name: window.constants.WIZARDS_FIRST_NAME[getRandomItem(window.constants.WIZARDS_FIRST_NAME)] + ' ' + window.constants.WIZARDS_LAST_NAME[getRandomItem(window.constants.WIZARDS_LAST_NAME)],
      coatColor: getRandomColor(),
      eyesColor: getRandomColor()
    };
    return wizard;
  };
})();
