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
 
//  boxHover.style.opacity = '0.5'

// const any = 1
// console.log(any)






















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

