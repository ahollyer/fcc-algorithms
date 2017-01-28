function bouncer(arr) {
  return arr = arr.filter(function (a) {
    if (a) { //exclude falsy values
      return a;
    }
  });
}

bouncer([7, "ate", "", false, 9]); //[7, "ate", 9]

/*FreeCodeCamp seemed to suggest using the .filter(); method for
the array. I'm not sure why that solution might be preferable to the
solution I used. When I tried .filter(); it was difficult to get rid
of null values. Need to revisit this once I've learned more!*/

function bouncer(arr) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

bouncer([7, "ate", "", false, 9]); //[7, "ate", 9]
bouncer(["a", "b", "c"]); //["a", "b", "c"]
bouncer([false, null, 0, NaN, undefined, ""]); //[]
bouncer([1, null, NaN, 2, undefined]); //[1, 2]
