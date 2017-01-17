function repeatStringNumTimes(str, num) {
  var temp = str; //Create a temporary variable to hold the original string
  str = "" //Empty the original string

  for (var i = 0; i < num; i++) {
      str += temp; //Concatenate the original string num times
  }

  return str;
}

repeatStringNumTimes("abc", 3); //"abcabcabc"
repeatStringNumTimes("*", 3); //"***"
repeatStringNumTimes("*", 8); //"********"
repeatStringNumTimes("abc", -2); //""