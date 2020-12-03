import itemsTemplate from '../templates/gallery-items.hbs';
import cards from '../../src/menu.json';

const markup = itemsTemplate(cards);
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);

