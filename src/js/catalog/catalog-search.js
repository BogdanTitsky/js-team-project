import axios from 'axios';
import { makeMarkup } from '../reuseble/card-markup';
import Notiflix from 'notiflix';
import throttle from 'lodash.throttle';
const apiKey = '183c3cacc9c38c09c14d38798ccfe9d7';

async function getSearchMovie(query, page=1) {
   const response = await axios.get(`
https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`);
const data = await response.data;
const movie = await data.results;
console.log(movie)
return movie;
}

const refs = {
form: document.querySelector('.form-search'),
filmList: document.querySelector('.weelky-trends-list'),
textBox: document.querySelector('.catalog-text-box')
}

refs.form.addEventListener('submit', throttle(onSubmitForm, 2000))

async function onSubmitForm(e) {
   e.preventDefault();
  const form = e.currentTarget;
  const value = form.elements.search.value.trim();

  
  if (value === "") {
   Notiflix.Notify.failure('No value!');
return
}
clearMarkup();
  const getMovie = await getSearchMovie(value);

if (getMovie.length === 0) {
   refs.textBox.classList.remove('hidden-text')
    return
   }
   refs.textBox.classList.add('hidden-text')
  const markupMovie = await makeMarkup(getMovie);
  movieList(markupMovie);
}

function movieList(markup) {
   refs.filmList.innerHTML = markup;
}

function clearMarkup() {
   refs.filmList.innerHTML = '';
 }