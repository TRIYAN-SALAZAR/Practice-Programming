const wordOne = "the-stealth-warrior" //gets converted to "theStealthWarrior"
const wordTwo = "The_Stealth_Warrior" //gets converted to "TheStealthWarrior"
const wordThree = "The_Ste alth-Warrior" //gets converted to "TheStealthWarrior"

function toCamelCase(str) {
  const coversionToArray = str.split('');
  for (let i = 0; i < coversionToArray.length; i++) {
    if (coversionToArray[i] === '-' || coversionToArray[i] === '_' || coversionToArray[i] === ' ') {
      coversionToArray.splice(i + 1, 1, coversionToArray[i + 1].toUpperCase())
    }
  }

  let strToUpperCase = coversionToArray.join('');

  const regExp = /\s|-|_|/g;
  return strToUpperCase.replace(regExp, '');
}

toCamelCase(wordOne);
toCamelCase(wordTwo);
toCamelCase(wordThree);
