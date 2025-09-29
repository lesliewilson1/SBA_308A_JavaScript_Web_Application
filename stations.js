
let country = "United States"; // country to search for 
let url = `http://www.radio-browser.info/webservice/json/stations/bycountryexact/${country}`; 

fetch(url) 
.then(response => response.json()) 
.then(data => { 
   console.log(data); // display returned data in console 
}) 
.catch(error => console.error(error)); 


