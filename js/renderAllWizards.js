'use strict';
var similarListElement = document.querySelector('.setup-similar-list');

(function () {
  window.renderAllWizards = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards; i++) {
      fragment.appendChild(window.renderWizard());
    }
    similarListElement.appendChild(fragment);
  };
})();
