import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click",  onModalOpenClick);

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return ` <div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div> `;
  })
  .join("");
console.log(galleryMarkup);

galleryEl.innerHTML = galleryMarkup;

function onModalOpenClick(el) {
  const imgTarget = el.target.classList.contains("gallery__image");
  if (!imgTarget) {
    return;
  }

  el.preventDefault();
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionData: "alt",
});
console.log(lightbox);