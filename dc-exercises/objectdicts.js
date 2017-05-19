// objectdicts.js
// Aspen Hollyer

// Phonebook Exercise

var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
};

// 1. Print Elizabeth's phone number.
console.log("Elizabeth's Number: " + phonebookDict.Elizabeth);
// 2. Add an entry: Kareem's number is 938-489-1234.
phonebookDict.Kareem = '938-489-1234';
// 3. Delete Alice's entry.
// 4. Change Bob's number to '968-345-2345'.
phonebookDict.Bob = '968-345-2345';
// 5. Given this code:
var personName = 'Elizabeth';
// 5a. Use the variable to access the corresponding entry.
console.log("'personName' Number: " + phonebookDict[personName]);
// 5b. Use a for...in loop to print all the phone entries.
console.log("All Phonebook Entries:")
for(var entry in phonebookDict) {
  console.log(`${entry}: ${phonebookDict[entry]}`);
}

// Letter Histogram
// Write a function letterHistogram which accepts a string, tallies
// the number of times each character appears in the string, and
// returns the tally as an object.

function letterHistogram(str) {
  let histogram = {};
  str.toLowerCase().split('').forEach(function(char) {
    if(char in histogram) {
      histogram[char] += 1;
    } else {
      histogram[char] = 1;
    }
  });
  return histogram
}

console.log('Letter Histogram: Bananas');
var h = letterHistogram('bananas');
for(var key in h) {
  //let value = h[key];
  console.log(`${key}: ${h[key]}`);
}

// Word Histogram
// Write a function wordHistogram which takes a string as an argument and
// tallies the number of times each word appears in the string, and returns
// the tally as an object.

function wordHistogram(str) {
  let histogram = {};
  let wordArr = str.toLowerCase().replace(/[^a-z]/g, " ").split(" ");
  wordArr.forEach(function(word) {
    if(word in histogram) {
      histogram[word] += 1;
    } else {
      histogram[word] = 1;
    }
  });
  return histogram;
}
console.log('Word Histogram:');
var wordHist = wordHistogram("Congress returns Tuesday from its spring recess, facing yet another down-to-the-wire spate of deal-making — and a White House anxious to claim its first major legislative win. On Friday night, the funding measure lawmakers approved last year to keep the federal government running will expire. The timing leaves members of the House and Senate just four days to reach a new agreement to fund the government, or risk a partial shutdown of federal agencies on Saturday — the 100th day of Donald Trump's presidency");
for(var word in wordHist) {
  console.log(`${word}: ${wordHist[word]}`);
}
