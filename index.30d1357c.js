!function(){function e(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},n=s.parcelRequirea1a8;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in r){var s=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,s.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,s){r[e]=s},s.parcelRequirea1a8=n),n("iE7OH").register(JSON.parse('{"fedZK":"index.30d1357c.js","kxKJ3":"symbol-defs.3320a940.svg","4R6qq":"profil1-desk-1x.50c6e40e.png","lm4MV":"profil-desk-1x.4f72cbb6.png"}'));var a;a=n("aNJCr").getBundleURL("fedZK")+n("iE7OH").resolve("kxKJ3");var l;l=JSON.parse('[{"id":"0","user":"Alex Stanton","profession":"CEO at Bukalapak","date":"21 July 2022","count-stars":4,"review":"We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.","image":"image0"},{"id":"1","user":"Skylar Dias","profession":"CEO at Amazon","date":"20July 2022","count-stars":4,"review":"We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.","image":"image1"}]');var o;o=n("aNJCr").getBundleURL("fedZK")+n("iE7OH").resolve("4R6qq");var t;t=n("aNJCr").getBundleURL("fedZK")+n("iE7OH").resolve("lm4MV");const d=document.querySelector(".reviews-users__list");let c=0,f="";const v=e(l).map((s=>{switch(c){case 0:f=e(o);break;case 1:f=e(t)}return c+=1,` <li class="user-review" key="${s.id}">\n    <img class="avatar" src="${f}" alt="${s.user}" />\n    <div class="title-review">\n      <div class="user">\n        <div class="name-profi">\n          <p class="user-name">${s.user}</p>\n          <p class="user-profession">${s.profession}</p>\n        </div>\n      \n      <div class="date-stars">\n        <p class="date">${s.date}</p>\n        <div class="rating-user">\n          <svg>\n            <use href="${e(a)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(a)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(a)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(a)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(a)}#icon-actions-star"></use>\n          </svg>\n        </div>\n      </div>\n      </div>\n      <div class="review-users-text show-less">\n        <p>${s.review}</p>\n      </div>\n      </div>\n  </li>`})).join("");d.innerHTML=v;const u=document.querySelector(".full-reviews"),p=document.querySelectorAll(".review-users-text");let g=!1;console.log("fullReviewsEl",p),u.addEventListener("click",(()=>{for(let e=0;e<p.length;e++)console.log("fullReviewsEl[i]",p[e]),g?p[e].classList.add("show-less"):p[e].classList.remove("show-less");g=!g}))}();
//# sourceMappingURL=index.30d1357c.js.map
