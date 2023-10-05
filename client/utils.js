export const preLoadImageGallery = (imagesCount, imagesDirectory) => {
  const images = Array.from({ length: imagesCount }, (_, index) => {
    const img = new Image();
    img.src = `${imagesDirectory + (index + 1)}.png`;
    return img;
  });
  return images;
};

export const initCanvasFirstImage = (canvas, images, context) => {
  document.addEventListener("DOMContentLoaded", () => {
    const img = images[0];

    canvas.height = img.height;
    canvas.width = img.width;
    context.drawImage(img, 0, 0);
  });
};

export const onScrollAnimate = (canvas, images) => {
  const html = document.querySelector("html");
  const imageCount = images.length;
  window.addEventListener("scroll", (e) => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;

    const scrollFraction = scrollTop / maxScrollTop;
    const percentage = Math.min(
      imageCount - 1,
      Math.ceil(scrollFraction * imageCount)
    );

    requestAnimationFrame(() => updateImage(percentage, canvas, images));
  });
};

export const updateImage = (index, canvas, images) => {
  const img = images[index];
  const context = canvas.getContext("2d");

  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (img) {
    canvas.height = img.height;
    canvas.width = img.width;
    context.drawImage(img, 0, 0);
  }
};
