'use strict';
var similarListElement = document.querySelector('.setup-similar-list');

(function () {
  // window.renderAllWizards = function (wizards) {
  //   var fragment = document.createDocumentFragment();
  //   for (var i = 0; i < wizards; i++) {
  //     fragment.appendChild(window.renderWizard());
  //   }
  //   similarListElement.appendChild(fragment);
  // };

  window.renderAllWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < window.constants.WIZARDS_AMOUNT; i++) {
      fragment.appendChild(window.renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };
})();
