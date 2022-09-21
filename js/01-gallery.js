import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainerRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map((item) => creteGalleryMarkup(item))
  .join("");

function creteGalleryMarkup({ preview, original, description }) {
  return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</div>`;
}

galleryContainerRef.innerHTML = galleryMarkup;

galleryContainerRef.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src=${evt.target.dataset.source}>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", (evt) => {
          if (evt.code !== "Escape" || !instance.visible()) {
            return;
          }
          instance.close();
        });
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", (evt) => {
          if (evt.code !== "Escape" || !instance.visible()) {
            return;
          }
          instance.close();
        });
      },
    }
  );

  instance.show();
});
