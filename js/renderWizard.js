'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  window.renderWizard = function () {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = window.pullRandomWizards().name;
    wizardElement.querySelector('.wizard-coat').style.fill = window.pullRandomWizards().coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = window.pullRandomWizards().eyesColor;

    return wizardElement;
  };
})();
