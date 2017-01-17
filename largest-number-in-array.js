function largestOfFour(arr) {

  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort(function(a, b) {
      return a - b; // Sort smallest-to-largest integer. Otherwise, sort goes by unicode value
    }).slice(arr[i].length - 1); // Get last (largest) integer
  }
  
  return arr.reduce( function(x,y) {return x.concat(y);} ); // Collapse sub-arrays into single array
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[5,27,39,1001]
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[27,5,39,1001]
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); //[9,35,97,1000000]