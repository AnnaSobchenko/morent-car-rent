import cars from '../db/cars.json';
import icons from '../images/symbol-defs.svg';
import imagecrv from '../images/cars/cr-v/cr-v-desk-1x-min.png'
import imagenissan from '../images/cars/nissan/nissan-gt-r-desk-1x-min.png'
import imageKoenigsegg from '../images/cars/koenigsegg/koenigsegg-large-desk-1x-min.png'
import imagerush from '../images/cars/rush/rush-large-desk-1x-min.png'
import imageterios from '../images/cars/terios/terios-large-desk-1x-min.png'
import imagerolls from '../images/cars/rolls/rolls-royce-large-desk-1x-min.png'

const cardRecomEL = document.querySelector('.recomendation-car__list');

const recomendation=cars.filter(el=>el.favorite===true)

const cards = recomendation.map(card => {
  let model = '';
  switch (card.name) {
    case 'Nissan GT-R':
      model = 'nissan';
      imagesrc=imagenissan;
      break;
    case 'Koenigsegg':
      model = 'koenigsegg';
      imagesrc=imageKoenigsegg;
      break;
    case 'All New Rush':
      model = 'rush';
      imagesrc=imagerush;
      break;
    case 'All New Terios':
      model = 'terios';
      imagesrc=imageterios;
      break;
    case 'Rolls-Royce':
      model = 'rolls';
      imagesrc=imagerolls;
      break;
    case 'CR-V':
      model = 'cr-v';
      imagesrc=imagecrv;
      break;

    }

//   let image = document.createElement("img");
// image.src = `http://localhost:1234/${card.images.desk1}`;
// image.alt =`${card.name}`;
// console.log(image);

// cardRecomEL.append(image);


  return `<li class="model swiper-slide" key=${card.id} id=${card.id}>
  <h3>${card.name}</h3>
  <p class="card-type">${card.type}</p>
  
  <img src=${imagesrc} alt="car" />
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
  </div>
</li>`
}).join('');

cardRecomEL.innerHTML= cards;
