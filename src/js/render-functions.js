import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

//бібліотека
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

//розмітка
function createGalleryMarkup(images) {
  return images
    .map(image => {
    return `
    <li class="gallery-item">
        <a class="gallery-item-photo" href="${image.largeImageURL}">
        <img class="gallery-img" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
        </a>
        <div class="info">
            <div class="info-part">
                <h3 class="info-description">Likes</h3>
                <p class="info-number">${image.likes}</p>
            </div>
            <div class="info-part">
                <h3 class="info-description">Views</h3>
                <p class="info-number">${image.views}</p>
        </div>
            <div class="info-part">
                <h3 class="info-description">Comments</h3>
                <p class="info-number">${image.comments}</p>
        </div>
            <div class="info-part">
                <h3 class="info-description">Downloads</h3>
                <p class="info-number">${image.downloads}</p>
        </div>
        </div>
    </li>
    `;
  }).join('');
}

//зображення
export function createGallery(images) {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = createGalleryMarkup(images);
  lightbox.refresh();
}

//нові зображення
export function appendGallery(images) {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.insertAdjacentHTML('beforeend', createGalleryMarkup(images));
  lightbox.refresh();
}

//очищення галереї
export function clearGallery() {
  const galleryEl = document.querySelector('.gallery');
  galleryEl.innerHTML = '';
}

//loader
export function showLoader() {
  document.getElementById('loader').classList.remove('hidden');
}

export function hideLoader() {
  document.getElementById('loader').classList.add('hidden');
}

//кнопка Load more
export function showLoadMoreButton() {
  document.querySelector('.load-more').classList.remove('hidden');
}

export function hideLoadMoreButton() {
  document.querySelector('.load-more').classList.add('hidden');
}