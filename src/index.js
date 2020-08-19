
import './styles.css';
import debounce from 'lodash.debounce';
import refs from './refs';
import markupCountries from './markup';



refs.form.addEventListener('submit', evt => evt.preventDefault());
refs.input.addEventListener('input', debounce(markupCountries, 500));




