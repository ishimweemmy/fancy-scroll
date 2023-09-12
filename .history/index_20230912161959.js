const canvas = document.querySelector("canvas");
const currentFrame = (index) => {
  return `images/${index.toString().padStart(4, "0")}.png`;
};
const html = document.querySelector("html");

window.addEventListener("scroll", (e) => {
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const percentage = Math.round((scrollTop * 100) / maxScrollTop);
  console.log(percentage)
  requestAnimationFrame(() => updateImage(percentage));
});

const updateImage = (index) => {
  const context = canvas.getContext("2d");
  const img = document.querySelector("img");
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};
