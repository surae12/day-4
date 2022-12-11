fetch('https://restcountries.eu/rest/v2/all')
function convert(json) {
    return JSON.parse(json).map(country => {
        return {
            'Flag': country.flag,
            'Name': country.name.common,
            'Code': country.cca2,
            'Capital': country.capital[0],
            'Population': country.population
        }
    });
}
convert();