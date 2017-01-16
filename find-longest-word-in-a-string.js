function findLongestWord(str) {
  var longestLength = 0;
  str = str.split(" "); //create array of words
  for (i = 0; i < str.length; i++) {
    if (str[i].length > longestLength) {
      longestLength = str[i].length;
    }
  }
  return longestLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //6
findLongestWord("May the force be with you"); //5
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //19