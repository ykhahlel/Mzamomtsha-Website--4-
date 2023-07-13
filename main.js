// Define a function that changes the background color of a selected element
function changeBack(){
  // Select the element with class 'navbar-nav'
  const navbarNav = document.querySelector('.navbar-nav');
  
  // Select the first child element with class 'nav-item.active' from the 'navbar-nav' element
  const activeNavItem = navbarNav.querySelector('.nav-item.active');
  
  // Set the background color of the selected element to a light blue color
  return active = activeNavItem.style.backgroundColor = '#AED6F1';
}

// Define a function that changes the text color of a selected element
function textColor(){
  // Select the element with class 'text1'
  const text1 = document.querySelector('.text1');
  
  // Set the text color of the selected element to a darker blue color
  return text1.style.color = "#083B66";
}

// Call the 'changeBack' function and the 'textColor' function
changeBack();
textColor();

// Select all the image elements on the page
const images = document.querySelectorAll('img');

// Set a scaling factor for the zoom effect
const zoomScale = 1.2;

// Define the 'zoomIn' function that is called on mouseover event
function zoomIn(event) {
  // Select the image that triggered the event
  const image = event.target;
  
  // Set a smooth transition effect
  image.style.transition = 'transform 0.3s ease';
  
  // Scale the image to the specified zoomScale value
  image.style.transform = `scale(${zoomScale})`;
}

// Define the 'zoomOut' function that is called on mouseout event
function zoomOut(event) {
  // Select the image that triggered the event
  const image = event.target;
  
  // Set a smooth transition effect
  image.style.transition = 'transform 0.3s ease';
  
  // Restore the image to its original size
  image.style.transform = 'scale(1)';
}

// Call the 'zoomIn' and 'zoomOut' functions on mouseover and mouseout events, respectively
images.forEach(image => {
  image.addEventListener('mouseover', zoomIn);
  image.addEventListener('mouseout', zoomOut);
});

