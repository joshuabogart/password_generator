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
function getPasswordOptions() {
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
        'Click OK to comfirm including numeric characters'
    )

    var hasUpperCasedCharacters = confirm(
        
    )
}