//  3.Use the same rest countries and print all countries name, region, sub region and population


const getCountries = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all');
    xhr.send();
    xhr.responseType = 'json';
    xhr.onload = ()=> {
        // data
        let data = xhr.response;
      

      // country names
        let countryNames = data.map((country) => country.name.common);
        //region names of respective countries
        let countryRegion = data.map((country) => (country.region));
        //subregion names of respective countries
        let countrySubregion = data.map((country) => (country.subregion));
        //population count of respective countries
        let countryPopulation = data.map((country) => (country.population));

        //lets loop
        for (var i = 0; i < data.length; i++){
            let countryDetails = [
                name = `Country name = ${countryNames[i]}`,
                region = `Region name = ${countryRegion[i]}`,
                sub_region = `Sub Region name = ${countrySubregion[i]}`,
                population = `Countries population = ${countryPopulation[i]}`,
            ]
            console.log(countryDetails);
        }
       
        }
}

// the list
getCountries();