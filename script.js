// Change text content
document.getElementById('change-text-btn').addEventListener('click', function () {
    const paragraph = document.getElementById('intro');
    paragraph.textContent = "You've just updated this paragraph using JavaScript!";
  });
  
  // Modify CSS styles
  document.getElementById('change-style-btn').addEventListener('click', function () {
    const title = document.getElementById('main-title');
    title.style.color = 'teal';
    title.style.fontSize = '2.5rem';
    title.style.fontFamily = 'Arial, sans-serif';
  });
  
  // Add or remove an element
  document.getElementById('toggle-element-btn').addEventListener('click', function () {
    const container = document.getElementById('dynamic-container');
    const existingElement = document.getElementById('dynamic-element');
  
    if (existingElement) {
      container.removeChild(existingElement);
    } else {
      const newElement = document.createElement('p');
      newElement.id = 'dynamic-element';
      newElement.textContent = "I was added dynamically!";
      container.appendChild(newElement);
    }
  });
  