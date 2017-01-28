
function getIndexToIns(arr, num) {

  arr = arr.sort(function(a, b) {
    return a - b;
  }); //sort array in ascending order

  for (i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i; //insert num at index before arr[i]
    }
  }

  return arr.length; //if num is greater than all elements in arr, insert at end of arr

}

getIndexToIns([10, 20, 30, 40, 50], 35); //3
getIndexToIns([40, 60], 50); //1
getIndexToIns([10, 20, 30, 40, 50], 30); //2
getIndexToIns([2, 5, 10], 15); //3
