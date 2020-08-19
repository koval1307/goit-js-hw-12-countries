
import refs from './refs';
import countryTpl from '../templates/country.hbs';
import countriesListTpl from '../templates/list.hbs'
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';
import fetchCountries from './fetchCountries';
require('lodash');
import {errorMessage} from './notification'
import {noCountries} from './notification'

function markupCountries() {
    const query = refs.input.value;
    if (query) {
        return fetchCountries(query).then(data => {
            if (data.length === 1) {
                refs.countries.innerHTML = countryTpl(data);
            } else if (data.length <= 10) {
                refs.countries.innerHTML = countriesListTpl(data);
            } else if (data.length > 10) {
                errorMessage();
                refs.countries.innerHTML = '';
            } else {
                noCountries();
                refs.countries.innerHTML = '';
            }
        });
    } 
}



export default markupCountries;

