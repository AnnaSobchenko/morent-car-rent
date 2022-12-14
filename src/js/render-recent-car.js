import cars from '../db/cars.json';
import icons from '../images/symbol-defs.svg';
import imagecrv from '../images/cars/cr-v/cr-v-desk-1x-min.png';
import imagenissan from '../images/cars/nissan/nissan-gt-r-desk-1x-min.png';
import imageKoenigsegg from '../images/cars/koenigsegg/koenigsegg-large-desk-1x-min.png';
import imagerush from '../images/cars/rush/rush-large-desk-1x-min.png';
import imageterios from '../images/cars/terios/terios-large-desk-1x-min.png';
import imagerolls from '../images/cars/rolls/rolls-royce-large-desk-1x-min.png';

const cardEL = document.querySelector('.recent-car__list');

const cards = cars
  .map(card => {
    let model = '';
    let imagesrc = '';
    let favorite = false;
    let classhidden = '';
    favorite = !card.favorite ? 'heart-stroke' : 'heart';
    classhidden = card.fullrent === card.salesprice && 'visually-hidden';
    switch (card.name) {
      case 'Nissan GT-R':
        model = 'nissan';
        imagesrc = imagenissan;
        break;
      case 'Koenigsegg':
        model = 'koenigsegg';
        imagesrc = imageKoenigsegg;
        break;
      case 'All New Rush':
        model = 'rush';
        imagesrc = imagerush;
        break;
      case 'All New Terios':
        model = 'terios';
        imagesrc = imageterios;
        break;
      case 'Rolls-Royce':
        model = 'rolls';
        imagesrc = imagerolls;
        break;
      case 'CR-V':
        model = 'cr-v';
        imagesrc = imagecrv;
        break;
    }
    return `   <li class="model swiper-slide" key=${card.id} id=${card.id}>
    <div class="recent-card">
    <div>
    <h3>${card.name}</h3>
    <p class="card-type">${card.type}</p>
    </div>
     <svg class="favorite">
       <use href="${icons}#icon-${favorite}"></use>     
     </svg>
   </div>
   <div class="image-box">
   <img src=${imagesrc} alt="car" />
   <div class="gradient-card"></div>
   </div>
     <div class="options-svg">
       <div class="info">
         <svg>
           <use href="${icons}#icon-fuel"></use>
         </svg>
         <p>${card.fuel}L</p>
       </div>
       <div class="info">
         <svg>
           <use href="${icons}#icon-car-manual"></use>
         </svg>
         <p>${card.steering}L</p>
       </div>
       <div class="info">
         <svg>
           <use href="${icons}#icon-profile-2user"></use>
         </svg>
         <p>${card.capacity}&nbsp;People</p>
       </div></div>
     </div>
     <div class="price-button-cars">
           <div class="price-cars">
             <p class="sale-price-cars">$${card.salesprice}/<span>days</span></p>
             <p class="full-price-cars ${classhidden}">$${card.fullrent}</p>
           </div>
           <button type="button" class="btn btn-primary rentalnow">Rental Now</button>
         </div>
   </li> `;
  })
  .join('');
cardEL.innerHTML = cards;

const button = document.querySelector('.view-all-recent-btn');
const carsRenderEl = document.querySelector('.recent-car__list');
const gradientRenderRecentEl = document.querySelector('.gradient-recom');

let isShowRecent = false;

button.addEventListener('click', () => {
  isShowRecent
    ? carsRenderEl.classList.add('view-all-cars')
    : carsRenderEl.classList.remove('view-all-cars');
  isShowRecent
    ? gradientRenderRecentEl.classList.add('visually-hidden')
    : gradientRenderRecentEl.classList.remove('visually-hidden');
  isShowRecent = !isShowRecent;
});
