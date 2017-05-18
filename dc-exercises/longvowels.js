// longvowels.js
// Aspen Hollyer

// Write a function which accepts a string and returns double vowels extended
// to a length of 5.
function longLongVowels(str) {
  return str.replace('oo', 'ooooo').replace('ee', 'eeeee');
}

console.log(longLongVowels('Good')); //Goooood
console.log(longLongVowels('Cheese')); //Cheeeese
console.log(longLongVowels('Man')); //Man
