
function fetchCountries(search) {
    const url = `https://restcountries.eu/rest/v2/name/${search}`;
    return fetch(url).then(res => res.json());
}
export default fetchCountries;