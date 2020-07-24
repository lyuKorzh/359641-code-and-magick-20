'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var semilarListElement = document.querySelector('.setup-similar-list');
var semilarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия',
  'Люпита', 'Вашингтон'];
var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var randomWizards = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

var firstName = randomWizards(firstNames);
var lastName = randomWizards(lastNames);

var Name = firstName + ' ' + lastName;

var wizards = [];
    var baseWizard = {
    name: Name,
    coatColor: randomWizards(coatColors),
    eyesColor: randomWizards(eyesColors)
  };
  var getWizard = function (count) {
  for (i = 0; i < count; i += 1) {
    wizards.push(baseWizard);
  }
  return wizards;
};
getWizard(4);


var renderWizard = function (wizard) {
  var wizardElement = semilarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  semilarListElement.appendChild(wizardElement);
};
for (var i = 0; i < wizards.length; i++) {
  renderWizard(wizards[i]);
}


