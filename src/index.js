
import './styles.css';
import debounce from 'lodash.debounce';

import refs from './refs';
import fetchCountries from './fetchCountries';
import errorMessage from './notification';
import markupMarker from './markup';
import markupCountries from './markup';



refs.form.addEventListener('submit', evt => evt.preventDefault());

refs.input.addEventListener('input', debounce(markupCountries, 500));




