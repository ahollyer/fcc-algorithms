function largestOfFour(arr) {
  // You can do this!
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].sort(function(a, b) {
      return a - b;
    }).slice(arr[i].length - 1);
  }
  
  return arr.reduce( function(x,y) {return x.concat(y);} );
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);