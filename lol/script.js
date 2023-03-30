const img = document.getElementById('img');
const text = document.getElementById('text');
const textContainer = document.getElementById('text-container');

function updateImageSize() {
  const textHeight = textContainer.clientHeight;
  const textWidth = textContainer.clientWidth;
  const minHeight = parseFloat(window.getComputedStyle(img).getPropertyValue('min-height'));
  const minWidth = parseFloat(window.getComputedStyle(img).getPropertyValue('min-width'));
  
  const newWidth = textWidth > minWidth ? textWidth : minWidth;
  const newHeight = textHeight > minHeight ? textHeight : minHeight;
  
  img.style.width = `${newWidth}px`;
  img.style.height = `${newHeight}px`;
}

updateImageSize();

text.addEventListener('input', () => {
  updateImageSize();
});
