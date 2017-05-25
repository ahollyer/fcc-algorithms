// tips.js
// Aspen Hollyer

//Write a function that, given a bill amt and level of service, returns
//dollar amount for tip. Good=20%, Fair=15%, Bad=10%
function tipAmount(bill, service) {
  var tipPercentages = {
    good: 0.2,
    fair: 0.15,
    bad: 0.1
  };
  var percent = tipPercentages[service.toLowerCase()];
  var tip = (bill * percent);
  return tip;
}
console.log("You should tip $" + tipAmount(25.00, 'Bad').toFixed(2) + ".");

function totalAmount(bill, service) {
  var tip = tipAmount(bill, service);
  var total = (tip + bill);
  return total;
}
console.log("With bill and tip, you should pay $" + totalAmount(25.00, 'bad').toFixed(2) + ".");

function splitAmount(bill, service, numGuests) {
  var total = totalAmount(bill, service);
  var costPerGuest = total / numGuests;
  return costPerGuest;
}
console.log("Each guest should pay $" + splitAmount(25.00, 'bad', 3).toFixed(2) + ".");
