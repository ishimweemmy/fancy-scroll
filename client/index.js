import { initCanvasFirstImage, onScrollAnimate, preLoadImageGallery } from "./utils.js";

const fancyScroll = (canvasGetter, imagesCount, imagesDirectory) => {
  const canvas = canvasGetter;
  const context = canvas.getContext('2d')
  const images = preLoadImageGallery(imagesCount, imagesDirectory);
  initCanvasFirstImage(canvas, images, context);
  onScrollAnimate(canvas, images);
};

fancyScroll(document.querySelector('canvas'), 1254, 'media/images/')
