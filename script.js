const navToggle = () => {
    // declaring the variable to be used
const hamburger = document.querySelector('#hambuger')
const navLink = document.querySelector(".navLinks")
const navAnimate = document.querySelectorAll('navLinks li')

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('NavActive')
    hamburger.classList.toggle('toggle')
//   TRYING TO WORK ON THE LINKS TO ANIMATE
    // navAnimate.forEach((link, index) => {
    //     if (link.style.animation){
    //         link.style.animation = " ";
    //     }else{
    //         link.style.animation = `navlinksId 0.5s ease forwards ${index / 7 + 2}s` 
    //     }
    // });
    // END
})   

}
 navToggle()

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

// let carouselDiv = document.getElementsByClassName('carouselTestimony')
// let arrowNavUp = document.querySelector('.arrowUp')
// let arrowNavDown = document.querySelector('.arrowDown')
// let carouselDot = document.querySelectorAll('.carouselDot')
// // console.log(carouselDot)
// let carouselPosition = 0
// let carouselTotal = carouselDiv.length


// arrowNavUp.addEventListener('click', function(){
// nextSlide()
// })
// arrowNavDown.addEventListener('click', function(){
// prevSlide()
// })
// function updateSlides(){
//     for( let carouselDivs of carouselDiv){
// carouselDivs.classList.add('carouselTestimony__visible')
// carouselDivs.classList.remove('carouselTestimony__hidden')
//     }
//     carouselDiv[carouselPosition].classList.add('carouselTestimony__visible')
// }
// function nextSlide() {
//     if (carouselPosition === carouselTotal -1){
//         carouselPosition = 0
//     }else{
//         carouselPosition++
//     }
//     updateSlides()
// }



// function prevSlide(){
//     console.log(prevSlide())
//     if (carouselPosition === carouselTotal){
//         carouselPosition = 0
//     }else{
//         carouselPosition--
//     }
//     updateSlides()
// }

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
//   var slides = document.getElementsByClassName("mySlides");
  var carouselDiv = document.getElementsByClassName('carouselTestimony')
 let carouselDot = document.querySelectorAll('.carouselDot')
//  var dots = document.getElementsByClassName("dot");

  if (n > carouselDiv.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = carouselDiv.length}
  for (i = 0; i < carouselDiv.length; i++) {
    carouselDiv[i].style.display = "none";  
  }
  for (i = 0; i < carouselDot.length; i++) {
    carouselDot[i].className = carouselDot[i].className.replace(" active", "");
  }
  carouselDiv[slideIndex-1].style.display = "block";  
  carouselDot[slideIndex-1].className += " active";
}











// arrowNavUp.addEventListener('click', function(){
   
//     if (carouselPosition === carouselTotal - 1){
//         carouselPosition = 0
//     }else carouselPosition ++
//     // for (let carouselDivs of carouselDiv){
//         for(let i = 0; i < carouselTotal; i++){
//             carouselDiv[i].classList.add("carouselTestimony__visible")
//             carouselDiv[i].classList.remove("carouselTestimony__hidden" )
//     }
//     // carouselDiv[].classList.add('carouselTestimony__visible')
// })

// arrowNavDown.addEventListener('click', () => {
//     console.log('helloooo next')
//     if (carouselPosition === 0){
//         carouselPosition = carouselDiv -1
//     }else carouselPosition --
//     // for (let carouselDivs of carouselDiv){
//         for(let i = 0; i < carouselDiv.length; i++){
//             carouselDiv[i].classList.remove("carouselTestimony__hidden" )
//             carouselDiv[i].classList.add("carouselTestimony__visible")
//     }
//     carouselDiv[i].classList.remove('carouselTestimony__visible')
// })


















// solution1
// let hamburg = document.querySelector("#hamburger")
// let navLink = document.querySelector("#navLinks")

// hamburg.addEventListener("click" , () =>{
//     navLink.classList.toggle("active");
// })
// solution2
// let toggleStatus =1
// function hamburger(Rh) {
//     Rh.classList.toggle("change");
//     if (toggleStatus == 1){
//         document.getElementById("navLinks").style.right = "320px";
//         toggleStatus = 0;

//     }else if(toggleStatus == 0){
//         document.getElementById("navLinks").style.right = "0", "transition ease ";
//     }
//   }
// let toggleStatus = 1
// function hamburger(){
//     if (toggleStatus == 1){
//         document.getElementById("navLinks").style.transform = "translateX(50%)";
//         toggleStatus = 0;

//     }else if(toggleStatus == 0){
//         document.getElementById("navLinks").style.transform = "translateX(50%)";
//     }
// }
// function hamburger(Rh) {
//         Rh.classList.toggle("active");
//     }
// // let ham = document.getElementById('hambuger')
// // console.log(ham)
//  const navslide = () =>{
//     const hamburger = document.querySelector("#hambuger")
//     const navLinks = document.querySelector("#navLinks")
//     hamburger.addEventListener('click', () => {
//         navLinks.classList.toggle("active");
//     })
//  }
// console.log(navslide())  ;

