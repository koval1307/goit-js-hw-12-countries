import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

   export function errorMessage() {
    error({
        text: 'Too many matches found. Please enter a more specific query!',
        delay: 1100,
    });
}
export function noCountries() {
    error({
        text: 'No such a country',
        delay: 1000,
    });
}

