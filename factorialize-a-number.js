
function factorialize(num) {
  var product = 1;
  for (i = 1; i < num; i++) {
    product *= i + 1;
  }
  return product;
}

factorialize(5); //120
factorialize(0); //1
factorialize(10); //3628800