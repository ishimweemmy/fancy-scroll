const canvas = document.querySelector("canvas");
const html = document.querySelector("html");
const context = canvas.getContext("2d");

// Preload all the images
const imageCount = 1254; // Change this to the total number of images
const images = Array.from({ length: imageCount }, (_, index) => {
  const img = new Image();
  img.src = `media/images/${index + 1}.png`;
  return img;
});

document.addEventListener('DOMContentLoaded', () => {
	const img = images[0];

	canvas.height = img.height;
	canvas.width = img.width;
	context.drawImage(img, 0, 0);
})

window.addEventListener("scroll", (e) => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const percentage = (scrollTop * 100) / maxScrollTop
  requestAnimationFrame(() => updateImage(percentage));
});

const updateImage = (index) => {
  const img = images[index];
  
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (img) {
    canvas.height = img.height;
    canvas.width = img.width;
    context.drawImage(img, 0, 0);
  }
};

