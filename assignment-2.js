// Your code here
// I have provided the solution for the first  task to get you going.
class WorldWiki {
  // in the task below I am passing a name and then searching through the data
  // to find the name. and if its finds it just console.log it.
  // you can follow similar structure for the rest of the tasks

  searchByName(name) {
    fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
      .then((response) => response.json())
      .then((data) => {
        // looping through data once its resolved
        data.map((country) => {
          console.log(country.name.common);
        });
      });
  }


  //Get list of all countries
  getAllCountries() {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {
        // looping through data once its resolved
        data.map(country =>
          console.log(country.name.common));
      });

  }

  // Given a country name, find out what other countries it's bordering with
  getNeighborCountries(name) {
    fetch("https://restcountries.com/v3.1/name/" + name + "?fullText=true")
      .then(response => response.json())
      .then(data => {

        data.map(country => {
          let borderCountries = country.borders;
          let borderCountriesSeparatedByComma = borderCountries.join(',');
          console.log(borderCountries);
          // calling list of codes api
          fetch("https://restcountries.com/v3.1/alpha?codes=" + borderCountriesSeparatedByComma)
            .then(response => response.json())
            .then(data => {
              data.map(country => {
                console.log(country.name.common);
              })
            });
        });
      });
  }


  // Given a population (in millions), find out what countries have more people than that
  getHigherPopulatedCountries(populationMillion) {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(data => {

        data.filter(country => {
          let population = populationMillion * 1000000;
          if (country.population > population) {
            console.log(country.name.common);
          }
        });
      });
  }

  // Get country by currency
  searchByCurrency(currency) {

    fetch("https://restcountries.com/v3.1/currency/" + currency)
      .then(response => response.json())
      .then(data => {

        data.map(country =>
          console.log(country.name.common)
        );
      });
  }    

}
const obj = new WorldWiki();

obj.searchByName("Finland");
obj.getAllCountries();
obj.getNeighborCountries("Germany");
obj.getHigherPopulatedCountries(1000);
obj.searchByCurrency('dkk');