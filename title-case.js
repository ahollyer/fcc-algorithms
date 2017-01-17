function titleCase(str) { 
  str = str.toLowerCase().split(" "); //create array of words
  
  for (i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].slice(1); //capitalize first letter, concat remainder of word
  }
  
  return str.join(" "); //join array into a single string again
}

titleCase("I'm a little tea pot"); //I'm A Little Tea Pot
titleCase("sHoRt AnD sToUt"); //Short And Stout
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //Here is My Handle Here Is My Spout