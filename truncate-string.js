function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else if (num <= 3) {
    str = str.slice(0, num)  + "...";
  } else {
    str = str.slice(0, (num - 3)) + "...";
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); //"A-tisket..."
truncateString("Peter Piper picked a peck of pickled peppers", 14) //"Peter Piper..."
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // "A-tisket a-tasket A green and yellow basket."
truncateString("A-", 1); //"A..."
truncateString("Absolutely longer", 2); //"Ab..."
