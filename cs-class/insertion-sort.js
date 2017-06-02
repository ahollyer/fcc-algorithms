const nums = [10, 2, 3, 9, 7, 6, 8, 1, 5, 4];

function insertionSort(items) {
    let len = items.length;
    let value;
    let i;
    let j;

    for (i=0; i < len; i++) {
      value = items[i];
      for (j=i-1; j > -1 && items[j] > value; j--) {
            items[j+1] = items[j];
      }
      items[j+1] = value;
      console.log(items);
    }
    return items;
}

insertionSort(nums);
