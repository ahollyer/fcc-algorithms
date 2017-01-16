function palindrome(str) {

	/*replace non-alphanumeric characters & whitespace for comparison*/
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  /*replace non-alphanumeric & whitespace, then reverse for comparison*/
  var reverseStr = str.toLowerCase().replace(/[^a-z0-9]/g, "").split("").reverse().join("");
  
  if (str == reverseStr) {
    return true;
  }
    return false;
}


palindrome("eye"); //true
palindrome("almostomla"); //false
palindrome("not a palindrome"); //false
palindrome("A man, a plan, a canal. Panama"); //true