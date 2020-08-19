
import refs from './refs';
import countryTpl from '../templates/country.hbs';
import countriesListTpl from '../templates/list.hbs'
import fetchCountries from './fetchCountries';
import {errorMessage} from './notification'
import {noCountries} from './notification'

function markupCountries() {
    const query = refs.input.value;
    if (query) {
        return fetchCountries(query).then(data => {
            if (data.length > 10) {
                errorMessage();
                refs.countries.innerHTML = '';
            } else if (data.length <= 10) {
                refs.countries.innerHTML = countriesListTpl(data);
            } else if (data.length === 1) {
                     refs.countries.innerHTML = countryTpl(data);
                   } else {
                     noCountries();
                     refs.countries.innerHTML = "";
                   }
        });
    } 
}



export default markupCountries;

