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
        <div class="rating">
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
      <div class="review">
        <p>${review.review}</p>
      </div>
      </div>
  </li>`;
  })
  .join('');

usersReviewsEL.innerHTML = reviews;
