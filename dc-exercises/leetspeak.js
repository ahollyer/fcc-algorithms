// leetspeak.js
// Aspen Hollyer

//Write a function that accepts a string and returns the leetspeak
//equivalent of the string.
function leetspeak(str) {
  str = str.toUpperCase();
  let translations = {
    A: '4',
    E: '3',
    G: '6',
    I: '1',
    O: '0',
    S: '5',
    T: '7'
  }
  for(let i = 0; i < str.length; i++) {
    if(translations.hasOwnProperty(str[i])) {
      str = str.replace(str[i], translations[str[i]]);
    }
  }
  return str;
}
console.log(leetspeak('Leet'));
