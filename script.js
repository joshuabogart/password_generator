//special characters
var specialCharacters = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
];

//uppercase letters
var UpperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    's',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

//lowercase letters
var lowerCasedLetters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

//numbers
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//promt user for options
function getOptions() {
    var length = parseInt(
        prompt('How many characters would you like?')
    );

    if (length > 8) {
        alert('password must be at least 8 characters');
        return;
    }

    if (length > 128) {
        alert('password must be less than 129 characters')
        return;
    }

    var hasSpecialCharacters = comfirm(
        'Click OK to comfirm including special characters'
    );

    var hasUpperCasedCharacters = confirm(
        'Click OK to comfirm including uppercase characters'
    );

    var hasLowerCasedLetters = comfirm(
        'Click OK to comfirm including lowercse characters'
    );

    var hasNumericCharacters = comfirm(
        'Click OK to comfirm including numbers'
    );

    var passwordOptions = {
        length: length,
        hasSpecialCharacters: hasSpecialCharacters,
        hasNumericCharacters: hasNumericCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters
      };

      return passwordOptions;
}

function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }

  function getPasswordOptions() {
      var length = parseInt(
          prompt('how many characters would you like your password to be?')
      );

  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numbers'
  );

  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase letters'
  );

  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase letters.'
  );

  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCasedCharacters === false &&
    hasUpperCasedCharacters === false
  ) {
    alert('Must select at least one type');
    return;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}