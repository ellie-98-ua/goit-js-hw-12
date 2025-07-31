import{a as g,S as L,i as n}from"./assets/vendor-BK_rxH-O.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const v="51351460-d09ee3e74dd8fd887a0b133cf",b="https://pixabay.com/api/";async function f(t,e){const s={key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:40};try{return(await g.get(b,{params:s})).data}catch{throw new Error("Failed to fetch images")}}const m=new L(".gallery a",{captionsData:"alt",captionDelay:250});function p(t){return t.map(e=>`
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
    `).join("")}function w(t){const e=document.querySelector(".gallery");e.innerHTML=p(t),m.refresh()}function E(t){document.querySelector(".gallery").insertAdjacentHTML("beforeend",p(t)),m.refresh()}function S(){const t=document.querySelector(".gallery");t.innerHTML=""}function h(){document.getElementById("loader").classList.remove("hidden")}function d(){document.getElementById("loader").classList.add("hidden")}function y(){document.querySelector(".load-more-button").classList.remove("hidden")}function l(){document.querySelector(".load-more-button").classList.add("hidden")}const q=document.querySelector(".form");document.querySelector(".gallery");const R=document.querySelector(".load-more-button");let i=1,u="";q.addEventListener("submit",async t=>{t.preventDefault();const e=t.target.elements["search-text"].value.trim();if(!e){n.error({title:"Error",message:"Please enter a search term",position:"topRight"});return}u=e,i=1,S(),l(),h();try{const s=await f(u,i);if(s.hits.length===0){n.info({title:"No Results",message:"Sorry, no images found.",position:"topRight"}),d();return}w(s.hits),s.totalHits<=i*15?(l(),n.info({title:"End",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):y()}catch{n.error({title:"Error",message:"Failed to fetch images.",position:"topRight"})}finally{d()}});R.addEventListener("click",async()=>{i++,l(),h();try{const t=await f(u,i);E(t.hits);const{height:e}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),t.totalHits>i*15?y():(l(),n.info({title:"End",message:"You've reached the end of search results.",position:"topRight"}))}catch{n.error({title:"Error",message:"Something went wrong during loading more images.",position:"topRight"})}finally{d()}});
//# sourceMappingURL=index.js.map
