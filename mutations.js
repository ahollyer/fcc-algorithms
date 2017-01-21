function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  var letters = arr[1].split(""); //split 2nd element to index letters

  for (i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) === -1) { //check each letter against 1st element
      return false;
    }
  }
  /*If all letters have a match in the 1st element, return true*/
  return true;
}

mutation(["hello", "hey"]); //false
mutation(["hello", "Hello"]); //true
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //true
mutation(["Mary", "Army"]); //true
mutation(["Mary", "Aarmy"]); //true
mutation(["hello", "neo"]); //false
