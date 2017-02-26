//return the symmetric difference of two arrays


function diffArray(arr1, arr2) {
  var newArr = [];

  //check for unique elements in arr1 and add to newArr
  for(i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }

  //check for unique elements in arr2 and add to newArr
    for(i = 0; i < arr2.length; i++) {
    if(arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i]);
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); //[4]
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); //["pink wool"]
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); //["diorite", "pink wool"]
diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]); //[]
diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); //["piglet", 4]
diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); //["snuffleupagus", "cookie monster", "elmo"]
