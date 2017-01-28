function bouncer(arr) {
  return arr = arr.filter(function (a) {
    if (a) { //exclude falsy values
      return a;
    }
  });
}

bouncer([7, "ate", "", false, 9]); //[7, "ate", 9]
bouncer([false, null, 0, NaN, undefined, ""]); //[]
bouncer([1, null, NaN, 2, undefined]); //[1, 2]
