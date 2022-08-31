// declaring variable  to store our function 

const navToggle = () => {

  // declaring the variable to be used
const hamburger = document.querySelector('#hambuger')
const navLink = document.querySelector(".navLinks")

// Adding event Listener to the hamburger
hamburger.addEventListener('click', () => {
    navLink.classList.toggle('NavActive')
    hamburger.classList.toggle('toggle')

})   

}
// calling out the function
 navToggle()

//  declaring variables
 let boxHover = document.querySelectorAll('.box')
 let serviceRendered = document.querySelectorAll('.servicesRendered')

//   looping through each card
 for( let i = 0; i < serviceRendered.length; i++) {

    serviceRendered[i].addEventListener('mouseover', () => {
        boxHover[i].style.opacity = '1'
    })

    serviceRendered[i].addEventListener('mouseleave', () => {
        boxHover[i].style.opacity = '0'
    })
 }
 
// Carousel
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;

  var carouselDiv = document.getElementsByClassName('carouselTestimony')
 let carouselDot = document.querySelectorAll('.carouselDot')

  if (n > carouselDiv.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = carouselDiv.length}
  for (i = 0; i < carouselDiv.length; i++) {
    carouselDiv[i].style.display = "none";  
  } 
  // loop through each item
  for (i = 0; i < carouselDot.length; i++) {
    carouselDot[i].className = carouselDot[i].className.replace(" active", "");
  }
  carouselDiv[slideIndex-1].style.display = "block";  
  carouselDot[slideIndex-1].className += " active";
}
