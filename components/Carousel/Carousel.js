/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let slideNumber = 1;

function Carousel() {

  const carouselDiv = document.createElement('div');
  const leftButtonDiv = document.createElement('div');
  const rightbuttonDiv = document.createElement('div');
  const firstImage = document.createElement('img');
  const secondImage = document.createElement('img');
  const thirdImage =  document.createElement('img');
  const fourthImage = document.createElement('img');


  carouselDiv.classList.add('carousel');
  leftButtonDiv.classList.add('left-button');
  rightbuttonDiv.classList.add('right-button');

  firstImage.src = '../../assets/carousel/mountains.jpeg';
  secondImage.src = '../../assets/carousel/computer.jpeg';
  thirdImage.src = '../../assets/carousel/trees.jpeg';
  fourthImage.src = '../../assets/carousel/turntable.jpeg';

  

    carouselDiv.appendChild(leftButtonDiv);
    carouselDiv.appendChild(rightButtonDiv);
    carouselDiv.appendChild(firstImage);
    carouselDiv.appendChild(secondImage);
    carouselDiv.appendChild(thirdImage);
    carouselDiv.appendChild(fourthImage);


  console.log(carouselDiv)

  return carouselDiv;
}

// Add carousel to html
const newCarousel = document.querySelector('.carousel-container');
newlCarousel.appendChild(Carousel());

//Event listener for right button
const rightbuttonDiv = document.querySelector('.right-button');

rightbuttonDiv.addEventListener('click', () => {
  showSlides(slideNumber += 1);
})

//Event listener for Left button
const leftButtonDiv = document.querySelector('.left-button');

leftButtonDiv.addEventListener('click', () => {
  showSlides(slideNumber -= 1);
})

//Animation function
function showSlides(n) {
  debugger

  let slides = document.querySelectorAll(".carousel img")

  if (n > slides.length) {
    slideNumber = 1
  }
  if (n < 1) {
    slideNumber = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideNumber - 1].style.display = "block";
}

showSlides(slideNumber);

