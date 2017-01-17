/* This challenge specifies NOT to use the built-in method .endsWith() */

function confirmEnding(str, target) {
	/*Return a number of letters equal to the target length
	from the end of the string, then match to the target*/
   return (str.substr(-target.length) == target);
}

confirmEnding("Bastian", "n"); //true
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); //false
onfirmEnding("He has to give me a new name", "name"); //true
confirmEnding("Open sesame", "same"); //true
confirmEnding("Open sesame", "pen"); //false