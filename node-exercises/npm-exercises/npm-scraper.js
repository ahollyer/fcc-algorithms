const request = require('request');
const $ = require('cheerio');


request('http://www.npmjs.com', function(error, response, body) {
  if(error) {
    console.error(error.message);
    return;
  }
  console.log($('h3', '.glxxxl', body).text());
});
