function chunkArrayInGroups(arr, size) {
  var array2 = []; //To hold chunked array
  var counter = 0; //To count elements already chunked
  for (var i = 0; i < (arr.length / size); i++) {
      array2.push(arr.slice(counter, (counter + size)));
      counter += size;
  }
  return array2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //[["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //[[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //[[0, 1], [2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //[[0, 1, 2, 3], [4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //[[0, 1, 2], [3, 4, 5], [6]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //[[0, 1, 2, 3], [4, 5, 6, 7], [8]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //[[0, 1], [2, 3], [4, 5], [6, 7], [8]
