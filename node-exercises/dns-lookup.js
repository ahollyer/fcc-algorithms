// dns-lookup.js
// Aspen Hollyer

// Write a program that prompts the user for a domain name, then prints the
// corresponding IP address.

let readline = require('readline');
let dns = require('dns');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Domain name: ", function(domain) {
  dns.lookup(domain, function(err, ipAddress) {
    if(err) {
      console.error(err.message);
      console.error(err.stack);
      return;
    }
    console.log("IP Address: " + ipAddress)
  });
  rl.close();
});
