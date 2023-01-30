//Get all the countries from the Asia continent /region using the Filter function
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    const AsiaCountries = result.filter(country => country.region === "Asia");
    console.log(AsiaCountries )

}



//Get all the countries with a population of less than 2 lakhs using Filter function
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    const lessthan2l = result.filter(country => country.population < 200000);
    console.log(lessthan2l);
   
}

//Print the following details name, capital, flag using forEach function
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    result.forEach(country => {
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Flag: ${country.flag}`);
  });
   
}

//Print the total population of countries using reduce function
var req = new XMLHttpRequest();
req.open("GET","https://restcountries.com/v3.1/all");
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    const totalPopulation = result.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);
    
}

