
function destroyer(arr) {

  var argumentArray = Array.from(arguments);
  argumentArray.shift(); //remove arr from argument array

  function matchChecker(a) {
    if (a != argumentArray[i]) {
      return a; //return only elements which do not match args
    }
  }

  for (i = 0; i < argumentArray.length; i++) { //iterate over args
    arr = arr.filter(matchChecker);
  }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //[1,5,1]
destroyer([3, 5, 1, 2, 2], 2, 3, 5); //[1]
destroyer([2, 3, 2, 3], 2, 3); //[]
destroyer(["tree", "hamburger", 53], "tree", 53); //["hamburger"]
