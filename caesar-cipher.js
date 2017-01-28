/*There must be a more efficent way to do this.
Will refactor this code once I learn more.*/

function rot13(str) {

  var cipher = []; //convert string to array of unicode chars

  for (var i = 0; i < str.length; i++) {
    cipher.push(str.charCodeAt(i));
  }


  str = ""; //empty original str

  for (var j = 0; j < cipher.length; j++) {

    /*decode and concatenate alphabetic characters onto str,
    and concatenate non-alphabetic characters as-is*/

    if (cipher[j] > 64 && cipher[j] < 91) {
      cipher[j] -= 13;
        if (cipher[j] < 65) {
          cipher[j] = 90 + (cipher[j] - 64);
        }
      str += String.fromCharCode(cipher[j]);
    } else {
      str += String.fromCharCode(cipher[j]);
    }
  }

  return str; //return decoded str
}

// Change the inputs below to test
rot13("SERR PBQR PNZC"); //"FREE CODE CAMP"
rot13("SERR CVMMN!"); //"FREE PIZZA!"
rot13("SERR YBIR?"); //"FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX"
