'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var semilarListElement = document.querySelector('.setup-similar-list');
var semilarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var firstNames = ['Филипп', 'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия',
  'Люпита', 'Вашингтон'];
var lastNames = ['Музычук', 'да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко',
  'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var randomWizards = function (arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};


var wizards = [{
  name: randomWizards(firstNames) +
    ' ' + randomWizards(lastNames),
  coatColor: randomWizards(coatColors),
  eyesColor: randomWizards(eyesColors)
},
{
  name: randomWizards(firstNames) +
    ' ' + randomWizards(lastNames),
  coatColor: randomWizards(coatColors),
  eyesColor: randomWizards(eyesColors)
},
{
  name: randomWizards(firstNames) +
    ' ' + randomWizards(lastNames),
  coatColor: randomWizards(coatColors),
  eyesColor: randomWizards(eyesColors)
},
{
  name: randomWizards(firstNames) +
    ' ' + randomWizards(lastNames),
  coatColor: randomWizards(coatColors),
  eyesColor: randomWizards(eyesColors)
}
];


var renderWizard = function (wizard) {
  var wizardElement = semilarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i += 1) {
  fragment.appendChild(renderWizard(wizards[i]));
}

semilarListElement.appendChild(fragment);

