function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},i=n.parcelRequirea1a8;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in s){var n=s[e];delete s[e];var i={id:e,exports:{}};return r[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,n){s[e]=n},n.parcelRequirea1a8=i),i("kyEFX").register(JSON.parse('{"bYjl2":"index.5c9ef75e.js","9v6fF":"symbol-defs.3320a940.svg","6XVGi":"cr-v-desk-1x-min.30b94320.png","c35dS":"nissan-gt-r-desk-1x-min.3f90076d.png","7SglZ":"koenigsegg-large-desk-1x-min.08d67592.png","7oNKi":"rush-large-desk-1x-min.7479e462.png","im21o":"terios-large-desk-1x-min.580a50ba.png","1FWdG":"rolls-royce-large-desk-1x-min.fde3ba6d.png"}'));var a,l=i("3JkTL");a=new URL(i("kyEFX").resolve("9v6fF"),import.meta.url).toString();var t;t=new URL(i("kyEFX").resolve("6XVGi"),import.meta.url).toString();var o;o=new URL(i("kyEFX").resolve("c35dS"),import.meta.url).toString();var c;c=new URL(i("kyEFX").resolve("7SglZ"),import.meta.url).toString();var d;d=new URL(i("kyEFX").resolve("7oNKi"),import.meta.url).toString();var v;v=new URL(i("kyEFX").resolve("im21o"),import.meta.url).toString();var u;u=new URL(i("kyEFX").resolve("1FWdG"),import.meta.url).toString();const p=document.querySelector(".recomendation-car__list"),g=e(l).filter((e=>!0===e.favorite)).map((n=>{let r="",s="",i=!1,l="";switch(i=n.favorite?"heart":"heart-stroke",l=n.fullrent===n.salesprice&&"visually-hidden",n.name){case"Nissan GT-R":r="nissan",s=e(o);break;case"Koenigsegg":r="koenigsegg",s=e(c);break;case"All New Rush":r="rush",s=e(d);break;case"All New Terios":r="terios",s=e(v);break;case"Rolls-Royce":r="rolls",s=e(u);break;case"CR-V":r="cr-v",s=e(t)}return`<li class="model swiper-slide" key=${n.id} id=${n.id}>\n    <div class="recent-card">\n    <div>\n    <h3>${n.name}</h3>\n  <p class="card-type">${n.type}</p>\n  </div>\n  <svg class="favorite">\n       <use href="${e(a)}#icon-${i}"></use>     \n     </svg>\n     </div>\n <div class="image-box">\n <img src=${s} alt="car" />\n <div class="gradient-card"></div>\n </div>\n  \n  <div class="options-svg">\n    <div class="info">\n      <svg>\n        <use href="${e(a)}#icon-fuel"></use>\n      </svg>\n      <p>${n.fuel}L</p>\n    </div>\n    <div class="info">\n      <svg>\n        <use href="${e(a)}#icon-car-manual"></use>\n      </svg>\n      <p>${n.steering}L</p>\n    </div>\n    <div class="info">\n      <svg>\n        <use href="${e(a)}#icon-profile-2user"></use>\n      </svg>\n      <p>${n.capacity}&nbsp;People</p>  \n      </div></div>  \n  </div>\n  <div class="price-button-cars">\n           <div class="price-cars">\n             <p class="sale-price-cars">$${n.salesprice}/<span>days</span></p>\n             <p class="full-price-cars ${l}">$${n.fullrent}</p>\n           </div>\n           <button type="button" class="btn btn-primary rentalnow">Rental Now</button>\n         </div>\n</li>`})).join("");p.innerHTML=g;let f=!1;const m=document.querySelector(".view-all-recomendation-btn"),b=document.querySelector(".recomendation-car__list"),y=document.querySelector(".gradient-recom");m.addEventListener("click",(()=>{f?b.classList.add("view-all-cars"):b.classList.remove("view-all-cars"),f?y.classList.add("visually-hidden"):y.classList.remove("visually-hidden"),f=!f}));
//# sourceMappingURL=index.5c9ef75e.js.map