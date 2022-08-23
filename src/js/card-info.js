import nissanViewLarge from '../images/cars/nissan/nissan-large-desk-1x-min.png';
import nissanView1 from '../images/cars/nissan/nissan-view-desk-2x-min.png';
import nissanView2Large from '../images/cars/nissan/nissan-large-view2-desk-2x-min.png';
import nissanView2 from '../images/cars/nissan/nissan-view2-desk-2x-min.png';
import nissanView3Large from '../images/cars/nissan/nissan-large-view3-desk-2x-min.png';
import nissanView3 from '../images/cars/nissan/nissan-view3-desk-2x-min.png';

const cardViews = document.querySelector('.card__views');
const cardView1El = document.querySelector('.view1');
const cardView2El = document.querySelector('.view2');
const cardView3El = document.querySelector('.view3');
const cardLargeEl = document.querySelector('.card__large-image');
const cardDescEl = document.querySelector('.card');

let large = nissanViewLarge;
const view1img = nissanView1;
const view2img = nissanView2;
const view3img = nissanView3;

cardViews.addEventListener('click', e => {
  cardLargeEl.innerHTML = '';
  switch (e.target.id) {
    case 'view1img':
      large = nissanViewLarge;
      cardDescEl.classList.remove('visually-hidden');
      cardLargeEl.classList.add('height');
      cardView1El.classList.add("active-view")
      cardView2El.classList.remove('active-view')
      cardView3El.classList.remove('active-view')
      break;
    case 'view2img':
      large = nissanView2Large;
      cardLargeEl.classList.remove('height');
      cardDescEl.classList.add('visually-hidden');
      cardView2El.classList.add("active-view")
      cardView1El.classList.remove('active-view')
      cardView3El.classList.remove('active-view')
      break;
    case 'view3img':
      large = nissanView3Large;
      cardLargeEl.classList.remove('height');
      cardDescEl.classList.add('visually-hidden');
      cardView3El.classList.add("active-view")
      cardView2El.classList.remove('active-view')
      cardView1El.classList.remove('active-view')
      break;
  }
  cardLargeEl.innerHTML = `<img src=${large} alt=${large} />`;
});
