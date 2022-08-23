import svgIcon from '../images/symbol-defs.svg';
import usersReviews from '../db/reviews-users.json';
import image0 from '../images/profil1-desk-1x.png';
import image1 from '../images/profil-desk-1x.png';

const usersReviewsEL = document.querySelector('.reviews-users__list');
let i = 0;
let image = '';
const reviews = usersReviews
  .map(review => {
    switch (i) {
      case 0:
        image = image0;
        break;
      case 1:
        image = image1;
        break;
    }
    i = i + 1;
    return ` <li class="user-review" key="${review.id}">
    <img class="avatar" src="${image}" alt="${review.user}" />
    <div class="title-review">
      <div class="user">
        <div class="name-profi">
          <p class="user-name">${review.user}</p>
          <p class="user-profession">${review.profession}</p>
        </div>
      
      <div class="date-stars">
        <p class="date">${review.date}</p>
        <div class="rating-user">
          <svg>
            <use href="${svgIcon}#icon-fill-actions-star"></use>
          </svg>
          <svg>
            <use href="${svgIcon}#icon-fill-actions-star"></use>
          </svg>
          <svg>
            <use href="${svgIcon}#icon-fill-actions-star"></use>
          </svg>
          <svg>
            <use href="${svgIcon}#icon-fill-actions-star"></use>
          </svg>
          <svg>
            <use href="${svgIcon}#icon-actions-star"></use>
          </svg>
        </div>
      </div>
      </div>
      <div class="review-users-text show-less">
        <p>${review.review}</p>
      </div>
      </div>
  </li>`;
  })
  .join('');

usersReviewsEL.innerHTML = reviews;

const fullReviewsButton = document.querySelector('.full-reviews');
const fullReviewsEl = document.querySelectorAll('.review-users-text');

let isShowAll = false;
console.log('fullReviewsEl', fullReviewsEl);

fullReviewsButton.addEventListener('click', () => {
  for (let i = 0; i < fullReviewsEl.length; i ++ ) {
    console.log('fullReviewsEl[i]', fullReviewsEl[i])
    isShowAll
      ? fullReviewsEl[i].classList.add('show-less')
      : fullReviewsEl[i].classList.remove('show-less');
  }
  isShowAll = !isShowAll;
});
