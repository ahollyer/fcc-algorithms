var nums = [10, 2, 3, 9, 7, 6, 8, 1, 5, 4];

function bubbleSort(data) {
  var swapped;
  do {
    swapped = false;
    for(let i = 0; i < (data.length - 1); i++) {
      if(data[i] > data[i+1]) {
        let temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        swapped = true;
        console.log(data);
      }
    }
  } while(swapped);
}

console.log(nums);
bubbleSort(nums);
