!function(){function e(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=s.parcelRequirea1a8;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var s=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,s.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,s){r[e]=s},s.parcelRequirea1a8=a),a("iE7OH").register(JSON.parse('{"fedZK":"index.71fa70b0.js","kxKJ3":"symbol-defs.ec75d232.svg","4R6qq":"profil1-desk-1x.50c6e40e.png","lm4MV":"profil-desk-1x.4f72cbb6.png"}'));var i;i=a("aNJCr").getBundleURL("fedZK")+a("iE7OH").resolve("kxKJ3");var t;t=JSON.parse('[{"id":"0","user":"Alex Stanton","profession":"CEO at Bukalapak","date":"21 July 2022","count-stars":4,"review":"We are very happy with the service from the MORENT App. Morent has a low price . . . ","image":"image0"},{"id":"1","user":"Skylar Dias","profession":"CEO at Amazon","date":"20July 2022","count-stars":4,"review":"We are greatly helped by the services of the MORENT Application. Morent has a low . . .","image":"image1"}]');var l;l=a("aNJCr").getBundleURL("fedZK")+a("iE7OH").resolve("4R6qq");var o;o=a("aNJCr").getBundleURL("fedZK")+a("iE7OH").resolve("lm4MV");const d=document.querySelector(".reviews-users__list");let u=0,f="";const v=e(t).map((s=>{switch(u){case 0:f=e(l);break;case 1:f=e(o)}return u+=1,` <li class="user-review" key="${s.id}">\n    <img class="avatar" src="${f}" alt="${s.user}" />\n    <div class="title-review">\n      <div class="user">\n        <div class="name-profi">\n          <p class="user-name">${s.user}</p>\n          <p class="user-profession">${s.profession}</p>\n        </div>\n      \n      <div class="date-stars">\n        <p class="date">${s.date}</p>\n        <div class="rating">\n          <svg>\n            <use href="${e(i)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(i)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(i)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(i)}#icon-fill-actions-star"></use>\n          </svg>\n          <svg>\n            <use href="${e(i)}#icon-actions-star"></use>\n          </svg>\n        </div>\n      </div>\n      </div>\n      <div class="review">\n        <p>${s.review}</p>\n      </div>\n      </div>\n  </li>`})).join("");d.innerHTML=v}();
//# sourceMappingURL=index.71fa70b0.js.map
