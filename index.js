import{a as L,S as v,i as s}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const E="51351460-d09ee3e74dd8fd887a0b133cf",b="https://pixabay.com/api/";async function f(t,e){const n={key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15};try{return(await L.get(b,{params:n})).data}catch{throw new Error("Failed to fetch images")}}const h=new v(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){return t.map(e=>`
    <li class="gallery-item">
        <a class="gallery-item-photo" href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        </a>
        <div class="info">
            <div class="info-part">
                <h3 class="info-description">Likes</h3>
                <p class="info-number">${e.likes}</p>
            </div>
            <div class="info-part">
                <h3 class="info-description">Views</h3>
                <p class="info-number">${e.views}</p>
        </div>
            <div class="info-part">
                <h3 class="info-description">Comments</h3>
                <p class="info-number">${e.comments}</p>
        </div>
            <div class="info-part">
                <h3 class="info-description">Downloads</h3>
                <p class="info-number">${e.downloads}</p>
        </div>
        </div>
    </li>
    `).join("")}function w(t){const e=document.querySelector(".gallery");e.innerHTML=m(t),h.refresh()}function S(t){document.querySelector(".gallery").insertAdjacentHTML("beforeend",m(t)),h.refresh()}function q(){const t=document.querySelector(".gallery");t.innerHTML=""}function p(){document.getElementById("loader").classList.remove("hidden")}function d(){document.getElementById("loader").classList.add("hidden")}function g(){document.querySelector(".load-more-button").classList.remove("hidden")}function a(){document.querySelector(".load-more-button").classList.add("hidden")}const R=document.querySelector(".form");document.querySelector(".gallery");const B=document.querySelector(".load-more-button"),y=15;let l=1,u="";R.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.elements["search-text"].value.trim();if(!e){s.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}u=e,l=1,q(),a(),p();try{const n=await f(u,l);if(n.hits.length===0){s.info({title:"No Results",message:"Sorry, no images found.",position:"topRight"}),d();return}w(n.hits),n.hits.length<y?(a(),s.info({title:"End",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):g()}catch{s.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}finally{d()}});B.addEventListener("click",async()=>{l++,a(),p();try{const t=await f(u,l);S(t.hits);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),t.hits.length<y?(a(),s.info({title:"End",message:"You've reached the end of search results.",position:"topRight"})):g()}catch{s.error({title:"Error",message:"Something went wrong during loading more images.",position:"topRight"})}finally{d()}});
//# sourceMappingURL=index.js.map
