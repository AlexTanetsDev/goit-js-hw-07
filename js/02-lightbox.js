import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((item) => creteGalleryMarkup(item))
  .join("");

function creteGalleryMarkup({ preview, original, description }) {
  return ` <a class="gallery__item" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        alt=${description}
      />
    </a>`;
}

galleryListRef.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
