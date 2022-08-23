import types from '../db/types.json';
import capacity from '../db/capacity.json';
import cars from '../db/cars.json';

const filterEl = document.querySelector('.filters');
const homeEl = document.querySelector('.home');
const typesEl = document.querySelector('.filter-types');
const capacityEl = document.querySelector('.filter-capacity');
const priceEl = document.querySelector('.filter-price');
const typesDeskEl = document.querySelector('.filter-types-desk');
const capacityDeskEl = document.querySelector('.filter-capacity-desk');
const priceDeskEl = document.querySelector('.filter-price-desk');

let minPrice = cars[0].salesprice;
let maxPrice = cars[0].salesprice;
cars.map(car => {
  minPrice = minPrice > car.salesprice ? car.salesprice : minPrice;
  maxPrice = maxPrice < car.salesprice ? car.salesprice : maxPrice;
});

const typesFilter = types
  .map(filter => {
    const { type, count } = filter;
    return ` <li class="option">
    <input class="form-check-input" type="checkbox" value="" id="${type}">
    <label class="form-check-label" for="${type}">
     ${type} <span>(${count})</span>
    </label></li>`;
  })
  .join('');

const capacityFilter = capacity
  .map(filter => {
    const { person, count } = filter;
    return ` <li class="option">
    <input class="form-check-input" type="checkbox" value="" id="${person}">
    <label class="form-check-label" for="${person}">
     ${person} <span>(${count})</span>
    </label></li>`;
  })
  .join('');

const priceFilter = ` <label for="customRange2" class="form-label visually-hidden">price range</label>
  <input
    type="range"
    class="form-range"
    min="$${minPrice}"
    max="$${maxPrice}"
    id="customRange2"
  />
  <div class="min-max">
  <p>$${minPrice}</p>
  <p>$${maxPrice}</p>
  </div>`;

if (window.matchMedia('(max-width: 767px)').matches) {
  typesEl.innerHTML = typesFilter;

  capacityEl.innerHTML = capacityFilter;

  priceEl.innerHTML = priceFilter;
} else {
  typesDeskEl.innerHTML = typesFilter;

  capacityDeskEl.innerHTML = capacityFilter;

  priceDeskEl.innerHTML = priceFilter;
}

const button = document.querySelector('.btn-desktop');

let isShow = false;

button.addEventListener('click', () => {
  !isShow
    ? filterEl.classList.remove('visually-hidden')
    : filterEl.classList.add('visually-hidden');
  isShow
    ? homeEl.classList.remove('home-filter')
    : homeEl.classList.add('home-filter');
  isShow = !isShow;
});
