/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
const concatenateStrings = (str1, str2) => str1.concat(str2);

/**
 * Returns the length of given string.
 *
 * @param {string} string
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
const getStringLength = (string) => string.length;

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
const getStringFromTemplate = (firstName, lastName) => `Hello, ${firstName} ${lastName}!`;

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} sourceString
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(sourceString) {
  return sourceString.replace('Hello, ', '').replace('!', '');
}

/**
 * Returns a first char of the given string.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
const getFirstChar = (string) => string[0];

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
const removeLeadingAndTrailingWhitespaces = (string) => string.trim();

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} string
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
const repeatString = (string, count) => string.repeat(count);

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} strToRemove
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
const removeFirstOccurrences = (str, strToRemove) => str.replace(strToRemove, '');

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
const unbracketTag = (str) => str.replace('<', '').replace('>', '');


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
const convertToUpperCase = (str) => str.toUpperCase();

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
const extractEmails = (str) => str.split(';');

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const minHeight = 2;
  const minWidth = 2;
  const bodyWidth = width - minWidth;
  const borderHorizontalLine = '─'.repeat(bodyWidth);
  const topHorizontalLine = `┌${borderHorizontalLine}┐`;
  const bottomHorizontalLine = `└${borderHorizontalLine}┘`;
  const innerHorizontalLine = ' '.repeat(bodyWidth);
  const bodyHeight = height - minHeight;
  const horizontalLine = `│${innerHorizontalLine}│:`.repeat(bodyHeight);
  const array = [
    topHorizontalLine,
    ...horizontalLine.split(':').filter((item) => item),
    bottomHorizontalLine,
  ];

  return array.map((line) => `${line}\n`).join('');
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  const LENGTH = ALPHABET.length;
  const FIRST_LETTER = ALPHABET[0];
  const FIRST_LETTER_CODE = FIRST_LETTER.charCodeAt(0);
  const LAST_LETTER = ALPHABET[LENGTH - 1];
  const ROT_SHIFT = 13;
  const chars = str.split('');

  return chars.map((char) => {
    const isLowerCaseEnglishLetter = char >= FIRST_LETTER && char <= LAST_LETTER;
    const isUpperCaseEnglishLetter = char >= FIRST_LETTER.toUpperCase()
      && char <= LAST_LETTER.toUpperCase();
    const CHAR_CODE = char.toLowerCase().charCodeAt(0);
    let resultChar = char;

    if (isLowerCaseEnglishLetter || isUpperCaseEnglishLetter) {
      const encodedLetter = ALPHABET[(CHAR_CODE - FIRST_LETTER_CODE + ROT_SHIFT) % LENGTH];
      resultChar = isUpperCaseEnglishLetter ? encodedLetter.toUpperCase() : encodedLetter;
    }

    return resultChar;
  }).join('');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  const isPrimitive = typeof value === 'string';
  const isObject = typeof value === 'object';
  const isCompositeString = value instanceof String;

  return isPrimitive || (isObject && isCompositeString);
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  const CLUBS = '♣';
  const DIAMONDS = '♦';
  const HEARTS = '♥';
  const SPADES = '♠';
  const SUITS = [CLUBS, DIAMONDS, HEARTS, SPADES];
  const ACE = 'A';
  const JACK = 'J';
  const QUEEN = 'Q';
  const KING = 'K';
  const CARDS = [ACE, '2', '3', '4', '5', '6', '7', '8', '9', '10', JACK, QUEEN, KING];
  const SUIT_LENGTH = CARDS.length;
  const sourceSuit = value[value.length - 1];
  const sourceCard = value.slice(0, value.length - 1);

  const suitIndex = SUITS.findIndex((suit) => suit === sourceSuit);
  const cardIndex = CARDS.findIndex((card) => card === sourceCard);

  return suitIndex * SUIT_LENGTH + cardIndex;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
