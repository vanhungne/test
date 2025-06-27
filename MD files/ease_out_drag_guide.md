let isDragging = false;
let mouseX = 0;
let mouseY = 0;
let elementX = 0;
let elementY = 0;
let element; // Assuming you have a reference to your draggable element

// Mouse down event to start dragging
element.addEventListener('mousedown', (e) => {
  isDragging = true;
  mouseX = e.clientX;
  mouseY = e.clientY;
  elementX = parseInt(element.style.left) || 0;
  elementY = parseInt(element.style.top) || 0;
});

// Mouse move event to update element position
document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - mouseX;
  const deltaY = e.clientY - mouseY;
  elementX += deltaX;
  elementY += deltaY;
  element.style.left = elementX + 'px';
  element.style.top = elementY + 'px';
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Mouse up event to stop dragging
document.addEventListener('mouseup', () => {
  isDragging = false;
});