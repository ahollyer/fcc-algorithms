function sumAll(arr) {
  arr.sort(function(a, b) {return a - b;}); //sort argument

  var sum = 0;
  for (var i=arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

sumAll([1, 4]); //10
sumAll([4, 1]); //10
sumAll([5, 10]); //45
sumAll([10, 5]); //45
